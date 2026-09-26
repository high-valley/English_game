#!/usr/bin/env python3
"""次に作るカード画像を切り出して card_image_next.md に書く。

    python3 tools/gen_next_batch.py                 # 次の40語
    python3 tools/gen_next_batch.py 20              # 次の20語
    python3 tools/gen_next_batch.py all UNCOMMON    # UNCOMMON の残り全部

プロンプトは `prompt_for.py` と同じもの（gen_card_prompts.prompt_for）を、同じ順番で出す。
つまり、このファイルの先頭5件 ＝ `python3 tools/prompt_for.py --next 5` で渡す5件。

なぜ同じにするか:
  ・以前はここだけ古い短いプロンプト（画風＋例文＋締め）を書いていた。主役の指定・敵役の見た目・
    舞台・構図が抜けていて、これを使うと絵柄も敵の姿もそろわない
  ・並びも「LEGENDARY から・敵役つきが先」で、実際に作っている順（COMMON から図鑑の順）と違っていた
  ・GitHub の main にあるこのファイルを、画像生成AI（Grok のコネクタなど）に直接読ませることがある。
    そのときに、こちらが渡すものと食い違ってはいけない

並び順は、レアリティの低い順 → 図鑑の並び順（id 順）。すでに画像がある単語は除く。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from gen_card_prompts import LEVELS, LEVEL_NO, REDO, load_words, load_done_images, next_order, prompt_for  # noqa: E402
from check_words import ENEMIES, has  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
OUT_MD = ROOT / "card_image_next.md"
DEFAULT_N = 40


def enemies_in(ex):
    return [e for e in ENEMIES if has(ex, e)]


def main():
    args = sys.argv[1:]
    rarity = None
    for a in list(args):
        if a.upper() in LEVELS:
            rarity = a.upper()
            args.remove(a)
    n = None
    if args:
        n = None if args[0].lower() == "all" else int(args[0])

    words = load_words()
    done = set(load_done_images())
    todo = next_order(words, done, rarity)   # prompt_for.py --next と同じ順。作り直し（REDO）が先
    batch = todo if n is None else todo[:n]

    left = len(todo)
    total_left = len([w for w in words if w["en"] not in done or w["en"] in REDO])
    head = (f"# 次に作るカード画像（Lv.{LEVEL_NO[rarity]} {rarity}）" if rarity
            else "# 次に作るカード画像")
    scope = (f"※ **{rarity} だけ**を図鑑の並び順で出しています。"
             f"{rarity} で画像がまだ無いのは **{left}語**、ここにはそのうち **{len(batch)}語**。"
             f"（全レアリティ合わせての残りは {total_left}語）"
             if rarity else
             f"※ 全{len(words)}語のうち、これから作るのは **{left}語**（画像がまだ無い語と、作り直しの語）。ここにはその先頭 **{len(batch)}語** を出しています。")
    lines = [
        head,
        "",
        "※ このファイルは `tools/gen_next_batch.py` が作ります。直接編集しないでください。",
        scope,
        "",
        # 画像生成AIに GitHub から読ませたとき、読んだのが最新かを単語名で確かめられるようにする
        # （main に反映されるのは PR のマージ後。古いファイルを読むと、作り終えた絵をもう一度作ってしまう）
        "**次に作る5件：" + " / ".join(w["en"] for w in batch[:5]) + "**",
        "",
        "## 使い方",
        "1. 上から順に、``` で囲まれたプロンプトを**そのまま**画像生成AIに入れる（1件＝1枚。3:2の横長）",
        "2. できた絵が「例文（日本語）」のとおりかを確かめる",
        "3. 絵を `assets/cards/単語.webp` にして、`js/card_art.js` の `CARD_IMG_NAMES` に単語を足す",
        "4. `python3 tools/gen_next_batch.py` を実行し直すと、作り終えた分が外れて次の分が先頭に来る",
        "",
        "順番はレアリティの低い順 → 図鑑の並び順（id順）。`python3 tools/prompt_for.py --next 5` が出す5件と同じです。",
        "",
    ]

    cur = None
    for i, w in enumerate(batch, 1):
        if w["rarity"] != cur:
            cur = w["rarity"]
            cnt = sum(1 for x in batch if x["rarity"] == cur)
            lines += ["", f"## Lv.{LEVEL_NO[cur]} {cur}（この一覧に{cnt}語）", ""]
        foes = enemies_in(w["ex"])
        tag = f"　敵役: {', '.join(foes)}" if foes else ""
        redo = "　**（作り直し：今の絵と差し替える）**" if w["en"] in REDO else ""
        lines.append(f"### {i}. {w['en']}（{w['ja']}）　id {w['id']}{tag}{redo}")
        lines.append(f"例文（日本語）: {w['tr']}  ")
        lines.append(f"例文（英語）: {w['ex']}")
        lines.append("```")
        lines.append(prompt_for(w))
        lines.append("```")
        lines.append("")

    if left > len(batch):
        cmd = f"python3 tools/gen_next_batch.py all {rarity}" if rarity else "python3 tools/gen_next_batch.py"
        lines += ["---", "",
                  f"残り {left - len(batch)}語。"
                  f"`CARD_IMG_NAMES` に足してから `{cmd}` を実行してください。"]

    OUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")

    by_r = {r: sum(1 for w in batch if w["rarity"] == r) for r in LEVELS}
    with_foe = sum(1 for w in batch if enemies_in(w["ex"]))
    print(f"{OUT_MD.relative_to(ROOT)} を作りました（{len(batch)}語／画像が無い残り {left}語）")
    print("  内訳:", ", ".join(f"{r} {by_r[r]}" for r in LEVELS if by_r[r]))
    print(f"  うち敵役が出てくる例文: {with_foe}語")


if __name__ == "__main__":
    main()

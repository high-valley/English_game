#!/usr/bin/env python3
"""次に作るカード画像を切り出して card_image_next.md に書く。

    python3 tools/gen_next_batch.py                 # おすすめ順に40語
    python3 tools/gen_next_batch.py 20              # おすすめ順に20語
    python3 tools/gen_next_batch.py 100 COMMON      # COMMON だけ、図鑑の並び順に100語
    python3 tools/gen_next_batch.py all COMMON      # COMMON の残り全部

ChatGPT などにそのまま貼れる形（1語＝1本の全文）で出す。作り終えた単語は
`js/card_art.js` の `CARD_IMG_NAMES` に足せば、次回から自動で外れる。

並び順
  ・レアリティを指定したとき … そのレアリティだけを id 順（＝図鑑の並び順）。
    端から順に潰していく用。どこまで進んだかが分かりやすい
  ・指定しないとき（おすすめ順） … レアリティが高い順 → 敵役が出てくる例文が先 → id 順。
    高レアはガチャの開封で大きく映り、敵役の例文は場面がはっきりしていて絵にしやすい
  ・どちらも、すでに画像がある単語は除く
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from gen_card_prompts import STYLE, TAIL, LEVELS, LEVEL_NO, load_words, load_done_images  # noqa: E402
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
    todo = [w for w in words if w["en"] not in done]
    if rarity:
        todo = [w for w in todo if w["rarity"] == rarity]
        todo.sort(key=lambda w: w["id"])                 # 図鑑の並び順。端から順に潰す用
    else:
        # レアリティが高い順 → 敵役つきが先 → id順
        todo.sort(key=lambda w: (-LEVEL_NO[w["rarity"]], not enemies_in(w["ex"]), w["id"]))
    batch = todo if n is None else todo[:n]

    left = len(todo)
    total_left = len([w for w in words if w["en"] not in done])
    head = (f"# 次に作るカード画像（Lv.{LEVEL_NO[rarity]} {rarity}）" if rarity
            else "# 次に作るカード画像（おすすめ順）")
    scope = (f"※ **{rarity} だけ**を図鑑の並び順で出しています。"
             f"{rarity} で画像がまだ無いのは **{left}語**、ここにはそのうち **{len(batch)}語**。"
             f"（全レアリティ合わせての残りは {total_left}語）"
             if rarity else
             f"※ 全{len(words)}語のうち、画像がまだ無いのは **{left}語**。ここにはその先頭 **{len(batch)}語** を出しています。")
    lines = [
        head,
        "",
        "※ このファイルは `tools/gen_next_batch.py` が作ります。直接編集しないでください。",
        scope,
        "",
        "## 使い方",
        "1. 下のプロンプトを画像生成AIに入れる（3:2の横長。目安 1800x1200）",
        "2. `assets/cards/単語.webp` で保存する（1200x800 前後、100〜400KB）",
        "3. `js/card_art.js` の `CARD_IMG_NAMES` に単語を足す",
        "4. `python3 tools/gen_next_batch.py` をもう一度実行すると、作り終えた分が外れて次の分が出る",
        "",
        ("順番は図鑑の並び順（id順）です。端から順に潰していけます。"
         if rarity else
         "順番は「レアリティが高い順 → 敵役が出てくる例文が先」です。"
         "高レアはガチャの開封で大きく映り、敵役の例文は場面がはっきりしていて絵にしやすいためです。"),
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
        lines.append(f"### {i}. {w['en']}（{w['ja']}）　id {w['id']}{tag}")
        lines.append(f"例文: {w['ex']}　／　{w['tr']}")
        lines.append("```")
        lines.append(f"{STYLE[cur]}. Scene: {w['ex']} {TAIL}")
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

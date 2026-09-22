#!/usr/bin/env python3
"""次に作るカード画像を、おすすめ順に切り出して card_image_next.md に書く。

    python3 tools/gen_next_batch.py          # 40語
    python3 tools/gen_next_batch.py 20       # 20語

ChatGPT などにそのまま貼れる形で出す。作り終えた単語は
`js/card_art.js` の `CARD_IMG_NAMES` に足せば、次回から自動で外れる。

おすすめ順の考え方（SPEC.md §6 / §12）
  1. レアリティが高い順（ガチャの開封と図鑑で、いちばん目立つ）
  2. 同じレアリティの中では、敵役が出てくる例文を先に（場面がはっきりしていて絵にしやすい）
  3. すでに画像がある単語は除く
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
    n = int(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_N
    words = load_words()
    done = set(load_done_images())
    todo = [w for w in words if w["en"] not in done]

    # レアリティが高い順 → 敵役つきが先 → id順
    todo.sort(key=lambda w: (-LEVEL_NO[w["rarity"]], not enemies_in(w["ex"]), w["id"]))
    batch = todo[:n]

    left = len(todo)
    lines = [
        "# 次に作るカード画像（おすすめ順）",
        "",
        "※ このファイルは `tools/gen_next_batch.py` が作ります。直接編集しないでください。",
        f"※ 全{len(words)}語のうち、画像がまだ無いのは **{left}語**。ここにはその先頭 **{len(batch)}語** を出しています。",
        "",
        "## 使い方",
        "1. 下のプロンプトを画像生成AIに入れる（3:2の横長。目安 1800x1200）",
        "2. `assets/cards/単語.webp` で保存する（1200x800 前後、100〜400KB）",
        "3. `js/card_art.js` の `CARD_IMG_NAMES` に単語を足す",
        "4. `python3 tools/gen_next_batch.py` をもう一度実行すると、作り終えた分が外れて次の分が出る",
        "",
        "順番は「レアリティが高い順 → 敵役が出てくる例文が先」です。"
        "高レアはガチャの開封で大きく映り、敵役の例文は場面がはっきりしていて絵にしやすいためです。",
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
        lines += ["---", "",
                  f"残り {left - len(batch)}語。"
                  "`CARD_IMG_NAMES` に足してから、もう一度このスクリプトを実行してください。"]

    OUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")

    by_r = {r: sum(1 for w in batch if w["rarity"] == r) for r in LEVELS}
    with_foe = sum(1 for w in batch if enemies_in(w["ex"]))
    print(f"{OUT_MD.relative_to(ROOT)} を作りました（{len(batch)}語／画像が無い残り {left}語）")
    print("  内訳:", ", ".join(f"{r} {by_r[r]}" for r in LEVELS if by_r[r]))
    print(f"  うち敵役が出てくる例文: {with_foe}語")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""card_image_prompts.md を js/words.js から作り直す。

例文（ex）を直したら、必ずこれを実行してプロンプトを作り直す。
    python3 tools/gen_card_prompts.py

プロンプトは「レアリティ別の共通スタイル」＋「例文（ex）」＋「共通の締め」でできている。
例文の場面が、そのまま絵になる。

書き方のきまり（実際に生成して分かったこと）:
  ・**「簡素に」と書かない。** COMMON に "minimal effects, soft colors, little decoration" と
    書いていたところ、生成AIによっては淡い水彩＋余白だらけになり、紺の枠に対して弱くなった
    （同じ5語を2つのAIで出して比べた。彩度の平均が 43〜78 と 47〜101 で、前者は見劣りした）。
    レアリティの差は「効果と描き込みの量」で付ける。色の濃さは全レアリティで落とさない
  ・**主役は枠いっぱいに。** "main subject centered with margin" と書くと、余白を取りすぎて
    小カード（図鑑）で主役が小さくなる
  ・**上下は切られる前提で書く。** 小カードは 3:2 の上下を切って表示するので、
    大事なものは中央の帯に収める
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WORDS_JS = ROOT / "js" / "words.js"
CARD_ART_JS = ROOT / "js" / "card_art.js"
OUT_MD = ROOT / "card_image_prompts.md"

# レアリティ別の共通スタイル（COMMON は簡素、LEGENDARY は壮大。SPEC.md §6）
STYLE = {
    "COMMON": "clear fantasy illustration, one clear subject, a simple background that shows the place, "
              "few magical effects, solid readable colors, clear directional light",
    "UNCOMMON": "fantasy illustration with a small magical touch, gentle glow, "
                "slightly richer details, clear subject",
    "RARE": "rich fantasy illustration, dramatic lighting, golden accents, "
            "floating light particles, detailed scene",
    "EPIC": "very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, "
            "intricate details, jewels and golden ornaments, complex composition",
    "LEGENDARY": "masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, "
                 "golden particles, radiant light, extremely detailed, cinematic",
}
# すべてのプロンプトの締め（画風・構図の指定）
TAIL = ("painterly anime style, 3:2 wide landscape, the subject is large and centered and fills "
        "most of the frame, important parts kept inside the middle horizontal band, "
        "no text, no letters, no logo, no border, no frame")

LEVELS = ["COMMON", "UNCOMMON", "RARE", "EPIC", "LEGENDARY"]
LEVEL_NO = {r: i + 1 for i, r in enumerate(LEVELS)}


def load_words():
    src = WORDS_JS.read_text(encoding="utf-8")
    m = re.search(r"const WORDS=(\[.*?\]);", src, re.S)
    if not m:
        sys.exit("words.js から WORDS を読み取れませんでした")
    return json.loads(m.group(1))


def load_done_images():
    """card_art.js の CARD_IMG_NAMES（画像を作り終えた単語）"""
    src = CARD_ART_JS.read_text(encoding="utf-8")
    m = re.search(r"const CARD_IMG_NAMES=\[(.*?)\];", src, re.S)
    return re.findall(r'"([^"]+)"', m.group(1)) if m else []


def header(words, done):
    total = len(words)
    done_line = ("\n".join(f"- {n}" for n in done)
                 if done else "- （まだありません）")
    return f"""# カード画像のプロンプト

※番号は単語のID（通し番号）です。
※このファイルは `tools/gen_card_prompts.py` が `js/words.js` から作ります。直接編集せず、例文（`ex`）を直してから作り直してください。

## 使い方
1. 各プロンプトを、画像生成AIに入れる（3:2の横長。目安 1800x1200）
2. できた画像を `assets/cards/単語.webp` で保存する（例：`assets/cards/goblin.webp`、1200x800 前後、100〜400KB）
3. `js/card_art.js` の `CARD_IMG_NAMES` に、単語の名前を追加する（例：`"apple","cat","bird"`）

プロンプトは、カードの例文（`words.js` の `ex`）から作っています。例文の場面が、そのまま絵になります。レアリティが低いほど簡素に、高いほど豪華になります。画像を作らない単語は、背景付きの絵文字が表示されます。

## 登場するもの（世界観）
味方だけでなく、**敵役**も出てきます。レアリティが上がるほど、敵も強くなります。

| レベル | 主な敵役 |
|---|---|
| Lv.1 COMMON | ゴブリン、スライム、コウモリ、ネズミ、小さな蜘蛛、いたずら妖精 |
| Lv.2 UNCOMMON | オーク、スケルトン、幽霊、魔女、大蜘蛛、山賊、コボルト |
| Lv.3 RARE | ヴァンパイア、人狼、トロル、ハーピー、呪われた騎士、海賊、ゴーレム |
| Lv.4 EPIC | リッチ、悪魔、死霊術師、闇の将軍、ヴァンパイア卿、怪物の巣 |
| Lv.5 LEGENDARY | 大悪魔、ヴァンパイア公、古竜、破滅の王、闇の帝国 |

## 優先順位のおすすめ
- 画像が目立つのは、ガチャで出る高レアと、図鑑で見るカードです
- COMMON・UNCOMMON は数が多いので、まず数語だけ作り、絵柄を確認してから増やすのがおすすめです
- 敵役が出てくる例文は絵になりやすいので、そこから作るのもおすすめです

## 作成済みの画像
`js/card_art.js` の `CARD_IMG_NAMES` に登録済み（この{len(done)}語は、絵文字ではなく画像で表示されます）。

{done_line}

全{total}語ぶんのプロンプトが下にあります。
"""


def main():
    words = load_words()
    done = load_done_images()
    out = [header(words, done)]

    for rarity in LEVELS:
        group = [w for w in words if w["rarity"] == rarity]
        out.append(f"\n## Lv.{LEVEL_NO[rarity]} {rarity}（{len(group)}語）\n")
        out.append(f"共通のスタイル：{STYLE[rarity]}\n")
        for w in group:
            out.append(f"**{w['id']}. {w['en']}**（{w['ja']}）")
            out.append("```")
            out.append(f"{STYLE[rarity]}. Scene: {w['ex']} {TAIL}")
            out.append("```")
            out.append("")

    OUT_MD.write_text("\n".join(out), encoding="utf-8")
    print(f"{OUT_MD.relative_to(ROOT)} を作り直しました（{len(words)}語）")


if __name__ == "__main__":
    main()

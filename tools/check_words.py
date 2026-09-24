#!/usr/bin/env python3
"""words.js の単語データを検査する。

    python3 tools/check_words.py

見るところ:
  ・id の重複、欠番の使い回し
  ・例文（ex）に、その英単語が「語頭一致」で入っているか
    （カードは hl() が /\\b(en\\w*)/i で太字にするので、語幹がそのまま入っていないと太字にならない。
      例：eat → eats/eating は OK、ate は NG）
  ・訳（tr）が空でないか、レアリティ・stars・レベルの対応
  ・敵役がどれだけ登場しているか（世界観のバランス確認）
"""
import json
import re
import sys
from pathlib import Path
from collections import Counter

ROOT = Path(__file__).resolve().parent.parent
LEVELS = ["COMMON", "UNCOMMON", "RARE", "EPIC", "LEGENDARY"]

# 敵役・モンスター（例文のバランスを数えるためだけに使う）
ENEMIES = [
    "goblin", "slime", "bat", "rat", "spider", "imp", "kobold", "wolf", "crow",
    "orc", "skeleton", "ghost", "witch", "bandit", "zombie", "gargoyle", "harpy",
    "vampire", "werewolf", "troll", "ogre", "pirate", "golem", "cursed", "wraith",
    "lich", "demon", "necromancer", "warlock", "cultist", "assassin", "serpent",
    "archdemon", "fiend", "dread", "monster", "beast", "undead", "dark lord", "titan",
    "shadow", "basilisk", "hydra", "giant",
]


# 不規則な複数形（wolf→wolves など）。数え落としを防ぐ
IRREGULAR = {
    "wolf": "wolves", "werewolf": "werewolves", "harpy": "harpies",
    "basilisk": "basilisks", "cultist": "cultists", "dwarf": "dwarves",
}


# 形容詞としても使う語。後ろにこの名詞が続くときは敵役ではない。
# 「giant spider（大蜘蛛）」「giant serpent（大蛇）」「giant hollow tree（巨大な木）」の giant は巨人ではない。
# 数えるだけなら害は小さいが、プロンプトでは巨人の見た目の説明が入り、大蜘蛛の絵に巨人が描かれてしまう
NOT_FOE_AFTER = {
    "giant": r"spiders?|serpents?|hollow|trees?",
}


def enemy_pattern(e):
    alts = [re.escape(e), re.escape(e) + r"(?:s|es)"]
    if e in IRREGULAR:
        alts.append(re.escape(IRREGULAR[e]))
    tail = rf"(?!\s+(?:{NOT_FOE_AFTER[e]})\b)" if e in NOT_FOE_AFTER else ""
    return r"\b(?:" + "|".join(alts) + r")\b" + tail


def has(ex, e):
    return re.search(enemy_pattern(e), ex, re.I) is not None


# 例文に出さないもの。ユーザーが蜘蛛が苦手（「今後、蜘蛛が出てくるプロンプトはやめて欲しい」）。
# 例文はそのまま画像のプロンプトになるので、例文の段階で止める。
# 画像がすでにある語（book / big / room）は絵と食い違うので、作り直すときに例文も変える
BANNED = {
    r"\b(?:spiders?|cobwebs?|webs?|tarantulas?|arachnids?)\b": "蜘蛛（ユーザーが苦手）",
}


def done_images():
    src = (ROOT / "js" / "card_art.js").read_text(encoding="utf-8")
    m = re.search(r"const\s+CARD_IMG_NAMES\s*=\s*\[(.*?)\];", src, re.S)
    return set(re.findall(r'"([^"]+)"', m.group(1))) if m else set()


def load(path):
    src = path.read_text(encoding="utf-8")
    m = re.search(r"const WORDS=(\[.*?\]);", src, re.S)
    if not m:
        sys.exit("words.js から WORDS を読み取れませんでした")
    return json.loads(m.group(1))


def main():
    words = load(ROOT / "js" / "words.js")
    errs = []

    ids = Counter(w["id"] for w in words)
    for i, n in ids.items():
        if n > 1:
            errs.append(f"id {i} が {n} 回使われています（idは永久欠番・重複禁止）")

    for w in words:
        en, ex = w["en"], w["ex"]
        if not re.search(r"\b" + re.escape(en) + r"\w*", ex, re.I):
            errs.append(f'id {w["id"]} {en}: 例文に "{en}" が語頭一致で入っていません → {ex}')
        if not w.get("tr", "").strip():
            errs.append(f'id {w["id"]} {en}: 訳（tr）が空です')
        if w["rarity"] not in LEVELS:
            errs.append(f'id {w["id"]} {en}: 不明なレアリティ {w["rarity"]}')
        elif w["stars"] != LEVELS.index(w["rarity"]) + 1:
            errs.append(f'id {w["id"]} {en}: stars={w["stars"]} がレアリティ {w["rarity"]} と合いません')
        if not ex.strip().endswith((".", "!", "?")):
            errs.append(f'id {w["id"]} {en}: 例文が句点で終わっていません → {ex}')

    done = done_images()
    old_banned = []
    for w in words:
        for pat, why in BANNED.items():
            if re.search(pat, w["ex"], re.I):
                if w["en"] in done:
                    old_banned.append(f'{w["en"]}（{why}）')
                else:
                    errs.append(f'id {w["id"]} {w["en"]}: 例文に{why}が出てきます → {w["ex"]}')

    # 敵役の割合の目安。全部のカードに敵役を入れる必要はない（SPEC.md §6）。
    # 風景・自然・道具のカードは敵役なしでよいので、上限を超えたら知らせる
    RATIO_MAX = 55   # 各レアリティの上限（%）
    TOTAL_MAX = 50   # 全体の上限（%）
    warns = []

    print(f"単語数: {len(words)}")
    for r in LEVELS:
        g = [w for w in words if w["rarity"] == r]
        with_enemy = [w for w in g if any(has(w["ex"], e) for e in ENEMIES)]
        lens = [len(w["ex"].split()) for w in g]
        pct = len(with_enemy) * 100 // max(1, len(g))
        print(f"  {r:10} {len(g):3}語  敵役が出る例文 {len(with_enemy):3}語 "
              f"({pct:2}%)  例文の長さ 平均{sum(lens)/len(lens):4.1f}語")
        if pct > RATIO_MAX:
            warns.append(f"{r} の敵役が {pct}%（目安の上限 {RATIO_MAX}%）。"
                         "風景・自然・道具のカードは敵役なしでよい")

    total_enemy = sum(1 for w in words if any(has(w["ex"], e) for e in ENEMIES))
    total_pct = total_enemy * 100 // len(words)
    print(f"敵役が出てくる例文：{total_enemy} / {len(words)} ({total_pct}%)"
          f"　／　敵役なし：{len(words) - total_enemy}語 ({100 - total_pct}%)")
    if total_pct > TOTAL_MAX:
        warns.append(f"全体の敵役が {total_pct}%（目安の上限 {TOTAL_MAX}%）")

    cast = Counter()
    for w in words:
        for e in ENEMIES:
            if has(w["ex"], e):
                cast[e] += 1
    print("敵役の内訳:", ", ".join(f"{k} {v}" for k, v in cast.most_common()))

    if old_banned:
        warns.append("画像がすでにある語の例文に、出さないものが残っています（作り直すときに例文も変える）: "
                     + ", ".join(old_banned))

    if warns:
        print(f"\n▲ 注意 {len(warns)} 件（不具合ではない。配分の目安や、作り直すときの注意）")
        for w in warns:
            print("  -", w)

    if errs:
        print(f"\n■ 問題 {len(errs)} 件")
        for e in errs:
            print("  -", e)
        sys.exit(1)
    print("\n問題は見つかりませんでした。")


if __name__ == "__main__":
    main()

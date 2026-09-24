#!/usr/bin/env python3
"""渡す用のプロンプトを、単語名から丸ごと出す。

    python3 tools/prompt_for.py run happy friend    # 単語名で
    python3 tools/prompt_for.py --next 5            # まだ画像が無い語を、図鑑の並び順で5語
    python3 tools/prompt_for.py --next 5 COMMON     # レアリティを絞る

**プロンプトを人に渡すときは、必ずこれを通す。**
例文を記憶で書くと、絵と例文が食い違う。実際に2回やらかしている:
  ・run  … "Run to the gate before it closes." と書いたが、本当は
           "The goblins run away from the village."（城門に走る絵が1枚むだになった）
  ・sad  … そんな単語は words.js に無かった（墓前の騎士の絵が1枚むだになった）
無い単語を渡すと、このスクリプトが止まる。
渡すときは「例文（日本語）」の行も必ず一緒に渡す（ユーザーは日本語で、絵が例文どおりかを確かめる）。
"""
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from gen_card_prompts import LEVELS, LEVEL_NO, load_words, load_done_images, prompt_for  # noqa: E402


def emit(w, done):
    mark = "（画像あり → 差し替えになります）" if w["en"] in done else ""
    print(f"### {w['en']}.webp（{w['ja']}／{w['rarity']}／id {w['id']}／{w['pos']}）{mark}")
    # 日本語の訳を必ず添える（ユーザーは日本語で読んで、届いた絵が例文どおりかを確かめる）
    print(f"例文（日本語）: {w['tr']}")
    print(f"例文（英語）:   {w['ex']}")
    print("```")
    print(prompt_for(w))
    print("```")
    print()


def main(argv):
    words = load_words()
    done = set(load_done_images())
    by_en = {w["en"]: w for w in words}

    if argv and argv[0] == "--next":
        n = int(argv[1]) if len(argv) > 1 else 5
        rarity = argv[2].upper() if len(argv) > 2 else None
        if rarity and rarity not in LEVELS:
            sys.exit(f"レアリティが違います: {rarity}（{' / '.join(LEVELS)}）")
        todo = [w for w in words if w["en"] not in done
                and (rarity is None or w["rarity"] == rarity)]
        todo.sort(key=lambda w: (LEVEL_NO[w["rarity"]], w["id"]))
        picked = todo[:n]
        if not picked:
            sys.exit("まだ画像が無い語がありません")
        for w in picked:
            emit(w, done)
        print(f"※ 残り {len(todo)} 語", file=sys.stderr)
        return

    if not argv:
        sys.exit(__doc__)

    bad = [en for en in argv if en not in by_en]
    if bad:
        near = {}
        for en in bad:
            near[en] = [k for k in by_en if k.startswith(en[:3])][:5]
        msg = "\n".join(f"  {en} … words.js に無い"
                        + (f"（似た語: {', '.join(near[en])}）" if near[en] else "")
                        for en in bad)
        sys.exit(f"■ 単語が見つかりません\n{msg}")

    for en in argv:
        emit(by_en[en], done)


if __name__ == "__main__":
    main(sys.argv[1:])

#!/usr/bin/env python3
"""ChatGPT が GitHub に push したカード画像を取り込む。

    python3 tools/import_gpt_images.py              # origin の gpt-images ブランチから
    python3 tools/import_gpt_images.py 別のブランチ名

ChatGPT との共同作業の流れ（gpt_tasks/README.md）:
  1. ChatGPT が main の gpt_tasks/next/ にある5件のプロンプトで絵を描き、
     gpt-images ブランチの incoming/単語.png に push する
  2. Claude がこのスクリプトで取り込む:
       ・画像として本当に開けるかを確かめる（Grok のときは画像が文字（base64）になって途中で切れていた）。
         文字で書かれた画像は、最後まで読めたときだけ元に戻して使う
       ・words.js に無い単語、すでに画像がある単語（REDO 以外）は飛ばす
       ・3:2 でなければ中央で切り出し、1200x800 の webp にして assets/cards/ に置く
       ・card_art.js の CARD_IMG_NAMES に足し、REDO から外す
       ・取り込んだ単語と日本語の例文を並べて出す。絵が例文どおりかは、Claude が絵を開いて確かめる
  3. そのあとは、いつもどおり gen_next_batch.py → bake_assets.py → ASSET_V を上げて PR

gpt-images ブランチはこちらからは消せない（push できるのは作業ブランチだけ）。
取り込み済みの画像は次から飛ばすので、ブランチに残っていてもかまわない。
"""
import base64
import binascii
import io
import json
import re
import subprocess
import sys
from pathlib import Path

from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))
from gen_card_prompts import REDO, load_done_images, load_words  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
CARDS = ROOT / "assets" / "cards"
ART_JS = ROOT / "js" / "card_art.js"
GEN_PY = ROOT / "tools" / "gen_card_prompts.py"
EXTS = (".png", ".jpg", ".jpeg", ".webp")


def git(*args, binary=False):
    r = subprocess.run(["git", *args], cwd=ROOT, capture_output=True)
    if r.returncode:
        sys.exit(f"git {' '.join(args)} が失敗しました:\n{r.stderr.decode(errors='replace')}")
    return r.stdout if binary else r.stdout.decode()


def as_image(data):
    """バイト列を画像として開く。文字（base64・data URL）で書かれていたら戻してみる。開けなければ None"""
    for cand in (data, None):
        if cand is None:
            text = data.decode("ascii", errors="ignore").strip()
            text = re.sub(r"^data:image/[a-z]+;base64,", "", text)
            text = re.sub(r"\s+", "", text)
            try:
                cand = base64.b64decode(text, validate=True)
            except (binascii.Error, ValueError):
                return None, "画像でも base64 でもない"
        try:
            im = Image.open(io.BytesIO(cand))
            im.load()   # 最後まで読む（途中で切れたファイルはここで止まる）
            return im.convert("RGB"), ("base64 から戻した" if cand is not data else "")
        except Exception as e:  # noqa: BLE001
            if cand is not data:
                return None, f"base64 を戻しても画像にならない（途中で切れている？ {e}）"
    return None, "画像として開けない"


def to_card(im):
    w, h = im.size
    if abs(w / h - 1.5) > 0.01:
        if w / h > 1.5:
            nw = round(h * 1.5)
            im = im.crop(((w - nw) // 2, 0, (w - nw) // 2 + nw, h))
        else:
            nh = round(w / 1.5)
            im = im.crop((0, (h - nh) // 2, w, (h - nh) // 2 + nh))
    return im.resize((1200, 800), Image.LANCZOS)


def main():
    branch = sys.argv[1] if len(sys.argv) > 1 else "gpt-images"
    if branch.startswith("local:"):   # 試し用：手元のブランチから読む
        ref = branch[6:]
    else:
        git("fetch", "-q", "origin", branch)
        ref = "FETCH_HEAD"
    files = [f for f in git("ls-tree", "-r", "--name-only", ref, "--", "incoming").split("\n")
             if f.lower().endswith(EXTS + (".txt", ".b64"))]
    if not files:
        sys.exit(f"{branch} の incoming/ に画像がありません")

    words = {w["en"]: w for w in load_words()}
    done = set(load_done_images())
    got, skipped, bad = [], [], []
    for f in sorted(files):
        name = Path(f).stem.lower()
        if name not in words:
            bad.append(f"{f}: words.js に無い単語")
            continue
        if name in done and name not in REDO:
            skipped.append(name)
            continue
        im, note = as_image(git("show", f"{ref}:{f}", binary=True))
        if im is None:
            bad.append(f"{f}: {note}")
            continue
        size = im.size
        to_card(im).save(CARDS / f"{name}.webp", quality=86, method=6)
        got.append((name, size, note))

    if got:
        src = ART_JS.read_text(encoding="utf-8")
        m = re.search(r"const CARD_IMG_NAMES=(\[.*?\]);", src)
        names = sorted(set(json.loads(m.group(1))) | {n for n, _, _ in got})
        ART_JS.write_text(src.replace(m.group(0), "const CARD_IMG_NAMES=" + json.dumps(names, separators=(",", ":")) + ";"),
                          encoding="utf-8")
        redone = [n for n, _, _ in got if n in REDO]
        if redone:
            g = GEN_PY.read_text(encoding="utf-8")
            for n in redone:
                g = re.sub(r'(REDO = \[[^\]]*?)"%s",?\s*' % re.escape(n), r"\1", g)
            GEN_PY.write_text(g, encoding="utf-8")

    print(f"取り込み: {len(got)}枚  （すでにある画像なので飛ばした: {len(skipped)}枚）")
    for n, size, note in got:
        w = words[n]
        print(f"  ○ {n}（{w['ja']}／{w['rarity']}） {size[0]}x{size[1]}{'  ' + note if note else ''}")
        print(f"      例文: {w['tr']}")
    for b in bad:
        print(f"  × {b}")
    if got:
        print("→ 絵が例文どおりかを確かめてから、gen_next_batch.py → bake_assets.py → ASSET_V を上げる")


if __name__ == "__main__":
    main()

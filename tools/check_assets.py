#!/usr/bin/env python3
"""版（ASSET_V）と、カード画像の登録を検査する。

    python3 tools/check_assets.py

見るところ:
  ・index.html の CSS/JS/favicon に直接書いてある `?v=...` が、
    同じ index.html の ASSET_V と一致しているか
    （ここがずれると、一度読み込んだ端末が古いファイルを使い続ける。
      「アイコンを差し替えたのに反映されない」はこれが原因になる）
  ・card_art.js の CARD_IMG_NAMES と、assets/cards/ の .webp が一致しているか
    （登録したのにファイルが無い／置いたのに登録していない）
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def check_manifest(named):
    """js/ui_manifest.js（tools/bake_assets.py が作る）が、今のファイルと合っているか。
    合っていないと、差し替えた画像が端末に届かない（古い版の URL のまま）か、枠やアイコンが古いまま出る"""
    import hashlib
    import json
    fix = "→ python3 tools/bake_assets.py を実行する"
    mp = ROOT / "js" / "ui_manifest.js"
    if not mp.exists():
        return [f"js/ui_manifest.js が無い {fix}"]
    m = re.search(r"const UI_MANIFEST=(\{.*\});", mp.read_text(encoding="utf-8"), re.S)
    man = json.loads(m.group(1))
    h = lambda p: hashlib.sha1(p.read_bytes()).hexdigest()[:10]
    errs = []
    for src, v in man["src"].items():
        p = ROOT / src
        if not p.exists():
            errs.append(f"{src} が無くなっている {fix}")
        elif h(p) != v:
            errs.append(f"{src} が差し替えられている {fix}")
    urls = list(man["slots"].values()) + list(man["icons"].values()) + \
        [f[k] for f in man["frames"].values() for k in ("url", "mini")] + \
        [c[k] for c in man["cards"].values() for k in ("full", "thumb")]
    for u in urls:
        path, v = u.split("?v=")
        p = ROOT / path
        if not p.exists() or h(p) != v:
            errs.append(f"{path} の版が合わない {fix}")
    for n in sorted(named - set(man["cards"])):
        errs.append(f"カード画像 {n} が一覧に入っていない（縮小版も無い） {fix}")
    for n in sorted(set(man["cards"]) - named):
        errs.append(f"一覧に {n} が残っている（CARD_IMG_NAMES から外した？） {fix}")
    ui = ROOT / "assets" / "ui"
    for p in list(ui.glob("*.webp")) + list(ui.glob("*.png")) + list((ui / "icons").glob("*.png")):
        if p.name == "favicon.png":
            continue
        if p.relative_to(ROOT).as_posix() not in man["src"]:
            errs.append(f"{p.relative_to(ROOT).as_posix()} が一覧に入っていない {fix}")
    print(f"画像の一覧（ui_manifest.js）: 背景など {len(man['slots'])}・アイコン {len(man['icons'])}・"
          f"枠 {len(man['frames'])}・カード {len(man['cards'])}")
    return errs


def main():
    errs = []

    html = (ROOT / "index.html").read_text(encoding="utf-8")
    m = re.search(r'const\s+ASSET_V\s*=\s*"([^"]+)"', html)
    if not m:
        print("■ index.html に ASSET_V が見つかりません")
        sys.exit(1)
    ver = m.group(1)
    vs = re.findall(r'(?:href|src)="([^"]+)\?v=([^"]+)"', html)
    print(f"ASSET_V: {ver}　／　index.html の ?v= 付きURL: {len(vs)}本")
    for url, v in vs:
        if v != ver:
            errs.append(f"index.html の {url} が ?v={v}（ASSET_V は {ver}）")
    for tag in re.findall(r'<(?:link|script)\b[^>]*(?:href|src)="((?:css|js|assets)/[^"?]+)"', html):
        errs.append(f"index.html の {tag} に ?v=... が付いていない")

    js = (ROOT / "js" / "card_art.js").read_text(encoding="utf-8")
    m = re.search(r"const\s+CARD_IMG_NAMES\s*=\s*\[(.*?)\]", js, re.S)
    named = set(re.findall(r'"([^"]+)"', m.group(1))) if m else set()
    files = {p.stem for p in (ROOT / "assets" / "cards").glob("*.webp")}
    print(f"カード画像: 登録 {len(named)}件／ファイル {len(files)}件")
    for n in sorted(named - files):
        errs.append(f"CARD_IMG_NAMES に {n} があるが assets/cards/{n}.webp が無い")
    for n in sorted(files - named):
        errs.append(f"assets/cards/{n}.webp があるが CARD_IMG_NAMES に入っていない")

    words = (ROOT / "js" / "words.js").read_text(encoding="utf-8")
    ens = set(re.findall(r'"en":\s*"([^"]+)"', words))
    for n in sorted(named - ens):
        errs.append(f"CARD_IMG_NAMES の {n} は words.js に無い単語")

    errs += check_manifest(named)

    if errs:
        print(f"\n■ 問題 {len(errs)} 件")
        for e in errs:
            print("  -", e)
        sys.exit(1)
    print("\n問題は見つかりませんでした。")


if __name__ == "__main__":
    main()

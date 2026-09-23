#!/usr/bin/env python3
"""画像を「すぐ使える形」に前もって作り、一覧（js/ui_manifest.js）を書き出す。

    python3 tools/bake_assets.py

画像を足した・差し替えたら必ず実行する（tools/check_assets.py が、実行し忘れを検出する）。

なぜ要るか（実測：4G・スマホ相当の CPU・キャッシュ無しで起動）:
  ・起動時に assets/ui/ の画像を**全部**ダウンロードしていた（8.8MB）。
    ファイルがあるかどうかを、画像を読み込んで確かめていたため。ガチャのパックや魔法陣まで起動時に落ちてくる
  ・その間に 2.2 秒の待ち時間が切れると、画像が無いものとして**コードで描いた夜の城（旧背景）**を出し、
    読み終わってから本当の背景に差し替えていた（「旧背景が出て、少しして今の背景になる」の正体）
  ・カード枠（マゼンタの窓）とアイコンを、起動のたびにブラウザで透過していた。
    枠は1枚 1.6MB の PNG になり、5枚そろうまで 13 秒かかった。それまでカードは枠なしで表示される
  ・図鑑の小さなカード（幅 約170px）に、1200x800 の絵をそのまま使っていた
  ・ASSET_V を変えるたびに、全部の画像（25MB）が「新しいファイル」扱いになっていた。
    カード画像を1枚足しただけでも、次に開いたときに全部をダウンロードし直す

このスクリプトがやること:
  1. カード枠・アイコンの透過を、ここで一度だけ済ませる（ブラウザと同じ js/ui_images.js の処理を、
     ヘッドレスの Chromium で動かす。だから見た目は今までと同じ）→ assets/ui/baked/
  2. 図鑑の小さなカード用の縮小版を作る → assets/cards/thumb/
  3. どの画像があるかと、ファイルごとの版（中身のハッシュ）を js/ui_manifest.js に書く。
     起動時に画像を探す必要がなくなり、変わったファイルだけが再ダウンロードされる
"""
import base64
import hashlib
import io
import json
import os
import re
import socket
import subprocess
import sys
import time
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
UI_DIR = ROOT / "assets" / "ui"
BAKED = UI_DIR / "baked"
CARDS = ROOT / "assets" / "cards"
THUMBS = CARDS / "thumb"
OUT = ROOT / "js" / "ui_manifest.js"

# 小さなカード用の縮小版。図鑑のカードの絵は幅 約170px、端末の画素密度3倍で 510px。それより少し小さくて足りる
THUMB_W, THUMB_H, THUMB_Q = 480, 320, 78
# アイコンの最大の大きさ。いちばん大きく出る icon_gacha が 約129px、画素密度3倍で 387px
ICON_MAX = 384
# 小さなカードに使う枠の幅。大きな枠（900px）を500枚の小カードで縮小表示すると重いので、別に作る
FRAME_MINI_W = 480


def read(p):
    return p.read_text(encoding="utf-8")


def js_list(src, name):
    m = re.search(r"const\s+%s\s*=\s*\[(.*?)\];" % name, src, re.S)
    if not m:
        sys.exit(f"{name} が見つかりません")
    return re.findall(r'"([^"]+)"', m.group(1))


def h(data):
    return hashlib.sha1(data).hexdigest()[:10]


def fh(p):
    return h(p.read_bytes())


def rel(p):
    return p.relative_to(ROOT).as_posix()


def url(p):
    """ファイルごとの版を付けた URL。中身が変わらなければ URL も変わらないので、キャッシュが効き続ける"""
    return f"{rel(p)}?v={fh(p)}"


def free_port():
    s = socket.socket()
    s.bind(("127.0.0.1", 0))
    port = s.getsockname()[1]
    s.close()
    return port


# ヘッドレスの Chromium で、ブラウザと同じ透過処理（js/ui_images.js）を動かす
KEYER = r"""
const {chromium}=require('playwright');
(async()=>{
  const [base,frames,icons]=[process.argv[1],JSON.parse(process.argv[2]),JSON.parse(process.argv[3])];
  const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--no-sandbox']});
  const p=await b.newPage();
  await p.goto(base+'/tools/');
  await p.addScriptTag({content:'const ASSET_V="bake";'});
  await p.addScriptTag({url:base+'/js/ui_images.js'});
  const out=await p.evaluate(async([frames,icons])=>{
    const toData=async u=>{if(!u)return null;const r=await fetch(u);const bl=await r.blob();
      return await new Promise(res=>{const f=new FileReader();f.onload=()=>res(f.result);f.readAsDataURL(bl)})};
    const o={frames:{},icons:{}};
    for(const [k,u] of Object.entries(frames)){const r=await uiKeyFrame(u);
      o.frames[k]=r?{data:await toData(r.url),art:r.art,info:r.info}:null}
    for(const [k,u] of Object.entries(icons)){o.icons[k]=await toData(await uiIcon(u))}
    return o},[frames,icons]);
  process.stdout.write(JSON.stringify(out));await b.close()})().catch(e=>{console.error(e);process.exit(1)});
"""


def run_keyer(frames, icons):
    port = free_port()
    srv = subprocess.Popen([sys.executable, "-m", "http.server", str(port), "--bind", "127.0.0.1"],
                           cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    try:
        for _ in range(50):
            try:
                socket.create_connection(("127.0.0.1", port), timeout=0.2).close()
                break
            except OSError:
                time.sleep(0.1)
        base = f"http://127.0.0.1:{port}"
        env = dict(os.environ, NODE_PATH=subprocess.run(["npm", "root", "-g"], capture_output=True,
                                                         text=True).stdout.strip())
        r = subprocess.run(["node", "-e", KEYER, base,
                            json.dumps({k: f"{base}/{rel(v)}" for k, v in frames.items()}),
                            json.dumps({k: f"{base}/{rel(v)}" for k, v in icons.items()})],
                           capture_output=True, text=True, env=env, cwd=ROOT)
        if r.returncode:
            sys.exit("透過処理に失敗しました:\n" + r.stderr[-2000:])
        return json.loads(r.stdout)
    finally:
        srv.terminate()


def from_data(d):
    return Image.open(io.BytesIO(base64.b64decode(d.split(",", 1)[1])))


def save_webp(im, p, q=88):
    p.parent.mkdir(parents=True, exist_ok=True)
    im.save(p, "WEBP", quality=q, method=6)


def main():
    ui_src, art_src = read(ROOT / "js" / "ui_images.js"), read(ROOT / "js" / "card_art.js")
    slots, icon_names = js_list(ui_src, "UI_SLOTS"), js_list(ui_src, "UI_ICONS")
    cards = js_list(art_src, "CARD_IMG_NAMES")

    # 1. 置いてある画像を探す（ブラウザで探すのをやめるため、ここで探す）
    found = {}
    for s in slots:
        for ext in ("webp", "png"):
            p = UI_DIR / f"{s}.{ext}"
            if p.exists():
                found[s] = p
                break
    frames = {s: p for s, p in found.items() if s.startswith("card_frame")}
    icons = {n: UI_DIR / "icons" / f"{n}.png" for n in icon_names if (UI_DIR / "icons" / f"{n}.png").exists()}

    # 2. 枠とアイコンの透過（ブラウザと同じ処理）
    print(f"枠 {len(frames)}枚・アイコン {len(icons)}個を透過しています…")
    keyed = run_keyer(frames, icons)
    man = {"slots": {}, "icons": {}, "frames": {}, "cards": {}, "src": {}}
    for s, p in found.items():
        man["src"][rel(p)] = fh(p)
        if not s.startswith("card_frame"):
            man["slots"][s] = url(p)
    for s, r in keyed["frames"].items():
        if not r:
            print(f"  ▲ {s}: 絵の窓（マゼンタ）が見つからないので、枠として使えません")
            continue
        im = from_data(r["data"]).convert("RGBA")
        big, mini = BAKED / f"{s}.webp", BAKED / f"{s}_mini.webp"
        save_webp(im, big, 90)
        save_webp(im.resize((FRAME_MINI_W, round(FRAME_MINI_W * im.height / im.width)), Image.LANCZOS), mini, 88)
        man["frames"][s] = {"url": url(big), "mini": url(mini), "art": r["art"], "info": r["info"]}
    for n, p in icons.items():
        man["src"][rel(p)] = fh(p)
        d = keyed["icons"].get(n)
        im = from_data(d) if d else Image.open(p)   # 透過済みの画像は、そのまま使う（ブラウザと同じ扱い）
        im = im.convert("RGBA")
        if max(im.size) > ICON_MAX:
            k = ICON_MAX / max(im.size)
            im = im.resize((round(im.width * k), round(im.height * k)), Image.LANCZOS)
        out = BAKED / "icons" / f"{n}.webp"
        save_webp(im, out, 90)
        man["icons"][n] = url(out)

    # 3. カードの縮小版
    missing = []
    for n in cards:
        p = CARDS / f"{n}.webp"
        if not p.exists():
            missing.append(n)
            continue
        t = THUMBS / f"{n}.webp"
        im = Image.open(p).convert("RGB").resize((THUMB_W, THUMB_H), Image.LANCZOS)
        save_webp(im, t, THUMB_Q)
        man["src"][rel(p)] = fh(p)
        man["cards"][n] = {"full": url(p), "thumb": url(t)}
    if missing:
        sys.exit(f"CARD_IMG_NAMES にあるのに assets/cards/ に無い: {missing}")

    # 使われなくなった作りかけのファイルを消す（枠やアイコン、カードを消したとき）
    keep = {ROOT / u["url"].split("?")[0] for u in man["frames"].values()} | \
           {ROOT / u["mini"].split("?")[0] for u in man["frames"].values()} | \
           {ROOT / u.split("?")[0] for u in man["icons"].values()} | \
           {ROOT / c["thumb"].split("?")[0] for c in man["cards"].values()}
    for d in (BAKED, THUMBS):
        for f in d.rglob("*.webp"):
            if f not in keep:
                f.unlink()

    OUT.write_text(
        "// 自動生成（tools/bake_assets.py）。直接編集しない。画像を足した・差し替えたら作り直す\n"
        "// slots: 背景など  icons: 透過済みアイコン  frames: 透過済みのカード枠と絵の窓の位置\n"
        "// cards: カード画像（full: 大きな絵 / thumb: 図鑑の小さなカード用）  src: 元ファイルの中身（作り直し忘れの検出用）\n"
        "const UI_MANIFEST=" + json.dumps(man, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")

    size = lambda ps: sum(p.stat().st_size for p in ps) / 1e6
    print(f"枠: {len(man['frames'])}種類  アイコン: {len(man['icons'])}個  カード: {len(man['cards'])}枚")
    print(f"  枠 {size(BAKED.glob('card_frame*[!i].webp')):.2f}MB（小カード用 {size(BAKED.glob('*_mini.webp')):.2f}MB）"
          f"  アイコン {size((BAKED / 'icons').glob('*.webp')):.2f}MB"
          f"  カード縮小版 {size(THUMBS.glob('*.webp')):.2f}MB（元 {size(CARDS.glob('*.webp')):.2f}MB）")
    print(f"{rel(OUT)} を書き出しました")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""開発者用の「全部カンスト」セーブデータの引き継ぎコードを作る。

    python3 tools/dev_save.py

作ったコードは dev_save_code.md に書き、画面にも出す。
アプリの「設定 → データの引き継ぎ → 受け取ったデータを取り込む」に貼り付けて使う。

中身（全部カンスト）:
  ・全500語を持っている（各 99枚。コレクション Lv.99）
  ・全単語の熟練度が最大（MASTERY_MAX = 5）→ 全レベルクリア
  ・解放レベル・勉強のレベル・ガチャのレベルが最大（Lv.5）。全クリアの演出は表示済みにする
  ・コイン 9,999,999（ヘッダーの表示が崩れない上限の目安として 7桁）
  ・連続学習 999日（今日の日付で作る）

注意:
  ・連続学習は「最後に学習した日」が今日か昨日のときだけ数える。コードを作った翌々日に取り込むと 0日と出るので、
    そのときは作り直す
  ・単語を足したり消したりしたら作り直す（全語を持っている状態にするため）
  ・形式は js/save.js の引き継ぎコード（WG1）と同じ。deflate-raw ＋ base64url ＋ 圧縮前の JSON の CRC32
"""
import base64
import datetime
import json
import re
import sys
import zlib
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from gen_card_prompts import LEVELS, load_words  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "dev_save_code.md"
OWNED_MAX = 99
COINS_MAX = 9_999_999
STREAK_MAX = 999


def mastery_max():
    m = re.search(r"const\s+MASTERY_MAX\s*=\s*(\d+)", (ROOT / "js" / "config.js").read_text(encoding="utf-8"))
    if not m:
        sys.exit("js/config.js に MASTERY_MAX が見つかりません")
    return int(m.group(1))


def make_code(save):
    raw = json.dumps(save, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
    c = zlib.compressobj(9, zlib.DEFLATED, -15)          # deflate-raw（ブラウザの CompressionStream と同じ）
    body = c.compress(raw) + c.flush()
    b64 = base64.urlsafe_b64encode(body).decode("ascii").rstrip("=")
    return f"WG1.z.{b64}.{zlib.crc32(raw) & 0xFFFFFFFF:08x}"


def main():
    words = load_words()
    mm = mastery_max()
    today = datetime.date.today().isoformat()
    top = len(LEVELS)
    save = {
        "coins": COINS_MAX,
        "owned": {str(w["id"]): OWNED_MAX for w in words},
        "mastery": {str(w["id"]): mm for w in words},
        "streak": STREAK_MAX,
        "last": today,
        "v": 2,
        "unlockedLevel": top,
        "studyLevel": top,
        "gachaLevel": top,
        "allClear": True,
    }
    code = make_code(save)
    OUT.write_text(
        "# 開発者用セーブデータ（全部カンスト）\n\n"
        "※ `python3 tools/dev_save.py` が作ります。直接編集しないでください。\n\n"
        f"- 作った日: {today}（連続学習は、この日か翌日に取り込んだときだけ {STREAK_MAX}日と出る）\n"
        f"- 全{len(words)}語を各{OWNED_MAX}枚・熟練度{mm}、解放 Lv.{top}、コイン {COINS_MAX:,}\n\n"
        "## 使い方\n"
        "アプリの「設定 → データの引き継ぎ → 受け取ったデータを取り込む」に、下のコードを貼り付けて「取り込む」。\n"
        "**今のデータは上書きされる**ので、先に「コードをコピー」で自分のデータの控えを取っておく。\n\n"
        "## コード\n```\n" + code + "\n```\n", encoding="utf-8")
    print(code)
    print(f"\n{OUT.relative_to(ROOT)} に書きました（{len(code)}文字、{len(words)}語、作った日 {today}）", file=sys.stderr)


if __name__ == "__main__":
    main()

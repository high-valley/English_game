#!/usr/bin/env python3
"""BGM の音源を、アプリで流す形にそろえて assets/bgm/ に置く。

    python3 tools/make_bgm.py home  もとの音源.mp3
    python3 tools/make_bgm.py study もとの音源.mp3
    （名前は home / study / gacha / card。js/bgm.js の BGM_TRACKS と同じ）

そのあと python3 tools/bake_assets.py を実行して、一覧（js/ui_manifest.js）に版を書く。

やること:
  ・音の大きさをそろえる（ラウドネス -16 LUFS）。もとの曲は -12〜-14.5 LUFS とばらばらで、
    画面を切り替えるたびに音量が跳ねる
  ・曲の頭と終わりの無音を削る（ループしたときに間が空かないように）。
    終わりが音の途中で切れている曲（gacha）は、最後を短くフェードして、頭に戻るときのプツッという音を消す
  ・96kbps・44.1kHz のステレオ MP3 にする（もとは 190kbps・48kHz。4曲で 14MB → 約7MB）。
    ジャケット画像やタグも外す（もとのファイルには 1枚ずつカバー画像が入っている）

ffmpeg は、入っていなければ `pip install imageio-ffmpeg` で入るものを使う。
"""
import json
import re
import shutil
import subprocess
import sys
import tempfile
import wave
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "bgm"
NAMES = ("home", "study", "gacha", "card")
LUFS, TRUE_PEAK = -16, -1.5
BITRATE = "96k"
FADE_OUT = 1.5   # 終わりのフェード（秒）。すでにフェードして終わる曲にかけても、ほとんど変わらない


def ffmpeg():
    exe = shutil.which("ffmpeg")
    if exe:
        return exe
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except ImportError:
        sys.exit("ffmpeg がありません。pip install imageio-ffmpeg を実行してください")


def run(args):
    return subprocess.run(args, capture_output=True, text=True)


def main():
    if len(sys.argv) != 3 or sys.argv[1] not in NAMES:
        sys.exit(f"使い方: python3 tools/make_bgm.py <{'|'.join(NAMES)}> もとの音源")
    name, src = sys.argv[1], Path(sys.argv[2])
    ff = ffmpeg()
    trim = ("silenceremove=start_periods=1:start_threshold=-60dB,"
            "areverse,silenceremove=start_periods=1:start_threshold=-60dB,areverse")
    with tempfile.TemporaryDirectory() as td:
        # 1. 頭と終わりの無音を削った音を、いったん WAV にする（長さを正確に知るため）
        wav = Path(td) / "trim.wav"
        r = run([ff, "-hide_banner", "-y", "-i", str(src), "-map", "0:a:0", "-af", trim, "-ar", "44100", str(wav)])
        if r.returncode:
            sys.exit(r.stderr[-2000:])
        with wave.open(str(wav)) as w:
            length = w.getnframes() / w.getframerate()

        # 2. ラウドネスを測る（測ってから合わせると、音量の合わせ方が正確になる）
        r = run([ff, "-hide_banner", "-i", str(wav), "-af",
                 f"loudnorm=I={LUFS}:TP={TRUE_PEAK}:LRA=11:print_format=json", "-f", "null", "-"])
        m = re.search(r"\{[^{}]*\"input_i\"[^{}]*\}", r.stderr, re.S)
        if not m:
            sys.exit(r.stderr[-2000:])
        ln = json.loads(m.group(0))

        # 3. 書き出す
        OUT.mkdir(parents=True, exist_ok=True)
        out = OUT / f"{name}.mp3"
        af = (f"afade=t=in:d=0.03,afade=t=out:st={max(0, length - FADE_OUT):.2f}:d={FADE_OUT},"
              f"loudnorm=I={LUFS}:TP={TRUE_PEAK}:LRA=11:measured_I={ln['input_i']}:measured_TP={ln['input_tp']}:"
              f"measured_LRA={ln['input_lra']}:measured_thresh={ln['input_thresh']}:offset={ln['target_offset']}:linear=true,"
              "aresample=44100")
        r = run([ff, "-hide_banner", "-y", "-i", str(wav), "-map_metadata", "-1",
                 "-af", af, "-c:a", "libmp3lame", "-b:a", BITRATE, "-ac", "2", "-id3v2_version", "0",
                 "-write_xing", "1", str(out)])
        if r.returncode:
            sys.exit(r.stderr[-2000:])
    print(f"{out.relative_to(ROOT)}: {length:.1f}秒  {src.stat().st_size / 1e6:.1f}MB → {out.stat().st_size / 1e6:.1f}MB"
          f"（ラウドネス {ln['input_i']} → {LUFS} LUFS）")
    print("→ python3 tools/bake_assets.py を実行して、一覧に版を書く")


if __name__ == "__main__":
    main()

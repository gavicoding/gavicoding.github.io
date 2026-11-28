"""Re-encode the demo videos for the web.

Horizontal demos (assets/videos/NN-slug.mp4) are rewritten in place as
1280x720, 30 fps, H.264 (CRF 28), no audio, with +faststart.
Vertical demos are encoded to assets/videos/vertical/<slug>.mp4 (540x960)
with a small WebP poster. Card thumbnails for the horizontal demos are
written to assets/videos/thumbs/NN-slug.webp.

Usage:
    python tools/encode_videos.py --ffmpeg <ffmpeg.exe> --vertical-src <folder>
"""

from __future__ import annotations

import argparse
import shutil
import subprocess
import tempfile
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
VIDEOS = ROOT / "assets" / "videos"

VERTICAL_MAP = {
    "01-auditor-ibs-cbs": "auditor-ibs-cbs",
    "02-nfe-toolkit": "nfe-toolkit",
    "03-lgpd-ropa-kit": "lgpd-ropa-kit",
    "04-odata-incremental-sync": "odata-incremental-sync",
    "05-ad-access-audit": "ad-access-audit",
    "06-agent-mcp-guard": "agent-mcp-guard",
    "07-win-event-triage": "win-event-triage",
    "08-pii-screenshot-guard": "pii-screenshot-guard",
    "09-queue-health-watchdog": "queue-health-watchdog",
    "10-OtimizaPC": "otimizapc",
}


def run(cmd: list[str]) -> None:
    subprocess.run(cmd, check=True)


def encode(ffmpeg: str, src: Path, dst: Path, scale: str, crf: int) -> None:
    tmp = Path(tempfile.mkdtemp()) / dst.name
    run(
        [
            ffmpeg, "-hide_banner", "-loglevel", "error", "-y", "-i", str(src),
            "-vf", f"scale={scale}:flags=lanczos,fps=30",
            "-c:v", "libx264", "-preset", "slow", "-crf", str(crf),
            "-profile:v", "high", "-pix_fmt", "yuv420p",
            "-an", "-movflags", "+faststart", str(tmp),
        ]
    )
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.move(str(tmp), dst)


def poster(ffmpeg: str, src: Path, dst: Path, at: float, width: int) -> None:
    tmp = Path(tempfile.mkdtemp()) / "frame.png"
    run(
        [
            ffmpeg, "-hide_banner", "-loglevel", "error", "-y", "-ss", str(at),
            "-i", str(src), "-frames:v", "1", "-vf", f"scale={width}:-2:flags=lanczos", str(tmp),
        ]
    )
    with Image.open(tmp) as im:
        im.convert("RGB").save(dst, "WEBP", quality=72, method=6)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--ffmpeg", required=True)
    ap.add_argument("--vertical-src", required=True, type=Path)
    ap.add_argument("--skip-horizontal", action="store_true")
    args = ap.parse_args()

    thumbs = VIDEOS / "thumbs"
    thumbs.mkdir(exist_ok=True)
    for mp4 in sorted(VIDEOS.glob("[0-9][0-9]-*.mp4")):
        if not args.skip_horizontal:
            encode(args.ffmpeg, mp4, mp4, "1280:720", 28)
        jpg = VIDEOS / "posters" / f"{mp4.stem}.jpg"
        with Image.open(jpg) as im:
            im = im.convert("RGB")
            im.thumbnail((400, 225), Image.LANCZOS)
            im.save(thumbs / f"{mp4.stem}.webp", "WEBP", quality=72, method=6)
        print("horizontal", mp4.name, mp4.stat().st_size)

    vdir = VIDEOS / "vertical"
    vdir.mkdir(exist_ok=True)
    for stem, slug in VERTICAL_MAP.items():
        src = args.vertical_src / f"{stem}.mp4"
        dst = vdir / f"{slug}.mp4"
        encode(args.ffmpeg, src, dst, "540:960", 30)
        poster(args.ffmpeg, src, vdir / f"{slug}.webp", 8.5, 270)
        print("vertical", dst.name, dst.stat().st_size)


if __name__ == "__main__":
    main()

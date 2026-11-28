"""Build the pixel-art avatar sprite and the ASCII portrait used by the site.

The source picture stays outside the repository; only the derived,
low-resolution artwork is committed.

Usage:
    python tools/make_avatar.py <source-image> [--preview <png>]

Outputs:
    assets/images/avatar-sprite.png  6 frames of 56x56 px, side by side:
        0 idle, 1 blink, 2 smile, 3 typing A, 4 typing B, 5 glasses glint
    assets/images/avatar-ascii.txt   ASCII portrait (used in index.html)
"""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "assets" / "images"

SIZE = 56
CROP = (50, 22, 410, 382)  # head and shoulders in the 460x460 source

# Terminal palette of the site plus the tones a face needs.
PALETTE = [
    (10, 14, 11),     # background
    (18, 26, 20),     # panel
    (32, 46, 36),     # dim green
    (74, 222, 128),   # phosphor green (accent)
    (103, 232, 249),  # cyan
    (226, 232, 228),  # light
    (148, 163, 152),  # grey
    (82, 94, 86),     # dark grey (hoodie)
    (52, 58, 55),     # darker grey
    (24, 26, 25),     # near black (glasses, headphones)
    (60, 38, 26),     # dark hair
    (104, 66, 44),    # hair / beard
    (170, 112, 82),   # skin shadow
    (214, 156, 120),  # skin
    (238, 196, 160),  # skin light
]


def palette_image() -> Image.Image:
    pal = Image.new("P", (1, 1))
    flat = [c for rgb in PALETTE for c in rgb]
    flat += [0] * (768 - len(flat))
    pal.putpalette(flat)
    return pal


def person_mask(size: tuple[int, int]) -> Image.Image:
    """Rough head and shoulders silhouette, in crop coordinates."""
    w, h = size
    mask = Image.new("L", size, 0)
    d = ImageDraw.Draw(mask)
    # head + headphones
    d.ellipse((w * 0.22, h * 0.06, w * 0.78, h * 0.80), fill=255)
    # neck and hoodie
    d.polygon(
        [(w * 0.34, h * 0.70), (w * 0.66, h * 0.70), (w * 0.93, h * 1.0), (w * 0.07, h * 1.0)],
        fill=255,
    )
    return mask.filter(ImageFilter.GaussianBlur(6))


def base_portrait(src: Path) -> Image.Image:
    im = Image.open(src).convert("RGB").crop(CROP)
    im = ImageEnhance.Contrast(im).enhance(1.15)
    mask = person_mask(im.size)
    bg = Image.new("RGB", im.size, PALETTE[0])
    im = Image.composite(im, bg, mask)
    small = im.resize((SIZE, SIZE), Image.LANCZOS)
    small = ImageEnhance.Sharpness(small).enhance(1.6)
    q = small.quantize(palette=palette_image(), dither=Image.Dither.NONE)
    return q.convert("RGBA")


def put(img: Image.Image, pts, color) -> None:
    px = img.load()
    for x, y in pts:
        if 0 <= x < img.width and 0 <= y < img.height:
            px[x, y] = color + (255,)


def darkest(img: Image.Image, xs: range, ys: range) -> tuple[int, int]:
    px = img.load()
    best, pos = 999, (xs.start, ys.start)
    for y in ys:
        for x in xs:
            r, g, b, _ = px[x, y]
            if r + g + b < best:
                best, pos = r + g + b, (x, y)
    return pos


def find_eyes(img: Image.Image) -> list[tuple[int, int]]:
    """Darkest pixel inside each lens is taken as the pupil."""
    return [darkest(img, range(20, 26), range(23, 29)), darkest(img, range(31, 37), range(23, 29))]


def find_mouth(img: Image.Image) -> tuple[int, int]:
    return (28, darkest(img, range(25, 32), range(36, 43))[1])


def frame_blink(img, eyes):
    out = img.copy()
    for ex, ey in eyes:
        put(out, [(ex + dx, ey + dy) for dx in (-2, -1, 0, 1, 2) for dy in (-1, 0, 1)], PALETTE[13])
        put(out, [(ex + dx, ey + 1) for dx in (-2, -1, 0, 1, 2)], PALETTE[11])
    return out


def frame_smile(img, mouth):
    out = img.copy()
    mx, my = mouth
    put(out, [(mx - 4, my - 1), (mx + 4, my - 1)], PALETTE[11])
    put(out, [(mx + dx, my) for dx in range(-3, 4)], PALETTE[10])
    put(out, [(mx + dx, my + 1) for dx in range(-2, 3)], PALETTE[5])
    put(out, [(mx + dx, my + 2) for dx in range(-1, 2)], PALETTE[11])
    return out


def frame_glint(img, eyes):
    out = img.copy()
    for ex, ey in eyes:
        put(out, [(ex + 1 + k, ey - k) for k in range(4)], PALETTE[5])
        put(out, [(ex + 3 + k, ey - k) for k in range(2)], PALETTE[4])
    return out


def frame_typing(img, phase: int):
    out = img.copy()
    d = ImageDraw.Draw(out)
    # laptop lid seen from the front, covering the chest
    d.rectangle((13, 44, 43, 55), fill=PALETTE[8] + (255,))
    d.rectangle((14, 45, 42, 55), fill=PALETTE[1] + (255,))
    d.line((13, 44, 43, 44), fill=PALETTE[6] + (255,))
    # glowing "</>" mark on the lid
    put(out, [(24, 50), (25, 49), (25, 51)], PALETTE[3])
    put(out, [(27, 52), (28, 50), (29, 48)], PALETTE[3])
    put(out, [(32, 50), (31, 49), (31, 51)], PALETTE[3])
    # hands moving on the keyboard behind the lid
    left = (9, 48) if phase == 0 else (10, 50)
    right = (44, 50) if phase == 0 else (43, 48)
    for hx, hy in (left, right):
        d.rectangle((hx, hy, hx + 2, hy + 3), fill=PALETTE[13] + (255,))
        put(out, [(hx, hy + 3), (hx + 2, hy + 3)], PALETTE[12])
    # faint green screen light on the face
    px = out.load()
    for y in range(30, 44):
        for x in range(17, 40):
            r, g, b, a = px[x, y]
            if (r, g, b) in (PALETTE[13], PALETTE[14]):
                px[x, y] = (r - 10, min(255, g + 6), b, a)
    return out


def ascii_portrait(src: Path, cols: int = 34) -> str:
    ramp = " .:-=+*#%@"
    im = Image.open(src).convert("L").crop(CROP)
    im = ImageEnhance.Contrast(im).enhance(1.5)
    mask = person_mask(im.size)
    black = Image.new("L", im.size, 0)
    im = Image.composite(im, black, mask)
    rows = int(cols * 0.5)
    small = im.resize((cols, rows), Image.LANCZOS)
    px = small.load()
    lines = []
    for y in range(rows):
        line = "".join(ramp[min(len(ramp) - 1, px[x, y] * len(ramp) // 256)] for x in range(cols))
        lines.append(line.rstrip())
    return "\n".join(lines)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("source", type=Path)
    ap.add_argument("--preview", type=Path)
    args = ap.parse_args()

    base = base_portrait(args.source)
    eyes = find_eyes(base)
    mouth = find_mouth(base)
    frames = [
        base,
        frame_blink(base, eyes),
        frame_smile(base, mouth),
        frame_typing(base, 0),
        frame_typing(base, 1),
        frame_glint(base, eyes),
    ]
    sheet = Image.new("RGBA", (SIZE * len(frames), SIZE), (0, 0, 0, 0))
    for i, fr in enumerate(frames):
        sheet.paste(fr, (i * SIZE, 0))
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    sheet.save(OUT_DIR / "avatar-sprite.png", optimize=True)
    (OUT_DIR / "avatar-ascii.txt").write_text(ascii_portrait(args.source) + "\n", encoding="utf-8")
    if args.preview:
        sheet.resize((sheet.width * 6, sheet.height * 6), Image.NEAREST).save(args.preview)
    print("eyes", eyes, "mouth", mouth)


if __name__ == "__main__":
    main()

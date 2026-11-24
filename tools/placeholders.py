"""Yer tutucu fotoğraflar üretir (JPG). Gerçek fotoğraflarınızı AYNI dosya adıyla
img/ altına koyduğunuzda site otomatik olarak onları kullanır.

Kullanım: python tools/placeholders.py
"""
import math
import os
import random

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = os.path.join(os.path.dirname(__file__), "..", "img")
PALETTE = [
    ("#6b7a3a", "#e9dcb5"),  # haki / kum
    ("#c4501f", "#f2e6cf"),  # pas / krem
    ("#2b2c25", "#e2c27c"),  # kömür / okra
    ("#7d8f4e", "#161714"),  # zeytin / mürekkep
    ("#d4a84f", "#161714"),  # kum / mürekkep
    ("#4a4c44", "#e9dcb5"),  # çelik / kum
]


def font(size):
    for f in ("C:/Windows/Fonts/segoeprb.ttf", "C:/Windows/Fonts/segoepr.ttf", "C:/Windows/Fonts/arial.ttf"):
        if os.path.exists(f):
            return ImageFont.truetype(f, size)
    return ImageFont.load_default()


def wobbly(draw, pts, fill, width):
    for i in range(len(pts) - 1):
        draw.line([pts[i], pts[i + 1]], fill=fill, width=width, joint="curve")


def make(path, w, h, label, sub, seed):
    rnd = random.Random(seed)
    bg, fg = PALETTE[seed % len(PALETTE)]
    img = Image.new("RGB", (w, h), bg)
    d = ImageDraw.Draw(img)

    # doku: rastgele soluk karalamalar
    for _ in range(14):
        cx, cy = rnd.randint(0, w), rnd.randint(0, h)
        r = rnd.randint(min(w, h) // 14, min(w, h) // 4)
        pts = [
            (cx + math.cos(a / 10) * r * (1 + rnd.uniform(-0.08, 0.08)), cy + math.sin(a / 10) * r * (1 + rnd.uniform(-0.08, 0.08)))
            for a in range(0, 66)
        ]
        wobbly(d, pts, fill=fg if rnd.random() < 0.35 else "#00000022", width=rnd.randint(2, 5))
    for _ in range(6):
        y = rnd.randint(0, h)
        pts = [(x, y + math.sin(x / rnd.randint(30, 80)) * rnd.randint(6, 20)) for x in range(0, w + 20, 20)]
        wobbly(d, pts, fill=fg, width=3)

    img = img.filter(ImageFilter.GaussianBlur(0.6))
    d = ImageDraw.Draw(img)

    # çerçeve (elle çizilmiş)
    m = int(min(w, h) * 0.06)
    box = [(m + rnd.randint(-4, 4), m + rnd.randint(-4, 4)), (w - m + rnd.randint(-4, 4), m + rnd.randint(-4, 4)),
           (w - m + rnd.randint(-4, 4), h - m + rnd.randint(-4, 4)), (m + rnd.randint(-4, 4), h - m + rnd.randint(-4, 4))]
    wobbly(d, box + [box[0]], fill=fg, width=6)

    # etiket
    f1 = font(int(min(w, h) * 0.11))
    f2 = font(int(min(w, h) * 0.045))
    tw = d.textlength(label, font=f1)
    d.text(((w - tw) / 2, h * 0.40), label, fill=fg, font=f1)
    sw = d.textlength(sub, font=f2)
    d.text(((w - sw) / 2, h * 0.40 + min(w, h) * 0.15), sub, fill=fg, font=f2)

    os.makedirs(os.path.dirname(path), exist_ok=True)
    img.save(path, "JPEG", quality=78, optimize=True, progressive=True)


def main():
    make(os.path.join(ROOT, "profil", "vesikalik.jpg"), 600, 800, "vesikalık", "kendi fotoğrafını koy", 3)

    for i in range(1, 13):
        portrait = i % 3 == 0
        w, h = (900, 1200) if portrait else (1200, 900)
        make(os.path.join(ROOT, "galeri", f"galeri-{i:02d}.jpg"), w, h, f"foto {i:02d}", "img/galeri/galeri-%02d.jpg" % i, 10 + i)

    for i in range(1, 9):
        make(os.path.join(ROOT, "projeler", f"ga-{i:02d}.jpg"), 1200, 900, f"GA çalışma {i:02d}", "Grafik Animasyon 1", 40 + i)

    print("Yer tutucular üretildi:", os.path.abspath(ROOT))


if __name__ == "__main__":
    main()

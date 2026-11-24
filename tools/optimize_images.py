"""Fotoğrafları web için hazırlar (hızlı açılış için).

Kendi fotoğraflarını img/ altına AYNI dosya adıyla koyduktan sonra çalıştır:
    python tools/optimize_images.py

Her fotoğrafa yapılanlar:
  - telefonun döndürme bilgisi uygulanır (yan çıkmaz)
  - sitedeki yerine göre doğru en-boy oranına ORTADAN kırpılır (tasarım bozulmaz)
  - doğru boyuta küçültülür (4000px telefon fotoğrafı → 1600px)
  - konum/kamera bilgileri (EXIF) silinir
  - kalite 80, progressive JPEG (WebP blog görselleri WebP kalır)
Zaten uygun olan dosyalara dokunmaz. Orijinaller img/_orijinal/ klasörüne yedeklenir.
"""
import os
import shutil

from PIL import Image, ImageOps

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "img"))
BACKUP = os.path.join(ROOT, "_orijinal")

# klasör → (hedef genişlik, hedef yükseklik) ; None = oranı koru, sadece küçült
RULES = {
    "profil": {"vesikalik.jpg": (600, 800)},
    "galeri": {f"galeri-{i:02d}.jpg": ((900, 1200) if i % 3 == 0 else (1200, 900)) for i in range(1, 13)},
    "projeler": {f"ga-{i:02d}.jpg": (1200, 900) for i in range(1, 9)},
}
MAX_SIDE_DEFAULT = 1400  # kuralı olmayan görseller (ör. blog)
QUALITY = 80


def fit(img, size):
    if size is None:
        img.thumbnail((MAX_SIDE_DEFAULT, MAX_SIDE_DEFAULT), Image.LANCZOS)
        return img
    return ImageOps.fit(img, size, Image.LANCZOS, centering=(0.5, 0.45))


def process(path, size):
    before = os.path.getsize(path)
    with Image.open(path) as im:
        im = ImageOps.exif_transpose(im)
        small = before < 260 * 1024 and not im.info.get("exif")
        if size:
            already = small and im.size == size
        else:
            already = small and max(im.size) <= MAX_SIDE_DEFAULT
        if already:
            return None
        rel = os.path.relpath(path, ROOT)
        bk = os.path.join(BACKUP, rel)
        if not os.path.exists(bk):
            os.makedirs(os.path.dirname(bk), exist_ok=True)
            shutil.copy2(path, bk)
        out = fit(im.convert("RGB"), size)
        ext = os.path.splitext(path)[1].lower()
        if ext == ".webp":
            out.save(path, "WEBP", quality=QUALITY, method=6)
        else:
            out.save(path, "JPEG", quality=QUALITY, optimize=True, progressive=True)
    return before, os.path.getsize(path)


def main():
    total_b = total_a = 0
    for folder in sorted(os.listdir(ROOT)):
        d = os.path.join(ROOT, folder)
        if not os.path.isdir(d) or folder.startswith("_"):
            continue
        rules = RULES.get(folder, {})
        for f in sorted(os.listdir(d)):
            if os.path.splitext(f)[1].lower() not in (".jpg", ".jpeg", ".png", ".webp"):
                continue
            r = process(os.path.join(d, f), rules.get(f))
            if r:
                b, a = r
                total_b += b
                total_a += a
                print(f"  {folder}/{f}: {b // 1024} KB -> {a // 1024} KB")
    if total_b:
        print(f"Toplam: {total_b // 1024} KB -> {total_a // 1024} KB (orijinaller: img/_orijinal/)")
    else:
        print("Tüm görseller zaten uygun.")


if __name__ == "__main__":
    main()

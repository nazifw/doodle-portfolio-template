"""Teslim dosyasını üretir:  ÖğrenciNo-WEB.zip  →  ÖğrenciNo-WEB.PDF

Şartname: "Proje dosyanızı ZIP olarak kaydettikten sonra uzantısını Öğrenci_No-WEB.PDF
olarak değiştiriniz. Boyut 300MB'ı geçmemelidir."

Kullanım:
    python tools/teslim.py 123456789            (admin paneli DAHİL)
    python tools/teslim.py 123456789 --admin-yok (admin.html ve dosyaları HARİÇ)

Çıktı proje klasörünün bir üstüne yazılır (proje klasörü kirlenmez).
"""
import os
import sys
import zipfile

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
SKIP_DIRS = {".git", "node_modules", "__pycache__", ".claude", ".agents", "_orijinal", "template-assets"}
SKIP_FILES = {".DS_Store", "Thumbs.db"}
LIMIT_MB = 300


def main():
    if len(sys.argv) < 2 or not sys.argv[1].strip():
        print(__doc__)
        sys.exit(1)
    no = sys.argv[1].strip()
    no_admin = "--admin-yok" in sys.argv
    admin_files = {"admin.html", os.path.join("css", "pages", "admin.css"), os.path.join("js", "pages", "admin.js")}

    out_zip = os.path.join(os.path.dirname(ROOT), f"{no}-WEB.zip")
    out_pdf = out_zip[:-4] + ".PDF"
    count = 0
    with zipfile.ZipFile(out_zip, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as z:
        for base, dirs, files in os.walk(ROOT):
            dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
            for f in files:
                if f in SKIP_FILES:
                    continue
                full = os.path.join(base, f)
                rel = os.path.relpath(full, ROOT)
                if no_admin and rel in admin_files:
                    continue
                z.write(full, os.path.join(f"{no}-WEB", rel))
                count += 1

    if os.path.exists(out_pdf):
        os.remove(out_pdf)
    os.replace(out_zip, out_pdf)
    size = os.path.getsize(out_pdf) / (1024 * 1024)
    print(f"{count} dosya -> {out_pdf}  ({size:.1f} MB)")
    if size > LIMIT_MB:
        print(f"UYARI: {LIMIT_MB} MB sınırı aşıldı! Görselleri küçültün.")


if __name__ == "__main__":
    main()

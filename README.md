# Doodle Portföy Şablonu

Eskiz defteri (doodle) temalı, çok sayfalı, TR/EN iki dilli kişisel web sitesi şablonu.
Saf HTML5 + CSS3 + JavaScript (GSAP, Lenis yerel olarak dahil). Build gerekmez: `index.html`'i açın.

## Özellikler
- 6 sayfa: Ana sayfa, Hakkımda, Projeler, Blog (+3 yazı), Galeri, İletişim (+ tarayıcıda çalışan Admin paneli)
- Açık (beyaz defter) / koyu (siyah defter) tema, TR/EN düğmesi
- Kaydırmaya bağlı çizim animasyonları, "juice" etkileşimleri, kalem imleç
- SEO/GEO: sayfa başına title/description, JSON-LD, sitemap.xml, robots.txt, llms.txt

## Kişiselleştirme
1. Metinlerdeki "Ad Soyad", "ornek@mail.com" vb. değerleri değiştirin (veya admin.html → Profil).
2. Fotoğrafları aynı adlarla değiştirin: `img/profil/vesikalik.jpg`, `img/galeri/galeri-01..12.jpg`, `img/projeler/ga-01..08.jpg`.
3. `sitemap.xml` ve `robots.txt` içindeki alan adını güncelleyin.
4. Tasarım sistemi: `DESIGN.md`. Ortak iskelet: `python tools/shell.py *.html`.

Admin paneli varsayılan şifresi: `vize2026` (Ayarlar'dan değiştirin; demo amaçlıdır, gerçek güvenlik sağlamaz).

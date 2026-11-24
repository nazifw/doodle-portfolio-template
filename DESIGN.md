# Doodle Portföy — Tasarım Sistemi & Ajan Kılavuzu

Konsept: **"Saha defteri / eskiz defteri."** Ürün bağlamı ve şartname: **PRODUCT.md** (önce onu oku). Açık tema = **beyaz defter + siyah mürekkep**; koyu tema = **siyah defter + beyaz mürekkep**. Vurgular **haki · kum · pas**. Her şey elle çizilmiş: titreyen çizgiler, post-it, bant, fosforlu kalem, karalama oklar. Kaydırdıkça çizimler kendini çiziyor, harfler zıplıyor; her tıklama/hover fiziksel tepki veriyor (**juice**).

Hedef his: "kaydırdıkça vay be". Basit kart grid'i YASAK. Her bölümde en az bir sürpriz hareket olmalı.

## Teknik çerçeve (DEĞİŞMEZ)
- Saf HTML + CSS + JS. Build yok. `file://` ile çift tıklayınca çalışmalı (ES module/`fetch` kullanma, CORS'a takılır).
- Kütüphaneler yerelde: `js/vendor/gsap.min.js`, `js/vendor/ScrollTrigger.min.js`, `js/vendor/lenis.min.js` (GSAP 3.13, Lenis 1.3). Başka kütüphane EKLEME.
- Fontlar yerelde: `css/fonts.css` → `var(--font-hand)` (Caveat, başlıklar) ve `var(--font-body)` (Kalam, metin). Türkçe karakter destekli.
- Ortak dosyalar: `css/core.css`, `js/core.js` — **bunları DÜZENLEME.** İhtiyacın olan her şeyi sayfa dosyana yaz.
- Sayfa dosyaları: `css/pages/<sayfa>.css`, `js/pages/<sayfa>.js`. Sayfaya özel class'ları sayfa önekiyle adlandır (`.home-…`, `.about-…`, `.work-…`, `.blog-…`, `.gallery-…`, `.contact-…`, `.admin-…`) ki çakışma olmasın.
- Metinler Türkçe (HTML) + İngilizce (sözlük) — bkz. İKİ DİL. Kişi: **Ad Soyad**, `ornek@mail.com`; yer tutucu bilgiler PRODUCT.md'de. Rol: Bilgisayar Mühendisliği öğrencisi / frontend geliştirici.
- Görseller: `img/profil/vesikalik.jpg`, `img/galeri/galeri-01..12.jpg` (3,6,9,12 dikey 900x1200; diğerleri 1200x900), `img/projeler/ga-01..08.jpg` (1200x900). Yer tutucu JPG'ler `tools/placeholders.py` ile üretildi; kullanıcı aynı adla değiştirecek → dosya adlarını DEĞİŞTİRME.

## Renkler (core.css `:root`) — eski ADLAR, YENİ değerler
| token | değer (açık / koyu) | anlam |
|---|---|---|
| `--paper` | #fbfaf6 / #121311 | defter zemini |
| `--ink` | #161714 / #f2f0ea | mürekkep (metin) |
| `--pink` = `--accent` | #c4501f / #e07a4a | **pas — ana vurgu** |
| `--yellow` = `--sand` | #d4a84f / #e2c27c | kum/okra — fosforlu kalem, butonlar |
| `--blue` = `--khaki` | #6b7a3a / #a9b47a | haki — ikincil vurgu |
| `--green` = `--olive` | #7d8f4e / #b3c084 | zeytin — başarı/onay |
| `--orange` | #d9622b / #e89a6a | açık pas |
| `--purple` | #6e7b83 / #a3aeb5 | çelik |
| `--sticky` | #e9dcb5 / #2b2c25 | post-it |
Fiziksel kağıt (post-it, polaroid) rengi: kum #e9dcb5, pas tonu #e8c4ad, haki tonu #cfd3bd, zeytin tonu #d5d9b8 — iki temada da açık kalır, üstündeki metin `#161714`. **Pastel pembe/mor/mavi kullanma.** Renkleri hep değişkenle yaz.

## Tokenlar (core.css `:root`)
`--paper --paper-2 --ink --ink-soft --ink-faint --yellow --pink --blue --green --orange --purple --sticky`
`--font-hand --font-body --stroke(2.5px) --wobble --wobble-2 --wobble-3 (eğri border-radius) --shadow-hard --shadow-hard-sm --ease-out --ease-bounce --nav-h`
Renkleri hep değişkenle kullan → koyu temada otomatik tebeşire döner. Post-it/polaroid gibi "fiziksel kağıt" objeleri iki temada da açık renk kalır; üstlerindeki metin `#1f1d36`.

## Hazır bileşen class'ları (core.css)
| Class | Ne |
|---|---|
| `.container`, `.section` | genişlik / dikey boşluk |
| `.section-head` (+`.center`) içinde `.eyebrow` + `h2` | bölüm başlığı kalıbı |
| `.sketch-box` (`.alt`, `.alt-2`, `.hoverable`) | elle çizilmiş kutu, sert gölge |
| `.sticky` (`.yellow .pink .blue .green .orange .purple`, `style="--r:3deg"`) | post-it |
| `.tape`, `.pin` | bant / raptiye (kapsayıcı `position:relative`) |
| `.polaroid` + `.caption` | polaroid fotoğraf |
| `.marker` (`.pink .blue .green .orange`) | fosforlu kalem; görünürken kendini boyar |
| `.scribble-u` (`data-color`) | altını karalayarak çizer |
| `.scribble-circle` (`data-color`) | etrafına daire çizer |
| `.doodle` + `data-doodle="star"` + `style="--size:60px;--c:var(--pink);--sw:3"` (`.filled`) | doodle ikonu |
| `.float-doodle` | absolute dekor |
| `.boil` / `.boil-strong` | "kaynayan çizgi" titreşimi (SVG filtresi). PAHALI: sayfada en fazla ~10 küçük öğede kullan, büyük alanlara/metne koyma |
| `.hand-note` | pembe el yazısı not |
| `.chip` (`.fill-yellow` vb.) | etiket |
| `.btn` (`.pink .blue .green .ghost`) | buton; `data-magnetic` ekle |
| `.sr-only` | ekran okuyucu metni |

Doodle ikon adları: `star sparkle heart arrow arrow-down arrow-curly spiral squiggle zigzag cloud lightning sun moon flower crown smiley pencil plane circle underline x check asterisk eye code mail phone map-pin music coffee bulb rocket globe github linkedin instagram tape hash blob loop`

## Bildirimsel animasyon attribute'ları (core.js otomatik bağlar)
- `data-reveal="up|down|left|right|pop|rotate|fade|stamp"` + `data-delay="0.2"` (+ `data-rotate="-3"` bitiş açısı). **Önemli:** animasyon bitince satır içi transform silinir; yani elemanın kendi CSS transform'u (ör. `.sticky` eğimi) sonra geri gelir. Kendi transform'u olan öğeleri bir sarmalayıcıya koyup `data-reveal`'ı sarmalayıcıya ver.
- `data-split` → metin harf harf zıplayarak yazılır (iç span'ları korur).
- `data-draw` → içindeki SVG şekilleri kendini çizer; `data-draw="scrub"` kaydırmaya bağlı (opsiyonel `data-start`, `data-end`).
- `data-parallax="0.3"` → paralaks (yPercent). Kendi transform'u olan öğeye verme.
- `data-magnetic="0.35"` → imlece yapışan buton.
- `data-year` → yıl.

## İKİ DİL (TR/EN) — ZORUNLU
HTML'deki metin **Türkçe**. İngilizcesi sözlükte. Nav'daki **EN/TR** düğmesi anında değiştirir (localStorage'da kalır).
```html
<h2 data-i18n="about.cv.title">Özgeçmiş</h2>
<p data-i18n="about.cv.lead">Merhaba, ben <span class="marker">Ad</span>…</p>   <!-- innerHTML değişir, iç etiketler serbest -->
<input placeholder="Adın" data-i18n-attr="placeholder:contact.form.namePh;aria-label:contact.form.name">
<title data-i18n="about.meta.title">Hakkımda | Ad Soyad</title>
<meta name="description" content="…TR…" data-i18n-attr="content:about.meta.desc">
<img alt="…TR…" data-i18n-attr="alt:about.photo.alt">
```
```js
// sayfa JS dosyasının EN ÜSTÜNDE (senkron, onReady'den önce):
Doodle.i18n.add({ "about.cv.title": "Résumé", "about.cv.lead": "Hi, I'm <span class=\"marker\">Ad</span>…" });
// JS ile üretilen metin:
Doodle.t("work.filter.all", "Tümü");
document.addEventListener("doodle:lang", (e) => rerender(e.detail)); // "tr" | "en"
```
- **Kapsam:** sayfadaki görünür HER metin + title + meta description + alt + aria-label + placeholder + form hata mesajları. `data-split` başlıkları da çalışır (dil değişince yeniden bölünür).
- `data-i18n` öğesinin içine başka `data-i18n` koyma (iç içe çeviri yok).
- `<body data-page-name="hakkımda" data-page-name-en="about">` (perde yazısı).
- Ortak anahtarlar core.js'de var: `nav.*`, `footer.*`, `a11y.skip`.

## JUICE (core.js otomatik + API)
- Otomatik: `.btn`, `.icon-btn`, `[data-juice]` → basınca ezilip yaylanır + parçacık; `.btn` hover'da kıpırdar; boş kağıda tıklayınca mürekkep lekesi. Özel bir öğeye eklemek için `data-juice`.
- API: `Doodle.juice.burst(x, y, {count, power, colors})`, `.squash(el, power)`, `.wiggle(el)`, `.shake(el, power)` (form hatası vb.).
- İmleç: kalem + hedefi saran pas renkli karalama çerçeve. Tıklanabilir özel öğelere `data-cursor="hover"` ver. İmleç JS'ine dokunma.
- `data-juice` verilen öğenin kendi CSS `transform`'u squash sırasında ezilir → eğik post-it gibi öğelerde içteki sarmalayıcıya ver.

## İÇERİK BAĞLAMA (admin paneli sözleşmesi)
Admin panelinden düzenlenebilen kişisel bilgiler `localStorage["doodle-content"]` içinde. Sayfada bu bilgileri gösterirken işaretle:
```html
<span data-bind="name">Ad Soyad</span>
<a href="mailto:ornek@mail.com" data-bind="email" data-bind-href="mailto:{email}">ornek@mail.com</a>
<a href="tel:+905000000000" data-bind="phone" data-bind-href="tel:{phone}">+90 500 000 00 00</a>
<span data-bind="address">Örnek Mah. Defter Sok. No:7, Kadıköy / İstanbul</span>
```
Anahtarlar: `name, title, email, phone, address, city, university, department, github, linkedin, instagram`. `data-bind` olan öğeye `data-i18n` verme. İletişim formu gönderilince: `Doodle.content.saveMessage({ name, email, subject, message })` → admin panelinde görünür.

## JS API — `window.Doodle`
```js
Doodle.onReady((D) => { /* açılış perdesi kalkınca çalışır: hero giriş animasyonlarını BURADA başlat */ });
Doodle.gsap, Doodle.ScrollTrigger, Doodle.lenis (null olabilir)
Doodle.reducedMotion   // true ise animasyonsuz, son hali göster
Doodle.finePointer     // masaüstü fare var mı
Doodle.icon("star")    // SVG string
Doodle.hydrate(el)     // sonradan eklenen [data-doodle]/.scribble-* öğeleri işle
Doodle.split(el)       // harflere böl → NodeList<.split-char>
Doodle.draw(svgOrPath, {duration, stagger, delay}) // tween döner
Doodle.prepDraw(svg)   // çizime hazırla (dashoffset 1), şekil dizisi döner
Doodle.random(a, b)
document 'doodle:theme' olayı (detail: "dark"|"light")
```
Sayfa scriptini IIFE içine yaz, `"use strict"`. ScrollTrigger'ları `Doodle.onReady` içinde kur. Pin/yatay kaydırma kullanıyorsan `ScrollTrigger.matchMedia` / `gsap.matchMedia()` ile mobilde (<768px) sadeleştir. `Doodle.reducedMotion` true ise tüm efektleri atla, içerik görünür olsun.

## Sayfa iskeleti (ortak head betiği, nav, mobil menü, footer)
Ortak parçalar **`tools/shell.py`** tarafından üretilir (6 sayfalık nav + EN/TR + tema düğmesi + admin linki). Yeni sayfa yapmak için:
1. Mevcut bir sayfayı (ör. `projeler.html`) kopyala; `<head>`'de title/description/sayfa CSS'ini, `<body data-page-name=".." data-page-name-en="..">`'yi ve `<main>` içini değiştir, en alttaki sayfa JS yolunu değiştir.
2. `python tools/shell.py yeni-sayfa.html` çalıştır (nav/footer'ı günceller). Nav/footer'ı ELLE düzenleme.
Script sırası (değişmez): `gsap.min.js`, `ScrollTrigger.min.js`, `lenis.min.js`, `core.js`, `pages/<sayfa>.js`.
Sayfalar: `index.html, hakkimda.html, projeler.html, blog.html, galeri.html, iletisim.html` (+ blog yazı sayfaları, `admin.html`).

## Impeccable (tasarım skill'i)
`~/.claude/skills/impeccable/` kurulu. **Launcher/scriptlerini ÇALIŞTIRMA** (ikili dosya indiriyor). Onun yerine referansları oku ve uygula: `reference/craft-floor.md` (UI düzenlemeden ÖNCE zorunlu), ayrıca işine göre `reference/delight.md`, `animate.md`, `overdrive.md`, `layout.md`, `typeset.md`, `adapt.md`, `audit.md`, `polish.md`. Bitirmeden önce `audit.md` + `polish.md` kontrol listesiyle kendi sayfanı denetle.

## Performans kuralları
- Kritik fontlar her sayfada `<link rel="preload">` ile yüklenir (Caveat + Kalam 400, latin + latin-ext). Yeni sayfada `<head>`'deki 4 preload satırını koru.
- `data-reveal` / `data-split` / `data-draw` / `.marker` animasyonları **tembel** kurulur: açılışta yalnızca tetikleyici, animasyon öğe ekrana girince. Sayfa JS'inde de ağır tween'leri mümkünse aynı şekilde `onEnter` içinde kur.
- Gizli pencere/lightbox `<img>`'lerine HTML'de `src` verme; açılırken JS atasın.
- Fotoğraflar: kendi fotoğrafını koyduktan sonra `python tools/optimize_images.py` (boyut + oran + EXIF temizliği; orijinaller `img/_orijinal/`, teslime girmez).
- İlk ekrandaki ana görsele `fetchpriority="high"`, diğerlerine `loading="lazy" decoding="async"` + `width/height`.

## Kalite çıtası
- **Tek `<h1>`**, birden çok `<h2>`; başlık seviyesi atlamadan iner.
- Görseller: `loading="lazy"` (ilk ekrandaki hariç), `decoding="async"`, `width`/`height` öznitelikleri (CLS yok), anlamlı `alt` (TR + EN).
- SEO/GEO: sayfana uygun JSON-LD (`<script type="application/ld+json">`) — Person / WebPage / Blog / BlogPosting / ImageGallery / ContactPage; `<link rel="canonical">` YOK (domain belli değil). Open Graph `og:title/og:description/og:type/og:image` (görsel yolu göreli olabilir).
- Responsive: 360px, 768px, 1280px+ hepsinde kusursuz. Yatay taşma (overflow-x) OLMAYACAK.
- Erişilebilirlik: semantik etiketler, tek `h1`, alt metinler, dekoratif SVG'lere `aria-hidden`, klavye ile her şey kullanılabilir, odak görünür.
- Performans: sadece `transform`/`opacity` animasyonu; scroll'da layout okuma yok; `.boil` sınırlı; resim yok veya SVG.
- `Doodle.reducedMotion` → animasyonsuz ama tamamen kullanılabilir.
- Konsolda hata yok.

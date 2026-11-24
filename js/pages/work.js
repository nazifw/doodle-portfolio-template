/* =========================================================
   PROJELER — "Grafik Animasyon masası"
   Hero: harflerin üstünde zıplayan top + klaket
   Pano: FLIP filtre, onion-skin hayaletli kartlar, karttan açılan modal
   Flipbook: kaydırdıkça çevrilen 16 kare (odak anı)
   Yığılan sahneler, sürüklenebilir fikir notları, kod projeleri, CTA
   ========================================================= */
(function () {
  "use strict";

  const D = window.Doodle;
  if (!D) return;

  /* ---------------------------------------------------------
     VERİ (tek kaynak: tools dışı üretici; HTML'deki statik kartlarla aynı)
     --------------------------------------------------------- */
  const WORKS = [{"id":"ga-01","key":"ga01","cat":"karakter","tool":"Adobe Animate","sec":4,"fps":24,"loop":false,"r":-2.4,"tr":{"title":"Zıplayan Top","long":"Dersin ilk ödevi ve 12 animasyon prensibine giriş kapım. Topun yolunu önce kâğıda bir yay olarak çizdim, temas ve tepe noktalarını anahtar kare yaptım. Yere değdiği karede eziliyor (squash), düşerken esniyor (stretch); tepede kareler sıklaşıyor, yere yaklaştıkça açılıyor. Onion skin sayesinde aralıkları gözle kontrol ettim. Üç farklı top denedim: lastik, bowling ve pinpon. Aynı yol, bambaşka ağırlık.","tags":["squash & stretch","zamanlama","yay (arc)","ease in/out","onion skin"],"steps":["Yayı ve anahtar kareleri kâğıda çizmek","Temas karesinde squash, düşüşte stretch","Onion skin ile aralıkları (spacing) düzeltmek"],"alt":"Zıplayan Top çalışmasından bir kare: ezilip esneyen top ve hareket yayı","short":"Ağırlığı olan bir top: ezilip esneyerek zıplıyor, her sekişte biraz daha yoruluyor."},"en":{"title":"Bouncing Ball","short":"A ball with real weight: it squashes, stretches and loses a little energy with every bounce.","long":"The first assignment of the course and my doorway to the 12 principles of animation. I sketched the ball's path as an arc on paper, then made the contact and apex points my keyframes. It squashes on the frame it hits the ground and stretches as it falls; the frames bunch up at the top and spread out near the floor. Onion skinning let me check the spacing by eye. I tried three balls: rubber, bowling and ping-pong. Same path, completely different weight.","tags":["squash & stretch","timing","arc","ease in/out","onion skin"],"steps":["Sketching the arc and keyframes on paper","Squash on contact, stretch on the fall","Fixing the spacing with onion skin"],"alt":"A frame from the Bouncing Ball piece: a squashing, stretching ball and its motion arc"}},{"id":"ga-02","key":"ga02","cat":"tipografi","tool":"After Effects","sec":15,"fps":30,"loop":false,"r":1.8,"tr":{"title":"Kinetik Tipografi","long":"Bir şarkının ilk 15 saniyesini sesin dalga formuna bakarak kare kare işaretledim; her vurguya bir kelime hareketi denk geliyor. After Effects'te text animator ile harf harf ölçek ve dönüş verdim, graph editor'da eğrileri sertleştirip kelimelere çarpma hissi kattım. Geçişlerde maske kullandım: kelimeler birbirinin içinden çıkıyor.","tags":["anahtar kare","easing","text animator","maske","motion blur"],"steps":["Sesi dalga formundan kare kare işaretlemek","Text animator ile harf harf hareket","Graph editor'da eğrileri sertleştirmek"],"alt":"Kinetik Tipografi çalışmasından bir kare: ritimle hareket eden şarkı sözü kelimeleri","short":"Sevdiğim bir şarkı sözünün kelimeleri ritme göre zıplıyor, dönüyor, ekrandan kaçıyor."},"en":{"title":"Kinetic Typography","short":"The words of a lyric I love jump, spin and run off the screen to the beat.","long":"I marked the first 15 seconds of a song frame by frame using its waveform, so every accent lands on a word movement. In After Effects I used text animators for per-letter scale and rotation, then sharpened the curves in the graph editor to give the words a punchy hit. The transitions use masks: words emerge from inside one another.","tags":["keyframes","easing","text animator","mask","motion blur"],"steps":["Marking the audio frame by frame from its waveform","Per-letter motion with text animators","Sharpening curves in the graph editor"],"alt":"A frame from Kinetic Typography: lyric words moving to the beat"}},{"id":"ga-03","key":"ga03","cat":"tipografi","tool":"After Effects + Illustrator","sec":5,"fps":30,"loop":false,"r":-1.3,"tr":{"title":"Logo Animasyonu","long":"NH monogramını önce Illustrator'da vektör olarak çizdim, katmanlara ayırıp After Effects'e aktardım. Trim paths ile çizgiler kalemle çiziliyormuş gibi beliriyor; son karelerde harfler hedefin biraz ötesine geçip geri dönüyor (overshoot). Beş saniyede bitiyor çünkü logo animasyonu kısa olmalı. Bunu üç uzun denemeden sonra öğrendim.","tags":["shape layer","trim paths","overshoot","easing"],"steps":["Illustrator'da monogramı vektörlemek","Trim paths ile kendini çizen çizgiler","Overshoot ile yaylanan bitiş"],"alt":"Logo Animasyonu çalışmasından bir kare: kendini çizen NH monogramı","short":"Kendi monogramım: çizgiler kendini çiziyor, harfler yerine oturup hafifçe yaylanıyor."},"en":{"title":"Logo Animation","short":"My own monogram: the lines draw themselves and the letters settle in with a little spring.","long":"I first drew the NH monogram as vectors in Illustrator, split it into layers and brought it into After Effects. Trim paths make the lines appear as if drawn with a pen; in the last frames the letters overshoot their target slightly and settle back. It's over in five seconds, because a logo animation should be short. I learned that after three long attempts.","tags":["shape layers","trim paths","overshoot","easing"],"steps":["Vectorising the monogram in Illustrator","Self-drawing lines with trim paths","A springy finish with overshoot"],"alt":"A frame from Logo Animation: the self-drawing NH monogram"}},{"id":"ga-04","key":"ga04","cat":"karakter","tool":"Adobe Animate","sec":1,"fps":24,"loop":true,"r":2.6,"tr":{"title":"Yürüyüş Döngüsü","long":"Karakter animasyonunun alfabesi. Önce dört ana pozu (temas, çöküş, geçiş, yükseliş) çizdim, ara kareleri onion skin açıkken tamamladım. Kollar ve şapka gövdeden birkaç kare geç hareket ediyor (follow-through), böylece yürüyüş robot gibi durmuyor. Son kare ilk kareye kusursuz bağlanıyor: 24 kare, sonsuz döngü.","tags":["walk cycle","ana pozlar","onion skin","follow-through"],"steps":["Dört ana pozu çizmek","Ara kareleri onion skin ile tamamlamak","Follow-through ile kol ve şapka gecikmesi"],"alt":"Yürüyüş Döngüsü çalışmasından bir kare: karakterin ana pozları","short":"Basit bir karakterin kusursuz dönen bir saniyelik yürüyüşü: temas, çöküş, geçiş, yükseliş."},"en":{"title":"Walk Cycle","short":"A simple character's seamless one-second walk: contact, down, passing, up.","long":"The alphabet of character animation. I drew the four key poses first (contact, down, passing, up), then filled in the in-betweens with onion skin turned on. The arms and the hat move a few frames behind the body (follow-through), so the walk doesn't look robotic. The last frame connects seamlessly to the first: 24 frames, an endless loop.","tags":["walk cycle","key poses","onion skin","follow-through"],"steps":["Drawing the four key poses","Filling the in-betweens with onion skin","Arm and hat lag with follow-through"],"alt":"A frame from Walk Cycle: the character's key poses"}},{"id":"ga-05","key":"ga05","cat":"sahne","tool":"After Effects + Illustrator","sec":10,"fps":24,"loop":false,"r":-2,"tr":{"title":"Paralaks Sahne","long":"Ormanı Illustrator'da yedi ayrı katman olarak çizdim: gökyüzü, uzak dağlar, iki sıra ağaç, sis, çalılar ve en önde yapraklar. After Effects'te katmanları 3D yapıp z ekseninde aralıkladım; kamera ilerledikçe yakın katmanlar hızlı, uzaktakiler yavaş geçiyor. Sis katmanına hafif bir opaklık dalgası verip derinliği artırdım.","tags":["3D katman","kamera","paralaks","ease-in-out"],"steps":["Sahneyi yedi katmana ayırmak","3D katmanları z ekseninde dizmek","Kamera hareketine ease-in-out vermek"],"alt":"Paralaks Sahne çalışmasından bir kare: katman katman çizilmiş orman","short":"Katman katman çizilmiş bir orman; kamera içinden süzülürken önü hızlı, arkası yavaş kayıyor."},"en":{"title":"Parallax Scene","short":"A forest drawn in layers; as the camera glides through, the front slides fast and the back slowly.","long":"I drew the forest in Illustrator as seven separate layers: sky, distant mountains, two rows of trees, fog, bushes and leaves in the foreground. In After Effects I made them 3D and spaced them along the z axis; as the camera moves forward, near layers pass quickly and far ones slowly. A gentle opacity wave on the fog adds depth.","tags":["3D layers","camera","parallax","ease-in-out"],"steps":["Splitting the scene into seven layers","Spacing 3D layers along the z axis","Easing the camera move in and out"],"alt":"A frame from Parallax Scene: a forest drawn in layers"}},{"id":"ga-06","key":"ga06","cat":"hareketli","tool":"Adobe Animate","sec":6,"fps":24,"loop":false,"r":1.4,"tr":{"title":"Morphing İkonlar","long":"Arayüzlerde gördüğüm küçük dönüşümleri kendim yapmak istedim. Animate'te shape tween ile altı ikon çifti hazırladım. Şekiller ilk denemede birbirine dolanıp eriyordu; shape hint noktalarıyla hangi köşenin nereye gideceğini söyleyince geçişler temizlendi. Her dönüşüme kısa bir ease-out verdim ki tıklanmış hissi versin.","tags":["shape tween","shape hint","easing","döngü"],"steps":["Altı ikon çiftini aynı ızgarada çizmek","Shape tween + shape hint ile temiz geçiş","Kısa ease-out ile tıklama hissi"],"alt":"Morphing İkonlar çalışmasından bir kare: birbirine dönüşen oynat ve duraklat ikonları","short":"Oynat → duraklat, menü → çarpı: arayüz ikonları birbirine akışkan biçimde dönüşüyor."},"en":{"title":"Morphing Icons","short":"Play → pause, menu → close: interface icons flow into one another.","long":"I wanted to recreate the small transformations I see in interfaces. In Animate I built six icon pairs with shape tweens. On the first try the shapes tangled and melted into each other; once shape hints told each corner where to go, the transitions came out clean. Each morph got a short ease-out so it feels like a click.","tags":["shape tween","shape hints","easing","loop"],"steps":["Drawing six icon pairs on the same grid","Clean transitions with shape tweens and hints","A click-like feel with a short ease-out"],"alt":"A frame from Morphing Icons: play and pause icons turning into each other"}},{"id":"ga-07","key":"ga07","cat":"sahne","tool":"Illustrator + Animate","sec":40,"fps":12,"loop":false,"r":-1.6,"tr":{"title":"Storyboard: Kayıp Kalem","long":"Bir dakikalık bir kısa film fikrini 18 panelde anlattım: geniş plan, yakın çekim, omuz üstü ve kuş bakışı açılarla. Paneller önce kurşun kalemle, sonra Illustrator'da temize çizildi. Animate'te panelleri sesle birlikte zamanlayıp 40 saniyelik kaba bir animatik çıkardım; hikâyenin nerede yavaşladığını izleyerek gördüm.","tags":["storyboard","kamera açıları","animatik","zamanlama"],"steps":["Hikâyeyi 18 panele bölmek","Kamera açılarını çeşitlendirmek","Sesle zamanlanmış animatik"],"alt":"Storyboard: Kayıp Kalem çalışmasından panellerle dolu bir sayfa","short":"Masasındaki kalemi kaybolan bir öğrencinin 18 panellik hikâyesi ve kaba animatiği."},"en":{"title":"Storyboard: The Lost Pencil","short":"An 18-panel story about a student whose pencil vanishes from the desk, plus a rough animatic.","long":"I told a one-minute short film idea in 18 panels, using wide, close-up, over-the-shoulder and bird's-eye shots. The panels were sketched in pencil first, then cleaned up in Illustrator. In Animate I timed them to sound and produced a 40-second rough animatic, which showed me exactly where the story dragged.","tags":["storyboard","camera angles","animatic","timing"],"steps":["Breaking the story into 18 panels","Varying the camera angles","An animatic timed to sound"],"alt":"A page of panels from Storyboard: The Lost Pencil"}},{"id":"ga-08","key":"ga08","cat":"hareketli","tool":"After Effects + Illustrator","sec":8,"fps":24,"loop":true,"r":2.2,"tr":{"title":"Hareketli Poster","long":"Statik bir afişi Illustrator'da tasarlayıp After Effects'te canlandırdım. Hoparlör şekilleri ritimle titreşiyor, başlık bir maskenin içinden kayarak beliriyor, arka plandaki çizgiler sonsuz döngüde akıyor. Katman ebeveynliği (parenting) ile küçük parçaları ana şekillere bağladım; döngünün ilk ve son karesi birebir aynı, dikiş yeri görünmüyor.","tags":["döngü","maske","parenting","easing"],"steps":["Afişi animasyona uygun katmanlarla tasarlamak","Maskenin içinden kayarak gelen başlık","Dikişsiz sekiz saniyelik döngü"],"alt":"Hareketli Poster çalışmasından bir kare: kampüs konseri afişi","short":"Bir kampüs konseri afişi: yazılar ve şekiller sekiz saniyelik bir döngüde nefes alıyor."},"en":{"title":"Motion Poster","short":"A campus concert poster: type and shapes breathe in an eight-second loop.","long":"I designed a static poster in Illustrator and brought it to life in After Effects. The speaker shapes pulse to the beat, the title slides in through a mask and the background lines flow in an endless loop. Parenting ties the small pieces to the main shapes; the loop's first and last frames are identical, so there's no visible seam.","tags":["loop","mask","parenting","easing"],"steps":["Designing the poster in animation-ready layers","A title sliding in through a mask","A seamless eight-second loop"],"alt":"A frame from Motion Poster: the campus concert poster"}}];
  const CATS = {"karakter":{"tr":"Karakter","en":"Character","chip":"#e8c4ad"},"tipografi":{"tr":"Tipografi","en":"Typography","chip":"#e9dcb5"},"hareketli":{"tr":"Hareketli Grafik","en":"Motion Graphics","chip":"#cfd3bd"},"sahne":{"tr":"Sahne","en":"Scene","chip":"#d5d9b8"}};
  const FRAMES = [{"x":40,"y":40,"sx":1,"sy":1,"h":198,"p":"ease","k":1,"c":0},{"x":61.3,"y":52.4,"sx":1,"sy":1,"h":185.6,"p":"arc","k":0,"c":0},{"x":82.7,"y":89.5,"sx":1,"sy":1,"h":148.5,"p":"arc","k":0,"c":0},{"x":104,"y":145.8,"sx":0.8,"sy":1.28,"h":86.6,"p":"stretch","k":0,"c":0},{"x":125.3,"y":246,"sx":1.42,"sy":0.6,"h":0,"p":"squash","k":1,"c":1},{"x":146.7,"y":169.2,"sx":0.86,"sy":1.16,"h":65.6,"p":"stretch","k":0,"c":0},{"x":168,"y":133.1,"sx":1,"sy":1,"h":104.9,"p":"arc","k":0,"c":0},{"x":189.3,"y":120,"sx":1,"sy":1,"h":118,"p":"ease","k":1,"c":0},{"x":210.7,"y":133.1,"sx":1,"sy":1,"h":104.9,"p":"arc","k":0,"c":0},{"x":232,"y":168.4,"sx":0.85,"sy":1.2,"h":65.6,"p":"stretch","k":0,"c":0},{"x":253.3,"y":243.6,"sx":1.3,"sy":0.72,"h":0,"p":"squash","k":1,"c":1},{"x":274.7,"y":189.5,"sx":0.9,"sy":1.1,"h":46.5,"p":"stretch","k":0,"c":0},{"x":296,"y":176,"sx":1,"sy":1,"h":62,"p":"ease","k":1,"c":0},{"x":317.3,"y":189.5,"sx":0.92,"sy":1.1,"h":46.5,"p":"stretch","k":0,"c":0},{"x":338.7,"y":241,"sx":1.16,"sy":0.85,"h":0,"p":"squash","k":1,"c":1},{"x":360,"y":217.5,"sx":0.95,"sy":1.05,"h":19.5,"p":"stretch","k":0,"c":0}];

  const BY = {};
  WORKS.forEach((w) => (BY[w.id] = w));

  /* ---------------------------------------------------------
     İKİ DİL — sözlük senkron yüklenir (onReady'den önce)
     --------------------------------------------------------- */
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const durText = (w, l) =>
    `${w.sec} ${l === "en" ? "s" : "sn"}${w.loop ? (l === "en" ? " loop" : " döngü") : ""} · ${w.fps} fps`;

  const EN = {
    "work.meta.title": "Projects: Graphic Animation Works | Ad Soyad",
    "work.meta.desc":
      "Ad Soyad's Graphic Animation 1 coursework: bouncing ball, kinetic typography, logo animation, walk cycle, parallax scene and more, with images and short descriptions.",
    "work.meta.og": "Eight pieces I drew and animated frame by frame in Graphic Animation 1.",
    "work.hero.title": "My Graphic Animation Projects",
    "work.hero.sub": "(drawn frame by frame)",
    "work.hero.lead":
      "<strong>Graphic Animation 1</strong>: the <span class=\"marker\">eight pieces</span> I made for the course, from a bouncing ball to kinetic typography, from a walk cycle to a parallax forest. I drew every one of them in my sketchbook first, then brought them to life in Adobe Animate, After Effects and Illustrator.",
    "work.hero.scrap1": "frame 1/24",
    "work.hero.scroll": "scroll down",
    "work.hero.scrollAria": "Jump to the board",
    "work.ball.aria": "Bounce the ball again",
    "work.slate.clap": "Snap the clapperboard",
    "work.slate.course": "Course",
    "work.slate.courseName": "Graphic Animation 1",
    "work.slate.works": "Works",
    "work.slate.tools": "Tools",
    "work.tape.a":
      "keyframe ✦ in-between ✦ onion skin ✦ easing ✦ squash &amp; stretch ✦ shape tween ✦ mask ✦ 24 fps ✦ keyframe ✦ in-between ✦ onion skin ✦ easing ✦ squash &amp; stretch ✦ shape tween ✦ mask ✦ 24 fps ✦ keyframe ✦ in-between ✦ onion skin ✦ easing ✦ squash &amp; stretch ✦ shape tween ✦ mask ✦ 24 fps ✦",
    "work.tape.b":
      "sketch ✦ animate ✦ watch ✦ fix ✦ replay ✦ render ✦ sketch ✦ animate ✦ watch ✦ fix ✦ replay ✦ render ✦ sketch ✦ animate ✦ watch ✦ fix ✦ replay ✦ render ✦ sketch ✦ animate ✦ watch ✦ fix ✦ replay ✦ render ✦",
    "work.board.title": "Works on the board",
    "work.board.note": "pick a tab, open a card",
    "work.board.lead":
      "Every card is an assignment: an image, a short description, the tool I used and the running time. Open a card to read the whole story behind it.",
    "work.filter.group": "Filter works by type",
    "work.grid.label": "Graphic animation works",
    "work.tagsLabel": "Techniques",
    "work.cat.all": "All",
    "work.flip.title": "Scroll and the flipbook comes alive",
    "work.flip.lead":
      "I drew the 16 frames of my <em>Bouncing Ball</em> assignment into a flipbook. As you scroll, the pages turn and the ball comes to life. <span class=\"work-flip__past\">The rust ghosts</span> are the previous frames, <span class=\"work-flip__next\">the khaki ones</span> are the next: exactly what onion skin does in Animate.",
    "work.flip.frame": "frame",
    "work.flip.time": "time",
    "work.flip.type": "type",
    "work.flip.principle": "principle",
    "work.flip.onion": "Onion skin",
    "work.flip.open": "Explore the piece",
    "work.flip.legend": "keyframe",
    "work.flip.strobe": "All 16 frames of the bouncing ball on top of each other: the ball squashes and stretches along its arc",
    "work.stack.title": "Close-up",
    "work.stack.hint": "Scroll: four scenes pile up like notebook pages.",
    "work.stack.scene": "scene",
    "work.stack.open": "Open details",
    "work.play.title": "Mess up the desk",
    "work.play.lead": "My next animation ideas. Grab the notes, drag them, fling them; they won't fall off the desk, promise.",
    "work.play.hint": "grab &amp; fling!",
    "work.play.tidy": "Tidy up",
    "work.play.scatter": "Scatter",
    "work.code.title": "And on the code side",
    "work.code.lead": "The other half of Computer Engineering: small web projects I built in class and after midnight.",
    "work.code.todo.t": "To-Do App",
    "work.code.todo.d": "Add, complete and delete tasks; everything stays in localStorage.",
    "work.code.weather.t": "Weather App",
    "work.code.weather.d": "Type a city and get the current weather plus a five-day forecast via the Fetch API.",
    "work.code.cafe.t": "Café Landing Page",
    "work.code.cafe.d": "Menu, gallery and a booking form; mobile-first.",
    "work.code.bank.t": "Mobile Banking UI",
    "work.code.bank.d": "From paper sketches to a clickable prototype in Figma.",
    "work.code.shop.t": "E-Commerce Demo",
    "work.code.shop.d": "Filters, search and a cart that survives a page refresh.",
    "work.code.site.t": "This site",
    "work.code.site.d": "A sketchbook portfolio drawn with plain HTML, CSS and JavaScript.",
    "work.cta.title": "Let's animate the next scene <span class=\"scribble-u\" data-color=\"var(--blue)\">together</span>",
    "work.cta.text": "Got an animation idea, looking for a teammate, or just want to ask \"how did you do that?\" My pencil is ready.",
    "work.cta.write": "Write to me",
    "work.cta.who": "Who am I?",
    "work.modal.close": "Close details",
    "work.modal.tech": "Techniques",
    "work.modal.process": "Process",
    "work.modal.prev": "Previous",
    "work.modal.next": "Next",
  };
  Object.keys(CATS).forEach((c) => (EN["work.cat." + c] = CATS[c].en));
  WORKS.forEach((w) => {
    const k = "work." + w.key + ".";
    EN[k + "title"] = esc(w.en.title);
    EN[k + "short"] = esc(w.en.short);
    EN[k + "long"] = esc(w.en.long);
    EN[k + "alt"] = w.en.alt;
    EN[k + "dur"] = durText(w, "en");
    EN[k + "tags"] = w.en.tags.map((t) => `<li>${esc(t)}</li>`).join("");
  });
  D.i18n.add(EN);

  // JS'in kendi ürettiği metinler
  const UI = {
    tr: {
      showAll: (n) => `${n} çalışma gösteriliyor`,
      showCat: (c, n) => `${c}: ${n} çalışma`,
      nWorks: (n) => `${n} çalışma`,
      sec: "sn",
      key: "anahtar kare",
      tween: "ara kare",
      on: "açık",
      off: "kapalı",
      squash: "Squash: yere değince ezilme",
      stretch: "Stretch: hızlanınca esneme",
      ease: "Ease in/out: tepede yavaşlama",
      arc: "Arc: yay boyunca hareket",
      notes: [
        "sıradaki: 2D dövüş sahnesi",
        "12 prensibin hepsini dene",
        "onion skin = en iyi dost",
        "12 fps mi, 24 fps mi?",
        "Lottie ile web'e taşı",
        "önce storyboard!",
        "ease-out her şeydir",
        "kahve: kare başına 1",
      ],
    },
    en: {
      showAll: (n) => `Showing ${n} works`,
      showCat: (c, n) => `${c}: ${n} ${n === 1 ? "work" : "works"}`,
      nWorks: (n) => `${n} ${n === 1 ? "work" : "works"}`,
      sec: "s",
      key: "keyframe",
      tween: "in-between",
      on: "on",
      off: "off",
      squash: "Squash: flattening on impact",
      stretch: "Stretch: elongating at speed",
      ease: "Ease in/out: slowing at the top",
      arc: "Arc: moving along a curve",
      notes: [
        "next up: a 2D fight scene",
        "try all 12 principles",
        "onion skin = best friend",
        "12 fps or 24 fps?",
        "bring it to the web with Lottie",
        "storyboard first!",
        "ease-out is everything",
        "coffee: 1 per frame",
      ],
    },
  };
  const lang = () => (D.i18n && D.i18n.lang === "en" ? "en" : "tr");
  const U = () => UI[lang()];
  const L = (w) => (lang() === "en" ? w.en : w.tr);
  const catName = (c) => (c === "all" ? (lang() === "en" ? "All" : "Tümü") : CATS[c][lang()]);

  /* ---------------------------------------------------------
     Yardımcılar
     --------------------------------------------------------- */
  const gsap = D.gsap;
  const ST = D.ScrollTrigger;
  const RM = D.reducedMotion || !gsap || !ST;

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const rand = (a, b) => a + Math.random() * (b - a);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const pad2 = (n) => String(n).padStart(2, "0");
  const imgURL = (id) => `img/projeler/${id}.jpg`;
  const burst = (x, y, o) => D.juice && D.juice.burst(x, y, o);
  const SAND = ["#d4a84f", "#c4501f", "#6b7a3a", "#161714"];

  /* ---------------------------------------------------------
     KART ZENGİNLEŞTİRME: onion-skin hayaletleri + köşe çizimleri
     --------------------------------------------------------- */
  const grid = $("#workGrid");
  const pins = grid ? $$(".work-pin", grid) : [];
  const tabs = $$(".work-tab");
  const result = $("#workResult");

  function ghostify(scope) {
    const img = scope && $("img", scope);
    if (!img || scope.dataset.ghosted) return;
    scope.dataset.ghosted = "1";
    const src = img.getAttribute("src");
    $$(".work-shot__ghost", scope).forEach((g) => (g.style.backgroundImage = `url("${src}")`));
  }

  if (grid) {
    const onEnter = (e) => {
      const card = e.target.closest && e.target.closest(".work-card");
      if (card) ghostify($(".work-shot", card));
    };
    grid.addEventListener("pointerover", onEnter);
    grid.addEventListener("focusin", onEnter);
    if (!RM) $$(".work-shot__doodle", grid).forEach((svg) => D.prepDraw(svg));
  }

  /* ---------------------------------------------------------
     FİLTRE (elle yazılmış FLIP)
     --------------------------------------------------------- */
  let current = "all";
  let refreshTimer = 0;
  let boardReveal = null;
  const countFor = (cat) => (cat === "all" ? WORKS.length : WORKS.filter((w) => w.cat === cat).length);

  function labelTabs() {
    tabs.forEach((t) => {
      const nEl = $(".work-tab__n", t);
      if (!nEl) return;
      const n = countFor(t.dataset.filter);
      nEl.textContent = n;
      nEl.setAttribute("aria-label", U().nWorks(n));
    });
  }

  tabs.forEach((t) => {
    const label = $(".work-tab__label", t);
    if (label) {
      label.insertAdjacentHTML(
        "beforeend",
        '<svg class="work-tab__circle" viewBox="0 0 120 60" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" vector-effect="non-scaling-stroke" d="M72 5 C40 1 6 12 7 31 C8 51 42 58 68 56 C98 54 117 43 114 27 C111 11 84 3 48 9"/></svg>'
      );
    }
    t.addEventListener("click", () => applyFilter(t.dataset.filter, t));
  });
  labelTabs();

  const matches = (el, cat) => cat === "all" || el.dataset.cat === cat;

  function writeResult() {
    if (!result) return;
    const n = countFor(current);
    result.textContent = current === "all" ? U().showAll(n) : U().showCat(catName(current), n);
  }

  function announce() {
    writeResult();
    if (!RM && result) gsap.fromTo(result, { scale: 0.7, rotation: -8 }, { scale: 1, rotation: -2, duration: 0.6, ease: "back.out(3)", clearProps: "transform" });
  }

  function finishLeave(el) {
    el.hidden = true;
    el.classList.remove("is-leaving");
    gsap.set(el, { clearProps: "all" });
    const crease = $(".work-card__crease", el);
    if (crease) gsap.set(crease, { clearProps: "opacity" });
  }

  function scheduleRefresh(ms) {
    clearTimeout(refreshTimer);
    refreshTimer = setTimeout(() => ST && ST.refresh(), ms);
  }

  function drawDoodle(li, delay) {
    const svg = $(".work-shot__doodle", li);
    if (RM || !svg || svg.dataset.drawn) return;
    svg.dataset.drawn = "1";
    gsap.to($$("path", svg), { strokeDashoffset: 0, duration: 0.6, stagger: 0.12, delay: delay || 0, ease: "power2.out" });
  }

  function applyFilter(cat, btn) {
    if (!grid || cat === current) return;
    current = cat;
    tabs.forEach((t) => {
      const on = t.dataset.filter === cat;
      t.setAttribute("aria-pressed", String(on));
      t.classList.toggle("is-active", on);
    });
    announce();

    if (RM) {
      pins.forEach((el) => (el.hidden = !matches(el, cat)));
      ST && ST.refresh();
      return;
    }

    gsap.fromTo(btn, { scale: 0.86 }, { scale: 1, duration: 0.6, ease: "elastic.out(1, 0.45)", clearProps: "scale" });

    // 1) İLK
    const first = new Map();
    pins.forEach((el) => {
      if (!el.hidden && !el.classList.contains("is-leaving")) first.set(el, el.getBoundingClientRect());
    });

    pins.forEach((el) => {
      (el._tw || []).forEach((t) => t && t.kill());
      el._tw = [];
    });
    if (boardReveal) boardReveal.kill();
    boardReveal = null;
    gsap.killTweensOf(pins);
    pins.forEach((el) => {
      const crease = $(".work-card__crease", el);
      if (crease) gsap.killTweensOf(crease);
      if (el.classList.contains("is-leaving")) finishLeave(el);
    });
    gsap.set(pins, { clearProps: "transform,opacity" });

    const stay = [];
    const enter = [];
    const leave = [];
    pins.forEach((el) => {
      const vis = !el.hidden;
      const m = matches(el, cat);
      if (vis && m) stay.push(el);
      else if (vis && !m) leave.push(el);
      else if (!vis && m) enter.push(el);
    });

    const gr = grid.getBoundingClientRect();
    const boxes = leave.map((el) => ({ el, l: el.offsetLeft, t: el.offsetTop, w: el.offsetWidth }));
    boxes.forEach((b) => {
      b.el.classList.add("is-leaving");
      Object.assign(b.el.style, { position: "absolute", left: b.l + "px", top: b.t + "px", width: b.w + "px", margin: "0" });
    });
    enter.forEach((el) => (el.hidden = false));

    // 2) SON + 3) TERS + 4) OYNAT
    stay.forEach((el) => {
      const f = first.get(el);
      const l = el.getBoundingClientRect();
      if (!f) return;
      const dx = f.left - l.left;
      const dy = f.top - l.top;
      if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
        el._tw.push(gsap.fromTo(el, { rotation: 0 }, { rotation: rand(-3, 3), duration: 0.25, yoyo: true, repeat: 1, ease: "sine.inOut" }));
        return;
      }
      el._tw.push(gsap.fromTo(el, { x: dx, y: dy }, { x: 0, y: 0, duration: 0.85, ease: "power3.inOut", delay: 0.12 }));
      el._tw.push(
        gsap.fromTo(el, { rotation: 0, scale: 1 }, { rotation: dx > 0 ? -6 : 6, scale: 1.05, duration: 0.42, delay: 0.12, yoyo: true, repeat: 1, ease: "sine.inOut" })
      );
    });

    // çıkanlar: buruşup savrulan kâğıt
    leave.forEach((el, i) => {
      const dir = el.offsetLeft + el.offsetWidth / 2 < gr.width / 2 ? -1 : 1;
      const crease = $(".work-card__crease", el);
      const tl = gsap.timeline({ delay: i * 0.04, onComplete: () => finishLeave(el) });
      el._tw.push(tl);
      tl.to(el, { scaleX: 0.84, scaleY: 0.66, rotation: dir * 9, skewX: dir * 14, duration: 0.16, ease: "power2.out" })
        .to(crease, { opacity: 1, duration: 0.16 }, 0)
        .to(el, { scaleX: 0.5, scaleY: 0.42, rotation: dir * -20, skewX: dir * -10, skewY: 8, duration: 0.14, ease: "power1.inOut" })
        .to(el, { scale: 0.12, skewX: 0, skewY: 0, rotation: dir * rand(160, 300), x: dir * rand(120, 260), y: rand(80, 200), opacity: 0, duration: 0.6, ease: "power3.in" });
    });

    // gelenler: yukarıdan düşüp raptiyeyle çakılır
    enter.forEach((el, i) => {
      const pin = $(".pin", el);
      el._tw.push(
        gsap.fromTo(
          el,
          { opacity: 0, y: -160, scale: 0.55, rotation: rand(-28, 28) },
          { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 1.1, delay: 0.25 + i * 0.09, ease: "elastic.out(1, 0.6)", clearProps: "transform,opacity" }
        )
      );
      if (pin) gsap.fromTo(pin, { scale: 0 }, { scale: 1, duration: 0.5, delay: 0.75 + i * 0.09, ease: "back.out(3)", clearProps: "transform" });
      drawDoodle(el, 0.6 + i * 0.09);
    });

    scheduleRefresh(1300);
  }

  /* ---------------------------------------------------------
     DETAY MODALI (karttan genişler, önceki/sonraki, onion skin)
     --------------------------------------------------------- */
  const modal = $("#workModal");
  const panel = modal && $(".work-modal__panel", modal);
  const backdrop = modal && $(".work-modal__backdrop", modal);
  const closeBtn = modal && $(".work-modal__close", modal);
  const mImg = modal && $(".work-modal__img", modal);
  const mOnion = modal && $(".work-modal__onion", modal);
  const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const inertTargets = [$("main"), $(".nav"), $(".footer"), $(".skip-link")].filter(Boolean);
  let isOpen = false;
  let openId = null;
  let lastTrigger = null;
  let sourceEl = null;
  let closing = null;
  let swapping = null;

  const checkSVG =
    '<svg class="work-modal__check" viewBox="0 0 40 40" aria-hidden="true" focusable="false"><path class="box" d="M6 8 L33 6 L34 33 L7 34 Z"/><path class="tick" d="M10 20 L17 28 L36 2"/></svg>';

  const navList = () => {
    const list = WORKS.filter((w) => current === "all" || w.cat === current);
    return list.some((w) => w.id === openId) ? list : WORKS;
  };

  function fillModal(id) {
    const w = BY[id];
    const l = L(w);
    const c = CATS[w.cat];
    openId = id;
    const list = navList();
    mImg.src = imgURL(id);
    mImg.alt = l.alt;
    $$(".work-shot__ghost", panel).forEach((g) => (g.style.backgroundImage = `url("${imgURL(id)}")`));
    $(".work-shot__no", panel).textContent = pad2(WORKS.indexOf(w) + 1);
    $(".work-modal__meta", panel).innerHTML =
      `<span class="work-chip" style="--chip:${c.chip}">${esc(c[lang()])}</span>` +
      `<span><span class="doodle" data-doodle="pencil"></span>${esc(w.tool)}</span>` +
      `<span><span class="doodle" data-doodle="loop"></span>${esc(durText(w, lang()))}</span>`;
    $(".work-modal__title", panel).textContent = l.title;
    $(".work-modal__desc", panel).textContent = l.long;
    $(".work-modal__tags", panel).innerHTML = l.tags
      .map((t, i) => `<li class="work-chip" style="--chip:${["#e9dcb5", "#cfd3bd", "#d5d9b8", "#e8c4ad"][i % 4]}">${esc(t)}</li>`)
      .join("");
    $(".work-modal__learn", panel).innerHTML = l.steps.map((s) => `<li>${checkSVG}<span>${esc(s)}</span></li>`).join("");
    $(".work-modal__count", panel).textContent = `${list.findIndex((x) => x.id === id) + 1} / ${list.length}`;
    D.hydrate(panel);
  }

  function animateLearn(tl, at) {
    const learn = $$(".work-modal__learn li", panel);
    learn.forEach((li) => D.prepDraw($("svg", li)));
    gsap.set(learn, { opacity: 0, x: -14 });
    learn.forEach((li, i) => {
      const t = at + i * 0.28;
      tl.to(li, { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" }, t);
      tl.to($$("path", li), { strokeDashoffset: 0, duration: 0.3, stagger: 0.15, ease: "power2.out" }, t + 0.05);
    });
  }

  function setInert(on) {
    inertTargets.forEach((el) => {
      if (on) el.setAttribute("inert", "");
      else el.removeAttribute("inert");
    });
  }

  function cardRotation(el) {
    const card = el && el.closest(".work-card");
    return card ? parseFloat(card.style.getPropertyValue("--r")) || 0 : 0;
  }

  function cardFor(id) {
    const li = grid && $(`.work-pin[data-id="${id}"]`, grid);
    return li && !li.hidden ? $(".work-card", li) : null;
  }

  function openModal(id, trigger) {
    if (!BY[id] || !modal) return;
    if (closing) {
      closing.progress(1);
      closing = null;
    }
    if (isOpen) return;
    isOpen = true;
    lastTrigger = trigger;
    sourceEl = trigger.closest(".work-card, .work-page");

    fillModal(id);
    modal.hidden = false;
    document.documentElement.classList.add("work-modal-open");
    setInert(true);
    if (D.lenis) D.lenis.stop();
    panel.scrollTop = 0;
    closeBtn.focus({ preventScroll: true });

    if (RM) return;

    const parts = $$("[data-m]", panel);
    gsap.set(parts, { opacity: 0, y: 18 });

    const to = panel.getBoundingClientRect();
    const from = sourceEl ? sourceEl.getBoundingClientRect() : null;
    const tl = gsap.timeline();
    tl.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power1.out" }, 0);

    if (from && from.width > 0 && from.bottom > 0 && from.top < innerHeight) {
      gsap.set(sourceEl, { opacity: 0 });
      tl.fromTo(
        panel,
        {
          transformOrigin: "0 0",
          x: from.left - to.left,
          y: from.top - to.top,
          scaleX: from.width / to.width,
          scaleY: from.height / to.height,
          rotation: cardRotation(sourceEl),
        },
        { x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, duration: 0.75, ease: "expo.out" },
        0
      );
    } else {
      sourceEl = null;
      tl.fromTo(panel, { scale: 0.6, rotation: -6, opacity: 0 }, { scale: 1, rotation: 0, opacity: 1, duration: 0.6, ease: "back.out(1.6)" }, 0);
    }

    tl.to(parts, { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power3.out" }, 0.3);
    animateLearn(tl, 0.75);
  }

  function stepModal(d) {
    if (!isOpen) return;
    const list = navList();
    const k = list.findIndex((w) => w.id === openId);
    const next = list[(k + d + list.length) % list.length];
    if (!next || next.id === openId) return;

    // kapanınca uçacağı kart artık yeni çalışmanın kartı
    if (sourceEl) gsap.set(sourceEl, { clearProps: "opacity" });
    sourceEl = cardFor(next.id);
    if (sourceEl) {
      gsap.set(sourceEl, { opacity: 0 });
      lastTrigger = $(".work-card__open", sourceEl) || lastTrigger;
    }

    if (RM) {
      fillModal(next.id);
      return;
    }
    if (swapping) swapping.progress(1);
    const parts = $$("[data-m]", panel).filter((el) => !el.classList.contains("work-modal__nav"));
    swapping = gsap
      .timeline({ onComplete: () => (swapping = null) })
      .to(parts, { opacity: 0, x: -d * 34, rotation: -d * 1.5, duration: 0.16, stagger: 0.015, ease: "power2.in" })
      .add(() => {
        fillModal(next.id);
        panel.scrollTop = 0;
      })
      .fromTo(parts, { opacity: 0, x: d * 40, rotation: d * 2 }, { opacity: 1, x: 0, rotation: 0, duration: 0.45, stagger: 0.03, ease: "back.out(1.6)", clearProps: "transform,opacity" });
    animateLearn(swapping, 0.45);
  }

  function closeModal() {
    if (!isOpen || !modal) return;
    isOpen = false;
    const src = sourceEl;
    const back = lastTrigger;
    if (swapping) {
      swapping.progress(1);
      swapping = null;
    }

    const done = () => {
      closing = null;
      modal.hidden = true;
      modal.classList.remove("is-onion");
      if (mOnion) mOnion.setAttribute("aria-pressed", "false");
      document.documentElement.classList.remove("work-modal-open");
      setInert(false);
      if (!RM) {
        gsap.set([panel, backdrop], { clearProps: "transform,opacity" });
        gsap.set($$("[data-m], .work-modal__learn li", panel), { clearProps: "transform,opacity" });
        if (src) gsap.set(src, { clearProps: "opacity" });
      }
      if (D.lenis) D.lenis.start();
      if (back && document.contains(back)) back.focus({ preventScroll: true });
    };

    if (RM) return done();

    gsap.killTweensOf([panel, backdrop]);
    const visible = src && src.offsetParent !== null && !src.closest("[hidden]");
    const from = panel.getBoundingClientRect();
    const tl = gsap.timeline({ onComplete: done });
    closing = tl;
    tl.to($$("[data-m], .work-modal__learn li", panel), { opacity: 0, duration: 0.15 }, 0);
    tl.to(backdrop, { opacity: 0, duration: 0.45, ease: "power1.in" }, 0.05);

    if (visible) {
      const r = src.getBoundingClientRect();
      if (r.bottom > 0 && r.top < innerHeight) {
        gsap.set(panel, { transformOrigin: "0 0" });
        tl.to(
          panel,
          { x: r.left - from.left, y: r.top - from.top, scaleX: r.width / from.width, scaleY: r.height / from.height, rotation: cardRotation(src), duration: 0.55, ease: "expo.inOut" },
          0.05
        );
        return;
      }
    }
    tl.to(panel, { scale: 0.7, rotation: 8, y: 80, opacity: 0, duration: 0.4, ease: "power3.in", transformOrigin: "50% 50%" }, 0.05);
  }

  document.addEventListener("click", (e) => {
    const t = e.target.closest && e.target.closest("[data-open]");
    if (t) {
      e.preventDefault();
      openModal(t.dataset.open, t);
    }
  });

  if (modal) {
    backdrop.addEventListener("click", closeModal);
    closeBtn.addEventListener("click", closeModal);
    $$(".work-modal__step", modal).forEach((b) => b.addEventListener("click", () => stepModal(parseInt(b.dataset.step, 10))));
    if (mOnion) {
      mOnion.addEventListener("click", (e) => {
        const on = !modal.classList.contains("is-onion");
        modal.classList.toggle("is-onion", on);
        mOnion.setAttribute("aria-pressed", String(on));
        if (!RM) {
          D.juice.squash(mOnion, 0.8);
          burst(e.clientX || 0, e.clientY || 0, { count: 10, power: 0.9, colors: ["#c4501f", "#6b7a3a", "#d4a84f"] });
        }
      });
    }
    document.addEventListener("keydown", (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
        return;
      }
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        stepModal(e.key === "ArrowRight" ? 1 : -1);
        return;
      }
      if (e.key !== "Tab") return;
      const items = $$(FOCUSABLE, panel).filter((el) => el.getClientRects().length);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (!panel.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  /* ---------------------------------------------------------
     FLIPBOOK — kaydırdıkça çevrilen 16 kare + onion skin
     --------------------------------------------------------- */
  const flipSec = $("#flipbook");
  const pad = $("#flipPad");
  const pagesWrap = pad && $(".work-flip__pages", pad);
  const readout = $("#flipReadout");
  const ticksEl = $("#flipTicks");
  const headEl = flipSec && $(".work-flip__head", flipSec);
  const onionBtn = flipSec && $(".work-flip__onion", flipSec);
  const NF = FRAMES.length;
  const GUIDE = FRAMES.map((q, j) => `${j ? "L" : "M"}${q.x} ${q.y}`).join(" ");
  let pages = [];
  let shownFrame = -1;
  let ticks = [];

  const ballShape = (q, cls, op) =>
    `<ellipse class="${cls}" cx="${q.x}" cy="${q.y}" rx="${(20 * q.sx).toFixed(1)}" ry="${(20 * q.sy).toFixed(1)}"${op != null ? ` opacity="${op}"` : ""}/>`;

  function frameSVG(i) {
    const f = FRAMES[i];
    const rx = 20 * f.sx;
    const ry = 20 * f.sy;
    let s = `<path class="g" d="${GUIDE}"/><path class="k" d="M14 260 C 120 256, 260 263, 388 258"/>`;
    const shw = (26 - Math.min(f.h, 200) * 0.09) * f.sx;
    s += `<ellipse class="sh" cx="${f.x}" cy="262" rx="${shw.toFixed(1)}" ry="4.5" opacity="${(1 - Math.min(f.h, 200) / 260).toFixed(2)}"/>`;
    [[-2, 0.4], [-1, 0.8]].forEach(([d, o]) => FRAMES[i + d] && (s += ballShape(FRAMES[i + d], "op", o)));
    [[1, 0.8], [2, 0.4]].forEach(([d, o]) => FRAMES[i + d] && (s += ballShape(FRAMES[i + d], "of", o)));
    if (f.c) {
      const l = f.x - rx - 4;
      const r = f.x + rx + 4;
      s += `<path class="a" d="M${l} 254 q -8 -7 -16 -3 M${l + 2} 244 q -6 -9 -14 -9 M${r} 254 q 8 -7 16 -3 M${r - 2} 244 q 6 -9 14 -9"/>`;
    } else if (f.p === "stretch") {
      const falling = i < NF - 1 && FRAMES[i + 1] && FRAMES[i + 1].c;
      const y0 = falling ? f.y - ry - 6 : f.y + ry + 6;
      const dir = falling ? -1 : 1;
      s += `<path class="a" d="M${f.x - 7} ${y0} v ${dir * 16} M${f.x + 7} ${y0 + dir * 4} v ${dir * 12}"/>`;
    }
    s += `<g transform="translate(${f.x} ${f.y}) scale(${f.sx} ${f.sy})"><circle class="bb" r="20" vector-effect="non-scaling-stroke"/><path class="bs" vector-effect="non-scaling-stroke" transform="rotate(${i * 27})" d="M-19 -4 C -8 8, 8 -12, 19 3"/></g>`;
    if (f.k) s += `<path d="M330 18 l 8 8 l -8 8 l -8 -8 z" fill="#c4501f" stroke="#161714" stroke-width="1.5"/>`;
    s += `<text class="no" x="376" y="36" text-anchor="end">${pad2(i + 1)}</text>`;
    return `<svg viewBox="0 0 400 300" aria-hidden="true" focusable="false">${s}</svg>`;
  }

  function renderReadout(i) {
    if (!readout) return;
    const f = FRAMES[i];
    const u = U();
    const set = (k, v) => {
      const el = $(`[data-f="${k}"]`, readout);
      if (el) el.textContent = v;
    };
    set("no", pad2(i + 1));
    set("time", `${(i / 24).toFixed(2).replace(".", lang() === "en" ? "." : ",")} ${u.sec}`);
    set("type", f.k ? u.key : u.tween);
    set("principle", u[f.p]);
  }

  function renderOnion() {
    if (!onionBtn) return;
    const on = onionBtn.getAttribute("aria-pressed") === "true";
    const st = $('[data-f="onion"]', onionBtn);
    if (st) st.textContent = on ? U().on : U().off;
  }

  function showFrame(i) {
    if (i === shownFrame) return;
    shownFrame = i;
    renderReadout(i);
    ticks.forEach((t, j) => {
      t.classList.toggle("is-on", j === i);
      t.classList.toggle("is-past", j < i);
    });
  }

  function setFlip(fv) {
    const i0 = Math.min(NF - 1, Math.floor(fv));
    const frac = i0 >= NF - 1 ? 0 : fv - i0;
    for (let j = 0; j < pages.length; j++) {
      const pg = pages[j];
      const vis = j >= i0 && j <= i0 + 2;
      const rot = j === i0 ? frac * 118 : 0;
      if (pg._vis !== vis) {
        pg.style.visibility = vis ? "visible" : "hidden";
        pg._vis = vis;
      }
      if (pg._rot !== rot) {
        pg._rot = rot;
        pg.style.transform = rot ? `rotateX(${rot.toFixed(2)}deg)` : "";
        pg._shine.style.opacity = rot ? (Math.sin((Math.min(rot, 90) / 90) * (Math.PI / 2)) * 0.95).toFixed(3) : "0";
      }
    }
    showFrame(frac > 0.62 ? Math.min(NF - 1, i0 + 1) : i0);
    if (headEl) headEl.style.setProperty("--p", ((fv + 0.5) / NF).toFixed(4));
  }

  if (ticksEl) {
    ticksEl.innerHTML = FRAMES.map((f) => `<li${f.k ? ' class="is-key"' : ""}></li>`).join("");
    ticks = $$("li", ticksEl);
  }

  if (pad && pagesWrap && !RM) {
    pagesWrap.innerHTML = FRAMES.map(
      (_, i) => `<div class="work-flip__page" style="z-index:${NF - i}">${frameSVG(i)}<span class="work-flip__shine"></span></div>`
    ).join("");
    pages = $$(".work-flip__page", pagesWrap);
    pages.forEach((pg) => (pg._shine = $(".work-flip__shine", pg)));
    pad.classList.add("is-onion");
    if (onionBtn) {
      onionBtn.hidden = false;
      onionBtn.addEventListener("click", (e) => {
        const on = onionBtn.getAttribute("aria-pressed") !== "true";
        onionBtn.setAttribute("aria-pressed", String(on));
        pad.classList.toggle("is-onion", on);
        renderOnion();
        const r = pad.getBoundingClientRect();
        burst(e.clientX || r.left + r.width / 2, e.clientY || r.top, { count: 12, power: 1, colors: ["#c4501f", "#6b7a3a"] });
        D.juice.wiggle(pad);
      });
    }
    setFlip(0);
  }
  renderReadout(0);
  renderOnion();

  function initFlip() {
    if (!pages.length || !flipSec) return;
    const stage = $(".work-flip__stage", flipSec);
    const mm = gsap.matchMedia();
    const onUpdate = (self) => setFlip(clamp((self.progress - 0.03) / 0.92, 0, 1) * (NF - 1));
    mm.add("(min-width: 901px) and (min-height: 560px)", () => {
      ST.create({ trigger: flipSec, start: "top top", end: "+=230%", pin: true, scrub: true, onUpdate, onRefresh: onUpdate });
    });
    mm.add("(max-width: 900px), (max-height: 559px)", () => {
      ST.create({ trigger: stage, start: "center 88%", end: "center 18%", scrub: true, onUpdate, onRefresh: onUpdate });
    });
    // sayfa yığını girişi
    gsap.from(pad, {
      y: 80,
      rotation: -6,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.6)",
      clearProps: "transform,opacity",
      scrollTrigger: { trigger: stage, start: "top 85%", once: true },
    });
  }

  /* ---------------------------------------------------------
     HERO — harflerin üstünde zıplayan top + klaket
     --------------------------------------------------------- */
  const h1 = $("#workTitle");
  const ball = $(".work-ball");
  const titleWrap = $(".work-hero__titlewrap");
  const ballSvg = ball && $("svg", ball);
  let ballTl = null;
  let ballDir = 1;
  let ballAt = null;

  function ballTargets() {
    if (!h1) return [];
    const out = [];
    $$(".split-word", h1).forEach((w) => {
      const ch = $$(".split-char", w);
      if (ch.length) out.push(ch[Math.floor((ch.length - 1) / 2)]);
    });
    return out;
  }

  function landing(ch) {
    let x = 0;
    let y = 0;
    let el = ch;
    while (el && el !== titleWrap) {
      x += el.offsetLeft;
      y += el.offsetTop;
      el = el.offsetParent;
    }
    const fs = parseFloat(getComputedStyle(h1).fontSize) || 80;
    const t = ch.textContent;
    const upper = t !== t.toLocaleLowerCase("tr");
    const tall = /[bdfhklt]/.test(t);
    const size = ball.offsetWidth;
    return { ch, x: x + ch.offsetWidth / 2 - size / 2, y: y + fs * (upper || tall ? 0.1 : 0.34) - size * 0.92 };
  }

  function hitLetter(ch, power) {
    const k = power || 1;
    gsap.fromTo(
      ch,
      { scaleY: 1 - 0.36 * k, scaleX: 1 + 0.2 * k, y: 7 * k },
      { scaleY: 1, scaleX: 1, y: 0, duration: 0.75, ease: "elastic.out(1.1, 0.32)", overwrite: "auto" }
    );
    const r = ch.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height * 0.25, { count: Math.round(7 * k) + 2, power: 0.75 * k, colors: SAND });
  }

  function playBall(fromSky) {
    if (!ball || !h1) return;
    if (ballTl) ballTl.kill();
    let pts = ballTargets().map(landing);
    if (!pts.length) return;
    if (!fromSky) {
      ballDir *= -1;
      if (ballDir < 0) pts.reverse();
      if (ballAt && pts[0].ch === ballAt.ch) pts.shift();
      if (!pts.length) pts = [ballAt];
    }
    const tl = (ballTl = gsap.timeline());
    let cur = fromSky
      ? { x: pts[0].x - 160, y: pts[0].y - 260 }
      : { x: gsap.getProperty(ball, "x"), y: gsap.getProperty(ball, "y") };
    gsap.set(ball, { x: cur.x, y: cur.y, scaleX: 1, scaleY: 1, opacity: 1 });

    pts.forEach((p, k) => {
      const t0 = tl.duration();
      const first = fromSky && k === 0;
      const up = first ? 0 : 0.27;
      const down = first ? 0.5 : 0.3;
      const apex = Math.min(cur.y, p.y) - clamp(Math.abs(p.x - cur.x) * 0.3, 70, 170);
      tl.to(ball, { x: p.x, duration: up + down, ease: "none" }, t0);
      tl.to(ballSvg, { rotation: "+=" + (p.x > cur.x ? 200 : -200), duration: up + down, ease: "none" }, t0);
      if (up) tl.to(ball, { y: apex, duration: up, ease: "power2.out" }, t0);
      tl.to(ball, { y: p.y, duration: down, ease: "power2.in" }, t0 + up);
      tl.to(ball, { scaleX: 0.84, scaleY: 1.22, duration: down * 0.55, ease: "power1.in" }, t0 + up + down * 0.45);
      tl.to(ball, { scaleX: 1.42, scaleY: 0.6, duration: 0.06, ease: "power2.out" }, t0 + up + down);
      tl.call(() => hitLetter(p.ch, 1), null, t0 + up + down);
      tl.to(ball, { scaleX: 1, scaleY: 1, duration: 0.24, ease: "back.out(3)" }, t0 + up + down + 0.06);
      cur = p;
    });
    // son harfte iki küçük sekme ile dur (enerji kaybı)
    const last = cur;
    [38, 14].forEach((h, n) => {
      const t0 = tl.duration();
      tl.to(ball, { y: last.y - h, duration: 0.2 - n * 0.05, ease: "power2.out" }, t0)
        .to(ball, { y: last.y, duration: 0.2 - n * 0.05, ease: "power2.in" })
        .to(ball, { scaleX: 1.2 - n * 0.08, scaleY: 0.82 + n * 0.08, duration: 0.05 })
        .call(() => hitLetter(last.ch, 0.45 - n * 0.2))
        .to(ball, { scaleX: 1, scaleY: 1, duration: 0.2, ease: "back.out(3)" });
    });
    ballAt = last;
  }

  function parkBall() {
    if (!ball || !h1 || ball.hidden) return;
    if (ballTl) ballTl.kill();
    const pts = ballTargets().map(landing);
    if (!pts.length) return;
    const p = ballDir > 0 ? pts[pts.length - 1] : pts[0];
    ballAt = p;
    gsap.set(ball, { x: p.x, y: p.y, scaleX: 1, scaleY: 1, opacity: 1 });
  }

  const slate = $(".work-slate");
  const clapBtn = $(".work-slate__clap");
  const countEl = $("#workCount");

  function clap(first) {
    if (!clapBtn || RM) return;
    gsap.killTweensOf(clapBtn, "rotation");
    const tl = gsap.timeline();
    if (!first) tl.to(clapBtn, { rotation: -32, duration: 0.16, ease: "power2.out" });
    tl.to(clapBtn, { rotation: 0, duration: 0.14, ease: "power4.in" }).call(() => {
      const r = clapBtn.getBoundingClientRect();
      burst(r.right - 24, r.bottom, { count: 16, power: 1.2, colors: ["#f2f0ea", "#d4a84f", "#c4501f"] });
      if (slate) gsap.fromTo(slate, { y: 0 }, { keyframes: { y: [5, -3, 1.5, 0] }, duration: 0.35, ease: "none" });
    });
    tl.to(clapBtn, { rotation: -14, duration: 0.8, ease: "elastic.out(1, 0.4)" }, "+=0.3");
  }

  if (clapBtn) clapBtn.addEventListener("click", () => clap(false));

  function heroIntro() {
    const hero = $(".work-hero");
    if (!hero) return;
    const items = $$(".work-hi", hero);
    const inners = items.map((el) => $(".work-hi__in", el));

    gsap.from(inners, {
      yPercent: () => rand(-260, -160),
      rotation: () => rand(-90, 90),
      scale: 0.2,
      opacity: 0,
      duration: 1.1,
      ease: "bounce.out",
      stagger: { each: 0.07, from: "random" },
      delay: 0.15,
    });

    // klaket: açık → çak! (sayaç 0 → 8)
    if (clapBtn) {
      gsap.set(clapBtn, { rotation: -34 });
      gsap.delayedCall(1.05, () => clap(true));
    }
    if (countEl) {
      const o = { v: 0 };
      countEl.textContent = "0";
      gsap.to(o, { v: WORKS.length, duration: 1.2, delay: 1.2, ease: "power2.out", onUpdate: () => (countEl.textContent = Math.round(o.v)) });
    }

    // zıplayan top
    if (ball && h1) {
      ball.hidden = false;
      gsap.set(ball, { opacity: 0 });
      gsap.delayedCall(1.45, () => playBall(true));
      ball.addEventListener("click", () => playBall(false));
      let rt = 0;
      window.addEventListener("resize", () => {
        clearTimeout(rt);
        rt = setTimeout(parkBall, 180);
      });
    }

    // kaydırınca dekorlar savrulsun
    items.forEach((el) => {
      const left = parseFloat(el.style.getPropertyValue("--x")) < 50;
      gsap.to(el, {
        x: (left ? -1 : 1) * rand(80, 260),
        y: rand(-160, 120),
        rotation: rand(-160, 160),
        ease: "none",
        scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1 },
      });
    });
    const inner = $(".work-hero__inner", hero);
    gsap.to(inner, {
      yPercent: 16,
      opacity: 0.2,
      ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
    });

    // fare paralaksı
    if (D.finePointer) {
      const qs = inners.map((el, i) => ({
        x: gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" }),
        y: gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" }),
        d: parseFloat(items[i].dataset.depth) || 0.5,
      }));
      hero.addEventListener("pointermove", (e) => {
        const nx = e.clientX / innerWidth - 0.5;
        const ny = e.clientY / innerHeight - 0.5;
        qs.forEach((q) => {
          q.x(nx * 60 * q.d);
          q.y(ny * 40 * q.d);
        });
      });
    }
  }

  /* ---------------------------------------------------------
     MASAYI DAĞIT — sürükle & fırlat (atalet elle hesaplanır)
     --------------------------------------------------------- */
  const NOTE_STYLE = [
    ["yellow", "tape"],
    ["pink", "pin"],
    ["blue", "tape"],
    ["green", "pin"],
    ["orange", "tape"],
    ["purple", "pin"],
    ["yellow", "pin"],
    ["pink", "tape"],
  ];
  const desk = $("#workDesk");
  const deskNotes = desk && $(".work-desk__notes", desk);
  let deskApi = null;

  function writeNotes() {
    if (!deskNotes) return;
    const txt = U().notes;
    $$(".work-note__t", deskNotes).forEach((el, i) => (el.textContent = txt[i] || ""));
  }

  if (desk && deskNotes) {
    deskNotes.innerHTML = NOTE_STYLE.map(
      ([c, deco]) =>
        `<div class="work-note"><div class="sticky ${c}" style="--r:0deg">${deco === "pin" ? '<span class="pin"></span>' : '<span class="tape"></span>'}<span class="work-note__t"></span></div></div>`
    ).join("");
    writeNotes();
    deskApi = initDesk(desk, $$(".work-note", deskNotes));
  }

  function initDesk(deskEl, notes) {
    const S = notes.map((el) => ({ el, x: 0, y: 0, r: 0 }));
    let W = 0, H = 0, NW = 0, NH = 0, z = 10;
    const PAD = 14;

    const measure = () => {
      W = deskEl.clientWidth;
      H = deskEl.clientHeight;
      NW = notes[0].offsetWidth;
      NH = notes[0].offsetHeight;
    };
    const maxX = () => Math.max(PAD, W - NW - PAD);
    const maxY = () => Math.max(PAD, H - NH - PAD);
    const cx = (x) => clamp(x, PAD, maxX());
    const cy = (y) => clamp(y, PAD, maxY());

    function move(s, x, y, r, opts) {
      s.x = x;
      s.y = y;
      s.r = r;
      if (RM || !opts) gsap.set(s.el, { x, y, rotation: r, opacity: 1 });
      else gsap.to(s.el, Object.assign({ x, y, rotation: r, opacity: 1, overwrite: "auto" }, opts));
    }

    function scatter(animate) {
      measure();
      const cols = Math.max(2, Math.min(S.length, Math.round(Math.sqrt((S.length * W) / Math.max(1, H)))));
      const rows = Math.ceil(S.length / cols);
      const cw = (maxX() - PAD) / Math.max(1, cols - 1);
      const ch = (maxY() - PAD) / Math.max(1, rows - 1);
      const cells = gsap.utils.shuffle(S.map((_, i) => i));
      S.forEach((s, i) => {
        const c = cells[i] % cols;
        const r = Math.floor(cells[i] / cols);
        const x = cx(PAD + c * cw + rand(-cw * 0.18, cw * 0.18));
        const y = cy(PAD + r * ch + rand(-ch * 0.18, ch * 0.18));
        move(s, x, y, rand(-16, 16), animate ? { duration: rand(0.8, 1.2), ease: "back.out(1.3)", delay: i * 0.05 } : null);
      });
    }

    function tidy() {
      measure();
      const gap = 16;
      const cols = Math.max(1, Math.min(S.length, Math.floor((W - PAD * 2 + gap) / (NW + gap))));
      const rows = Math.ceil(S.length / cols);
      const totalW = cols * NW + (cols - 1) * gap;
      let stepY = NH + gap;
      if (rows > 1 && PAD * 2 + NH + (rows - 1) * stepY > H) stepY = (H - PAD * 2 - NH) / (rows - 1);
      const totalH = NH + (rows - 1) * stepY;
      const ox = (W - totalW) / 2;
      const oy = Math.max(PAD, (H - totalH) / 2);
      S.forEach((s, i) => {
        const c = i % cols;
        const r = Math.floor(i / cols);
        s.el.style.zIndex = 10 + i;
        move(s, cx(ox + c * (NW + gap)), cy(oy + r * stepY), 0, { duration: 0.7, ease: "back.out(1.6)", delay: i * 0.045 });
      });
      z = 10 + S.length;
    }

    S.forEach((s) => {
      const el = s.el;
      let drag = null;
      let rotTo = null;

      el.addEventListener("pointerdown", (e) => {
        if (e.pointerType === "mouse" && e.button !== 0) return;
        e.preventDefault();
        measure();
        try {
          el.setPointerCapture(e.pointerId);
        } catch (err) {
          /* sentetik olay */
        }
        gsap.killTweensOf(el);
        s.x = gsap.getProperty(el, "x");
        s.y = gsap.getProperty(el, "y");
        s.r = gsap.getProperty(el, "rotation");
        drag = { id: e.pointerId, px: e.clientX, py: e.clientY, x: s.x, y: s.y, samples: [{ x: s.x, y: s.y, t: performance.now() }] };
        el.classList.add("is-dragging");
        el.style.zIndex = ++z;
        if (!RM) {
          gsap.to(el, { scale: 1.08, duration: 0.2, ease: "power2.out" });
          rotTo = gsap.quickTo(el, "rotation", { duration: 0.35, ease: "power3.out" });
        }
      });

      el.addEventListener("pointermove", (e) => {
        if (!drag || e.pointerId !== drag.id) return;
        const x = cx(drag.x + e.clientX - drag.px);
        const y = cy(drag.y + e.clientY - drag.py);
        const now = performance.now();
        const prev = drag.samples[drag.samples.length - 1];
        drag.samples.push({ x, y, t: now });
        while (drag.samples.length > 2 && now - drag.samples[0].t > 110) drag.samples.shift();
        gsap.set(el, { x, y });
        s.x = x;
        s.y = y;
        if (rotTo) {
          const vx = (x - prev.x) / Math.max(1, now - prev.t);
          rotTo(clamp(s.r + vx * 10, -35, 35));
        }
      });

      const end = (e) => {
        if (!drag || e.pointerId !== drag.id) return;
        const smp = drag.samples;
        drag = null;
        el.classList.remove("is-dragging");
        if (el.hasPointerCapture && el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
        if (RM) {
          s.r = gsap.getProperty(el, "rotation");
          return;
        }
        const a = smp[0];
        const b = smp[smp.length - 1];
        const dt = Math.max(16, b.t - a.t);
        const fresh = performance.now() - b.t < 80;
        const vx = fresh ? ((b.x - a.x) / dt) * 1000 : 0;
        const vy = fresh ? ((b.y - a.y) / dt) * 1000 : 0;
        const speed = Math.hypot(vx, vy);
        let tx = s.x + vx * 0.32;
        let ty = s.y + vy * 0.32;
        const mx = maxX();
        const my = maxY();
        if (tx > mx) tx = mx - (tx - mx) * 0.35;
        if (tx < PAD) tx = PAD + (PAD - tx) * 0.35;
        if (ty > my) ty = my - (ty - my) * 0.35;
        if (ty < PAD) ty = PAD + (PAD - ty) * 0.35;
        tx = cx(tx);
        ty = cy(ty);
        const spin = clamp(vx * 0.012, -40, 40);
        const r = clamp(gsap.getProperty(el, "rotation") + spin, -40, 40);
        const dur = clamp(speed / 1600, 0.35, 1.4);
        s.x = tx;
        s.y = ty;
        s.r = r;
        gsap.to(el, { x: tx, y: ty, rotation: r, duration: dur, ease: "power3.out", overwrite: "auto" });
        gsap.to(el, { scale: 1, duration: 0.45, ease: "back.out(3)" });
      };
      el.addEventListener("pointerup", end);
      el.addEventListener("pointercancel", end);
      el.addEventListener("lostpointercapture", end);
    });

    let rt = 0;
    window.addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        measure();
        S.forEach((s) => move(s, cx(s.x), cy(s.y), s.r, null));
      }, 150);
    });

    const tidyBtn = $("#workTidy");
    const scatterBtn = $("#workScatter");
    if (tidyBtn) tidyBtn.addEventListener("click", tidy);
    if (scatterBtn) scatterBtn.addEventListener("click", () => scatter(true));

    scatter(false);
    if (!RM) gsap.set(notes, { opacity: 0 });

    return {
      intro() {
        measure();
        S.forEach((s, i) => {
          gsap.fromTo(
            s.el,
            { x: W / 2 - NW / 2 + rand(-20, 20), y: -NH * 1.6, rotation: rand(-60, 60), opacity: 1 },
            { x: s.x, y: s.y, rotation: s.r, duration: rand(0.9, 1.3), delay: i * 0.08, ease: "bounce.out" }
          );
        });
      },
      show() {
        gsap.set(notes, { opacity: 1 });
      },
    };
  }

  /* ---------------------------------------------------------
     DİL DEĞİŞİNCE: JS metinlerini yeniden yaz
     --------------------------------------------------------- */
  document.addEventListener("doodle:lang", () => {
    labelTabs();
    writeResult();
    const keep = shownFrame;
    shownFrame = -1;
    if (keep >= 0) showFrame(keep);
    else renderReadout(0);
    renderOnion();
    writeNotes();
    if (isOpen && openId) fillModal(openId);
    // başlık yeniden bölündü → top yeni harflere otursun
    if (ball && !ball.hidden && ballAt) requestAnimationFrame(parkBall);
  });

  /* ---------------------------------------------------------
     SCROLL / GİRİŞ ANİMASYONLARI (perde kalkınca)
     --------------------------------------------------------- */
  D.onReady(() => {
    if (RM) {
      if (deskApi) deskApi.show();
      initCtaPlane(true);
      return;
    }

    heroIntro();
    initTapes();
    initBoardReveal();
    initFlip();
    initStack();
    initCode();
    initCtaPlane(false);

    if (deskApi && desk) {
      ST.create({ trigger: desk, start: "top 75%", once: true, onEnter: () => deskApi.intro() });
    }
  });

  function initTapes() {
    const a = $(".work-tape--a .work-tape__track");
    const b = $(".work-tape--b .work-tape__track");
    const wrap = $(".work-tapes");
    if (!a || !b || !wrap) return;
    const st = { trigger: wrap, start: "top bottom", end: "bottom top", scrub: 0.6 };
    gsap.fromTo(a, { xPercent: 0 }, { xPercent: -28, ease: "none", scrollTrigger: st });
    gsap.fromTo(b, { xPercent: -28 }, { xPercent: 0, ease: "none", scrollTrigger: Object.assign({}, st) });
  }

  function initBoardReveal() {
    if (!grid) return;
    const board = $(".work-board");
    const tabsEl = $(".work-tabs");
    if (tabsEl) {
      gsap.from(tabs, {
        y: 60,
        rotation: () => rand(-8, 8),
        opacity: 0,
        duration: 0.8,
        ease: "back.out(2)",
        stagger: 0.08,
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: tabsEl, start: "top 90%", once: true },
      });
    }

    const visible = pins.filter((p) => !p.hidden);
    boardReveal = gsap.fromTo(
      visible,
      { opacity: 0, y: -140, rotation: () => rand(-25, 25), scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 1.1,
        ease: "elastic.out(1, 0.65)",
        stagger: 0.1,
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: board || grid, start: "top 75%", once: true },
      }
    );

    pins.forEach((li, i) => {
      const pin = $(".pin", li);
      ST.create({
        trigger: li,
        start: "top 85%",
        once: true,
        onEnter: () => {
          if (li.hidden) return;
          if (pin) gsap.fromTo(pin, { scale: 0, y: -30 }, { scale: 1, y: 0, duration: 0.5, delay: 0.5 + (i % 3) * 0.1, ease: "back.out(3)", clearProps: "transform" });
          drawDoodle(li, 0.7 + (i % 3) * 0.1);
        },
      });
    });
  }

  function initStack() {
    const stack = $("#workStack");
    if (!stack) return;
    const items = $$(".work-stack__item", stack);
    const n = items.length;
    items.forEach((item, i) => (item.style.zIndex = String(i + 1)));

    items.forEach((item) => {
      const bits = $$("[data-in]", item);
      const art = $(".work-page__art", item);
      gsap.set(bits, { opacity: 0, y: 30 });
      ST.create({
        trigger: item,
        start: "top 70%",
        once: true,
        onEnter: () => {
          gsap.to(bits, { opacity: 1, y: 0, duration: 0.7, stagger: 0.07, ease: "power3.out", clearProps: "transform,opacity" });
          if (art) gsap.fromTo(art, { rotation: -8, scale: 0.85, y: 40 }, { rotation: 2, scale: 1, y: 0, duration: 1, ease: "elastic.out(1, 0.6)", clearProps: "transform" });
        },
      });
    });

    const mm = gsap.matchMedia();
    mm.add("(min-width: 901px) and (min-height: 560px)", () => {
      const off = (i) => {
        const h = items[i].offsetHeight;
        const navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 78;
        return Math.max(navH * 0.5, (innerHeight - h) / 2) + (i - (n - 1) / 2) * 18;
      };
      const last = items[n - 1];
      items.forEach((item, i) => {
        if (i === n - 1) return;
        const page = $(".work-page", item);
        const shade = $(".work-page__shade", item);
        ST.create({
          trigger: item,
          start: () => `top top+=${off(i)}`,
          endTrigger: last,
          end: () => `top top+=${off(n - 1)}`,
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
        gsap
          .timeline({
            scrollTrigger: {
              trigger: items[i + 1],
              start: "top bottom",
              end: () => `top top+=${off(i + 1)}`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          })
          .to(page, { scale: 0.9 - (n - 2 - i) * 0.015, rotation: i % 2 ? 2.4 : -2.4, ease: "none" }, 0)
          .to(shade, { opacity: 0.5, ease: "none" }, 0);
      });
    });
  }

  function initCode() {
    const items = $$(".work-code__item");
    if (!items.length) return;
    gsap.from(items, {
      y: 70,
      rotation: () => rand(-10, 10),
      opacity: 0,
      duration: 0.9,
      ease: "back.out(1.7)",
      stagger: 0.08,
      clearProps: "transform,opacity",
      scrollTrigger: { trigger: ".work-code__list", start: "top 85%", once: true },
    });
  }

  function initCtaPlane(staticOnly) {
    const sec = $(".work-cta");
    const svg = sec && $(".work-cta__path", sec);
    const path = svg && $("path", svg);
    const plane = sec && $(".work-cta__plane", sec);
    if (!path || !plane || !gsap) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    let box = { l: 0, t: 0, sx: 1, sy: 1 };
    const VBW = 1200;
    const VBH = 320;

    const measure = () => {
      const r = svg.getBoundingClientRect();
      const sr = sec.getBoundingClientRect();
      box = { l: r.left - sr.left, t: r.top - sr.top, sx: r.width / VBW, sy: r.height / VBH };
    };
    const place = (p) => {
      const pt = path.getPointAtLength(p * len);
      const pt2 = path.getPointAtLength(Math.min(len, p * len + 4));
      const pt1 = path.getPointAtLength(Math.max(0, p * len - 4));
      const ang = (Math.atan2((pt2.y - pt1.y) * box.sy, (pt2.x - pt1.x) * box.sx) * 180) / Math.PI;
      gsap.set(plane, { x: box.l + pt.x * box.sx, y: box.t + pt.y * box.sy, rotation: ang + 44 });
      path.style.strokeDashoffset = len * (1 - p);
    };

    measure();
    if (staticOnly) {
      place(0.92);
      path.style.strokeDashoffset = 0;
      window.addEventListener("resize", () => {
        measure();
        place(0.92);
      });
      return;
    }
    place(0);
    ST.create({
      trigger: sec,
      start: "top 85%",
      end: "center 40%",
      scrub: 1,
      onRefresh: (self) => {
        measure();
        place(self.progress);
      },
      onUpdate: (self) => place(self.progress),
    });
  }
})();

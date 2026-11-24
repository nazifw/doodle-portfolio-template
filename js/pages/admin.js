/* =========================================================
   YÖNETİM PANELİ — admin.html
   Tarayıcıda çalışan demo panel (sunucu yok, veriler localStorage'da).
   - Giriş: SHA-256 özet karşılaştırma (düz şifre kodda yok)
   - Mesajlar: Doodle.content.messagesKey   (iletişim formu yazar)
   - Profil:   Doodle.content.key           (sitedeki [data-bind] öğeleri okur)
   Mesaj içerikleri yalnızca textContent ile basılır (innerHTML yok).
   ========================================================= */

/* --- İngilizce sözlük --- */
window.Doodle &&
  Doodle.i18n.add({
    "admin.meta.title": "Admin Panel | Ad Soyad",
    "admin.meta.desc": "In-browser demo admin panel for Ad Soyad's personal site: messages from the contact form, profile content and settings.",
    "admin.h1": "Admin panel",
    "admin.demo": "<strong>Demo panel:</strong> data is stored only in this browser (localStorage) and never sent to a server.",

    "admin.gate.inside": "welcome!",
    "admin.gate.title": "Open the notebook",
    "admin.gate.sub": "ad.soyad · admin notebook",
    "admin.gate.pass": "Password",
    "admin.gate.open": "Open",
    "admin.gate.hintQ": "Don't know the password?",
    "admin.gate.hintA": "The default password is in the project hand-in notes. If you changed it and forgot, clearing this site's browser data resets it to the default (messages are deleted too).",
    "admin.pass.show": "Show password",
    "admin.pass.hide": "Hide password",

    "admin.tabs.label": "Panel sections",
    "admin.tab.overview": "Overview",
    "admin.tab.messages": "Messages",
    "admin.tab.profile": "Profile",
    "admin.tab.settings": "Settings",
    "admin.side.site": "View site",
    "admin.side.logout": "Log out",

    "admin.ov.title": "Overview",
    "admin.ov.ledger": "Notebook status",
    "admin.ov.unread": "Unread messages",
    "admin.ov.total": "Total messages",
    "admin.ov.last": "Latest message",
    "admin.ov.content": "Profile content",
    "admin.ov.chart": "Last 7 days",
    "admin.ov.chartTable": "Messages received in the last 7 days",
    "admin.ov.day": "Day",
    "admin.ov.count": "Messages",
    "admin.ov.recent": "Recent messages",
    "admin.ov.all": "see all",

    "admin.msg.title": "Messages",
    "admin.msg.searchLabel": "Search messages",
    "admin.msg.searchPh": "search name, email, topic or text",
    "admin.msg.filter": "Filter",
    "admin.msg.fAll": "All",
    "admin.msg.fUnread": "Unread",
    "admin.msg.fRead": "Read",
    "admin.msg.markAll": "Mark all read",
    "admin.msg.listLabel": "Message list",
    "admin.msg.pick": "Pick a message from the list to read it.",
    "admin.msg.back": "back to list",
    "admin.msg.from": "From",
    "admin.msg.email": "Email",
    "admin.msg.date": "Date",
    "admin.msg.doodle": "attached doodle",
    "admin.msg.reply": "Reply",
    "admin.msg.delete": "Delete",

    "admin.pf.title": "Profile & content",
    "admin.pf.lead": "The name, contact details and links shown on the site. After saving, reload any open pages to see the new version.",
    "admin.pf.fsId": "Identity",
    "admin.pf.name": "Full name",
    "admin.pf.titleL": "Title",
    "admin.pf.fsContact": "Contact",
    "admin.pf.email": "Email",
    "admin.pf.phone": "Phone",
    "admin.pf.address": "Address",
    "admin.pf.city": "City",
    "admin.pf.fsSchool": "School",
    "admin.pf.university": "University",
    "admin.pf.department": "Department",
    "admin.pf.fsSocial": "Links",
    "admin.pf.save": "Save",
    "admin.pf.reset": "Reset to defaults",
    "admin.pf.preview": "Preview",
    "admin.pf.note": "These details are stored in one language; the English pages show the same text.",

    "admin.st.title": "Settings",
    "admin.st.pass": "Change password",
    "admin.st.cur": "Current password",
    "admin.st.new": "New password",
    "admin.st.newHint": "At least 6 characters.",
    "admin.st.rep": "New password (again)",
    "admin.st.passSave": "Save password",
    "admin.st.backup": "Backup",
    "admin.st.backupLead": "Download messages and profile content as one JSON file, restore it in another browser.",
    "admin.st.download": "Download backup",
    "admin.st.restore": "Restore from backup",
    "admin.st.look": "Appearance",
    "admin.st.theme": "Theme",
    "admin.st.light": "Light (white notebook)",
    "admin.st.dark": "Dark (black notebook)",
    "admin.st.system": "Match system",
    "admin.st.lang": "Language",
    "admin.st.danger": "Reset",
    "admin.st.dangerLead": "Deletes every message, all profile edits and a changed password. This can't be undone, so download a backup first.",
    "admin.st.wipe": "Reset all data",

    /* JS */
    "admin.js.wrong": "Wrong password. Try again.",
    "admin.js.empty": "Type the password first.",
    "admin.js.locked": "Too many attempts. Try again in {s} s.",
    "admin.js.loginOk": "Notebook opened.",
    "admin.js.loggedOut": "Logged out.",
    "admin.js.today": "Today is {date}.",
    "admin.js.never": "none yet",
    "admin.js.contentDefault": "default",
    "admin.js.contentEdited": "{n} fields edited",
    "admin.js.contentEdited1": "1 field edited",
    "admin.js.chartDesc": "{total} messages in the last 7 days. Busiest day: {day} ({n}).",
    "admin.js.chartNone": "No messages in the last 7 days.",
    "admin.js.recentEmpty": "No letters yet. Send one from the contact page and it shows up here.",
    "admin.js.goContact": "Go to the contact form",
    "admin.js.summary": "{total} messages, {unread} unread.",
    "admin.js.summary1": "1 message, {unread} unread.",
    "admin.js.summaryNone": "The mailbox is empty.",
    "admin.js.emptyAll": "No letters yet. Messages sent from the contact form land here, in this browser.",
    "admin.js.emptySearch": "Nothing matches “{q}”. Try another word or clear the search.",
    "admin.js.emptyFilter": "No messages in this filter.",
    "admin.js.clearSearch": "Clear search",
    "admin.js.unread": "unread",
    "admin.js.hasDoodle": "has a doodle",
    "admin.js.noSubject": "(no topic)",
    "admin.js.markUnread": "Mark unread",
    "admin.js.markRead": "Mark read",
    "admin.js.deleted": "Message deleted.",
    "admin.js.undo": "Undo",
    "admin.js.restored": "Message restored.",
    "admin.js.allRead": "All messages marked as read.",
    "admin.js.nothingExport": "There are no messages to export yet.",
    "admin.js.exported": "{file} downloaded.",
    "admin.js.replyRe": "Re: ",
    "admin.js.replyBody": "Hi {name},\n\nThanks for your letter!\n\n",
    "admin.js.doodleAlt": "Doodle attached by {name}",
    "admin.js.topic": "Topic",

    "admin.js.req": "This field can't be empty.",
    "admin.js.badEmail": "Enter a valid email, like name@mail.com.",
    "admin.js.badPhone": "Use digits, spaces and an optional +, e.g. +90 500 000 00 00.",
    "admin.js.badUrl": "Enter a full link starting with https://",
    "admin.js.saved": "Saved. Reload open pages to see it.",
    "admin.js.savedToast": "Profile saved.",
    "admin.js.dirty": "You have unsaved changes.",
    "admin.js.clean": "Everything is saved.",
    "admin.js.fixErrors": "Fix the marked fields first.",
    "admin.js.resetQ": "Reset the profile to defaults?",
    "admin.js.resetText": "Every edited field goes back to its original value. Messages aren't touched.",
    "admin.js.resetOk": "Reset to defaults",
    "admin.js.resetDone": "Profile reset to defaults.",
    "admin.js.cancel": "Cancel",
    "admin.js.leaveQ": "You have unsaved changes",
    "admin.js.leaveText": "If you leave this page, the changes in the profile form will be lost.",
    "admin.js.leaveOk": "Leave without saving",
    "admin.js.storageFail": "The browser refused to save (storage may be full or disabled).",

    "admin.js.curWrong": "The current password is wrong.",
    "admin.js.short": "The new password needs at least 6 characters.",
    "admin.js.mismatch": "The two new passwords don't match.",
    "admin.js.passSaved": "Password changed. Use the new one next time.",
    "admin.js.noCrypto": "Web Crypto isn't available here (insecure context), so the password hash is computed with a built-in SHA-256.",
    "admin.js.backupDone": "Backup downloaded.",
    "admin.js.restoreQ": "Restore this backup?",
    "admin.js.restoreText": "It contains {m} messages and {c} profile fields. Your current messages and profile will be replaced.",
    "admin.js.restoreOk": "Restore",
    "admin.js.restoreDone": "Backup restored.",
    "admin.js.restoreBad": "This file isn't a valid panel backup.",
    "admin.js.wipeQ": "Reset all data?",
    "admin.js.wipeText": "{m} messages, profile edits and the changed password will be deleted. This can't be undone.",
    "admin.js.wipeOk": "Yes, delete everything",
    "admin.js.wipeDone": "All data reset. The password is back to the default.",
  });

(function () {
  "use strict";

  const D = window.Doodle;
  if (!D) return;
  const gsap = D.gsap || window.gsap;
  const RM = !!D.reducedMotion || !gsap;
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => [...(c || document).querySelectorAll(s)];
  const T = (key, tr, vars) => {
    let s = D.t(key, tr);
    if (vars) Object.keys(vars).forEach((k) => (s = s.split("{" + k + "}").join(String(vars[k]))));
    return s;
  };
  const lang = () => D.i18n.lang;
  const loc = () => (lang() === "en" ? "en-GB" : "tr-TR");

  /* ---------------------------------------------------------
     Sabitler + güvenli depolama
     --------------------------------------------------------- */
  const CONTENT_KEY = (D.content && D.content.key) || "doodle-content";
  const MSG_KEY = (D.content && D.content.messagesKey) || "doodle-messages";
  const HASH_KEY = "doodle-admin-hash";
  const SESSION_KEY = "doodle-admin-session";
  // SHA-256("vize2026") — düz metin kodda tutulmaz
  const DEFAULT_HASH = "38b49433df703f1047ae97af3c235752eea763c9d367376318a4a547f57d9d97";

  const FIELDS = ["name", "title", "email", "phone", "address", "city", "university", "department", "github", "linkedin", "instagram"];
  const DEFAULTS = {
    name: "Ad Soyad",
    title: "Bilgisayar Mühendisliği öğrencisi · frontend geliştirici",
    email: "ornek@mail.com",
    phone: "+90 500 000 00 00",
    address: "Örnek Mah. Defter Sok. No:7, Kadıköy / İstanbul",
    city: "İstanbul",
    university: "Örnek Üniversitesi",
    department: "Bilgisayar Mühendisliği",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    instagram: "https://instagram.com/",
  };
  const LIMITS = { name: 60, title: 90, email: 120, phone: 24, address: 140, city: 40, university: 80, department: 80, github: 200, linkedin: 200, instagram: 200 };

  const EMAIL_RE = /^[^\s@<>"']+@[^\s@.<>"']+(\.[^\s@.<>"']+)*\.[A-Za-zÀ-ÿ]{2,}$/;
  const PHONE_RE = /^\+?[\d][\d\s().-]{5,22}$/;
  const URL_RE = /^https?:\/\/[^\s<>"'`]+$/i;
  const DOODLE_RE = /^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/;

  const store = {
    get(k, fallback) {
      try {
        const v = localStorage.getItem(k);
        return v == null ? fallback : JSON.parse(v);
      } catch (e) {
        return fallback;
      }
    },
    set(k, v) {
      try {
        localStorage.setItem(k, JSON.stringify(v));
        return true;
      } catch (e) {
        return false;
      }
    },
    raw(k) {
      try {
        return localStorage.getItem(k);
      } catch (e) {
        return null;
      }
    },
    setRaw(k, v) {
      try {
        localStorage.setItem(k, v);
        return true;
      } catch (e) {
        return false;
      }
    },
    remove(k) {
      try {
        localStorage.removeItem(k);
      } catch (e) {}
    },
  };
  const session = {
    get() {
      try {
        return sessionStorage.getItem(SESSION_KEY);
      } catch (e) {
        return null;
      }
    },
    set(v) {
      try {
        if (v) sessionStorage.setItem(SESSION_KEY, v);
        else sessionStorage.removeItem(SESSION_KEY);
      } catch (e) {}
    },
  };

  /* ---------------------------------------------------------
     SHA-256 (Web Crypto; yoksa yerleşik yedek — güvensiz bağlam)
     --------------------------------------------------------- */
  const hasSubtle = !!(window.crypto && window.crypto.subtle && window.isSecureContext !== false);

  function sha256js(str) {
    const primes = [];
    for (let n = 2; primes.length < 64; n++) if (primes.every((p) => n % p)) primes.push(n);
    const frac = (x) => ((x - Math.floor(x)) * 4294967296) >>> 0;
    const K = primes.map((p) => frac(Math.cbrt(p)));
    let H = primes.slice(0, 8).map((p) => frac(Math.sqrt(p)));
    const bytes = new TextEncoder().encode(str);
    const len = bytes.length;
    const total = ((len + 9 + 63) >> 6) << 6;
    const buf = new Uint8Array(total);
    buf.set(bytes);
    buf[len] = 0x80;
    const dv = new DataView(buf.buffer);
    dv.setUint32(total - 8, Math.floor(len / 0x20000000));
    dv.setUint32(total - 4, (len * 8) >>> 0);
    const W = new Uint32Array(64);
    const rot = (x, n) => (x >>> n) | (x << (32 - n));
    for (let i = 0; i < total; i += 64) {
      for (let t = 0; t < 16; t++) W[t] = dv.getUint32(i + t * 4);
      for (let t = 16; t < 64; t++) {
        const s0 = rot(W[t - 15], 7) ^ rot(W[t - 15], 18) ^ (W[t - 15] >>> 3);
        const s1 = rot(W[t - 2], 17) ^ rot(W[t - 2], 19) ^ (W[t - 2] >>> 10);
        W[t] = (W[t - 16] + s0 + W[t - 7] + s1) | 0;
      }
      let [a, b, c, d, e, f, g, h] = H;
      for (let t = 0; t < 64; t++) {
        const t1 = (h + (rot(e, 6) ^ rot(e, 11) ^ rot(e, 25)) + ((e & f) ^ (~e & g)) + K[t] + W[t]) | 0;
        const t2 = ((rot(a, 2) ^ rot(a, 13) ^ rot(a, 22)) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
        h = g;
        g = f;
        f = e;
        e = (d + t1) | 0;
        d = c;
        c = b;
        b = a;
        a = (t1 + t2) | 0;
      }
      H = [a, b, c, d, e, f, g, h].map((v, k) => (H[k] + v) | 0);
    }
    return H.map((v) => (v >>> 0).toString(16).padStart(8, "0")).join("");
  }

  async function sha256(str) {
    if (hasSubtle) {
      try {
        const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
        return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
      } catch (e) {
        /* yedeğe düş */
      }
    }
    return sha256js(str);
  }

  const currentHash = () => {
    const h = store.raw(HASH_KEY);
    return h && /^[0-9a-f]{64}$/.test(h) ? h : DEFAULT_HASH;
  };
  const isAuthed = () => session.get() === currentHash();

  /* ---------------------------------------------------------
     Tarih biçimleri
     --------------------------------------------------------- */
  const parseDate = (iso) => {
    const d = new Date(iso);
    return isNaN(d) ? null : d;
  };
  const fmt = (d, opts) => {
    try {
      return new Intl.DateTimeFormat(loc(), opts).format(d);
    } catch (e) {
      return d.toLocaleString();
    }
  };
  const fmtFull = (d) => fmt(d, { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
  const fmtShort = (d) => {
    const now = new Date();
    if (d.toDateString() === now.toDateString()) return fmt(d, { hour: "2-digit", minute: "2-digit" });
    return fmt(d, { day: "numeric", month: "short" });
  };
  const fmtRelative = (d) => {
    const diff = (d - Date.now()) / 1000;
    const abs = Math.abs(diff);
    try {
      const rtf = new Intl.RelativeTimeFormat(lang(), { numeric: "auto" });
      if (abs < 60) return rtf.format(Math.round(diff), "second");
      if (abs < 3600) return rtf.format(Math.round(diff / 60), "minute");
      if (abs < 86400) return rtf.format(Math.round(diff / 3600), "hour");
      return rtf.format(Math.round(diff / 86400), "day");
    } catch (e) {
      return fmtShort(d);
    }
  };

  /* ---------------------------------------------------------
     Toast + onay diyaloğu
     --------------------------------------------------------- */
  const toasts = $("#adminToasts");

  function toast(text, opts) {
    const o = opts || {};
    const el = document.createElement("div");
    el.className = "admin-toast" + (o.tone ? " admin-toast--" + o.tone : "");
    const p = document.createElement("p");
    p.textContent = text;
    el.appendChild(p);
    let timer = 0;
    const close = () => {
      clearTimeout(timer);
      if (!el.isConnected) return;
      if (RM) return el.remove();
      gsap.to(el, { opacity: 0, y: 16, rotate: 4, duration: 0.2, ease: "power2.in", onComplete: () => el.remove() });
    };
    if (o.action) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "admin-toast__action";
      b.textContent = o.action.label;
      b.addEventListener("click", () => {
        o.action.fn();
        close();
      });
      el.appendChild(b);
    }
    toasts.appendChild(el);
    while (toasts.children.length > 3) toasts.firstElementChild.remove();
    if (!RM) gsap.fromTo(el, { opacity: 0, y: 30, rotate: -6, scale: 0.9 }, { opacity: 1, y: 0, rotate: -1, scale: 1, duration: 0.4, ease: "back.out(2)" });
    // eylemli toast: imleç/odak üstündeyken kapanmasın
    let left = o.timeout || (o.action ? 7000 : 3800);
    let started = Date.now();
    const arm = () => {
      started = Date.now();
      timer = setTimeout(close, left);
    };
    const pause = () => {
      clearTimeout(timer);
      left = Math.max(1500, left - (Date.now() - started));
    };
    el.addEventListener("pointerenter", pause);
    el.addEventListener("pointerleave", arm);
    el.addEventListener("focusin", pause);
    el.addEventListener("focusout", arm);
    arm();
    return { close };
  }

  const dlg = $("#adminDialog");
  function confirmDialog(o) {
    return new Promise((resolve) => {
      if (!dlg || typeof dlg.showModal !== "function") {
        // <dialog> desteklenmiyorsa: güvenli tarafta kal (işlemi yapma)
        toast(o.text, { tone: "warn" });
        return resolve(false);
      }
      const opener = document.activeElement;
      $("#dlgTitle").textContent = o.title;
      $("#dlgText").textContent = o.text;
      const ok = $("#dlgOk");
      const cancel = $("#dlgCancel");
      ok.textContent = o.ok;
      cancel.textContent = T("admin.js.cancel", "Vazgeç");
      ok.className = "admin-btn " + (o.danger === false ? "admin-btn--primary" : "admin-btn--danger");
      dlg.returnValue = "";
      if (D.lenis) D.lenis.stop();
      dlg.showModal();
      cancel.focus(); // yıkıcı işlemde güvenli varsayılan
      if (!RM) gsap.fromTo($(".admin-dialog__inner", dlg), { y: -30, rotate: -4, scale: 0.92, opacity: 0 }, { y: 0, rotate: -1, scale: 1, opacity: 1, duration: 0.35, ease: "back.out(2)" });
      dlg.addEventListener(
        "close",
        () => {
          if (D.lenis) D.lenis.start();
          if (opener && opener.isConnected) opener.focus({ preventScroll: true });
          resolve(dlg.returnValue === "ok");
        },
        { once: true }
      );
    });
  }
  if (dlg) {
    // arka plana tıklayınca kapat
    dlg.addEventListener("click", (e) => {
      if (e.target === dlg) dlg.close("cancel");
    });
  }

  /* ---------------------------------------------------------
     İndirme yardımcısı
     --------------------------------------------------------- */
  function download(name, text, type) {
    const blob = new Blob([text], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.hidden = true;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      URL.revokeObjectURL(url);
      a.remove();
    }, 500);
  }
  const stamp = () => new Date().toISOString().slice(0, 10);

  /* =========================================================
     1. GİRİŞ
     ========================================================= */
  const gate = $("#adminGate");
  const app = $("#adminApp");
  const book = $("#adminBook");
  const cover = $("#adminCover");
  const loginForm = $("#loginForm");
  const loginPass = $("#loginPass");
  const loginError = $("#loginError");
  let fails = 0;
  let lockUntil = 0;
  let lockTimer = 0;

  // şifre göster/gizle
  $$("[data-toggle-pass]").forEach((btn) => {
    const input = document.getElementById(btn.dataset.togglePass);
    const sync = () => {
      const shown = input.type === "text";
      btn.setAttribute("aria-pressed", String(shown));
      btn.setAttribute("aria-label", shown ? T("admin.pass.hide", "Şifreyi gizle") : T("admin.pass.show", "Şifreyi göster"));
      btn.classList.toggle("is-on", shown);
    };
    btn.addEventListener("click", () => {
      input.type = input.type === "password" ? "text" : "password";
      sync();
      input.focus();
    });
    document.addEventListener("doodle:lang", sync);
  });

  function lockMessage() {
    const s = Math.ceil((lockUntil - Date.now()) / 1000);
    if (s <= 0) {
      clearInterval(lockTimer);
      loginError.textContent = "";
      loginPass.disabled = false;
      return;
    }
    loginError.textContent = T("admin.js.locked", "Çok fazla deneme. {s} sn sonra tekrar dene.", { s });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (Date.now() < lockUntil) return;
      const val = loginPass.value;
      if (!val) {
        loginError.textContent = T("admin.js.empty", "Önce şifreyi yaz.");
        D.juice.shake(cover, 0.6);
        loginPass.focus();
        return;
      }
      const h = await sha256(val);
      if (h === currentHash()) {
        fails = 0;
        loginError.textContent = "";
        session.set(h);
        loginPass.value = "";
        openBook();
      } else {
        fails++;
        loginError.textContent = T("admin.js.wrong", "Şifre yanlış. Tekrar dene.");
        loginPass.setAttribute("aria-invalid", "true");
        D.juice.shake(cover, 1.3);
        loginPass.select();
        if (fails >= 5) {
          lockUntil = Date.now() + 30000;
          fails = 0;
          loginPass.disabled = true;
          lockMessage();
          clearInterval(lockTimer);
          lockTimer = setInterval(lockMessage, 1000);
        }
      }
    });
    loginPass.addEventListener("input", () => {
      loginPass.removeAttribute("aria-invalid");
      if (Date.now() >= lockUntil) loginError.textContent = "";
    });
  }

  function showApp(animate) {
    gate.hidden = true;
    app.hidden = false;
    document.documentElement.classList.add("admin-authed");
    renderAll();
    const fromHash = tabFromHash();
    selectTab(fromHash || "overview", { focus: false, push: false });
    if (animate && !RM) {
      gsap.fromTo(app, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.45, ease: "expo.out", clearProps: "opacity,transform" });
    }
    const first = $(".admin-tab[aria-selected='true']");
    if (animate && first) first.focus({ preventScroll: true });
    if (D.ScrollTrigger) D.ScrollTrigger.refresh();
  }

  function openBook() {
    if (RM) {
      showApp(false);
      toast(T("admin.js.loginOk", "Defter açıldı."));
      const first = $(".admin-tab[aria-selected='true']");
      if (first) first.focus();
      return;
    }
    const r = cover.getBoundingClientRect();
    D.juice.burst(r.left + r.width * 0.85, r.top + r.height * 0.5, { count: 22, power: 1.6 });
    book.classList.add("is-opening");
    gsap
      .timeline({ onComplete: () => showApp(true) })
      .to($(".admin-book__band", cover), { xPercent: 140, opacity: 0, duration: 0.25, ease: "power2.in" })
      .to(cover, { rotateY: -168, duration: 0.85, ease: "power3.inOut" }, "-=0.05")
      .to($(".admin-book__scribble", book), { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(3)" }, "-=0.35")
      .to(book, { scale: 1.04, opacity: 0, duration: 0.3, ease: "power2.in" }, "+=0.15");
  }

  function closeBook() {
    session.set(null);
    app.hidden = true;
    gate.hidden = false;
    document.documentElement.classList.remove("admin-authed");
    book.classList.remove("is-opening");
    if (!RM) {
      gsap.set([cover, book, $(".admin-book__band", cover), $(".admin-book__scribble", book)], { clearProps: "all" });
      gsap.fromTo(book, { y: 30, rotate: -3, opacity: 0 }, { y: 0, rotate: 0, opacity: 1, duration: 0.5, ease: "back.out(1.6)", clearProps: "transform,opacity" });
    }
    history.replaceState(null, "", location.pathname + location.search);
    loginPass.focus({ preventScroll: true });
    toast(T("admin.js.loggedOut", "Çıkış yapıldı."));
  }
  $("#logoutBtn").addEventListener("click", closeBook);

  /* =========================================================
     2. SEKMELER (ARIA tabs, ok tuşları, #hash)
     ========================================================= */
  const tabs = $$(".admin-tab");
  const HASHES = { overview: "ozet", messages: "mesajlar", profile: "profil", settings: "ayarlar" };
  const tabFromHash = () => {
    const h = location.hash.replace("#", "");
    return Object.keys(HASHES).find((k) => HASHES[k] === h) || null;
  };

  function selectTab(name, opts) {
    const o = Object.assign({ focus: true, push: true }, opts);
    tabs.forEach((t) => {
      const on = t.dataset.tab === name;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute("aria-controls"));
      panel.hidden = !on;
      if (on && !RM) {
        gsap.fromTo(panel, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.22, ease: "power2.out", clearProps: "opacity,transform" });
      }
      if (on && o.focus) t.focus();
    });
    if (o.push) history.replaceState(null, "", "#" + HASHES[name]);
    if (name === "overview") renderOverview(true);
    if (name === "messages") renderMessages();
  }

  tabs.forEach((t, i) => {
    t.addEventListener("click", () => selectTab(t.dataset.tab, { focus: false }));
    t.addEventListener("keydown", (e) => {
      let j = null;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") j = (i + 1) % tabs.length;
      else if (e.key === "ArrowUp" || e.key === "ArrowLeft") j = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === "Home") j = 0;
      else if (e.key === "End") j = tabs.length - 1;
      if (j == null) return;
      e.preventDefault();
      selectTab(tabs[j].dataset.tab);
    });
  });
  $$("[data-goto]").forEach((b) => b.addEventListener("click", () => selectTab(b.dataset.goto)));
  window.addEventListener("hashchange", () => {
    const t = tabFromHash();
    if (t && isAuthed()) selectTab(t, { focus: false, push: false });
  });

  /* =========================================================
     3. MESAJLAR
     ========================================================= */
  const str = (v, max) => (typeof v === "string" ? v : v == null ? "" : String(v)).slice(0, max || 2000);

  function normalize(m) {
    if (!m || typeof m !== "object") return null;
    const d = parseDate(m.date);
    return {
      id: str(m.id, 40) || Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      date: d ? d.toISOString() : new Date().toISOString(),
      read: m.read === true,
      lang: m.lang === "en" ? "en" : "tr",
      name: str(m.name, 80),
      email: str(m.email, 140),
      subject: str(m.subject, 120),
      message: str(m.message, 4000),
      doodle: typeof m.doodle === "string" && m.doodle.length < 600000 && DOODLE_RE.test(m.doodle) ? m.doodle : "",
    };
  }

  const loadMessages = () => {
    const list = store.get(MSG_KEY, []);
    return Array.isArray(list) ? list.map(normalize).filter(Boolean) : [];
  };
  const saveMessages = (list) => {
    const ok = store.set(
      MSG_KEY,
      list.map((m) => {
        const o = Object.assign({}, m);
        if (!o.doodle) delete o.doodle;
        return o;
      })
    );
    if (!ok) toast(T("admin.js.storageFail", "Tarayıcı kaydetmeye izin vermedi (depolama dolu ya da kapalı olabilir)."), { tone: "warn" });
    return ok;
  };

  let messages = loadMessages();
  let filter = "all";
  let query = "";
  let selectedId = null;

  const listEl = $("#msgList");
  const emptyEl = $("#msgEmpty");
  const mailEl = $("#adminMail");
  const searchEl = $("#msgSearch");
  const badge = $("#unreadBadge");

  const unreadCount = () => messages.filter((m) => !m.read).length;

  function updateBadge() {
    const n = unreadCount();
    badge.hidden = n === 0;
    badge.textContent = n > 99 ? "99+" : String(n);
    badge.setAttribute("aria-label", n + " " + T("admin.js.unread", "okunmamış"));
  }

  function visibleMessages() {
    const q = query.trim().toLocaleLowerCase(loc());
    return messages.filter((m) => {
      if (filter === "unread" && m.read) return false;
      if (filter === "read" && !m.read) return false;
      if (!q) return true;
      return [m.name, m.email, m.subject, m.message].some((s) => s.toLocaleLowerCase(loc()).includes(q));
    });
  }

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function doodleIcon(name, cls) {
    const s = el("span", "doodle" + (cls ? " " + cls : ""));
    s.dataset.doodle = name;
    return s;
  }

  function renderEmpty() {
    emptyEl.textContent = "";
    let text;
    if (!messages.length) text = T("admin.js.emptyAll", "Henüz mektup yok. İletişim formundan gönderilen mesajlar bu tarayıcıda buraya düşer.");
    else if (query.trim()) text = T("admin.js.emptySearch", "“{q}” ile eşleşen bir şey yok. Başka bir kelime dene ya da aramayı temizle.", { q: query.trim() });
    else text = T("admin.js.emptyFilter", "Bu filtrede mesaj yok.");
    emptyEl.appendChild(doodleIcon(messages.length ? "eye" : "mail", "admin-empty__icon"));
    emptyEl.appendChild(el("p", null, text));
    if (!messages.length) {
      const a = el("a", "admin-btn admin-btn--ghost admin-btn--sm", T("admin.js.goContact", "İletişim formuna git"));
      a.href = "iletisim.html#mektup";
      emptyEl.appendChild(a);
    } else if (query.trim()) {
      const b = el("button", "admin-btn admin-btn--ghost admin-btn--sm", T("admin.js.clearSearch", "Aramayı temizle"));
      b.type = "button";
      b.addEventListener("click", () => {
        query = "";
        searchEl.value = "";
        renderMessages();
        searchEl.focus();
      });
      emptyEl.appendChild(b);
    }
    D.hydrate(emptyEl);
  }

  function renderMessages() {
    const vis = visibleMessages();
    listEl.textContent = "";
    vis.forEach((m) => {
      const li = el("li", "admin-list__li");
      const b = el("button", "admin-item" + (m.read ? "" : " is-unread") + (m.id === selectedId ? " is-selected" : ""));
      b.type = "button";
      b.dataset.id = m.id;
      if (m.id === selectedId) b.setAttribute("aria-current", "true");
      const top = el("span", "admin-item__top");
      const name = el("span", "admin-item__name", m.name || "—");
      const d = parseDate(m.date);
      const time = el("time", "admin-item__date", d ? fmtShort(d) : "");
      if (d) time.dateTime = m.date;
      top.append(name, time);
      const subj = el("span", "admin-item__subject", m.subject || T("admin.js.noSubject", "(konu yok)"));
      const snip = el("span", "admin-item__snip", m.message.replace(/\s+/g, " ").slice(0, 110));
      const flags = el("span", "admin-item__flags");
      if (!m.read) flags.append(el("span", "admin-item__dot"), el("span", "sr-only", T("admin.js.unread", "okunmamış")));
      if (m.doodle) {
        flags.append(doodleIcon("pencil", "admin-item__clip"), el("span", "sr-only", T("admin.js.hasDoodle", "doodle eki var")));
      }
      b.append(flags, top, subj, snip);
      b.addEventListener("click", () => openMessage(m.id, { focusDetail: true }));
      li.appendChild(b);
      listEl.appendChild(li);
    });
    D.hydrate(listEl);
    emptyEl.hidden = vis.length > 0;
    listEl.hidden = vis.length === 0;
    if (!vis.length) renderEmpty();

    const total = messages.length;
    $("#msgSummary").textContent = total
      ? total === 1
        ? T("admin.js.summary1", "1 mesaj, {unread} okunmamış.", { unread: unreadCount() })
        : T("admin.js.summary", "{total} mesaj, {unread} okunmamış.", { total, unread: unreadCount() })
      : T("admin.js.summaryNone", "Posta kutusu boş.");
    $$(".admin-seg__btn").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === filter)));
    $("#markAllBtn").disabled = unreadCount() === 0;
    $("#exportJson").disabled = $("#exportCsv").disabled = total === 0;
    updateBadge();
    renderDetail();
  }

  const detailEmpty = $("#detailEmpty");
  const detailBody = $("#detailBody");
  const detail = $("#msgDetail");

  function renderDetail() {
    const m = messages.find((x) => x.id === selectedId);
    detailEmpty.hidden = !!m;
    detailBody.hidden = !m;
    mailEl.classList.toggle("is-detail", !!m);
    if (!m) return;
    const d = parseDate(m.date);
    $("#detailTopic").textContent = T("admin.js.topic", "Konu");
    $("#detailSubject").textContent = m.subject || T("admin.js.noSubject", "(konu yok)");
    $("#detailFrom").textContent = m.name || "—";
    $("#detailEmail").textContent = m.email || "—";
    $("#detailDate").textContent = d ? fmtFull(d) + " · " + fmtRelative(d) : "—";
    $("#detailText").textContent = m.message;
    const fig = $("#detailDoodle");
    const img = $("#detailImg");
    if (m.doodle) {
      img.src = m.doodle;
      img.alt = T("admin.js.doodleAlt", "{name} tarafından eklenen doodle", { name: m.name || "—" });
      fig.hidden = false;
    } else {
      img.removeAttribute("src");
      fig.hidden = true;
    }
    const reply = $("#detailReply");
    if (EMAIL_RE.test(m.email)) {
      const subject = T("admin.js.replyRe", "Ynt: ") + (m.subject || "");
      const body = T("admin.js.replyBody", "Merhaba {name},\n\nMektubun için teşekkürler!\n\n", { name: (m.name || "").split(" ")[0] });
      reply.href = "mailto:" + encodeURIComponent(m.email).replace(/%40/g, "@") + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      reply.removeAttribute("aria-disabled");
      reply.classList.remove("is-disabled");
    } else {
      reply.removeAttribute("href");
      reply.setAttribute("aria-disabled", "true");
      reply.classList.add("is-disabled");
    }
    $("#detailToggleLabel").textContent = m.read ? T("admin.js.markUnread", "Okunmadı yap") : T("admin.js.markRead", "Okundu yap");
  }

  function openMessage(id, opts) {
    const o = opts || {};
    const m = messages.find((x) => x.id === id);
    if (!m) return;
    selectedId = id;
    if (!m.read) {
      m.read = true;
      saveMessages(messages);
    }
    renderMessages();
    if (!RM) gsap.fromTo(detail, { rotate: -1.2, y: 8, opacity: 0.6 }, { rotate: 0, y: 0, opacity: 1, duration: 0.25, ease: "power2.out", clearProps: "transform,opacity" });
    if (o.focusDetail) {
      // mobilde detay listenin yerini alır; odak başlığa
      const h = $("#detailSubject");
      h.tabIndex = -1;
      h.focus({ preventScroll: true });
      if (window.innerWidth < 900) {
        const y = detail.getBoundingClientRect().top + window.scrollY - 100;
        if (D.lenis) D.lenis.scrollTo(Math.max(0, y), { immediate: RM });
        else window.scrollTo(0, Math.max(0, y));
      }
    }
  }

  $("#detailBack").addEventListener("click", () => {
    const id = selectedId;
    selectedId = null;
    renderMessages();
    const btn = listEl.querySelector('[data-id="' + CSS.escape(id || "") + '"]');
    if (btn) btn.focus();
  });

  $("#detailToggle").addEventListener("click", () => {
    const m = messages.find((x) => x.id === selectedId);
    if (!m) return;
    m.read = !m.read;
    saveMessages(messages);
    renderMessages();
    renderOverview();
  });

  $("#detailReply").addEventListener("click", (e) => {
    if (e.currentTarget.getAttribute("aria-disabled") === "true") e.preventDefault();
  });

  /* --- silme: kağıt buruşur, çöpe düşer; geri al toast'ı --- */
  function crumple(sourceEl) {
    if (RM || !sourceEl) return;
    const r = sourceEl.getBoundingClientRect();
    if (!r.width) return;
    const ghost = sourceEl.cloneNode(true);
    ghost.removeAttribute("id");
    $$("[id]", ghost).forEach((n) => n.removeAttribute("id"));
    ghost.setAttribute("aria-hidden", "true");
    ghost.classList.add("admin-crumple");
    Object.assign(ghost.style, { position: "fixed", left: r.left + "px", top: r.top + "px", width: r.width + "px", height: r.height + "px", margin: 0, zIndex: 1600, pointerEvents: "none" });
    document.body.appendChild(ghost);
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const ball = Math.min(r.width, r.height) * 0.5;
    gsap
      .timeline({ onComplete: () => ghost.remove() })
      .to(ghost, { keyframes: [{ skewX: 6, scaleY: 0.92, rotate: -3 }, { skewX: -8, scaleX: 0.86, rotate: 4 }, { skewX: 4, scale: 0.7, rotate: -8 }], duration: 0.32, ease: "power1.inOut" })
      .to(ghost, { borderRadius: "48% 52% 45% 55% / 55% 45% 52% 48%", clipPath: "inset(" + (r.height / 2 - ball / 2) + "px " + (r.width / 2 - ball / 2) + "px round 50%)", scale: 0.42, rotate: 220, filter: "contrast(1.2) brightness(0.92)", duration: 0.32, ease: "power2.in" })
      .add(() => D.juice.burst(cx, cy, { count: 10, power: 0.8 }))
      .to(ghost, { y: window.innerHeight - r.top + 80, x: "+=" + D.random(-60, 60), rotate: "+=260", duration: 0.55, ease: "power2.in" });
  }

  async function deleteMessage(id) {
    const idx = messages.findIndex((x) => x.id === id);
    if (idx < 0) return;
    const removed = messages[idx];
    const listBtn = listEl.querySelector('[data-id="' + CSS.escape(id) + '"]');
    crumple(detail);
    if (listBtn && !RM) gsap.to(listBtn, { scaleY: 0.4, opacity: 0, duration: 0.2, ease: "power2.in" });
    messages.splice(idx, 1);
    saveMessages(messages);
    // sonraki mesajı seç (masaüstü) ya da listeye dön
    const vis = visibleMessages();
    const next = window.innerWidth >= 900 ? vis[Math.min(idx, vis.length - 1)] : null;
    selectedId = next ? next.id : null;
    if (next && !next.read) {
      next.read = true;
      saveMessages(messages);
    }
    renderMessages();
    renderOverview();
    const focusTo = selectedId ? $("#detailSubject") : listEl.querySelector(".admin-item") || searchEl;
    if (focusTo) {
      if (focusTo.id === "detailSubject") focusTo.tabIndex = -1;
      focusTo.focus({ preventScroll: true });
    }
    toast(T("admin.js.deleted", "Mesaj silindi."), {
      action: {
        label: T("admin.js.undo", "Geri al"),
        fn: () => {
          messages = loadMessages();
          messages.splice(Math.min(idx, messages.length), 0, removed);
          saveMessages(messages);
          selectedId = removed.id;
          renderMessages();
          renderOverview();
          toast(T("admin.js.restored", "Mesaj geri geldi."));
        },
      },
    });
  }
  $("#detailDelete").addEventListener("click", () => selectedId && deleteMessage(selectedId));

  // klavye: listede ↑/↓ ile gez, Delete ile sil
  listEl.addEventListener("keydown", (e) => {
    const items = $$(".admin-item", listEl);
    const i = items.indexOf(document.activeElement);
    if (i < 0) return;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const n = items[Math.max(0, Math.min(items.length - 1, i + (e.key === "ArrowDown" ? 1 : -1)))];
      n.focus();
    } else if (e.key === "Delete") {
      e.preventDefault();
      deleteMessage(items[i].dataset.id);
    }
  });

  let searchTimer = 0;
  searchEl.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      query = searchEl.value;
      renderMessages();
    }, 120);
  });
  searchEl.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && searchEl.value) {
      searchEl.value = "";
      query = "";
      renderMessages();
    }
  });
  $$(".admin-seg__btn").forEach((b) =>
    b.addEventListener("click", () => {
      filter = b.dataset.filter;
      renderMessages();
    })
  );
  $("#markAllBtn").addEventListener("click", () => {
    if (!unreadCount()) return;
    messages.forEach((m) => (m.read = true));
    saveMessages(messages);
    renderMessages();
    renderOverview();
    toast(T("admin.js.allRead", "Tüm mesajlar okundu sayıldı."));
  });

  /* --- dışa aktar --- */
  $("#exportJson").addEventListener("click", () => {
    if (!messages.length) return toast(T("admin.js.nothingExport", "Dışa aktarılacak mesaj yok."));
    const file = "mesajlar-" + stamp() + ".json";
    download(file, JSON.stringify(messages, null, 2), "application/json");
    toast(T("admin.js.exported", "{file} indirildi.", { file }));
  });
  $("#exportCsv").addEventListener("click", () => {
    if (!messages.length) return toast(T("admin.js.nothingExport", "Dışa aktarılacak mesaj yok."));
    const cell = (v) => {
      let s = String(v == null ? "" : v);
      if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; // CSV formül enjeksiyonuna karşı
      return '"' + s.replace(/"/g, '""') + '"';
    };
    const head = ["id", "date", "name", "email", "subject", "message", "read", "lang", "doodle"];
    const rows = messages.map((m) => [m.id, m.date, m.name, m.email, m.subject, m.message, m.read ? "1" : "0", m.lang, m.doodle ? "1" : "0"].map(cell).join(";"));
    const file = "mesajlar-" + stamp() + ".csv";
    download(file, "﻿" + [head.join(";")].concat(rows).join("\r\n"), "text/csv;charset=utf-8");
    toast(T("admin.js.exported", "{file} indirildi.", { file }));
  });

  // başka sekmede form gönderilirse (storage olayı) listeyi tazele
  window.addEventListener("storage", (e) => {
    if (e.key === MSG_KEY || e.key === null) {
      messages = loadMessages();
      if (selectedId && !messages.some((m) => m.id === selectedId)) selectedId = null;
      if (isAuthed()) {
        renderMessages();
        renderOverview();
      }
    }
    if (e.key === CONTENT_KEY && isAuthed() && !profileDirty()) fillProfile();
  });

  /* =========================================================
     4. ÖZET
     ========================================================= */
  const getContent = () => {
    const c = store.get(CONTENT_KEY, {});
    return c && typeof c === "object" && !Array.isArray(c) ? c : {};
  };
  const editedCount = () => {
    const c = getContent();
    return FIELDS.filter((k) => typeof c[k] === "string" && c[k].trim() && c[k].trim() !== DEFAULTS[k]).length;
  };

  function renderChart(animate) {
    const svg = $("#adminChart");
    const NS = "http://www.w3.org/2000/svg";
    const desc = $("#chartDesc");
    $$(":scope > :not(desc)", svg).forEach((n) => n.remove());

    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      days.push({ d, n: 0 });
    }
    messages.forEach((m) => {
      const d = parseDate(m.date);
      if (!d) return;
      const k = new Date(d);
      k.setHours(0, 0, 0, 0);
      const slot = days.find((x) => x.d.getTime() === k.getTime());
      if (slot) slot.n++;
    });
    const max = Math.max(1, ...days.map((x) => x.n));
    const W = 420,
      base = 160,
      top = 26,
      bw = 34,
      gap = (W - 40 - bw * 7) / 6;
    const mk = (tag, attrs) => {
      const n = document.createElementNS(NS, tag);
      Object.keys(attrs).forEach((k) => n.setAttribute(k, attrs[k]));
      svg.appendChild(n);
      return n;
    };
    // taban çizgisi (elle)
    mk("path", { class: "admin-chart__base", d: "M10 " + (base + 1) + " C120 " + (base - 1) + " 300 " + (base + 3) + " 410 " + base });
    const wob = () => D.random(-1.6, 1.6);
    const bars = [];
    const tbody = $("#chartTable tbody");
    tbody.textContent = "";
    days.forEach((x, i) => {
      const x0 = 20 + i * (bw + gap);
      const h = x.n ? Math.max(8, ((base - top) * x.n) / max) : 3;
      const y = base - h;
      const isToday = i === 6;
      const d =
        "M" + (x0 + wob()) + " " + base +
        " L" + (x0 + wob()) + " " + (y + wob()) +
        " C" + (x0 + bw * 0.3) + " " + (y - 2 + wob()) + " " + (x0 + bw * 0.7) + " " + (y + 2 + wob()) + " " + (x0 + bw + wob()) + " " + (y + wob()) +
        " L" + (x0 + bw + wob()) + " " + base;
      const bar = mk("path", { class: "admin-chart__bar" + (isToday ? " is-today" : "") + (x.n ? "" : " is-zero"), d });
      bars.push(bar);
      if (x.n) {
        // tarama dolgu çizgileri
        let hatch = "";
        for (let yy = base - 8; yy > y + 4; yy -= 9) hatch += "M" + (x0 + 4) + " " + yy + " L" + (x0 + bw - 4) + " " + (yy - 6) + " ";
        if (hatch) bars.push(mk("path", { class: "admin-chart__hatch" + (isToday ? " is-today" : ""), d: hatch }));
        const t = mk("text", { class: "admin-chart__n", x: x0 + bw / 2, y: y - 8, "text-anchor": "middle" });
        t.textContent = x.n;
      }
      const lbl = mk("text", { class: "admin-chart__day" + (isToday ? " is-today" : ""), x: x0 + bw / 2, y: base + 26, "text-anchor": "middle" });
      const dayName = fmt(x.d, { weekday: "short" });
      lbl.textContent = dayName;
      const tr = document.createElement("tr");
      const th = document.createElement("th");
      th.scope = "row";
      th.textContent = fmt(x.d, { weekday: "long", day: "numeric", month: "long" });
      const td = document.createElement("td");
      td.textContent = x.n;
      tr.append(th, td);
      tbody.appendChild(tr);
    });
    const total = days.reduce((a, x) => a + x.n, 0);
    const busiest = days.reduce((a, x) => (x.n > a.n ? x : a), days[0]);
    desc.textContent = total
      ? T("admin.js.chartDesc", "Son 7 günde {total} mesaj. En yoğun gün: {day} ({n}).", { total, day: fmt(busiest.d, { weekday: "long" }), n: busiest.n })
      : T("admin.js.chartNone", "Son 7 günde mesaj yok.");
    if (animate && !RM) {
      bars.forEach((b) => D.prepDraw(b));
      gsap.to(bars, { strokeDashoffset: 0, duration: 0.7, stagger: 0.05, ease: "power2.out" });
    }
  }

  function renderOverview(animate) {
    const today = fmt(new Date(), { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    $("#ovToday").textContent = T("admin.js.today", "Bugün {date}.", { date: today });
    $("#ovUnread").textContent = unreadCount();
    $("#ovTotal").textContent = messages.length;
    const lastD = messages.map((m) => parseDate(m.date)).filter(Boolean).sort((a, b) => b - a)[0];
    $("#ovLast").textContent = lastD ? fmtRelative(lastD) + " · " + fmtShort(lastD) : T("admin.js.never", "henüz yok");
    const n = editedCount();
    $("#ovContent").textContent = n === 0 ? T("admin.js.contentDefault", "varsayılan") : n === 1 ? T("admin.js.contentEdited1", "1 alan düzenlendi") : T("admin.js.contentEdited", "{n} alan düzenlendi", { n });
    $("#ovUnread").closest(".admin-ledger__row").classList.toggle("is-hot", unreadCount() > 0);
    renderChart(animate);

    const ul = $("#ovRecent");
    ul.textContent = "";
    const recent = messages.slice(0, 3);
    if (!recent.length) {
      const li = el("li", "admin-recent__empty");
      li.appendChild(el("p", null, T("admin.js.recentEmpty", "Henüz mektup yok. İletişim sayfasından bir tane gönder, burada görünsün.")));
      const a = el("a", "admin-btn admin-btn--ghost admin-btn--sm", T("admin.js.goContact", "İletişim formuna git"));
      a.href = "iletisim.html#mektup";
      li.appendChild(a);
      ul.appendChild(li);
    }
    recent.forEach((m) => {
      const li = el("li");
      const b = el("button", "admin-recent__item" + (m.read ? "" : " is-unread"));
      b.type = "button";
      const d = parseDate(m.date);
      const nm = el("span", "admin-recent__name", m.name || "—");
      const sb = el("span", "admin-recent__subj", m.subject || T("admin.js.noSubject", "(konu yok)"));
      const tm = el("time", "admin-recent__date", d ? fmtShort(d) : "");
      if (!m.read) b.append(el("span", "admin-item__dot"), el("span", "sr-only", T("admin.js.unread", "okunmamış")));
      b.append(nm, sb, tm);
      b.addEventListener("click", () => {
        selectTab("messages", { focus: false });
        openMessage(m.id, { focusDetail: true });
      });
      li.appendChild(b);
      ul.appendChild(li);
    });
  }

  /* =========================================================
     5. PROFİL / İÇERİK
     ========================================================= */
  const pForm = $("#profileForm");
  const pState = $("#profileState");
  const inputs = {};
  FIELDS.forEach((k) => (inputs[k] = $("#pf-" + k)));
  let savedSnapshot = "";

  const formValues = () => {
    const o = {};
    FIELDS.forEach((k) => (o[k] = inputs[k].value.trim()));
    return o;
  };
  const profileDirty = () => !!savedSnapshot && JSON.stringify(formValues()) !== savedSnapshot;

  function fillProfile() {
    const c = getContent();
    FIELDS.forEach((k) => {
      const v = typeof c[k] === "string" && c[k].trim() ? c[k] : DEFAULTS[k];
      inputs[k].value = v;
      inputs[k].placeholder = DEFAULTS[k];
      setFieldError(k, "");
    });
    savedSnapshot = JSON.stringify(formValues());
    renderPreview();
    renderProfileState();
  }

  function validateProfileField(k) {
    const v = inputs[k].value.trim();
    if ((k === "name" || k === "email") && !v) return T("admin.js.req", "Bu alan boş kalamaz.");
    if (!v) return "";
    if (k === "email" && !EMAIL_RE.test(v)) return T("admin.js.badEmail", "Geçerli bir e-posta yaz, ör. ad@mail.com.");
    if (k === "phone" && !PHONE_RE.test(v)) return T("admin.js.badPhone", "Rakam, boşluk ve isteğe bağlı + kullan, ör. +90 500 000 00 00.");
    if ((k === "github" || k === "linkedin" || k === "instagram") && !URL_RE.test(v)) return T("admin.js.badUrl", "https:// ile başlayan tam bir bağlantı yaz.");
    return "";
  }

  function setFieldError(k, msg) {
    const err = $("#pf-" + k + "-err");
    err.textContent = msg;
    if (msg) {
      inputs[k].setAttribute("aria-invalid", "true");
      inputs[k].setAttribute("aria-describedby", "pf-" + k + "-err");
    } else {
      inputs[k].removeAttribute("aria-invalid");
      inputs[k].removeAttribute("aria-describedby");
    }
  }

  function renderPreview() {
    const v = formValues();
    $$("[data-pv]").forEach((n) => {
      const k = n.dataset.pv;
      n.textContent = v[k] || DEFAULTS[k];
    });
  }

  function renderProfileState(text) {
    pState.classList.toggle("is-dirty", profileDirty());
    pState.textContent = text || (profileDirty() ? T("admin.js.dirty", "Kaydedilmemiş değişiklik var.") : T("admin.js.clean", "Her şey kayıtlı."));
  }

  FIELDS.forEach((k) => {
    inputs[k].addEventListener("input", () => {
      renderPreview();
      renderProfileState();
      if (inputs[k].hasAttribute("aria-invalid")) setFieldError(k, validateProfileField(k));
    });
    inputs[k].addEventListener("blur", () => setFieldError(k, validateProfileField(k)));
  });

  pForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = $("#profileSave");
    let firstBad = null;
    FIELDS.forEach((k) => {
      const msg = validateProfileField(k);
      setFieldError(k, msg);
      if (msg && !firstBad) firstBad = inputs[k];
    });
    if (firstBad) {
      renderProfileState(T("admin.js.fixErrors", "Önce işaretli alanları düzelt."));
      D.juice.shake(pForm, 0.7);
      firstBad.focus();
      return;
    }
    const v = formValues();
    const out = {};
    FIELDS.forEach((k) => {
      if (v[k]) out[k] = v[k].slice(0, LIMITS[k]);
    });
    if (!store.set(CONTENT_KEY, out)) {
      renderProfileState(T("admin.js.storageFail", "Tarayıcı kaydetmeye izin vermedi (depolama dolu ya da kapalı olabilir)."));
      return;
    }
    savedSnapshot = JSON.stringify(formValues());
    renderProfileState(T("admin.js.saved", "Kaydedildi. Açık sayfaları yenileyince görünür."));
    if (D.content && D.content.apply) D.content.apply(); // bu sayfadaki footer bağlantıları
    renderOverview();
    // juice: ez + patlama + "KAYDEDİLDİ" damgası
    D.juice.squash(btn, 1.4);
    const r = btn.getBoundingClientRect();
    D.juice.burst(r.left + r.width / 2, r.top + r.height / 2, { count: 26, power: 1.7 });
    stampCard();
    toast(T("admin.js.savedToast", "Profil kaydedildi."), { tone: "ok" });
  });

  function stampCard() {
    const card = $("#previewCard");
    $$(".admin-card__stamp", card).forEach((n) => n.remove());
    const s = el("span", "admin-card__stamp", lang() === "en" ? "SAVED" : "KAYDEDİLDİ");
    s.setAttribute("aria-hidden", "true");
    card.appendChild(s);
    if (RM) return;
    gsap.fromTo(s, { scale: 2.4, rotate: -30, opacity: 0 }, { scale: 1, rotate: -12, opacity: 0.9, duration: 0.45, ease: "back.out(2.2)" });
    gsap.fromTo(card, { rotate: 0 }, { keyframes: [{ rotate: -2.5 }, { rotate: 1.5 }, { rotate: -1 }], duration: 0.5, ease: "power1.inOut", clearProps: "rotate" });
    gsap.to(s, { opacity: 0, duration: 0.6, delay: 2.2, onComplete: () => s.remove() });
  }

  $("#profileReset").addEventListener("click", async () => {
    const ok = await confirmDialog({
      title: T("admin.js.resetQ", "Profil varsayılana dönsün mü?"),
      text: T("admin.js.resetText", "Düzenlenen her alan ilk hâline döner. Mesajlara dokunulmaz."),
      ok: T("admin.js.resetOk", "Varsayılana dön"),
    });
    if (!ok) return;
    store.remove(CONTENT_KEY);
    fillProfile();
    renderOverview();
    toast(T("admin.js.resetDone", "Profil varsayılana döndü."));
  });

  // site içi linke tıklanırsa (core perde geçişinden ÖNCE) kendi onay diyaloğumuz
  document.addEventListener(
    "click",
    async (e) => {
      const a = e.target.closest && e.target.closest("a[href]");
      if (!a || !isAuthed() || !profileDirty()) return;
      const href = a.getAttribute("href") || "";
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || a.target === "_blank" || a.hasAttribute("download")) return;
      e.preventDefault();
      const ok = await confirmDialog({
        title: T("admin.js.leaveQ", "Kaydedilmemiş değişiklikler var"),
        text: T("admin.js.leaveText", "Sayfadan çıkarsan profil formundaki değişiklikler kaybolur."),
        ok: T("admin.js.leaveOk", "Kaydetmeden çık"),
      });
      if (ok) {
        savedSnapshot = JSON.stringify(formValues());
        location.href = a.href;
      }
    },
    true
  );

  window.addEventListener("beforeunload", (e) => {
    if (isAuthed() && profileDirty()) {
      e.preventDefault();
      e.returnValue = "";
    }
  });

  /* =========================================================
     6. AYARLAR
     ========================================================= */
  // şifre
  const passForm = $("#passForm");
  const pf = { cur: $("#st-cur"), new: $("#st-new"), rep: $("#st-rep") };
  const passErr = (k, msg) => {
    const e = $("#st-" + k + "-err");
    e.textContent = msg;
    if (msg) pf[k].setAttribute("aria-invalid", "true");
    else pf[k].removeAttribute("aria-invalid");
    if (k !== "new") pf[k].setAttribute("aria-describedby", "st-" + k + "-err");
  };
  if (!hasSubtle) {
    const n = $("#cryptoNote");
    n.hidden = false;
    n.textContent = T("admin.js.noCrypto", "Bu bağlamda Web Crypto yok (güvensiz bağlam); şifre özeti yerleşik bir SHA-256 ile hesaplanıyor.");
  }
  passForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    ["cur", "new", "rep"].forEach((k) => passErr(k, ""));
    const cur = await sha256(pf.cur.value);
    if (cur !== currentHash()) {
      passErr("cur", T("admin.js.curWrong", "Şu anki şifre yanlış."));
      D.juice.shake(passForm, 0.8);
      return pf.cur.focus();
    }
    if (pf.new.value.length < 6) {
      passErr("new", T("admin.js.short", "Yeni şifre en az 6 karakter olmalı."));
      return pf.new.focus();
    }
    if (pf.new.value !== pf.rep.value) {
      passErr("rep", T("admin.js.mismatch", "İki yeni şifre aynı değil."));
      return pf.rep.focus();
    }
    const h = await sha256(pf.new.value);
    if (!store.setRaw(HASH_KEY, h)) return toast(T("admin.js.storageFail", "Tarayıcı kaydetmeye izin vermedi."), { tone: "warn" });
    session.set(h);
    passForm.reset();
    const btn = $("button[type=submit]", passForm);
    const r = btn.getBoundingClientRect();
    D.juice.burst(r.left + r.width / 2, r.top + r.height / 2, { count: 18, power: 1.3 });
    toast(T("admin.js.passSaved", "Şifre değişti. Bir dahaki girişte yenisini kullan."), { tone: "ok" });
  });

  // yedek
  $("#backupBtn").addEventListener("click", () => {
    const data = { type: "doodle-backup", version: 1, exportedAt: new Date().toISOString(), content: getContent(), messages };
    download("ad-panel-yedek-" + stamp() + ".json", JSON.stringify(data, null, 2), "application/json");
    toast(T("admin.js.backupDone", "Yedek indirildi."));
  });

  $("#restoreInput").addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!file) return;
    const bad = () => toast(T("admin.js.restoreBad", "Bu dosya geçerli bir panel yedeği değil."), { tone: "warn" });
    if (file.size > 8 * 1024 * 1024) return bad();
    const reader = new FileReader();
    reader.onerror = bad;
    reader.onload = async () => {
      let data;
      try {
        data = JSON.parse(String(reader.result));
      } catch (err) {
        return bad();
      }
      if (!data || typeof data !== "object" || (!Array.isArray(data.messages) && !data.content)) return bad();
      const msgs = Array.isArray(data.messages) ? data.messages.map(normalize).filter(Boolean).slice(0, 500) : [];
      const content = {};
      if (data.content && typeof data.content === "object") {
        FIELDS.forEach((k) => {
          const v = data.content[k];
          if (typeof v !== "string" || !v.trim()) return;
          const s = v.trim().slice(0, LIMITS[k]);
          if ((k === "github" || k === "linkedin" || k === "instagram") && !URL_RE.test(s)) return;
          if (k === "email" && !EMAIL_RE.test(s)) return;
          content[k] = s;
        });
      }
      const ok = await confirmDialog({
        title: T("admin.js.restoreQ", "Bu yedek yüklensin mi?"),
        text: T("admin.js.restoreText", "İçinde {m} mesaj ve {c} profil alanı var. Mevcut mesajların ve profilin bunlarla değişecek.", { m: msgs.length, c: Object.keys(content).length }),
        ok: T("admin.js.restoreOk", "Yükle"),
      });
      if (!ok) return;
      messages = msgs;
      saveMessages(messages);
      if (Object.keys(content).length) store.set(CONTENT_KEY, content);
      else store.remove(CONTENT_KEY);
      selectedId = null;
      renderAll();
      toast(T("admin.js.restoreDone", "Yedek yüklendi."), { tone: "ok" });
    };
    reader.readAsText(file);
  });

  // tema
  const root = document.documentElement;
  const themeRadios = $$("input[name=theme]");
  const langRadios = $$("input[name=lang]");
  function syncLook() {
    let t = null;
    try {
      t = localStorage.getItem("theme");
    } catch (e) {}
    const v = t === "dark" || t === "light" ? t : "system";
    themeRadios.forEach((r) => (r.checked = r.value === v));
    langRadios.forEach((r) => (r.checked = r.value === lang()));
  }
  themeRadios.forEach((r) =>
    r.addEventListener("change", () => {
      let next = r.value;
      try {
        if (next === "system") localStorage.removeItem("theme");
        else localStorage.setItem("theme", next);
      } catch (e) {}
      if (next === "system") next = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.setAttribute("data-theme", next);
      const tb = $(".theme-toggle");
      if (tb) tb.setAttribute("aria-pressed", String(next === "dark"));
      document.dispatchEvent(new CustomEvent("doodle:theme", { detail: next }));
    })
  );
  langRadios.forEach((r) => r.addEventListener("change", () => D.i18n.set(r.value)));
  document.addEventListener("doodle:theme", syncLook);

  // sıfırla
  $("#wipeBtn").addEventListener("click", async () => {
    const ok = await confirmDialog({
      title: T("admin.js.wipeQ", "Tüm veriler sıfırlansın mı?"),
      text: T("admin.js.wipeText", "{m} mesaj, profil düzenlemeleri ve değiştirilmiş şifre silinecek. Geri alınamaz.", { m: messages.length }),
      ok: T("admin.js.wipeOk", "Evet, hepsini sil"),
    });
    if (!ok) return;
    const r = $("#wipeBtn").getBoundingClientRect();
    store.remove(MSG_KEY);
    store.remove(CONTENT_KEY);
    store.remove(HASH_KEY);
    session.set(DEFAULT_HASH);
    messages = [];
    selectedId = null;
    renderAll();
    D.juice.burst(r.left + r.width / 2, r.top + r.height / 2, { count: 16, power: 1.2, colors: [getComputedStyle(root).getPropertyValue("--ink").trim()] });
    toast(T("admin.js.wipeDone", "Tüm veriler sıfırlandı. Şifre varsayılana döndü."), { tone: "ok" });
  });

  /* =========================================================
     Genel
     ========================================================= */
  function renderAll() {
    messages = loadMessages();
    renderOverview();
    renderMessages();
    fillProfile();
    syncLook();
  }

  document.addEventListener("doodle:lang", () => {
    syncLook();
    if (!isAuthed()) return;
    renderOverview();
    renderMessages();
    renderProfileState();
    if (!hasSubtle) $("#cryptoNote").textContent = T("admin.js.noCrypto", "");
  });

  // her dakika göreli zamanları tazele
  setInterval(() => {
    if (!document.hidden && isAuthed()) {
      renderOverview();
      if (selectedId) renderDetail();
    }
  }, 60000);

  // başlangıç: oturum varsa doğrudan panel
  if (isAuthed()) showApp(false);
  else {
    gate.hidden = false;
    app.hidden = true;
    D.onReady(() => {
      if (!isAuthed() && !RM) {
        gsap.fromTo(book, { y: 40, rotate: -4, opacity: 0 }, { y: 0, rotate: -1, opacity: 1, duration: 0.7, ease: "back.out(1.6)", clearProps: "transform,opacity" });
      }
      if (!isAuthed() && matchMedia("(min-width: 768px)").matches) loginPass.focus({ preventScroll: true });
    });
  }
})();

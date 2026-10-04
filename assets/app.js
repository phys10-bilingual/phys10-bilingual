/* Phys10 Bilingual — mã dùng chung cho mọi trang.
   Thứ tự nạp: data/core.js -> data/ch*.js -> assets/app.js -> mã riêng của trang. */
(function () {
  'use strict';
  const P = window.P10;

  /* ---------- Lưu trên máy (bọc try/catch) ---------- */
  P.get = (k, d) => { try { const v = localStorage.getItem('p10-' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } };
  P.set = (k, v) => { try { localStorage.setItem('p10-' + k, JSON.stringify(v)); } catch (e) { /* bỏ qua */ } };
  /* Lưu tạm theo thẻ trình duyệt: bài đang làm dở, vị trí đang xem */
  P.sget = (k, d) => { try { const v = sessionStorage.getItem('p10-' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } };
  P.sset = (k, v) => { try { if (v == null) sessionStorage.removeItem('p10-' + k); else sessionStorage.setItem('p10-' + k, JSON.stringify(v)); } catch (e) { /* bỏ qua */ } };

  /* ---------- Mức ngôn ngữ: vi | bi | en ---------- */
  P.lang = P.get('lang', 'vi');
  if (!['vi', 'bi', 'en'].includes(P.lang)) P.lang = 'vi';
  P.uiEn = () => P.lang === 'en';
  document.documentElement.lang = P.uiEn() ? 'en' : 'vi';
  /* Đổi mức thì tải lại trang; trang nào có việc đang làm dở thì đăng kí P.onLang để lưu lại hoặc hỏi trước */
  const here = location.pathname + location.search;
  const rs = P.sget('restore', null); P.sset('restore', null);
  P.restore = rs && rs.u === here ? rs : null;
  const guards = [];
  P.onLang = fn => guards.push(fn);
  P.setLang = l => {
    if (l === P.lang || !['vi', 'bi', 'en'].includes(l)) return;
    for (const g of guards) if (g(l) === false) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    P.set('lang', l);
    P.sset('restore', { u: here, r: max > 0 ? window.scrollY / max : 0 });
    location.reload();
  };
  if (P.restore) {
    try { history.scrollRestoration = 'manual'; } catch (e) { /* bỏ qua */ }
    window.addEventListener('load', () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo(0, Math.round(P.restore.r * Math.max(0, max)));
      try { history.scrollRestoration = 'auto'; } catch (e) { /* bỏ qua */ }
    });
  }

  /* Chữ giao diện: [tiếng Việt, English] */
  P.UI = {
    home: ['Trang chủ', 'Home'], lessons: ['Bài học', 'Lessons'], terms: ['Thuật ngữ', 'Glossary'], practice: ['Luyện tập', 'Practice'],
    games: ['Trò chơi', 'Games'], about: ['Giới thiệu', 'About'], level: ['Mức ngôn ngữ', 'Language level'],
    lvVi: ['Tiếng Việt', 'Vietnamese'], lvBi: ['Song ngữ', 'Bilingual'], lvEn: ['English', 'English'],
    chapter: ['Chương', 'Chapter'], lesson: ['Bài', 'Lesson'], page: ['SGK tr.', 'Textbook p.'],
    goals: ['Học xong bài này, em có thể', 'By the end of this lesson you can'], learned: ['Em đã học', 'Summary'],
    check: ['Tự kiểm tra', 'Check yourself'], showAns: ['Xem lời giải', 'Show solution'],
    listen: ['Nghe phát âm', 'Listen'], termOf: ['Thuật ngữ trong bài', 'Key terms in this lesson'],
    prev: ['Bài trước', 'Previous'], next: ['Bài tiếp', 'Next'], correct: ['Đúng', 'Correct'], wrong: ['Chưa đúng', 'Not quite'],
    redo: ['Làm lại', 'Try again'], seeLesson: ['Xem lại bài', 'Review lesson'], practical: ['Thực hành', 'Practical'],
    fullTerm: ['Xem trong kho thuật ngữ', 'Open in glossary'], hintT: ['Gợi ý tiếng Việt', 'Vietnamese hint'],
    search: ['Tìm kiếm', 'Search'], searchPh: ['Tìm bài học, thuật ngữ…', 'Search lessons and terms…'],
    noRes: ['Không có kết quả khớp với', 'No results for'], more: ['kết quả khác trong kho thuật ngữ', 'more in the glossary'],
    knownLbl: ['Thuật ngữ đã thuộc', 'Terms you know'], done: ['Đã học', 'Opened'], skip: ['Tới nội dung chính', 'Skip to content'],
    allLessons: ['Xem cả 12 bài', 'All 12 lessons'], openGl: ['Mở kho thuật ngữ', 'Open the glossary'],
    offline: ['Đang ngoại tuyến – nội dung đã lưu vẫn dùng được.', 'You are offline – saved content still works.'],
    foot: ['Nội dung bám SGK Vật lí 10 – Kết nối tri thức với cuộc sống (NXB Giáo dục Việt Nam), dùng cho mục đích học tập.', 'Content follows the Vật lí 10 textbook (Kết nối tri thức với cuộc sống, Vietnam Education Publishing House), for study use only.'],
    author: ['Giáo viên thiết kế: Mai Thị Trinh – THPT Bùi Hữu Nghĩa, Cần Thơ', 'Designed by teacher Mai Thị Trinh – Bùi Hữu Nghĩa High School, Cần Thơ'],
    src: ['Nguồn và quy ước', 'Sources and conventions'], dictT: ['Nghe phát âm trên từ điển', 'Hear it in a dictionary']
  };
  P.ui = k => { const v = P.UI[k]; if (!v) return k; return P.uiEn() ? v[1] : v[0]; };

  /* ---------- Dữ liệu ---------- */
  P.chapters = P.chapters.sort((a, b) => a.n - b.n);
  P.lessonMap = {}; P.termMap = {};
  P.chapters.forEach(c => {
    c.lessons.forEach(l => { l.chapter = c.n; P.lessonMap[l.n] = l; });
    c.terms.forEach(t => { t.ch = c.n; P.termMap[t.id] = t; });
  });
  P.allLessons = P.chapters.flatMap(c => c.lessons);
  P.allTerms = P.chapters.flatMap(c => c.terms);
  P.ROMAN = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII' };
  P.CH_ICON = { 4: 'bolt', 5: 'collide', 6: 'orbit', 7: 'drop' };

  /* ---------- Định dạng chữ ---------- */
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  P.esc = esc;
  /* Bỏ dấu, đưa về chữ thường: dùng cho tìm kiếm */
  P.norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
  // _{..} ^{..} vec{..}  -> HTML (trên chuỗi đã escape)
  function mathMarks(s) {
    let prev;
    do {
      prev = s;
      s = s.replace(/vec\{([^{}]*)\}/g, '<span class="vec">$1</span>')
           .replace(/_\{([^{}]*)\}/g, '<sub>$1</sub>')
           .replace(/\^\{([^{}]*)\}/g, '<sup>$1</sup>');
    } while (s !== prev);
    return s;
  }
  P.mathMarks = mathMarks;
  // Văn bản thường: thuật ngữ [[id|chữ]], kí hiệu toán, xuống dòng
  P.fmt = s => {
    let h = esc(s);
    h = h.replace(/\[\[([a-z0-9-]+)\|([^\]]+)\]\]/g, (m, id, txt) => !P.termMap[id] ? txt
      : `<button type="button" class="term" data-term="${id}">${txt}</button>`);
    h = mathMarks(h);
    return h.replace(/\n/g, '<br>');
  };
  P.fm = s => `<span class="m">${mathMarks(esc(s))}</span>`;
  // Chọn ngôn ngữ cho một cặp {vi, en}
  P.T = o => (o == null ? '' : typeof o === 'string' ? o : (P.uiEn() ? (o.en || o.vi) : (o.vi || o.en)));
  // Hiển thị cặp {vi,en} theo mức: vi -> chỉ VI; bi -> VI + EN; en -> EN + nút gợi ý VI
  let hintSeq = 0;
  P.dual = (o, opts = {}) => {
    if (!o) return '';
    if (P.lang === 'vi') return P.fmt(o.vi);
    if (P.lang === 'en') {
      if (opts.noHint || !o.vi) return P.fmt(o.en);
      const id = 'h' + (++hintSeq);
      return `${P.fmt(o.en)}<button type="button" class="hint-btn" data-hint="${id}" aria-expanded="false" title="${P.ui('hintT')}" aria-label="${P.ui('hintT')}">VI</button><span class="vi-hint" id="${id}" lang="vi">${P.fmt(o.vi)}</span>`;
    }
    return opts.inline ? `${P.fmt(o.vi)} <span class="en" lang="en">/ ${P.fmt(o.en)}</span>` : `${P.fmt(o.vi)}<div class="en" lang="en">${P.fmt(o.en)}</div>`;
  };
  // Khối song ngữ: tiếng Việt, bản tiếng Anh ngay bên dưới
  P.dualBlock = o => P.lang === 'bi' ? `<div class="bi">${P.fmt(o.vi)}<div class="en" lang="en">${P.fmt(o.en)}</div></div>` : `<div>${P.dual(o)}</div>`;
  // Số thập phân: dấu phẩy ở giao diện tiếng Việt, dấu chấm ở giao diện tiếng Anh
  P.numVi = n => String(n).replace('.', ',');
  P.num = n => P.uiEn() ? String(n).replace(',', '.') : P.numVi(n);

  /* ---------- Biểu tượng ---------- */
  const I = {
    home: '<path d="M3 11 12 3.5 21 11"/><path d="M5.5 9.5V20h13V9.5"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/>',
    abc: '<path d="M3 17 7 7l4 10"/><path d="M4.5 13.5h5"/><path d="M14 7h3.5a2.5 2.5 0 0 1 0 5H14zM14 12h4a2.5 2.5 0 0 1 0 5h-4z"/>',
    pen: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
    game: '<rect x="2.5" y="6.5" width="19" height="11" rx="5"/><path d="M7.5 10v4M5.5 12h4"/><circle cx="15.5" cy="11" r="1"/><circle cx="18" cy="13.5" r="1"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    speak: '<path d="M4 9.5v5h3.5L12 18V6L7.5 9.5z"/><path d="M15.5 9a4 4 0 0 1 0 6"/><path d="M18 6.5a7.5 7.5 0 0 1 0 11"/>',
    clock: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9 2h6"/>',
    cards: '<rect x="3" y="7" width="13" height="14" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v12"/>',
    screen: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    chev: '<path d="m6 9 6 6 6-6"/>',
    bolt: '<path d="M13 2.5 5 13.5h6l-1 8 8-11h-6z"/>',
    collide: '<circle cx="7" cy="14" r="3.5"/><circle cx="17" cy="14" r="3.5"/><path d="M3 6h6M7 4l2 2-2 2M21 6h-6M17 4l-2 2 2 2"/>',
    orbit: '<circle cx="12" cy="12" r="8.5" stroke-dasharray="3 3.2"/><circle cx="12" cy="12" r="1.4"/><circle cx="18" cy="6" r="2.3"/>',
    drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    lang: '<path d="M3.5 6h9M8 4v2M5.5 6c.6 3 2.6 5.5 5.5 7M10.5 6c-.6 3-2.7 5.6-6.5 7"/><path d="m13 20 3.5-8 3.5 8M14.2 17.4h4.6"/>',
    trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4"/><path d="M12 12h.01"/>',
    bulb: '<path d="M9.5 18h5M10.5 21h3M8.5 14.5a6 6 0 1 1 7 0c-.8.7-1 1.5-1 2.5h-5c0-1-.2-1.8-1-2.5z"/>',
    law: '<path d="M6 3h12v18l-6-4-6 4z"/>',
    list: '<path d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01"/>',
    play: '<path d="M8 5.5v13l11-6.5z"/>',
    redo: '<path d="M4 12a8 8 0 1 0 2.6-5.9M4 4v5h5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/>',
    shield: '<path d="M12 3 4.5 6v6c0 4.5 3.2 7.6 7.5 9 4.3-1.4 7.5-4.5 7.5-9V6z"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/>',
    school: '<path d="M2.5 9 12 4.5 21.5 9 12 13.5z"/><path d="M6.5 11.2V16c1.5 1.4 3.4 2 5.5 2s4-.6 5.5-2v-4.8"/>',
    ext: '<path d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>'
  };
  P.icon = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n] || ''}</svg>`;
  P.LOGO = (s = 38) => `<svg width="${s}" height="${s}" viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" rx="13" fill="#0D47A1"/><circle cx="24" cy="24" r="14.5" fill="none" stroke="#FFB74D" stroke-width="3" stroke-dasharray="70 22" transform="rotate(-40 24 24)"/><circle cx="34.6" cy="13.6" r="3.6" fill="#F57C00"/><text x="24" y="29.5" text-anchor="middle" font-family="Be Vietnam Pro,Arial,sans-serif" font-weight="800" font-size="15" fill="#fff">10</text></svg>`;

  /* Ảnh minh hoạ của từng chương (assets/img; nguồn và giấy phép ghi ở trang Giới thiệu) */
  P.IMG = { 4: 'chuong4-nang-luong', 5: 'chuong5-dong-luong', 6: 'chuong6-chuyen-dong-tron', 7: 'chuong7-ap-suat' };
  P.pic = (n, small) => `<img class="pic" src="assets/img/${P.IMG[n]}-${small ? '360x195' : '720x390'}.jpg" width="${small ? 360 : 720}" height="${small ? 195 : 390}" alt="" decoding="async">`;

  /* ---------- Phát âm (giọng máy của trình duyệt) ---------- */
  P.speak = (text) => {
    try {
      if (!('speechSynthesis' in window)) return;
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-GB'; u.rate = .9;
      const v = speechSynthesis.getVoices().find(v => /^en[-_]GB/i.test(v.lang));
      if (v) u.voice = v;
      speechSynthesis.speak(u);
    } catch (e) { /* bỏ qua */ }
  };
  P.sayBtn = text => `<button type="button" class="say" data-say="${esc(text)}" aria-label="${P.ui('listen')}: ${esc(text)}" title="${P.ui('listen')}">${P.icon('speak')}</button>`;
  /* Nghe giọng đọc chuẩn trên từ điển Oxford / Cambridge (mở trang mới, cần mạng) */
  P.dictHTML = text => { const q = encodeURIComponent(text); return `<span class="dict"><a href="https://www.oxfordlearnersdictionaries.com/search/english/?q=${q}" target="_blank" rel="noopener" title="${P.ui('dictT')}: Oxford Learner's Dictionaries">Oxford${P.icon('ext')}</a><a href="https://dictionary.cambridge.org/search/english/direct/?q=${q}" target="_blank" rel="noopener" title="${P.ui('dictT')}: Cambridge Dictionary">Cambridge${P.icon('ext')}</a></span>`; };
  /* ---------- Hộp thuật ngữ nổi ---------- */
  let pop = null;
  function closePop() { if (pop) { pop.remove(); pop = null; } }
  function openPop(btn, id) {
    closePop();
    const t = P.termMap[id]; if (!t) return;
    pop = document.createElement('div');
    pop.className = 'pop c' + t.ch; pop.setAttribute('role', 'dialog'); pop.setAttribute('aria-label', t.en);
    const def = P.lang === 'en' ? P.fmt(t.defEn) : P.lang === 'bi' ? `${P.fmt(t.defVi)}<div class="en" lang="en">${P.fmt(t.defEn)}</div>` : P.fmt(t.defVi);
    pop.innerHTML = `<div class="row" style="gap:8px;flex-wrap:nowrap"><div><div class="en-t" lang="en">${esc(t.en)}</div><div class="ipa">${esc(t.ipa || '')}</div></div><span class="spacer"></span>${P.sayBtn(t.en)}</div>
      <div style="margin:6px 0 4px"><b>${esc(t.vi)}</b>${t.sym ? ` · ${P.fm(t.sym)}` : ''}${t.unit ? ` <span class="muted">(${P.fm(t.unit)})</span>` : ''}</div>
      <div class="small">${def}</div>
      <div class="row small" style="margin-top:8px;gap:6px 10px">${P.dictHTML(t.en)}<span class="spacer"></span><a href="thuatngu.html?id=${t.id}">${P.ui('fullTerm')} →</a></div>`;
    document.body.appendChild(pop);
    const r = btn.getBoundingClientRect(); const w = pop.offsetWidth;
    let left = r.left + window.scrollX;
    const maxL = window.scrollX + document.documentElement.clientWidth - w - 12;
    left = Math.max(12, Math.min(left, maxL));
    pop.style.left = left + 'px'; pop.style.top = (r.bottom + window.scrollY + 8) + 'px';
  }
  document.addEventListener('click', e => {
    const tb = e.target.closest('.term[data-term]');
    if (tb) { e.preventDefault(); openPop(tb, tb.dataset.term); return; }
    const sb = e.target.closest('[data-say]');
    if (sb) { e.preventDefault(); P.speak(sb.dataset.say); return; }
    const hb = e.target.closest('[data-hint]');
    if (hb) { const el = document.getElementById(hb.dataset.hint); if (el) { el.classList.toggle('show'); hb.setAttribute('aria-expanded', el.classList.contains('show')); } return; }
    const lb = e.target.closest('[data-lang]');
    if (lb) { P.setLang(lb.dataset.lang); return; }
    if (pop && !e.target.closest('.pop')) closePop();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closePop(); const r = document.getElementById('gres'); if (r) r.hidden = true; } });

  /* ---------- Tiến độ ---------- */
  P.progress = () => P.get('progress', {});
  P.markLesson = (n, data) => { const p = P.progress(); p[n] = Object.assign(p[n] || {}, data, { at: Date.now() }); P.set('progress', p); P.set('last', n); };
  P.knownCount = () => { const k = P.get('known', {}); return P.allTerms.filter(t => k[t.id]).length; };
  P.refreshKnown = () => {
    const n = P.knownCount(), el = document.getElementById('knN'), bar = document.getElementById('knB');
    if (el) el.textContent = n;
    if (bar) bar.style.width = (P.allTerms.length ? n / P.allTerms.length * 100 : 0) + '%';
  };

  /* ---------- Khung trang: đầu trang, menu, chân trang, thanh thẻ trên điện thoại ---------- */
  P.mount = (active, opts = {}) => {
    const prog = P.progress();
    const ok = P.icon('check');
    const seg = `<div class="seg" role="group" aria-label="${P.ui('level')}">${[['vi', 'lvVi', 'VI'], ['bi', 'lvBi', 'VI+EN'], ['en', 'lvEn', 'EN']].map(([l, k, s]) =>
      `<button type="button" data-lang="${l}" class="${P.lang === l ? 'on' : ''}" aria-pressed="${P.lang === l}" title="${P.ui(k)}"><span class="lg">${P.ui(k)}</span><span class="sm">${s}</span></button>`).join('')}</div>`;
    const ddLessons = P.chapters.map(c => `<div class="c${c.n}"><a class="dd-h" href="baihoc.html#c${c.n}"><span class="ch-ic sm">${P.icon(P.CH_ICON[c.n])}</span><span><small>${P.ui('chapter')} ${P.ROMAN[c.n]}</small>${esc(P.T(c.chapter))}</span></a>
      ${c.lessons.map(l => `<a class="dd-l" href="bai.html?n=${l.n}"><b>${l.n}</b><span>${esc(P.T(l))}</span>${prog[l.n] ? ok : ''}</a>`).join('')}</div>`).join('');
    const best = P.get('best', {});
    const ddPrac = P.chapters.filter(c => c.quiz).map(c => `<a class="dd-p c${c.n}" href="luyentap.html?c=${c.n}"><span class="ch-ic sm">${P.icon(P.CH_ICON[c.n])}</span><span>${P.ui('chapter')} ${P.ROMAN[c.n]}. ${esc(P.T(c.chapter))}<small>${c.quiz.mcq.length + c.quiz.tf.length + c.quiz.short.length} ${P.uiEn() ? 'questions' : 'câu'} · ${c.quiz.minutes} ${P.uiEn() ? 'min' : 'phút'}${best[c.n] != null ? ` · ${P.uiEn() ? 'best' : 'cao nhất'} ${P.num(best[c.n])}` : ''}</small></span></a>`).join('');
    const on = k => active === k ? ' class="on"' : '';
    const head = `<a class="skip" href="#page">${P.ui('skip')}</a>
      <header class="hdr-top" id="hdr"><div class="wrapx hdr-row">
        <a class="brand" href="index.html" aria-label="Phys10 Bilingual">${P.LOGO()}<b>Phys10 <span>Bilingual</span></b><span class="kntt">KNTT 10</span></a>
        <form class="search" id="gsearch" role="search" autocomplete="off">
          <input type="search" id="gq" placeholder="${P.ui('searchPh')}" aria-label="${P.ui('searchPh')}">
          <button type="submit" aria-label="${P.ui('search')}">${P.icon('search')}</button>
          <div class="s-panel" id="gres" hidden></div>
        </form>
        <a class="hdr-known" href="thuatngu.html" title="${P.ui('knownLbl')}"><span class="ic">${P.icon('cards')}</span><span><small>${P.ui('knownLbl')}</small><span class="kn"><span><b id="knN">0</b> / ${P.allTerms.length}</span><i class="kbar"><i id="knB"></i></i></span></span></a>
        <button type="button" class="icon-btn" id="sBtn" aria-label="${P.ui('search')}" aria-expanded="false">${P.icon('search')}</button>
        ${seg}
      </div></header>
      <nav class="menu" aria-label="Menu"><div class="wrapx menu-row">
        <a href="index.html"${on('home')} aria-label="${P.ui('home')}" title="${P.ui('home')}">${P.icon('home')}</a>
        <div class="mi"><a href="baihoc.html"${on('lessons')}>${P.ui('lessons')}${P.icon('chev')}</a><div class="dd cols">${ddLessons}</div></div>
        <a href="thuatngu.html"${on('terms')}>${P.ui('terms')}</a>
        <div class="mi"><a href="luyentap.html"${on('practice')}>${P.ui('practice')}${P.icon('chev')}</a><div class="dd cols">${ddPrac}</div></div>
        <a href="trochoi.html"${on('games')}>${P.ui('games')}</a>
        <span class="grow"></span>
        <a href="gioithieu.html"${on('about')}>${P.ui('about')}</a>
      </div></nav>
      <div class="offline" id="offline" hidden>${P.ui('offline')}</div>`;
    const foot = `<footer class="foot"><div class="wrapx foot-row"><div><b>Phys10 Bilingual</b> · ${P.ui('author')}<br>${P.ui('foot')}</div>
        <div class="foot-links"><a href="gioithieu.html">${P.ui('about')}</a><a href="gioithieu.html#nguon">${P.ui('src')}</a><a href="thuatngu.html">${P.ui('terms')}</a></div></div></footer>
      <nav class="tabbar" aria-label="Menu">${[['home', 'index.html', 'home'], ['lessons', 'baihoc.html', 'book'], ['terms', 'thuatngu.html', 'abc'], ['practice', 'luyentap.html', 'pen'], ['games', 'trochoi.html', 'game']]
        .map(([k, href, ic]) => `<a href="${href}"${on(k)}>${P.icon(ic)}<span>${P.ui(k)}</span></a>`).join('')}</nav>`;
    document.body.insertAdjacentHTML('afterbegin', head);
    document.body.insertAdjacentHTML('beforeend', foot);
    P.refreshKnown();
    const off = document.getElementById('offline');
    const upd = () => { off.hidden = navigator.onLine; };
    window.addEventListener('online', upd); window.addEventListener('offline', upd); upd();
    if (opts.title) document.title = opts.title + ' · Phys10 Bilingual';
    initSearch();
  };

  /* ---------- Ô tìm kiếm ở đầu trang: bài học + thuật ngữ, không phân biệt dấu ---------- */
  function initSearch() {
    const form = document.getElementById('gsearch'), inp = document.getElementById('gq'), res = document.getElementById('gres');
    const hdr = document.getElementById('hdr'), sBtn = document.getElementById('sBtn');
    const en = P.uiEn();
    const where = (ch, l) => `${P.ui('chapter')} ${P.ROMAN[ch]} · ${P.ui('lesson')} ${l}`;
    const idx = [
      ...P.allLessons.map(l => ({ o: 0, ch: l.chapter, href: 'bai.html?n=' + l.n, tag: P.ui('lesson') + ' ' + l.n, a: P.T(l), b: en ? l.vi : l.en, bEn: !en, pos: `${P.ui('chapter')} ${P.ROMAN[l.chapter]}`, key: P.norm(`bai ${l.n} lesson ${l.n} ${l.vi} ${l.en}`) })),
      ...P.allTerms.map(t => ({ o: 1, ch: t.ch, href: 'thuatngu.html?id=' + t.id, tag: P.ui('terms'), a: en ? t.en : t.vi, b: en ? t.vi : t.en, bEn: !en, pos: where(t.ch, t.l), key: P.norm(t.vi + ' ' + t.en) }))
    ];
    const show = () => {
      const raw = inp.value.trim(), q = P.norm(raw);
      if (q.length < 2) { res.hidden = true; return; }
      const rank = x => (x.key.startsWith(q) ? 0 : (' ' + x.key).includes(' ' + q) ? 1 : 2) * 2 + x.o;
      const hits = idx.filter(x => x.key.includes(q)).sort((x, y) => rank(x) - rank(y));
      const gl = `thuatngu.html?q=${encodeURIComponent(raw)}`;
      res.innerHTML = hits.length
        ? hits.slice(0, 7).map(x => `<a class="s-row c${x.ch}" href="${x.href}"><span class="pill">${esc(x.tag)}</span><span><b>${esc(x.a)}</b><span class="sub">${P.lang === 'vi' && x.o === 0 ? '' : `<span class="${x.bEn ? 'en' : ''}">${esc(x.b)}</span> · `}${x.pos}</span></span></a>`).join('') +
          (hits.length > 7 ? `<a class="s-none" href="${gl}">+ ${hits.length - 7} ${P.ui('more')} →</a>` : '')
        : `<div class="s-none">${P.ui('noRes')} “${esc(raw)}”. <a href="thuatngu.html">${P.ui('openGl')} →</a></div>`;
      res.hidden = false;
    };
    inp.addEventListener('input', show);
    inp.addEventListener('focus', show);
    form.addEventListener('submit', e => { e.preventDefault(); const raw = inp.value.trim(); if (raw) location.href = 'thuatngu.html?q=' + encodeURIComponent(raw); });
    document.addEventListener('click', e => { if (!e.target.closest('#gsearch')) res.hidden = true; });
    sBtn.addEventListener('click', () => { const o = hdr.classList.toggle('s-open'); sBtn.setAttribute('aria-expanded', o); if (o) inp.focus(); });
  }

  /* ---------- Tiện ích ---------- */
  P.qs = k => new URLSearchParams(location.search).get(k);
  P.shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  P.KEYS = ['A', 'B', 'C', 'D'];

  /* Câu trắc nghiệm có nút chọn, chấm ngay (dùng cho Tự kiểm tra) */
  P.mcqHTML = (q, i) => `<div class="q-item" data-q="${i}">
      <div class="qt"><span class="num">${i + 1}</span>${P.dual(q.q)}</div>
      <div class="opts">${q.o.map((o, k) => `<button type="button" class="opt" data-k="${k}"><span class="k">${P.KEYS[k]}</span><span>${P.dual(o, { inline: true, noHint: true })}</span></button>`).join('')}</div>
      <div class="why" hidden></div></div>`;

  /* Ứng dụng web ngoại tuyến */
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();

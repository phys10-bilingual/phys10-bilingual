/* Phys10 Bilingual — dùng ngoại tuyến. Khi thêm/đổi tệp: cập nhật SHELL và tăng số phiên bản. */
const CACHE = 'phys10-v3';
const SHELL = [
  './', 'index.html', 'baihoc.html', 'bai.html', 'thuatngu.html', 'luyentap.html', 'trochoi.html', 'gioithieu.html',
  'assets/app.css', 'assets/app.js', 'assets/icon.svg', 'assets/icon-192.png', 'assets/icon-512.png', 'manifest.webmanifest',
  'assets/img/chuong4-nang-luong-720x390.jpg', 'assets/img/chuong4-nang-luong-360x195.jpg',
  'assets/img/chuong5-dong-luong-720x390.jpg', 'assets/img/chuong5-dong-luong-360x195.jpg',
  'assets/img/chuong6-chuyen-dong-tron-720x390.jpg', 'assets/img/chuong6-chuyen-dong-tron-360x195.jpg',
  'assets/img/chuong7-ap-suat-720x390.jpg', 'assets/img/chuong7-ap-suat-360x195.jpg',
  'data/core.js', 'data/ch4.js', 'data/ch5.js', 'data/ch6.js', 'data/ch7.js'
];
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
/* Ưu tiên mạng (luôn lấy bản mới nhất), mất mạng thì dùng bản đã lưu.
   Tệp của trang lưu theo đường dẫn không kèm ?tham-số; phông chữ Google cũng được lưu để dùng ngoại tuyến. */
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const own = url.origin === location.origin;
  if (!own && !FONT_HOSTS.includes(url.hostname)) return;
  const key = own ? url.origin + url.pathname : e.request.url;
  e.respondWith(fetch(e.request).then(r => {
    if (r.ok) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(key, cp)); }
    return r;
  }).catch(() => caches.match(key).then(r => r || (e.request.mode === 'navigate' ? caches.match('index.html') : Response.error()))));
});

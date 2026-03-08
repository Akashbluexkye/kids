const CACHE = 'study-hub-v1';

self.addEventListener('install', (e) => {
  const base = self.location.pathname.replace(/sw\.js$/, '');
  const assets = [
    base + 'exam-study-hub.html',
    base + 'index.html',
    base + 'manifest.json',
    base + 'number-slides.html'
  ].map((p) => new URL(p, self.location.origin).href);
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(assets).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.url.startsWith('http') && !e.request.url.includes('googleapis.com')) {
    e.respondWith(
      caches.match(e.request).then((r) => r || fetch(e.request).then((res) => {
        const clone = res.clone();
        if (res.ok && e.request.method === 'GET') {
          caches.open(CACHE).then((c) => c.put(e.request, clone));
        }
        return res;
      }))
    );
  }
});

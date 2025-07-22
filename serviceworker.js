const CACHE_NAME = "football-pwa";
const urlsToCache = [
    '/',
    '/template.html',
    '/img/ron.jpeg',
    '/manifest.json'
  ];
  

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

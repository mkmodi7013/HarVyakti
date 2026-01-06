const CACHE_NAME = "harvyakti-cache-v1";
const urlsToCache = [
  "/index.html",
  "/dashboard.html",
  "/profile1.html",
  "/post-work1.html",
  "/nearby-users.html",
  "/my-works.html",
  "/accepted-work.html", 
  "/firebase.js",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

// Install SW and cache files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activate SW
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== CACHE_NAME)
        .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch: serve cache first, fallback network
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(resp => resp || fetch(event.request))
  );
});
self.addEventListener("push", event => {
  const data = event.data.json();

  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "/icons/icon-192.png",
    vibrate: [200, 100, 200, 100, 300],
    requireInteraction: true
  });
});

self.addEventListener('install', event => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', event => {
  // Basic passthrough (not caching anything yet)
  event.respondWith(fetch(event.request));
});

// Service Worker for caching background images
const CACHE_NAME = 'villa-roza-cache-v1';
const urlsToCache = [
  '/images/stone-wall-background.png',
  '/images/background-mobile.jpg',
  '/images/beige-bathroom-gold-accents.jpg',
  '/images/modern-grey-bathroom-complete.jpg',
  '/images/lightmarblebathroomcomplete.jpeg',
  '/images/modernbathroomcomplete4.jpeg',
  '/images/whitesinkmodernbathroommodernmirrorovalLshapedbathroom.jpeg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

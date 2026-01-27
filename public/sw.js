// Service Worker for TypoGrammar - Smart caching strategy
const CACHE_NAME = 'typogrammar-v2'; // Increment version to force cache update
const STATIC_CACHE = [
  // Only cache truly static assets that rarely change
  '/robots.txt',
  '/sitemap.xml',
];

// Install event - cache minimal static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_CACHE);
    })
  );
  self.skipWaiting(); // Activate new service worker immediately
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - NETWORK FIRST for HTML, cache for assets
self.addEventListener('fetch', (event) => {
  // Only cache GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip chrome extensions and non-http(s) requests
  if (!event.request.url.startsWith('http')) return;

  const url = new URL(event.request.url);
  
  // NETWORK FIRST strategy for HTML files (always get fresh content)
  if (event.request.headers.get('accept')?.includes('text/html') || 
      url.pathname === '/' || 
      url.pathname.endsWith('.html')) {
    
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Return fresh network response for HTML
          return response;
        })
        .catch(() => {
          // Fallback to cache only if network fails (offline)
          return caches.match(event.request);
        })
    );
    return;
  }

  // CACHE FIRST strategy for static assets (JS, CSS, images with hashed names)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((response) => {
        // Don't cache if not a successful response
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }

        // Clone the response
        const responseToCache = response.clone();

        // Only cache static assets (JS, CSS, images, fonts)
        if (url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/)) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }

        return response;
      });
    })
  );
});

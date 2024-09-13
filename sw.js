self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
            '/Medicare/',  // Update this path
            '/Medicare/index.html',  // Update this path
            '/Medicare/styles/home.css',  // Update this path
            '/Medicare/scripts/script.js',  // Update this path
            '/Medicare/Favicon/favicon-192x192.png',  // Update this path
            '/Medicare/Favicon/favicon-512x512.png'  // Update this path
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
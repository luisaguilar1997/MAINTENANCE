// service-worker.js
// Version simple para permitir la instalacion de la PWA.
// No incluye logica de cache para offline avanzado en este momento.

self.addEventListener('install', (event) => {
    console.log('Service Worker: Instalando...');
    // Fuerza la activación del service worker inmediatamente
    self.skipWaiting(); 
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activando...');
    // Reclama todos los clientes para que el nuevo service worker tome control
    event.waitUntil(self.clients.claim());
});

// Puedes añadir una estrategia de cache simple si quieres que funcione offline
/*
self.addEventListener('fetch', (event) => {
  // Aquí iría la lógica de caché para servir assets desde el caché
  // Por ahora, simplemente pasa las peticiones de red
  event.respondWith(fetch(event.request));
});
*/
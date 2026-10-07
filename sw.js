const CACHE='otoproject-wms-launcher-v1';
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./manifest.json','./icon.svg']))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin===location.origin){e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));}});

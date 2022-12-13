const staticDevPingu = "UPMH"
const assets = [
  "index.html",
  "img/cactus1.png",
  "img/cactus2.png",
  "img/dino.png",
  "img/Fondo.jpeg",
  "img/nube.png",
  "img/pinguino.png",
  "img/suelo.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevPingu).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
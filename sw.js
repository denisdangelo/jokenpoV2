/**
 * Service Worker
 * @author Denis D'Angelo
 */



//instalação (cache - armazenamento local)
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('static')
            .then((cache) => {  
                cache.add('./jokenpoV2/')
                cache.add('./jokenpoV2/index.html')
				cache.add('./jokenpoV2/style.css')
                cache.add('./jokenpoV2/app.js')
                cache.add('./jokenpoV2/img/papel.png')
                cache.add('./jokenpoV2/img/pc.png')
                cache.add('./jokenpoV2/img/pcpapel.png')
                cache.add('./jokenpoV2/img/pcpedra.png')
                cache.add('./jokenpoV2/img/pctesoura.png')
                cache.add('./jokenpoV2/img/pedra.png')
                cache.add('./jokenpoV2/img/tesoura.png')
				cache.add('./jokenpoV2/img/fundo.png')
        })
    )
})

//ativação 
self.addEventListener('activate', (event) => {
    console.log('Service Worker ativado', event)
    return self.clients.claim()
})


//interceptação (solicitações https servindo em cache quando ofline)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
              if(response) {
                  return response
              } else {
                  return fetch(event.request)
              }
            })
    )
})

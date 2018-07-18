const restaurantCache = 'Restaurant-Reviews-01'
// Add all assets to cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(restaurantCache).then(cache => {
      console.log(`Cache all`);
      return cache.addAll([
        '/index.html',
        '/restaurant.html',
        '/css/responsive_restaurant.css',
        '/css/responsive.css',
        '/css/styles.css',
        '/data/restaurants.json',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/js/serviceWorker',
        '/restaurant.html?id=1',
        '/restaurant.html?id=2',
        '/restaurant.html?id=3',
        '/restaurant.html?id=4',
        '/restaurant.html?id=5',
        '/restaurant.html?id=6',
        '/restaurant.html?id=7',
        '/restaurant.html?id=8',
        '/restaurant.html?id=9',
        '/restaurant.html?id=10'
      ]).catch(error => {
          console.log(`Cache error ${error}`);
      });
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
    .catch(error =>
      console.log(`Cache error ${error}`))
  );
});

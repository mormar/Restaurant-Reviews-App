if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js')
  .then(succes => {
    console.log(`Service worker registration successful, the scope is ${succes.scope}`);
  }).catch(error => {
    console.log(`Service worker registration failed, the error is ${work.error}`);
  });
}

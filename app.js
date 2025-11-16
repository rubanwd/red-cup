// Register service worker for PWA installability & offline shell
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .catch(console.error);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var menu = document.querySelector('.menu');
  var overlay = document.getElementById('error-overlay');
  var btn = document.querySelector('.error-btn');
  if (menu && overlay && btn) {
    menu.addEventListener('click', function() {
      overlay.style.display = 'flex';
      overlay.focus && overlay.focus();
    });
    btn.addEventListener('click', function() {
      overlay.style.display = 'none';
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var menu = document.querySelector('.fab');
  var overlay = document.getElementById('error-overlay');
  var btn = document.querySelector('.error-btn');
  if (menu && overlay && btn) {
    menu.addEventListener('click', function() {
      overlay.style.display = 'flex';
      overlay.focus && overlay.focus();
    });
    btn.addEventListener('click', function() {
      overlay.style.display = 'none';
    });
  }
});
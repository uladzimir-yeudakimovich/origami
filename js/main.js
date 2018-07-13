for (let i=0; i<100; i++) {
  setTimeout(function() {
    document.getElementById('banner').style.opacity = 1 - i/100;
  }, 50 + i*50);
}

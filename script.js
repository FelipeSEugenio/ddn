document.getElementById('btnBuque').addEventListener('click', function() {
  const b = document.getElementById('buque');
  b.style.display = 'flex';
});

window.addEventListener('click', function() {
  const audio = document.getElementById("musica");
  audio.play().catch(() => {});
}, { once: true });

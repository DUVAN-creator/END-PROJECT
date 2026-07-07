window.addEventListener('load', () => {
  const overlay = document.querySelector('.loading-overlay');
  
  overlay.style.transition = 'opacity 0.5s ease';
  overlay.style.opacity = '0';
  
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 500);
});
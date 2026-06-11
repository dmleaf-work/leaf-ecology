/* =============================================
   Leaf Ecology — script.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Nav: 背景を濃くする ── */
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.style.background = 'rgba(255,248,240,0.97)';
      nav.style.boxShadow  = '0 2px 16px rgba(0,0,0,0.06)';
    } else {
      nav.style.background = 'rgba(255,248,240,0.85)';
      nav.style.boxShadow  = 'none';
    }
  }, { passive: true });

});

/* =============================================
   Leaf Ecology — script.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Nav: スクロールで背景を濃くする ── */
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

  /* ── ハンバーガーメニュー ── */
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks  = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // メニュー内リンクをクリックしたら閉じる
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
      });
    });

    // メニュー外クリックで閉じる
    document.addEventListener('click', e => {
      if (!nav.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
      }
    });
  }

});

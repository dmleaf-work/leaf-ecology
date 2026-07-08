/* =============================================
   Leaf Ecology — script.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* JS有効の印(スクロール出現のCSSはこのクラス配下でのみ有効) */
  document.body.classList.add('js');

  /* ── Nav: スクロールで背景を濃くする(センチナル要素をIntersectionObserverで監視) ── */
  const nav = document.querySelector('nav');
  const scrollSentinel = document.getElementById('scroll-sentinel');
  if (nav && scrollSentinel && 'IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(([entry]) => {
      nav.classList.toggle('scrolled', !entry.isIntersecting);
    }, { threshold: 0 });
    navObserver.observe(scrollSentinel);
  }

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

  /* ── スクロール出現(IntersectionObserver) ── */
  const revealTargets = document.querySelectorAll('.reveal');
  if (revealTargets.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);   // 一度表示したら監視解除
        }
      });
    }, { threshold: 0.15 });

    revealTargets.forEach(el => observer.observe(el));
  } else {
    // 非対応環境ではそのまま表示
    revealTargets.forEach(el => el.classList.add('visible'));
  }

  /* ── 施錠扉: クリック/Enter/Spaceで「ガチャッ」と拒む ── */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('.room-locked').forEach(door => {
    const rattle = () => {
      // reduced-motion 時は揺らさない(鍵アイコンと減光で施錠は伝わる)
      if (reduceMotion.matches) return;
      if (door.classList.contains('rattle')) return;   // 連打対策
      door.classList.add('rattle');
    };
    door.addEventListener('click', rattle);
    door.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();   // Space のページスクロールを抑止
        rattle();
      }
    });
    // 揺れ終わったらクラスを外して再発火可能に
    door.addEventListener('animationend', e => {
      if (e.animationName === 'door-rattle') door.classList.remove('rattle');
    });
  });

});

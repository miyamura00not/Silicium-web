/* ═══════════════════════════════════════════════════════════
   SILICIUM — Main JS
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ── Scroll Reveal ──────────────────────────────────────────── */
(function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

/* ── Nav scroll state ───────────────────────────────────────── */
(function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Hamburger ──────────────────────────────────────────────── */
(function initHamburger() {
  const btn   = document.querySelector('.nav__hamburger');
  const links = document.querySelector('.nav__links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const open = links.classList.toggle('nav__links--open');
    btn.setAttribute('aria-expanded', open);
  });

  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('nav__links--open'));
  });
})();

/* ── Hero grid parallax ─────────────────────────────────────── */
(function initParallax() {
  const grid = document.querySelector('.hero__grid');
  if (!grid) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        grid.style.transform = `translateY(${window.scrollY * 0.12}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

/* ── Code editor typewriter ─────────────────────────────────── */
(function initTypewriter() {
  const editor = document.querySelector('.exec__editor');
  if (!editor) return;

  const lines = [
    `<span class="ln">1</span><span class="cmt">-- Silicium v1.0</span>`,
    `<span class="ln">2</span><span class="kw">local</span> <span class="var">Players</span> = <span class="fn">game</span>:<span class="var">GetService</span>(<span class="str">"Players"</span>)`,
    `<span class="ln">3</span><span class="kw">local</span> <span class="var">lp</span> = Players.LocalPlayer`,
    `<span class="ln">4</span>`,
    `<span class="ln">5</span><span class="kw">for</span> _, v <span class="kw">in</span> <span class="fn">pairs</span>(workspace:GetDescendants()) <span class="kw">do</span>`,
    `<span class="ln">6</span>&nbsp;&nbsp;<span class="kw">if</span> v:IsA(<span class="str">"BasePart"</span>) <span class="kw">then</span>`,
    `<span class="ln">7</span>&nbsp;&nbsp;&nbsp;&nbsp;v.Transparency = <span class="num">0.5</span>`,
    `<span class="ln">8</span>&nbsp;&nbsp;<span class="kw">end</span>`,
    `<span class="ln">9</span><span class="kw">end</span>`,
  ];

  // Just render statically — no need to animate in a screenshot preview
  editor.innerHTML = lines.map(l => `<div class="code-line">${l}</div>`).join('');
})();

/* ── Smooth anchor scroll ───────────────────────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 60;
      const top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ── Active nav link highlight ──────────────────────────────── */
(function initActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav__link[href^="#"]');
  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
})();

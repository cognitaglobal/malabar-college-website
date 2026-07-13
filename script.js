/**
 * Malabar Engineering College — Landing Page Script
 * File: script.js
 */

'use strict';

/* ─────────────────────────────────────────────
   1. Dynamic Footer Year
───────────────────────────────────────────── */
(function setFooterYear() {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

/* ─────────────────────────────────────────────
   2. Intersection Observer — Reveal on Scroll
   Cards animate via CSS initially; this adds
   a re-trigger class when scrolled into view
   on slower connections or tall viewports.
───────────────────────────────────────────── */
(function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;

  const targets = document.querySelectorAll('.program-card, .description-card');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // fire once
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
})();

/* ─────────────────────────────────────────────
   3. Program Card — Click / Keyboard Handler
   Navigation URLs to be wired in later.
   Placeholder navigation map kept here for
   easy future integration.
───────────────────────────────────────────── */
(function initCardNavigation() {
  /** Map program keys to future URLs */
  const navigationMap = {
    iti: 'iti.html',
    cdit: 'cdit.html',
    rutronix: 'rutronix.html',
  };

  const cards = document.querySelectorAll('.program-card[data-program]');

  cards.forEach((card) => {
    const program = card.dataset.program;
    const url = navigationMap[program] || '#';

    /**
     * Navigate on click.
     * When real URLs are set, change window.location.href = url;
     */
    card.addEventListener('click', () => {
      if (url && url !== '#') {
        window.location.href = url;
      } else {
        // Visual ripple feedback for placeholder links
        triggerRipple(card);
      }
    });

    /** Keyboard accessibility — Enter or Space triggers click */
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  /**
   * Creates a temporary ripple pulse on the card
   * used as visual feedback while real navigation is pending.
   * @param {HTMLElement} card
   */
  function triggerRipple(card) {
    card.classList.add('card-ripple');
    setTimeout(() => card.classList.remove('card-ripple'), 500);
  }
})();

/* ─────────────────────────────────────────────
   4. Subtle Parallax on Logo (desktop only)
───────────────────────────────────────────── */
(function initLogoParallax() {
  const logo = document.getElementById('college-logo');
  if (!logo) return;

  // Skip on touch/small screens
  if (window.matchMedia('(max-width: 768px)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let rafId = null;

  document.addEventListener('mousemove', (e) => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx; // ‑1 … +1
      const dy = (e.clientY - cy) / cy;

      const tiltX = dy * -6;   // degrees
      const tiltY = dx * 6;
      const moveX = dx * 4;   // px
      const moveY = dy * 4;

      logo.style.transform =
        `translate(${moveX}px, ${moveY}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
  });

  // Reset on mouse leave
  document.addEventListener('mouseleave', () => {
    logo.style.transform = '';
  });
})();

/* ─────────────────────────────────────────────
   5. Smooth card ripple CSS injection
   (appended once to avoid conflicts)
───────────────────────────────────────────── */
(function injectRippleStyle() {
  const style = document.createElement('style');
  style.textContent = `
    .card-ripple {
      animation: cardRipplePulse 0.45s ease-out !important;
    }
    @keyframes cardRipplePulse {
      0%   { box-shadow: 0 0 0 0   rgba(47, 111, 224, 0.4); }
      70%  { box-shadow: 0 0 0 16px rgba(47, 111, 224, 0); }
      100% { box-shadow: 0 0 0 0   rgba(47, 111, 224, 0); }
    }
  `;
  document.head.appendChild(style);
})();

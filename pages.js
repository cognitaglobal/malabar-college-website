/**
 * Malabar Engineering College — Inner Pages Script
 * File: pages.js
 *
 * NOTE: Course card navigation and viewer logic removed.
 * Course cards now link directly to PDF brochures via <a> tags.
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    initFooterYear();
    initScrollReveal();
});

/* ─────────────────────────────────────────────
   1. Dynamic Footer Year
───────────────────────────────────────────── */
function initFooterYear() {
    const yearEls = document.querySelectorAll('.footer-year');
    const currentYear = new Date().getFullYear();
    yearEls.forEach(el => {
        el.textContent = currentYear;
    });
}

/* ─────────────────────────────────────────────
   2. Scroll Reveal
───────────────────────────────────────────── */
function initScrollReveal() {
    if (!('IntersectionObserver' in window)) return;

    const targets = document.querySelectorAll('.course-card, .inst-hero, .section-header');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    targets.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

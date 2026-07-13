/**
 * Malabar College of Engineering – Scroll reveal and interaction animations
 * File: theme-scroller.js
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // ── 1. Scroll Reveal Animations ──
    const reveals = document.querySelectorAll('.reveal');

    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 130;

        reveals.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Trigger once on setup load

    // ── 2. Animated Stats Counters ──
    const counterItems = document.querySelectorAll('.stat-item .num');
    let countersActive = false;

    function startCounters() {
        counterItems.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
            const duration = 2000; // 2 seconds
            const stepTime = Math.max(Math.floor(duration / target), 15);
            let current = 0;

            const timer = setInterval(() => {
                current += Math.ceil(target / (duration / stepTime));
                if (current >= target) {
                    counter.textContent = target.toLocaleString() + (counter.getAttribute('data-suffix') || '');
                    clearInterval(timer);
                } else {
                    counter.textContent = current.toLocaleString() + (counter.getAttribute('data-suffix') || '');
                }
            }, stepTime);
        });
    }

    function checkCountersVisibility() {
        if (countersActive) return;
        const statsEl = document.querySelector('.stats-container');
        if (!statsEl) return;

        const rect = statsEl.getBoundingClientRect();
        const elementVisible = rect.top < window.innerHeight - 50;

        if (elementVisible) {
            countersActive = true;
            startCounters();
        }
    }

    if (counterItems.length > 0) {
        window.addEventListener('scroll', checkCountersVisibility);
        checkCountersVisibility();
    }

    // ── 3. FAQ Accordion ──
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(q => {
        q.addEventListener('click', () => {
            const item = q.closest('.faq-item');
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            } else {
                // Optionally close other items
                document.querySelectorAll('.faq-item').forEach(other => other.classList.remove('active'));
                item.classList.add('active');
            }
        });
    });

    // ── 4. Ripple Hover Effect Mockup ──
    const primaryBtns = document.querySelectorAll('.btn-primary, .btn-secondary');
    primaryBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function (e) {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.background = 'rgba(255,255,255,0.2)';
            ripple.style.borderRadius = '50%';
            ripple.style.pointerEvents = 'none';
            ripple.style.width = '6px';
            ripple.style.height = '6px';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.style.transform = 'scale(1)';
            ripple.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
            ripple.style.opacity = '1';

            // Check if btn relative positioning is unset
            if (window.getComputedStyle(btn).position === 'static') {
                btn.style.position = 'relative';
            }

            btn.appendChild(ripple);

            requestAnimationFrame(() => {
                ripple.style.transform = 'scale(50)';
                ripple.style.opacity = '0';
            });

            setTimeout(() => ripple.remove(), 600);
        });
    });
});

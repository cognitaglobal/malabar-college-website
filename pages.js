/**
 * Malabar Engineering College — Inner Pages Script
 * File: pages.js
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    initFooterYear();
    initCourseNavigation();
    initViewerLogic();
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
   2. Course Card Navigation
───────────────────────────────────────────── */
function initCourseNavigation() {
    const courseCards = document.querySelectorAll('.course-card[data-course]');

    courseCards.forEach(card => {
        card.addEventListener('click', () => {
            const courseSlug = card.getAttribute('data-course');
            window.location.href = `course-viewer.html?course=${courseSlug}`;
        });

        // Keyboard accessibility
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

/* ─────────────────────────────────────────────
   3. Viewer Logic
───────────────────────────────────────────── */
function initViewerLogic() {
    const titleEl = document.getElementById('viewer-course-title');
    const badgeEl = document.getElementById('viewer-institution-badge');
    const placeholderCourseName = document.getElementById('placeholder-course-name');

    if (!titleEl) return;

    // Get course from URL
    const params = new URLSearchParams(window.location.search);
    const courseSlug = params.get('course');

    if (!courseSlug) {
        titleEl.textContent = "Select a Course";
        return;
    }

    // Map of slugs to display names and institutions
    const courseData = {
        // ITI
        'electrician': { name: 'Electrician', inst: 'ITI' },
        'fitter': { name: 'Fitter', inst: 'ITI' },
        'welder': { name: 'Welder', inst: 'ITI' },
        'turner': { name: 'Turner', inst: 'ITI' },
        'mechanic-motor-vehicle': { name: 'Mechanic Motor Vehicle', inst: 'ITI' },
        'copa': { name: 'COPA', inst: 'ITI' },
        'plumber': { name: 'Plumber', inst: 'ITI' },
        'draughtsman-civil': { name: 'Draughtsman Civil', inst: 'ITI' },

        // CDIT
        'pgdca': { name: 'PGDCA', inst: 'CDIT' },
        'dca': { name: 'DCA', inst: 'CDIT' },
        'tally-gst': { name: 'Tally with GST', inst: 'CDIT' },
        'ms-office': { name: 'MS Office', inst: 'CDIT' },
        'hardware-networking': { name: 'Hardware & Networking', inst: 'CDIT' },
        'graphic-design': { name: 'Graphic Design', inst: 'CDIT' },

        // Rutronix
        'web-development': { name: 'Web Development', inst: 'Rutronix' },
        'electronics': { name: 'Electronics', inst: 'Rutronix' },
        'robotics-iot': { name: 'Robotics & IoT', inst: 'Rutronix' },
        'drone-technology': { name: 'Drone Technology', inst: 'Rutronix' },
        'solar-technology': { name: 'Solar Technology', inst: 'Rutronix' },
        'mobile-repair': { name: 'Mobile Phone Repair', inst: 'Rutronix' }
    };

    const data = courseData[courseSlug];

    if (data) {
        titleEl.textContent = data.name;
        badgeEl.textContent = data.inst;
        if (placeholderCourseName) {
            placeholderCourseName.textContent = `The study material for ${data.name} (${data.inst}) will be available soon.`;
        }
        document.title = `${data.name} | Malabar Engineering College`;
    } else {
        // Fallback for unknown slugs
        const readableName = courseSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        titleEl.textContent = readableName;
        document.title = `${readableName} | Malabar Engineering College`;
    }
}

/* ─────────────────────────────────────────────
   4. Scroll Reveal
───────────────────────────────────────────── */
function initScrollReveal() {
    if (!('IntersectionObserver' in window)) return;

    const targets = document.querySelectorAll('.course-card, .inst-hero, .section-header, .viewer-title-wrap, .pdf-wrapper');

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

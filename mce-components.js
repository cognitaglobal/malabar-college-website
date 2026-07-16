/**
 * Malabar College of Engineering – Reusable Header & Footer Components
 * File: mce-components.js
 *
 * Provides a dynamic injected header and footer with support for dropdowns,
 * scroll sticky shrink adjustments, and responsive menu logic.
 */

(function () {
  'use strict';

  /* ── ICON HANDLERS ── */
  function iconFacebook() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`;
  }
  function iconYoutube() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96C1 8.12 1 12 1 12s0 3.88.46 5.58a2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95C23 15.88 23 12 23 12s0-3.88-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>`;
  }
  function iconInstagram() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`;
  }
  function iconLinkedIn() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`;
  }
  function iconPhone() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.93 12 19.79 19.79 0 0 1 1.85 3.41 2 2 0 0 1 3.84 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.2a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
  }
  function iconEmail() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;
  }
  function iconGlobe() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
  }
  function iconMapPin() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
  }
  function iconSearch() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
  }
  function iconHamburger() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
  }
  function iconCaretDown() {
    return `<svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"/>
  </svg>`;
  }

  /* ── ACTIVE NAV PAGE LOGIC ── */
  function getActivePage() {
    const path = window.location.pathname.toLowerCase();
    const file = path.split('/').pop() || 'index.html';
    if (file === '' || file === 'index.html') return 'home';
    if (file.startsWith('about') || file.startsWith('principal')) return 'about';
    if (file.startsWith('academics')) return 'academics';
    if (file.startsWith('gallery')) return 'gallery';
    if (file.startsWith('admission')) return 'admission';
    if (file.startsWith('facilit')) return 'facilities';
    if (file.startsWith('alumni')) return 'alumni';
    if (file.startsWith('contact')) return 'contact';
    if (file.startsWith('course')) return 'courses';
    return '';
  }

  function buildHeader() {
    const active = getActivePage();

    return `
<div class="mce-top-bar">
  <div class="mce-top-bar-inner">
    <div class="mce-top-bar-left">
      <a class="mce-phone" href="tel:04884280800">
        ${iconPhone()}
        04884 280800
      </a>
      <span class="mce-top-bar-sep">|</span>
      <a class="mce-center-link" href="contact.html">Center</a>
      <div class="mce-top-social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener" title="Facebook">${iconFacebook()}</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener" title="Instagram">${iconInstagram()}</a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener" title="YouTube">${iconYoutube()}</a>
      </div>
    </div>
    <div class="mce-top-bar-right">
    </div>
  </div>
</div>

<div class="mce-main-header">
  <div class="mce-main-header-inner">
    <a class="mce-logo-block" href="index.html">
     <img src="assets/images/logo-malabar.jpg" alt="Malabar College of Engineering Logo">
      <div class="mce-college-name">
        <span class="mce-main-name">Malabar College of Engineering Campus</span>
        <span class="mce-sub-name">Engineering Excellence Through Innovation</span>
      </div>
    </a>

    <nav class="mce-nav" id="mceMainNav">
      <div class="mce-nav-item">
        <a href="index.html" class="mce-nav-link ${active === 'home' ? 'mce-nav-active' : ''}">Home</a>
      </div>
      <div class="mce-nav-item">
        <a href="about.html" class="mce-nav-link ${active === 'about' ? 'mce-nav-active' : ''}">About Us</a>
      </div>
      <div class="mce-nav-item dropdown-toggle">
        <a href="academics.html" class="mce-nav-link ${active === 'academics' ? 'mce-nav-active' : ''}">
          Academics ${iconCaretDown()}
        </a>
        <div class="mce-dropdown-menu">
          <a href="iti.html">ITI Department</a>
          <a href="sit.html">School of IT (SIT)</a>
          <a href="sms.html">School of Management (SMS)</a>
          <a href="cognita.html">Cognita Global Pathway</a>
        </div>
      </div>
      <div class="mce-nav-item">
        <a href="gallery.html" class="mce-nav-link ${active === 'gallery' ? 'mce-nav-active' : ''}">Gallery</a>
      </div>
      <div class="mce-nav-item">
        <a href="admission.html" class="mce-nav-link ${active === 'admission' ? 'mce-nav-active' : ''}">Admission</a>
      </div>
      <div class="mce-nav-item">
        <a href="facilities.html" class="mce-nav-link ${active === 'facilities' ? 'mce-nav-active' : ''}">Facilities</a>
      </div>
      <div class="mce-nav-item">
        <a href="alumni.html" class="mce-nav-link ${active === 'alumni' ? 'mce-nav-active' : ''}">Alumni</a>
      </div>
      <div class="mce-nav-item">
        <a href="contact.html" class="mce-nav-link ${active === 'contact' ? 'mce-nav-active' : ''}">Contact Us</a>
      </div>
    </nav>

    <div class="mce-header-right">
      <div class="mce-search-box">
        <input type="text" placeholder="Search..." id="mceSearchInput" aria-label="Search">
        <button type="button" id="mceSearchBtn" aria-label="Search button">${iconSearch()}</button>
      </div>
      <button class="mce-mobile-toggle" id="mceMobileToggle" aria-label="Toggle navigation">
        ${iconHamburger()}
      </button>
    </div>
  </div>
</div>

<!-- ===========================================
Premium Mobile Drawer
=========================================== -->

<div class="mce-mobile-overlay" id="mceMobileOverlay"></div>

<aside class="mce-mobile-drawer" id="mceMobileDrawer">

    <div class="mce-mobile-top">

        <h3>Menu</h3>

        <button id="mceCloseDrawer" aria-label="Close Menu">

<svg xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
width="24"
height="24"
fill="none"
stroke="currentColor"
stroke-width="2.5"
stroke-linecap="round"
stroke-linejoin="round">

<line x1="18" y1="6" x2="6" y2="18"/>
<line x1="6" y1="6" x2="18" y2="18"/>

</svg>

</button>

    </div>

    <div class="mce-mobile-search">

        <input
            type="text"
            placeholder="Search..."
        >

    </div>

    <nav class="mce-mobile-nav">

        <a href="index.html">Home</a>

        <a href="about.html">About Us</a>
<div class="mce-mobile-dropdown">

<button class="mce-mobile-dropdown-btn">

<span>Academics</span>

<svg xmlns="http://www.w3.org/2000/svg"
width="18"
height="18"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="2.5"
stroke-linecap="round"
stroke-linejoin="round">

<polyline points="6 9 12 15 18 9"/>

</svg>

</button>

<div class="mce-mobile-dropdown-content">

<a href="academics.html">Departments Overview</a>

<a href="iti.html">ITI Department</a>

<a href="sit.html">School of IT (SIT)</a>

<a href="sms.html">School of Management (SMS)</a>

<a href="cognita.html">Cognita Global Pathway</a>

</div>

</div>

        <a href="gallery.html">Gallery</a>

        <a href="admission.html">Admission</a>

        <a href="facilities.html">Facilities</a>

        <a href="alumni.html">Alumni</a>

        <a href="contact.html">Contact</a>

    </nav>

</aside>
`.trim();
  }

  function buildFooter() {
    return `
    <div class="mce-footer-main">

    <!-- ================= LEFT ================= -->

    <div class="mce-footer-brand">

        <img src="assets/images/logo-cognita-new.webp" alt="Malabar College Logo">

        <p>
            Malabar College of Engineering is committed to providing
            world-class education with innovation, excellence,
            leadership and industry-oriented learning.
        </p>

        

    </div>

    <!-- ================= QUICK LINKS ================= -->

    <div class="mce-footer-links-col">

        <h4>Quick Links</h4>

        <div class="mce-footer-quicklinks-grid">

            <div class="mce-footer-links-grid">

                <a href="index.html">Home</a>

                <a href="about.html">About Us</a>

                <a href="academics.html">Academics</a>

                <a href="gallery.html">Gallery</a>

            </div>

            <div class="mce-footer-links-grid">

                <a href="admission.html">Admission</a>

                <a href="facilities.html">Facilities</a>

                <a href="alumni.html">Alumni</a>

                <a href="contact.html">Contact Us</a>

            </div>

        </div>

    </div>

    

    <!-- ================= CONTACT ================= -->

    <div class="mce-footer-contact-col">

        <h4>Get In Touch</h4>

        <div class="mce-contact-list">

            <div class="mce-contact-item">

                <span class="mce-icon-wrap">
                    <i class="fas fa-location-dot"></i>
                </span>

                <span>
                    Malabar College of Engineering<br>
                    Naduvannur, Kozhikode
                </span>

            </div>

            <div class="mce-contact-item">

                <span class="mce-icon-wrap">
                    <i class="fas fa-phone"></i>
                </span>

                <a href="tel:+914962654200">
                    0496 265 4200
                </a>

            </div>

            <div class="mce-contact-item">

                <span class="mce-icon-wrap">
                    <i class="fas fa-mobile-screen-button"></i>
                </span>

                <a href="tel:+918281826552">
                    +91 8182 826 552
                </a>

            </div>

            <div class="mce-contact-item">

                <span class="mce-icon-wrap">
                    <i class="fas fa-envelope"></i>
                </span>

                <a href="mailto:itinaduvannur@gmail.com">
                    itinaduvannur@gmail.com
                </a>

            </div>

        </div>

    </div>

</div>

<div class="mce-footer-bottom">

    <div class="mce-footer-bottom-inner">

       <div class="mce-copyright">

            Copyright © 2026 <span>Malabar College of Engineering</span>. All Rights Reserved.

        </div>

        <div class="mce-footer-bottom-right">

           

            <div class="mce-footer-socials">

                <a href="#"><i class="fab fa-facebook-f"></i></a>

                <a href="#"><i class="fab fa-instagram"></i></a>

                <a href="#"><i class="fab fa-youtube"></i></a>

                <a href="#"><i class="fab fa-linkedin-in"></i></a>

            </div>

        </div>

    </div>

</div>
`.trim();
  }

  function init() {
    // 1. Inject Header
    let headerEl = document.getElementById('mce-header');
    if (!headerEl) {
      headerEl = document.createElement('header');
      headerEl.id = 'mce-header';
      document.body.insertBefore(headerEl, document.body.firstChild);
    }
    headerEl.innerHTML = buildHeader();

    // 2. Inject Footer
    let footerEl = document.getElementById('mce-footer');
    if (!footerEl) {
      footerEl = document.createElement('footer');
      footerEl.id = 'mce-footer';
      document.body.appendChild(footerEl);
    }
    footerEl.innerHTML = buildFooter();

    // 3. Add body dynamic padding class offset
    document.body.classList.add('has-mce-header');

    // 4. Scroll transition for sticky shrink header
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        headerEl.classList.add('scrolled');
      } else {
        headerEl.classList.remove('scrolled');
      }
    });

    // 5. Mobile Toggle & Dropdown Accordion Behavior
    const toggle = document.getElementById('mceMobileToggle');
    const nav = document.getElementById('mceMainNav');
    if (toggle && nav) {
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        nav.classList.toggle('mce-nav-open');
      });
    }

    // Handle dropdown element collapse/expand triggers for Mobile
    const dropdownToggles = document.querySelectorAll('.mce-nav-item.dropdown-toggle');
    dropdownToggles.forEach(toggleEl => {
      const link = toggleEl.querySelector('.mce-nav-link');
      if (link) {
        link.addEventListener('click', (e) => {
          if (window.innerWidth <= 900) {
            e.preventDefault();
            e.stopPropagation();
            toggleEl.classList.toggle('mobile-open');
          }
        });
      }
    });

    // Close menu on click outside
    document.addEventListener('click', (e) => {
      if (nav && !nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('mce-nav-open');
        dropdownToggles.forEach(tel => tel.classList.remove('mobile-open'));
      }
    });

    // 6. Search function
    const searchInput = document.getElementById('mceSearchInput');
    const searchBtn = document.getElementById('mceSearchBtn');
    if (searchInput && searchBtn) {
      searchBtn.addEventListener('click', doSearch);
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doSearch();
      });
    }

    function doSearch() {
      const q = searchInput.value.trim();
      if (q) {
        window.location.href = `https://www.malabarcet.ac.in/?q=${encodeURIComponent(q)}`;
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
/* ============================================
   Premium Mobile Drawer
============================================ */

document.addEventListener("DOMContentLoaded", function () {

  const menu = document.getElementById("mceMobileDrawer");

  const overlay = document.getElementById("mceMobileOverlay");

  const openBtn = document.getElementById("mceMobileToggle");

  const closeBtn = document.getElementById("mceCloseDrawer");

  if (openBtn) {

    openBtn.addEventListener("click", function () {

      menu.classList.add("active");

      overlay.classList.add("active");

      document.body.style.overflow = "hidden";

    });

  }

  if (closeBtn) {

    closeBtn.addEventListener("click", closeDrawer);

  }

  if (overlay) {

    overlay.addEventListener("click", closeDrawer);

  }

  function closeDrawer() {

    menu.classList.remove("active");

    overlay.classList.remove("active");

    document.body.style.overflow = "";

  }

  document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

      closeDrawer();

    }


  });
  const dropdownBtn = document.querySelector(".mce-mobile-dropdown-btn");

  if (dropdownBtn) {

    dropdownBtn.addEventListener("click", function () {

      this.parentElement.classList.toggle("active");

    });

  }


});

/**
 * Animations — GSAP, ScrollTrigger, Lenis, interactions premium
 */
(function () {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let lenis = null;

    // ---------- LENIS SMOOTH SCROLL ----------
    function initLenis() {
        if (prefersReducedMotion || typeof Lenis === 'undefined') return;

        lenis = new Lenis({
            duration: 1.15,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 1.2
        });

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
    }

    // ---------- SCROLL PROGRESS ----------
    function initScrollProgress() {
        const bar = document.getElementById('scroll-progress-bar');
        if (!bar || prefersReducedMotion) return;

        ScrollTrigger.create({
            start: 0,
            end: 'max',
            onUpdate: (self) => {
                bar.style.width = (self.progress * 100) + '%';
            }
        });
    }

    // ---------- PAGE LOADER ----------
    function hideLoader() {
        const loader = document.getElementById('page-loader');
        if (!loader) return;

        setTimeout(() => {
            loader.classList.add('hidden');
        }, prefersReducedMotion ? 0 : 800);
    }

    // ---------- HERO ENTRANCE ----------
    function initHeroAnimations() {
        if (prefersReducedMotion) {
            revealAll();
            return;
        }

        const tl = gsap.timeline({ delay: 0.4 });

        tl.from('#hero .hero-eyebrow', {
            opacity: 0, y: 24, duration: 0.7, ease: 'power3.out'
        })
        .from('#hero .hero-name-line', {
            opacity: 0, y: 20, duration: 0.6, ease: 'power3.out'
        }, '-=0.45')
        .from('#hero .hero-headline', {
            opacity: 0, y: 36, duration: 0.85, ease: 'power3.out'
        }, '-=0.4')
        .from('#hero .hero-description', {
            opacity: 0, y: 24, duration: 0.65, ease: 'power3.out'
        }, '-=0.5')
        .from('#hero .trust-chip', {
            opacity: 0, y: 14, scale: 0.96, duration: 0.45, stagger: 0.05, ease: 'power3.out'
        }, '-=0.4')
        .from('#hero .hero-actions .btn', {
            opacity: 0, y: 20, duration: 0.55, stagger: 0.08, ease: 'power3.out'
        }, '-=0.3')
        .from('#hero .hero-social a', {
            opacity: 0, y: 12, duration: 0.5, stagger: 0.08, ease: 'power3.out'
        }, '-=0.25')
        .from('#hero .hero-visual > *', {
            opacity: 0, y: 36, duration: 0.75, stagger: 0.12, ease: 'power3.out'
        }, '-=0.55');

        initHeroParallax();
    }

    function initHeroParallax() {
        if (prefersReducedMotion) return;

        gsap.to('.hero-glow--primary', {
            y: 80,
            ease: 'none',
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1.2
            }
        });

        gsap.to('.hero-glow--secondary', {
            y: -60,
            ease: 'none',
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1.2
            }
        });

        gsap.to('#hero .hero-content', {
            y: 40,
            opacity: 0.3,
            ease: 'none',
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        });
    }

    // ---------- SECTION HEADERS ----------
    function initSectionHeaders() {
        if (prefersReducedMotion) return;

        gsap.utils.toArray('.section-header').forEach(header => {
            const index = header.querySelector('.section-index');
            const title = header.querySelector('.section-title');
            const subtitle = header.querySelector('.section-subtitle');
            const line = header.querySelector('.section-line');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: header,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });

            if (index) tl.from(index, { opacity: 0, x: -20, duration: 0.5, ease: 'power3.out' });
            if (title) tl.from(title, { opacity: 0, y: 28, duration: 0.65, ease: 'power3.out' }, '-=0.3');
            if (subtitle) tl.from(subtitle, { opacity: 0, y: 20, duration: 0.55, ease: 'power3.out' }, '-=0.4');
            if (line) tl.from(line, { scaleX: 0, transformOrigin: 'left', duration: 0.8, ease: 'power3.out' }, '-=0.35');
        });
    }

    // ---------- SCROLL REVEALS ----------
    function initScrollReveals() {
        if (prefersReducedMotion) {
            revealAll();
            return;
        }

        gsap.utils.toArray('.reveal-item').forEach(item => {
            if (item.closest('#hero') || item.closest('.section-header')) return;

            gsap.fromTo(item,
                { opacity: 0, y: 36 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.75,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 88%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        const cardGroups = [
            { selector: '.trust-card', stagger: 0.08 },
            { selector: '.service-card', stagger: 0.1 },
            { selector: '.process-step', stagger: 0.1 },
            { selector: '.skill-card', stagger: 0.1 },
            { selector: '.timeline-item', stagger: 0.15 },
            { selector: '#project-grid .project-card', stagger: 0.08 },
            { selector: '.cert-card', stagger: 0.1 },
            { selector: '.contact-aside-card', stagger: 0.08 }
        ];

        cardGroups.forEach(({ selector, stagger }) => {
            const cards = gsap.utils.toArray(selector);
            if (!cards.length) return;

            gsap.fromTo(cards,
                { opacity: 0, y: 48 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: cards[0].parentElement,
                        start: 'top 82%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        const featured = document.querySelector('.project-card--featured');
        if (featured) {
            gsap.fromTo(featured,
                { opacity: 0, y: 56, scale: 0.98 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.85,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: featured,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }
    }

    // ---------- TIMELINE LINE ----------
    function initTimelineLine() {
        const fill = document.getElementById('timeline-line-fill');
        const timeline = document.querySelector('.timeline');
        if (!fill || !timeline || prefersReducedMotion) return;

        ScrollTrigger.create({
            trigger: timeline,
            start: 'top 70%',
            end: 'bottom 60%',
            onUpdate: (self) => {
                fill.style.height = (self.progress * 100) + '%';
            }
        });
    }

    // ---------- SKILL BARS ----------
    function initSkillBars() {
        const bars = document.querySelectorAll('.skill-level');

        bars.forEach(bar => {
            const level = bar.dataset.level;

            if (prefersReducedMotion) {
                bar.style.width = level + '%';
                return;
            }

            ScrollTrigger.create({
                trigger: bar,
                start: 'top 92%',
                onEnter: () => {
                    gsap.to(bar, {
                        width: level + '%',
                        duration: 1.4,
                        ease: 'power3.out'
                    });
                },
                once: true
            });
        });
    }

    // ---------- STAT COUNTERS ----------
    function initStatCounters() {
        if (prefersReducedMotion) return;

        document.querySelectorAll('.stat-value, .trust-card-value').forEach(stat => {
            const raw = stat.textContent.trim();
            const target = parseInt(raw, 10);
            if (isNaN(target)) return;

            const suffix = raw.replace(/[\d]/g, '');
            const obj = { val: 0 };

            gsap.to(obj, {
                val: target,
                duration: 1.6,
                delay: stat.classList.contains('trust-card-value') ? 0.2 : 1,
                ease: 'power2.out',
                scrollTrigger: stat.classList.contains('trust-card-value') ? {
                    trigger: stat.closest('.trust-grid') || stat,
                    start: 'top 88%',
                    once: true
                } : undefined,
                onUpdate: () => {
                    stat.textContent = Math.round(obj.val) + suffix;
                }
            });
        });
    }

    // ---------- NAVBAR ----------
    function initNavbar() {
        const navbar = document.getElementById('navbar');
        const navLinks = document.querySelectorAll('.nav-links a[data-section]');
        const sections = document.querySelectorAll('section[id]');

        ScrollTrigger.create({
            start: 'top -80',
            onUpdate: (self) => {
                navbar.classList.toggle('scrolled', self.scroll() > 50);
            }
        });

        sections.forEach(section => {
            ScrollTrigger.create({
                trigger: section,
                start: 'top center',
                end: 'bottom center',
                onEnter: () => setActiveNav(section.id),
                onEnterBack: () => setActiveNav(section.id)
            });
        });

        function setActiveNav(id) {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.dataset.section === id);
            });
        }
    }

    // ---------- CURSOR GLOW ----------
    function initCursor() {
        if (prefersReducedMotion || window.matchMedia('(hover: none)').matches) return;

        const cursor = document.querySelector('.cursor-glow');
        if (!cursor) return;

        document.body.classList.add('cursor-active');

        let x = 0, y = 0;
        let cx = 0, cy = 0;

        document.addEventListener('mousemove', (e) => {
            x = e.clientX;
            y = e.clientY;
        }, { passive: true });

        function animate() {
            cx += (x - cx) * 0.07;
            cy += (y - cy) * 0.07;
            cursor.style.left = cx + 'px';
            cursor.style.top = cy + 'px';
            requestAnimationFrame(animate);
        }
        animate();
    }

    // ---------- TILT CARDS ----------
    function initTiltCards() {
        if (prefersReducedMotion || window.matchMedia('(hover: none)').matches) return;

        document.querySelectorAll('.tilt-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -3.5;
                const rotateY = ((x - centerX) / centerX) * 3.5;

                gsap.to(card, {
                    '--tilt-x': rotateX + 'deg',
                    '--tilt-y': rotateY + 'deg',
                    duration: 0.4,
                    ease: 'power2.out',
                    overwrite: 'auto'
                });

                card.style.setProperty('--mouse-x', (x / rect.width * 100) + '%');
                card.style.setProperty('--mouse-y', (y / rect.height * 100) + '%');
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    '--tilt-x': '0deg',
                    '--tilt-y': '0deg',
                    duration: 0.6,
                    ease: 'elastic.out(1, 0.6)'
                });
            });
        });
    }

    // ---------- MAGNETIC BUTTONS ----------
    function initMagneticButtons() {
        if (prefersReducedMotion || window.matchMedia('(hover: none)').matches) return;

        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(btn, {
                    x: x * 0.25,
                    y: y * 0.25,
                    duration: 0.35,
                    ease: 'power2.out'
                });
            });

            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
            });
        });
    }

    // ---------- ANCHOR LINKS ----------
    // ---------- MOBILE CTA BAR ----------
    function initMobileCtaBar() {
        const bar = document.getElementById('mobile-cta-bar');
        const contact = document.getElementById('contact');
        if (!bar || !contact || prefersReducedMotion) return;

        ScrollTrigger.create({
            trigger: contact,
            start: 'top bottom',
            onEnter: () => bar.classList.add('hidden-bar'),
            onLeaveBack: () => bar.classList.remove('hidden-bar')
        });
    }

    function initAnchorLinks() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (!target) return;

                e.preventDefault();

                if (lenis) {
                    lenis.scrollTo(target, { offset: -76 });
                } else {
                    target.scrollIntoView({ behavior: 'smooth' });
                }

                const mobileMenu = document.getElementById('mobile-menu');
                const hamburger = document.getElementById('hamburger');
                if (mobileMenu?.classList.contains('open')) {
                    mobileMenu.classList.remove('open');
                    hamburger?.classList.remove('active');
                    hamburger?.setAttribute('aria-expanded', 'false');
                    document.body.classList.remove('no-scroll');
                }
            });
        });
    }

    function revealAll() {
        document.querySelectorAll('.reveal-item').forEach(el => {
            el.classList.add('revealed');
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }

    // ---------- INIT ----------
    function init() {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            initLenis();
            initScrollProgress();
            initHeroAnimations();
            initSectionHeaders();
            initScrollReveals();
            initTimelineLine();
            initSkillBars();
            initStatCounters();
            initNavbar();
        } else {
            revealAll();
            document.querySelectorAll('.skill-level').forEach(bar => {
                bar.style.width = bar.dataset.level + '%';
            });
        }

        initCursor();
        initTiltCards();
        initMagneticButtons();
        initMobileCtaBar();
        initAnchorLinks();
        hideLoader();
    }

    window.addEventListener('portfolio:ready', init, { once: true });
})();

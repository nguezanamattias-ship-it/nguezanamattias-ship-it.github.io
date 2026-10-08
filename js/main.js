/**
 * Main — Rendu dynamique & conversion
 */
(function () {
    'use strict';

    const data = portfolioData;

    const SOCIAL_ICONS = {
        linkedin: 'fab fa-linkedin-in',
        github: 'fab fa-github',
        facebook: 'fab fa-facebook-f',
        twitter: 'fab fa-x-twitter',
        youtube: 'fab fa-youtube',
        whatsappCommunity: 'fab fa-whatsapp',
        telegram: 'fab fa-telegram'
    };

    const SOCIAL_LABELS = {
        linkedin: 'LinkedIn',
        github: 'GitHub',
        facebook: 'Facebook',
        twitter: 'Twitter',
        youtube: 'YouTube',
        whatsappCommunity: 'Communauté WhatsApp',
        telegram: 'Canal Telegram'
    };

    const PROJECT_ICONS = {
        'Recherche & Innovation': 'fa-flask',
        'Application Mobile': 'fa-mobile-screen',
        'Application Web': 'fa-globe',
        'Outil de Supervision': 'fa-chart-line',
        'IA & Automatisation': 'fa-robot'
    };

    const PROJECT_PLACEHOLDER_CLASS = {
        'Recherche & Innovation': 'project-placeholder--research',
        'Application Mobile': 'project-placeholder--mobile',
        'Application Web': 'project-placeholder--web',
        'Outil de Supervision': 'project-placeholder--tool',
        'IA & Automatisation': 'project-placeholder--ai'
    };

    const SKILL_CATEGORY_KEYS = {
        'Réseaux & Sécurité': 'network',
        'Développement Mobile & Web': 'dev',
        'Intelligence Artificielle': 'ai',
        'Systèmes & Virtualisation': 'system',
        'Supervision & Outils': 'tools'
    };

    const TECH_ICONS = {
        Python: 'fab fa-python', TensorFlow: 'fa-solid fa-brain', Flutter: 'fa-solid fa-mobile-screen',
        'React Native': 'fab fa-react', Firebase: 'fa-solid fa-fire', Cisco: 'fa-solid fa-network-wired',
        Linux: 'fab fa-linux', Docker: 'fab fa-docker', Git: 'fab fa-git-alt', Grafana: 'fa-solid fa-chart-line',
        Wireshark: 'fa-solid fa-shield-halved', PHP: 'fab fa-php', 'Node.js': 'fab fa-node-js',
        MongoDB: 'fa-solid fa-database', MySQL: 'fa-solid fa-database', Java: 'fab fa-java',
        SNMP: 'fa-solid fa-signal', Zabbix: 'fa-solid fa-desktop', Snort: 'fa-solid fa-shield-virus',
        Scapy: 'fa-solid fa-code', spaCy: 'fa-solid fa-language', Proxmox: 'fa-solid fa-server',
        VMware: 'fa-solid fa-server', Prometheus: 'fa-solid fa-chart-area', InfluxDB: 'fa-solid fa-database',
        'ELK Stack': 'fa-solid fa-magnifying-glass-chart', 'API REST': 'fa-solid fa-plug',
        'Google Maps API': 'fa-solid fa-map-location-dot', NLTK: 'fa-solid fa-book',
        BeautifulSoup: 'fa-solid fa-spider', 'API Telegram': 'fab fa-telegram',
        'Java Spring Boot': 'fa-solid fa-leaf', 'PHP Laravel': 'fab fa-laravel'
    };

    function stripHtml(html) {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }

    function getProjectExcerpt(project, maxLength = 120) {
        const cs = project.caseStudy;
        const text = cs?.problem || stripHtml(project.description).replace(/\s+/g, ' ').trim();
        return text.length > maxLength ? text.slice(0, maxLength) + '…' : text;
    }

    function getUniqueProjectTypes() {
        return ['Tous', ...new Set(data.projects.map(p => p.type))];
    }

    function getAllTechnologies() {
        const techSet = new Set();
        data.projects.forEach(p => p.technologies.forEach(t => techSet.add(t)));
        data.experiences.forEach(e => e.technologies.forEach(t => techSet.add(t)));
        data.skills.categories.forEach(c => c.items.forEach(i => techSet.add(i.name.split('(')[0].trim())));
        return [...techSet].sort();
    }

    function getFeaturedProject() {
        return data.projects.find(p => p.id === 'defense-ia') ||
               data.projects.find(p => p.featured) ||
               data.projects[0];
    }

    function isValidUrl(url) {
        return url && !url.includes('tonprofil') && url !== '#';
    }

    function createInitialsAvatar(initials) {
        const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'>
            <rect width='100%' height='100%' fill='#121C2E'/>
            <text x='50%' y='50%' dy='.35em' text-anchor='middle' font-family='Plus Jakarta Sans,sans-serif' font-size='120' font-weight='700' fill='#00D4AA'>${initials.toUpperCase()}</text>
        </svg>`;
        return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
    }

    // ---------- SEO ----------
    function renderStructuredData() {
        const { personal, social } = data;
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: personal.name,
            jobTitle: 'Expert Réseaux, Cybersécurité & Développement',
            email: personal.email,
            address: { '@type': 'PostalAddress', addressCountry: 'CM', addressLocality: personal.location.split('/')[0].trim() },
            url: document.querySelector('link[rel="canonical"]')?.href || '',
            sameAs: Object.values(social).filter(isValidUrl)
        };
        const el = document.getElementById('structured-data');
        if (el) el.textContent = JSON.stringify(schema);
    }

    // ---------- HERO ----------
    function renderPersonal() {
        const { personal } = data;

        document.title = `${personal.name} — Réseaux, Cybersécurité & Développement`;
        document.getElementById('logo-text').textContent = personal.initials;
        document.getElementById('footer-logo').textContent = personal.initials;
        document.getElementById('footer-name').textContent = personal.name;

        const eyebrowEl = document.getElementById('hero-eyebrow');
        if (eyebrowEl) {
            eyebrowEl.innerHTML = `<span class="status-dot"></span><span>${personal.availability}</span>`;
        }

        document.getElementById('name-display').textContent = personal.name;
        document.getElementById('headline-display').textContent = personal.headline;
        document.getElementById('description-display').textContent = personal.description;

        const chipsEl = document.getElementById('hero-trust-chips');
        if (chipsEl) {
            chipsEl.innerHTML = `
                <span class="trust-chip"><i class="fas fa-location-dot"></i>${personal.location.split('/')[0].trim()}</span>
                <span class="trust-chip"><i class="fas fa-shield-halved"></i>Cybersécurité</span>
                <span class="trust-chip"><i class="fas fa-network-wired"></i>Réseaux</span>
                <span class="trust-chip"><i class="fas fa-code"></i>Développement</span>
            `;
        }

        const heroPhoto = document.getElementById('hero-photo');
        const aboutPhoto = document.getElementById('about-photo');
        const setPhoto = (el) => {
            if (!el || !personal.photo) return;
            el.alt = `${personal.name} — photo professionnelle`;
            el.onerror = () => {
                el.src = createInitialsAvatar(personal.initials);
            };
            el.src = personal.photo;
        };
        setPhoto(heroPhoto);
        setPhoto(aboutPhoto);

        const statsEl = document.getElementById('hero-stats');
        statsEl.innerHTML = data.trust.slice(0, 3).map(t => `
            <div class="stat-item">
                <span class="stat-value">${t.value}</span>
                <span class="stat-label">${t.label}</span>
            </div>
        `).join('');

        renderHeroSocial();
    }

    function getSocialLinks() {
        return Object.entries(data.social)
            .filter(([, url]) => isValidUrl(url))
            .map(([key, url]) => ({
                key,
                url,
                icon: SOCIAL_ICONS[key] || 'fas fa-link',
                label: SOCIAL_LABELS[key] || key
            }));
    }

    function renderHeroSocial() {
        const el = document.getElementById('hero-social');
        if (!el) return;

        el.innerHTML = getSocialLinks().map(l =>
            `<a href="${l.url}" target="_blank" rel="noopener noreferrer" aria-label="${l.label}"><i class="${l.icon}"></i> ${l.label}</a>`
        ).join('');
    }

    // ---------- TRUST ----------
    function renderTrust() {
        const grid = document.getElementById('trust-grid');
        if (!grid) return;

        grid.innerHTML = data.trust.map(item => `
            <div class="trust-card card-interactive">
                <span class="trust-card-value">${item.value}</span>
                <span class="trust-card-label">${item.label}</span>
                <span class="trust-card-detail">${item.detail}</span>
            </div>
        `).join('');
    }

    // ---------- SERVICES ----------
    function renderServices() {
        const grid = document.getElementById('services-grid');
        if (!grid) return;

        grid.innerHTML = data.services.map(s => `
            <article class="service-card tilt-card card-interactive">
                <div class="service-card-icon"><i class="fas ${s.icon}"></i></div>
                <h3>${s.title}</h3>
                <p>${s.description}</p>
                <div class="service-tags">
                    ${s.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
            </article>
        `).join('');
    }

    // ---------- PROCESS ----------
    function renderProcess() {
        const grid = document.getElementById('process-grid');
        if (!grid) return;

        grid.innerHTML = data.process.map(step => `
            <div class="process-step card-interactive">
                <span class="process-step-num">${step.step}</span>
                <h3>${step.title}</h3>
                <p>${step.description}</p>
            </div>
        `).join('');
    }

    // ---------- ABOUT ----------
    function renderAbout() {
        const { personal, about, education, languages } = data;

        document.getElementById('about-subtitle').textContent = about.intro;
        document.getElementById('about-content').innerHTML = about.longText;

        document.getElementById('about-profile-meta').innerHTML = `
            <h3>${personal.name}</h3>
            <p class="about-role">${personal.tagline}</p>
            <p class="about-location"><i class="fas fa-location-dot"></i> ${personal.location}</p>
            <p class="about-approach"><strong>Approche :</strong> ${about.approach}</p>
        `;

        document.getElementById('specialties-card').innerHTML = `
            <div class="info-card-header"><i class="fas fa-bullseye"></i><h3>Spécialités</h3></div>
            <ul>${about.specialties.map(s => `<li>${s}</li>`).join('')}</ul>
        `;

        document.getElementById('education-card').innerHTML = `
            <div class="info-card-header"><i class="fas fa-graduation-cap"></i><h3>Formation</h3></div>
            <p><strong>${education.degree}</strong></p>
            <p>${education.school}</p>
            <p class="highlight">${education.period} · ${education.location}</p>
        `;

        document.getElementById('languages-card').innerHTML = `
            <div class="info-card-header"><i class="fas fa-language"></i><h3>Langues</h3></div>
            <ul>${languages.map(l => `<li><strong>${l.name}</strong> — ${l.level}</li>`).join('')}</ul>
        `;
    }

    // ---------- SKILLS ----------
    function renderSkills() {
        const grid = document.getElementById('skills-grid');
        grid.innerHTML = '';

        data.skills.categories.forEach(category => {
            const card = document.createElement('div');
            const categoryKey = SKILL_CATEGORY_KEYS[category.name] || 'network';
            card.className = 'skill-card tilt-card card-interactive';
            card.dataset.category = categoryKey;
            card.innerHTML = `
                <div class="skill-card-header">
                    <div class="skill-card-icon"><i class="${category.icon}"></i></div>
                    <h3>${category.name}</h3>
                </div>
                <div class="skills-list">
                    ${category.items.map(item => `
                        <div class="skill-item">
                            <div class="skill-item-header">
                                <span class="skill-name">${item.name}</span>
                                <span class="skill-percent">${item.level}%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-level" data-level="${item.level}" style="width:0"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            grid.appendChild(card);
        });
    }

    function renderTechStack() {
        const track = document.getElementById('tech-marquee-track');
        if (!track) return;

        const skillsData = data.marqueeSkills || {
            dev: [],
            security: [],
            network: []
        };

        const categories = [
            {
                key: 'dev',
                badgeText: 'DÉVELOPPEMENT',
                badgeIcon: 'fa-solid fa-code',
                items: skillsData.dev || []
            },
            {
                key: 'security',
                badgeText: 'CYBERSÉCURITÉ',
                badgeIcon: 'fa-solid fa-shield-halved',
                items: skillsData.security || []
            },
            {
                key: 'network',
                badgeText: 'RÉSEAUX & SYSTÈMES',
                badgeIcon: 'fa-solid fa-network-wired',
                items: skillsData.network || []
            }
        ];

        let sequence = '';
        categories.forEach(cat => {
            sequence += `
                <span class="tech-chip tech-chip--category tech-chip--category-${cat.key}">
                    <i class="${cat.badgeIcon}"></i>
                    <strong>${cat.badgeText}</strong>
                </span>
            `;

            cat.items.forEach(item => {
                const styleAttr = `style="color: ${item.color}; background: ${item.bg}; border-color: ${item.border}; --chip-color: ${item.color};"`;
                sequence += `
                    <span class="tech-chip tech-chip--${cat.key} tech-chip--colored" ${styleAttr}>
                        <i class="${item.icon}" style="color: ${item.color}"></i>
                        <span>${item.name}</span>
                    </span>
                `;
            });
        });

        track.innerHTML = sequence + sequence;
    }

    function renderExperienceIcon(exp) {
        if (exp.logo) {
            const bgClass = exp.logoBg === 'dark' ? ' experience-icon--logo-dark' : '';
            return `<div class="experience-icon experience-icon--logo${bgClass}"><img src="${exp.logo}" alt="Logo ${exp.company}" loading="lazy"></div>`;
        }
        return `<div class="experience-icon"><i class="${exp.icon}"></i></div>`;
    }

    // ---------- EXPERIENCE ----------
    function renderExperience() {
        const timeline = document.getElementById('experience-grid');
        timeline.innerHTML = '';

        const lineEl = document.createElement('div');
        lineEl.className = 'timeline-line';
        lineEl.innerHTML = '<div class="timeline-line-fill" id="timeline-line-fill"></div>';
        timeline.appendChild(lineEl);

        data.experiences.forEach(exp => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="experience-card tilt-card card-interactive">
                    <div class="experience-header">
                        ${renderExperienceIcon(exp)}
                        <div class="experience-meta">
                            <h3>${exp.company}</h3>
                            <span class="period">${exp.period}</span>
                            <span class="title">${exp.title}</span>
                            <span class="location"><i class="fas fa-location-dot"></i> ${exp.location}</span>
                        </div>
                    </div>
                    <div class="experience-body">
                        ${exp.description}
                        <div class="technologies">${exp.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
                    </div>
                </div>
            `;
            timeline.appendChild(item);
        });
    }

    // ---------- PROJECTS ----------
    function renderProjects() {
        renderProjectFilters();
        renderFeaturedProject();
        renderProjectGrid();
        initProjectModal();
    }

    function renderProjectFilters() {
        const filtersEl = document.getElementById('project-filters');
        filtersEl.innerHTML = getUniqueProjectTypes().map((type, i) =>
            `<button class="btn btn-ghost ${i === 0 ? 'active' : ''}" data-filter="${type === 'Tous' ? 'all' : type}" role="tab">${type}</button>`
        ).join('');

        filtersEl.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-filter]');
            if (!btn) return;
            filtersEl.querySelectorAll('.btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProjects(btn.dataset.filter);
        });
    }

    function filterProjects(filter) {
        document.querySelectorAll('#project-grid .project-card').forEach(card => {
            card.classList.toggle('hidden', !(filter === 'all' || card.dataset.type === filter));
        });
        const featured = document.getElementById('project-featured');
        const featuredCard = featured?.querySelector('.project-card');
        if (featuredCard) {
            featured.style.display = (filter === 'all' || featuredCard.dataset.type === filter) ? '' : 'none';
        }
    }

    function createProjectVisual(project) {
        const placeholderClass = PROJECT_PLACEHOLDER_CLASS[project.type] || 'project-placeholder--web';
        const icon = PROJECT_ICONS[project.type] || 'fa-folder';
        const badge = project.featured || project.id === 'defense-ia' ? '<span class="project-badge">Projet phare</span>' : '';
        const shotsBadge = project.screenshots?.length
            ? `<span class="project-badge project-badge--shots"><i class="fas fa-images"></i> ${project.screenshots.length} captures</span>`
            : '';
        const imageContent = project.image
            ? `<img src="${project.image}" alt="Aperçu du projet ${project.title}" class="project-image" loading="lazy" data-fallback-icon="${icon}" data-fallback-class="${placeholderClass}">`
            : `<div class="project-placeholder ${placeholderClass}"><i class="fas ${icon}"></i></div>`;

        return `
            <div class="project-visual">
                ${imageContent}
                ${badge}
                ${shotsBadge}
                <div class="project-hover-overlay" aria-hidden="true">
                    <span class="project-hover-cta">Voir l'étude de cas <i class="fas fa-arrow-right"></i></span>
                </div>
            </div>
        `;
    }

    function initProjectImageFallback(container, project) {
        const img = container.querySelector('.project-image');
        if (!img) return;
        img.onerror = () => {
            const cls = img.dataset.fallbackClass || 'project-placeholder--web';
            const icon = img.dataset.fallbackIcon || 'fa-folder';
            img.outerHTML = `<div class="project-placeholder ${cls}"><i class="fas ${icon}"></i></div>`;
        };
    }

    function createProjectCard(project, isFeatured = false) {
        const card = document.createElement('article');
        card.className = `project-card tilt-card card-interactive ${isFeatured ? 'project-card--featured' : ''}`;
        card.dataset.type = project.type;
        card.dataset.projectId = project.id;

        const cs = project.caseStudy;
        const problemLine = cs?.problem ? `<p class="project-problem"><strong>Problème :</strong> ${getProjectExcerpt({ caseStudy: { problem: cs.problem } }, 90)}</p>` : '';

        let highlights = '';
        if (isFeatured && cs) {
            highlights = '<div class="project-highlights">';
            if (cs.solution) {
                const sol = cs.solution.length > 100 ? cs.solution.slice(0, 100) + '…' : cs.solution;
                highlights += `<div class="project-highlight"><span class="project-highlight-label">Solution</span><span>${sol}</span></div>`;
            }
            if (cs.result) {
                highlights += `<div class="project-highlight"><span class="project-highlight-label">Résultat</span><span>${cs.result}</span></div>`;
            }
            highlights += '</div>';
        }

        card.innerHTML = `
            ${createProjectVisual(project)}
            <div class="project-content">
                <div class="project-meta">
                    <span class="project-type">${project.type}</span>
                    <span class="project-period">${project.period}</span>
                </div>
                <h3>${project.title}</h3>
                ${problemLine}
                ${highlights}
                <p class="project-excerpt">${getProjectExcerpt(project)}</p>
                <div class="project-technologies">
                    ${project.technologies.slice(0, isFeatured ? 5 : 3).map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    ${project.technologies.length > (isFeatured ? 5 : 3) ? `<span class="tech-tag">+${project.technologies.length - (isFeatured ? 5 : 3)}</span>` : ''}
                </div>
                <div class="project-footer">
                    <span class="project-view-btn">Étude de cas <i class="fas fa-arrow-right"></i></span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => openProjectModal(project.id));
        const visual = card.querySelector('.project-visual');
        if (visual) initProjectImageFallback(visual, project);
        return card;
    }

    function renderFeaturedProject() {
        const el = document.getElementById('project-featured');
        const featured = getFeaturedProject();
        if (featured) el.appendChild(createProjectCard(featured, true));
    }

    function renderProjectGrid() {
        const grid = document.getElementById('project-grid');
        const featured = getFeaturedProject();
        data.projects.forEach(p => {
            if (featured && p.id === featured.id) return;
            grid.appendChild(createProjectCard(p));
        });
    }

    function renderProjectGallery(project) {
        if (!project.screenshots?.length) return '';

        const items = project.screenshots.map((shot, i) => `
            <figure class="project-gallery-item">
                <button type="button" class="project-gallery-thumb" data-gallery-index="${i}" aria-label="Agrandir : ${shot.caption}">
                    <img src="${shot.src}" alt="${shot.caption}" loading="lazy">
                </button>
                <figcaption>${shot.caption}</figcaption>
            </figure>
        `).join('');

        return `
            <div class="project-gallery" data-project-id="${project.id}">
                <h4 class="project-gallery-title">Aperçu de l'application</h4>
                <div class="project-gallery-grid">${items}</div>
                <div class="project-gallery-preview" hidden>
                    <img src="" alt="" id="gallery-preview-img">
                    <p id="gallery-preview-caption"></p>
                </div>
            </div>
        `;
    }

    function initProjectGallery(container) {
        const gallery = container.querySelector('.project-gallery');
        if (!gallery) return;

        const projectId = gallery.dataset.projectId;
        const project = data.projects.find(p => p.id === projectId);
        if (!project?.screenshots?.length) return;

        const preview = gallery.querySelector('.project-gallery-preview');
        const previewImg = gallery.querySelector('#gallery-preview-img');
        const previewCaption = gallery.querySelector('#gallery-preview-caption');

        gallery.querySelectorAll('.project-gallery-thumb').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.dataset.galleryIndex, 10);
                const shot = project.screenshots[index];
                if (!shot || !previewImg) return;

                previewImg.src = shot.src;
                previewImg.alt = shot.caption;
                if (previewCaption) previewCaption.textContent = shot.caption;
                preview.hidden = false;

                gallery.querySelectorAll('.project-gallery-thumb').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        gallery.querySelector('.project-gallery-thumb')?.click();
    }

    function renderCaseStudyModal(project) {
        const cs = project.caseStudy;
        if (!cs) return `<div class="project-description">${project.description}</div>`;

        let html = '<div class="case-study">';
        if (cs.problem) html += `<div class="case-block"><h4>Problème</h4><p>${cs.problem}</p></div>`;
        if (cs.solution) html += `<div class="case-block"><h4>Solution</h4><p>${cs.solution}</p></div>`;
        if (cs.role) html += `<div class="case-block"><h4>Mon rôle</h4><p>${cs.role}</p></div>`;
        if (cs.features?.length) {
            html += `<div class="case-block"><h4>Fonctionnalités</h4><ul>${cs.features.map(f => `<li>${f}</li>`).join('')}</ul></div>`;
        }
        if (cs.result) html += `<div class="case-block case-block--result"><h4>Résultat</h4><p>${cs.result}</p></div>`;
        html += '</div>';
        return html;
    }

    function initProjectModal() {
        const modal = document.getElementById('project-modal');
        document.getElementById('modal-close').addEventListener('click', closeProjectModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeProjectModal(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProjectModal(); });
    }

    function openProjectModal(projectId) {
        const project = data.projects.find(p => p.id === projectId);
        if (!project) return;

        const modal = document.getElementById('project-modal');
        const content = document.getElementById('modal-content');
        const links = project.links || {};

        content.innerHTML = `
            ${renderProjectGallery(project)}
            <div class="project-meta">
                <span class="project-type">${project.type}</span>
                <span class="project-period">${project.period}</span>
            </div>
            <h2 id="modal-title">${project.title}</h2>
            ${renderCaseStudyModal(project)}
            <div class="project-technologies">
                ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
            <div class="modal-links">
                ${isValidUrl(links.github) ? `<a href="${links.github}" class="btn btn-secondary" target="_blank" rel="noopener"><i class="fab fa-github"></i> Code source</a>` : ''}
                ${isValidUrl(links.demo) ? `<a href="${links.demo}" class="btn btn-primary" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Voir le projet</a>` : ''}
                ${isValidUrl(links.playstore) ? `<a href="${links.playstore}" class="btn btn-secondary" target="_blank" rel="noopener"><i class="fab fa-google-play"></i> Play Store</a>` : ''}
                ${isValidUrl(links.paper) ? `<a href="${links.paper}" class="btn btn-secondary" target="_blank" rel="noopener"><i class="fas fa-file-pdf"></i> Document</a>` : ''}
            </div>
        `;

        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');
        initProjectGallery(content);
    }

    function closeProjectModal() {
        const modal = document.getElementById('project-modal');
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
    }

    window.openProjectModal = openProjectModal;

    // ---------- CERTIFICATIONS ----------
    function renderCertifications() {
        const container = document.getElementById('certifications-container');
        container.innerHTML = data.certifications.map(cert => `
            <div class="cert-card tilt-card card-interactive">
                <div class="cert-icon"><i class="${cert.icon}"></i></div>
                <h4>${cert.name}</h4>
                <p class="cert-issuer">${cert.issuer} · ${cert.year}</p>
                <span class="status ${cert.status === 'Obtenu' ? 'obtained' : 'in-progress'}">${cert.status}</span>
            </div>
        `).join('');
    }

    // ---------- CONTACT ----------
    function renderContact() {
        const { personal, contactForm } = data;
        const subtitle = document.getElementById('contact-subtitle');
        if (subtitle) {
            subtitle.textContent = personal.responseTime
                ? `Parlez-moi de votre projet — ${personal.responseTime}`
                : 'Parlez-moi de votre projet — je vous réponds rapidement';
        }

        const typeSelect = document.getElementById('contact-type');
        const budgetSelect = document.getElementById('contact-budget');

        typeSelect.innerHTML = contactForm.projectTypes.map(t => `<option value="${t}">${t}</option>`).join('');
        budgetSelect.innerHTML = contactForm.budgetRanges.map(b => `<option value="${b}">${b}</option>`).join('');

        document.getElementById('form-note').textContent =
            'Votre message ouvrira votre client mail avec les informations pré-remplies.';

        document.getElementById('contact-aside').innerHTML = `
            <div class="contact-aside-card card-interactive">
                <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                <h3>E-mail</h3>
                <a href="mailto:${personal.email}">${personal.email}</a>
            </div>
            <div class="contact-aside-card card-interactive">
                <div class="contact-icon"><i class="fab fa-whatsapp"></i></div>
                <h3>WhatsApp direct</h3>
                <a href="https://wa.me/${personal.phoneIntl}" target="_blank" rel="noopener">Envoyer un message</a>
            </div>
            ${isValidUrl(data.social.whatsappCommunity) ? `
            <div class="contact-aside-card card-interactive">
                <div class="contact-icon"><i class="fab fa-whatsapp"></i></div>
                <h3>Communauté WhatsApp</h3>
                <a href="${data.social.whatsappCommunity}" target="_blank" rel="noopener">Rejoindre la communauté</a>
            </div>` : ''}
            ${isValidUrl(data.social.telegram) ? `
            <div class="contact-aside-card card-interactive">
                <div class="contact-icon"><i class="fab fa-telegram"></i></div>
                <h3>Canal Telegram</h3>
                <a href="${data.social.telegram}" target="_blank" rel="noopener">Rejoindre le canal</a>
            </div>` : ''}
            ${isValidUrl(data.social.facebook) ? `
            <div class="contact-aside-card card-interactive">
                <div class="contact-icon"><i class="fab fa-facebook-f"></i></div>
                <h3>Facebook</h3>
                <a href="${data.social.facebook}" target="_blank" rel="noopener">Me joindre sur Facebook</a>
            </div>` : ''}
            <div class="contact-aside-card card-interactive">
                <div class="contact-icon"><i class="fas fa-phone"></i></div>
                <h3>Téléphone</h3>
                <a href="tel:+${personal.phoneIntl}">+${personal.phoneIntl.replace(/(\d{3})(\d+)/, '$1 $2')}</a>
            </div>
            <div class="contact-aside-card card-interactive">
                <div class="contact-icon"><i class="fas fa-location-dot"></i></div>
                <h3>Localisation</h3>
                <p>${personal.location}</p>
            </div>
        `;
    }

    function initContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const fd = new FormData(form);
            const name = fd.get('name')?.toString().trim();
            const email = fd.get('email')?.toString().trim();
            const projectType = fd.get('projectType');
            const budget = fd.get('budget');
            const message = fd.get('message')?.toString().trim();

            if (!name || !email || !message) {
                form.querySelector('.form-submit').classList.add('shake');
                setTimeout(() => form.querySelector('.form-submit')?.classList.remove('shake'), 500);
                return;
            }

            const subject = encodeURIComponent(`[Portfolio] ${projectType} — ${name}`);
            const body = encodeURIComponent(
                `Nom : ${name}\nE-mail : ${email}\nType de projet : ${projectType}\nBudget : ${budget}\n\nMessage :\n${message}`
            );

            window.location.href = `mailto:${data.personal.email}?subject=${subject}&body=${body}`;
        });
    }

    // ---------- SOCIAL ----------
    function renderSocial() {
        const socialLinks = document.getElementById('social-links');
        socialLinks.innerHTML = '';

        getSocialLinks().forEach(({ url, icon, label }) => {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.setAttribute('aria-label', label);
            link.innerHTML = `<i class="${icon}"></i>`;
            socialLinks.appendChild(link);
        });

        document.getElementById('current-year').textContent = new Date().getFullYear();
    }

    function initMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');

        hamburger.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('open');
            hamburger.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isOpen);
            mobileMenu.setAttribute('aria-hidden', !isOpen);
            document.body.classList.toggle('no-scroll', isOpen);
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    function initFloatingSkills() {
        const toggle = document.getElementById('floating-skills-toggle');
        const pill = document.getElementById('floating-skills-pill');
        const icon = document.getElementById('floating-toggle-icon');
        if (!toggle || !pill) return;

        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isMin = pill.classList.toggle('minimized');
            if (icon) {
                icon.className = isMin ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
            }
        });

        pill.addEventListener('click', () => {
            if (pill.classList.contains('minimized')) {
                pill.classList.remove('minimized');
                if (icon) icon.className = 'fas fa-chevron-down';
            }
        });
    }

    function init() {
        renderStructuredData();
        renderPersonal();
        renderTrust();
        renderProjects();
        renderServices();
        renderProcess();
        renderAbout();
        renderSkills();
        renderTechStack();
        renderExperience();
        renderCertifications();
        renderContact();
        renderSocial();
        initContactForm();
        initMobileMenu();
        initFloatingSkills();

        window.dispatchEvent(new Event('portfolio:ready'));
    }

    document.addEventListener('DOMContentLoaded', init);
})();

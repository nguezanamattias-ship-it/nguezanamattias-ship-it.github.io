// ============================================
// DONNÉES DU PORTFOLIO — Source unique de vérité
// Modifiez ce fichier pour mettre à jour le site
// ============================================

const portfolioData = {
    personal: {
        name: "NGUEZANA MATTIAS",
        initials: "NM",
        eyebrow: "Réseaux · Cybersécurité · Développement · Cameroun",
        headline: "Je sécurise vos infrastructures et développe des solutions numériques fiables.",
        tagline: "Expert réseaux & cybersécurité · Développeur · Innovateur IA",
        description: "J'accompagne entreprises, institutions et projets qui ont besoin de réseaux robustes, de systèmes protégés et d'applications performantes — avec une approche orientée résultats.",
        photo: "assets/images/photo.png",
        email: "nguezanamattias@gmail.com",
        phone: "658544405",
        phoneIntl: "237658544405",
        location: "Garoua / Douala / Yaoundé",
        availability: "Disponible pour missions, stages et collaborations",
        responseTime: null
    },

    social: {
        linkedin: "https://www.linkedin.com/in/mattias-nguezana-056377384?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        github: "https://github.com/nguezanamattias-ship-it",
        facebook: "https://www.facebook.com/ngmattias?mibextid=wwXIfr",
        youtube: "https://youtube.com/@techmathias?si=cEW6fWPzL9PL7SQz",
        whatsappCommunity: "https://chat.whatsapp.com/EPb4TC2krfqEKPd41XOlS5",
        telegram: "https://t.me/+cW0E6-BNC1w3ODE8",
        twitter: "https://twitter.com/tonprofil"
    },

    trust: [
        { value: "2+", label: "Stages en entreprise", detail: "ENEO · SODECOTON" },
        { value: "6", label: "Projets réalisés", detail: "Mobile · Web · Réseau · IA" },
        { value: "1", label: "Certification CCNA", detail: "Cisco Networking Academy" },
        { value: "200+", label: "Postes supervisés", detail: "Réseau industriel SODECOTON" }
    ],

    services: [
        {
            id: "network-security",
            icon: "fa-shield-halved",
            title: "Réseaux & cybersécurité",
            description: "Audit, sécurisation et administration de réseaux d'entreprise : VLAN, VPN, pare-feu, supervision et durcissement des infrastructures.",
            tags: ["Cisco", "VPN", "Pare-feu", "Zabbix"]
        },
        {
            id: "mobile-apps",
            icon: "fa-mobile-screen",
            title: "Applications mobiles",
            description: "Conception et développement d'apps iOS/Android adaptées aux besoins locaux : géolocalisation, chat, notifications et backends connectés.",
            tags: ["Flutter", "React Native", "Firebase"]
        },
        {
            id: "web-apps",
            icon: "fa-globe",
            title: "Applications web & APIs",
            description: "Plateformes métier, dashboards et APIs REST pour centraliser vos opérations, automatiser vos processus et améliorer la productivité.",
            tags: ["Laravel", "Spring Boot", "MySQL"]
        },
        {
            id: "monitoring",
            icon: "fa-chart-line",
            title: "Supervision & monitoring",
            description: "Mise en place d'outils de surveillance réseau en temps réel : métriques, alertes et tableaux de bord pour anticiper les incidents.",
            tags: ["Grafana", "Prometheus", "SNMP"]
        },
        {
            id: "ai-security",
            icon: "fa-brain",
            title: "IA appliquée à la sécurité",
            description: "Prototypage de systèmes intelligents pour la détection d'anomalies réseau et la réponse adaptative aux menaces.",
            tags: ["Python", "TensorFlow", "Scapy"]
        }
    ],

    process: [
        {
            step: "01",
            title: "Comprendre",
            description: "Analyse de votre besoin, de votre contexte technique et des objectifs à atteindre."
        },
        {
            step: "02",
            title: "Concevoir",
            description: "Architecture réseau ou logicielle, choix des technologies et plan d'implémentation."
        },
        {
            step: "03",
            title: "Développer",
            description: "Implémentation, tests, sécurisation et optimisation des performances."
        },
        {
            step: "04",
            title: "Livrer",
            description: "Déploiement, documentation et accompagnement pour garantir la continuité."
        }
    ],

    about: {
        intro: "Étudiant en Bachelor 3 Réseaux, Télécoms & Cybersécurité à KEYCE Informatique & IA, je transforme des problèmes techniques concrets en solutions opérationnelles.",
        longText: `
            <p>Je m'appelle <strong>NGUEZANA MATTIAS</strong>. Ma spécialité : relier la cybersécurité, l'administration réseau et le développement pour répondre à des enjeux réels — pas seulement théoriques.</p>
            <p>Mes stages chez <strong>ENEO</strong> (2025) et <strong>SODECOTON</strong> (2026) m'ont confronté aux défis des infrastructures critiques au Cameroun : sécurisation de backbone, gestion de 200+ postes, séparation OT/IT et détection d'anomalies.</p>
            <p>En parallèle, je développe des applications mobiles, des outils de supervision et des prototypes IA pour renforcer la résilience des systèmes que j'administre ou que je conçois.</p>
        `,
        specialties: ["Administration réseau Cisco", "Sécurisation d'infrastructures", "Développement mobile & web", "IA pour la détection d'anomalies"],
        approach: "Écouter le besoin, proposer une solution adaptée au contexte local, livrer proprement et documenter pour faciliter la maintenance."
    },

    experiences: [
        {
            id: "sodecoton",
            company: "SODECOTON",
            location: "Garoua, Cameroun",
            title: "Administrateur Réseau & Sécurité (Stagiaire)",
            period: "2026",
            type: "stage",
            description: `
                <p>Stage d'application au sein de la Société de Développement du Coton, leader de l'agro-industrie camerounaise.</p>
                <ul>
                    <li><strong>Administration du réseau industriel</strong> : Gestion de 200+ postes sur le site de production (équipements Cisco Catalyst, routeurs).</li>
                    <li><strong>Séparation OT/IT</strong> : Configuration de VLANs pour isoler le réseau administratif du réseau de production.</li>
                    <li><strong>Gestion des utilisateurs</strong> : Active Directory (création, droits, permissions).</li>
                    <li><strong>Supervision avancée</strong> : Déploiement et paramétrage de Zabbix pour le monitoring des équipements critiques.</li>
                    <li><strong>Innovation</strong> : Mise en place d'un prototype de système de défense adaptative MVT + IA pour la détection d'anomalies en temps réel.</li>
                </ul>
            `,
            technologies: ["Cisco (OSPF, VLAN, ACLs, NAT)", "Windows Server (AD, DHCP, DNS)", "Zabbix", "Python (Scapy)", "IA (détection d'anomalies)"],
            icon: "fa-solid fa-building",
            logo: "assets/images/sodecoton.png"
        },
        {
            id: "eneo",
            company: "ENEO",
            location: "Cameroun",
            title: "Stagiaire en Infrastructure Réseau",
            period: "2025",
            type: "stage",
            description: `
                <p>Stage d'immersion au sein de la direction des infrastructures réseau de l'opérateur historique du secteur énergétique.</p>
                <ul>
                    <li><strong>Configuration et déploiement de VPNs IPsec</strong> : Sécurisation des communications entre les sous-stations et le siège.</li>
                    <li><strong>Gestion du backbone réseau</strong> : Assistance à la configuration des équipements Cisco.</li>
                    <li><strong>Mise en place de règles de filtrage</strong> : Configuration des ACLs et du NAT sur les pare-feu.</li>
                    <li><strong>Inventaire et cartographie</strong> : Recensement de plus de 50 équipements réseaux.</li>
                    <li><strong>Veille sécuritaire</strong> : Identification et suivi des vulnérabilités critiques.</li>
                </ul>
            `,
            technologies: ["Cisco", "VPN (IPsec)", "Pare-feu (PFSense/iptables)", "Wireshark"],
            icon: "fa-solid fa-bolt",
            logo: "assets/images/eneo.png",
            logoBg: "dark"
        }
    ],

    projects: [
        {
            id: "defense-ia",
            title: "Système de Défense Adaptative MVT + IA",
            type: "Recherche & Innovation",
            period: "2025 - 2026",
            featured: true,
            caseStudy: {
                problem: "Les systèmes de détection d'intrusion traditionnels (Snort) génèrent trop de faux positifs, ralentissant la réponse aux vraies menaces.",
                solution: "Prototype combinant Machine Learning et analyse comportementale pour détecter les anomalies réseau et déclencher une réponse adaptative.",
                role: "Conception et développement du prototype en collaboration avec SODECOTON.",
                features: ["Détection d'anomalies en temps réel", "Intégration Snort & ELK Stack", "Tableaux de bord Grafana", "Collecte de trafic via Scapy"],
                result: "Réduction du temps de détection de 80%, faux positifs < 5%."
            },
            description: `
                <p><strong>Projet phare</strong> — Application de l'intelligence artificielle à la détection et la réponse adaptative aux menaces réseau, en collaboration avec SODECOTON.</p>
            `,
            technologies: ["Python", "TensorFlow", "Scapy", "Snort", "ELK Stack", "Grafana"],
            links: { github: "https://github.com/tonprofil/defense-ia", demo: "#", paper: "#" },
            image: "assets/images/projet-ia.svg"
        },
        {
            id: "trouve-mon-artisan",
            title: "Trouve Mon Artisan",
            type: "Application Mobile",
            period: "2025",
            featured: false,
            caseStudy: {
                problem: "Difficulté pour les particuliers au Cameroun de trouver rapidement des artisans qualifiés et fiables près de chez eux.",
                solution: "Application mobile de mise en relation avec géolocalisation, profils vérifiés et système d'avis.",
                role: "Développement complet de l'application mobile et intégration Firebase.",
                features: ["Géolocalisation via Google Maps API", "Système de notation et d'avis", "Chat en temps réel client-artisan"],
                result: null
            },
            description: `<p>Application de mise en relation artisans-clients au Cameroun.</p>`,
            technologies: ["Flutter", "Firebase", "Google Maps API"],
            links: { github: "https://github.com/tonprofil/trouve-mon-artisan", playstore: "#" },
            image: "assets/images/trouve-mon-artisan.svg"
        },
        {
            id: "covoiturage",
            title: "Application de Covoiturage",
            type: "Application Mobile",
            period: "2025",
            featured: false,
            caseStudy: {
                problem: "Les étudiants de KEYCE manquent de solutions simples pour organiser des trajets partagés.",
                solution: "Application mobile facilitant la recherche et l'appariement conducteurs/passagers.",
                role: "Développement frontend mobile et intégration backend Node.js.",
                features: ["Recherche de trajets origine/destination", "Appariement conducteurs/passagers", "Notifications en temps réel"],
                result: null
            },
            description: `<p>Faciliter les trajets partagés pour les étudiants de KEYCE.</p>`,
            technologies: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
            links: { github: "https://github.com/tonprofil/covoiturage", demo: "#" },
            image: "assets/images/covoiturage.svg"
        },
        {
            id: "gestion-etudiants",
            title: "IUGEE — Gestion des Étudiants",
            type: "Application Web",
            period: "2025",
            featured: false,
            caseStudy: {
                problem: "L'Institut Universitaire des Grandes Écoles Européennes (IUGEE) et ses écoles affiliées (KEYCE, Digital College, etc.) manquaient d'un portail unique pour centraliser la gestion académique et administrative des étudiants.",
                solution: "Plateforme web multi-écoles avec portail d'accueil, sélection d'établissement et espace étudiant complet : notes, situation financière et relevé de notes.",
                role: "Conception et développement de la plateforme (frontend, backend et modules étudiants).",
                features: [
                    "Portail d'accueil institutionnel IUGEE",
                    "Sélection multi-écoles (KEYCE, Digital College, ECEMA…)",
                    "Tableau de bord étudiant personnalisé",
                    "Suivi des notes et résumé académique par semestre",
                    "Gestion des paiements et situation financière",
                    "Impression du relevé de notes"
                ],
                result: null
            },
            description: `<p>Plateforme web centralisée pour la gestion des étudiants au sein de l'IUGEE et de ses écoles partenaires, dont KEYCE Informatique & IA.</p>`,
            technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "API REST"],
            links: { github: "https://github.com/tonprofil/gestion-etudiants", demo: "#" },
            image: "assets/images/projects/gestion-etudiants/dashboard.png",
            screenshots: [
                {
                    src: "assets/images/projects/gestion-etudiants/accueil.png",
                    caption: "Page d'accueil — portail institutionnel IUGEE"
                },
                {
                    src: "assets/images/projects/gestion-etudiants/ecoles.png",
                    caption: "Sélection des écoles de formation"
                },
                {
                    src: "assets/images/projects/gestion-etudiants/dashboard.png",
                    caption: "Espace étudiant — notes, paiements et relevé"
                }
            ]
        },
        {
            id: "monitoring-reseau",
            title: "Application de Monitoring Réseau",
            type: "Outil de Supervision",
            period: "2025",
            featured: false,
            caseStudy: {
                problem: "Absence de visibilité en temps réel sur la santé du réseau (latence, bande passante, disponibilité).",
                solution: "Outil de supervision collectant les métriques via SNMP et les visualisant dans Grafana avec alertes automatiques.",
                role: "Conception et développement de la solution de monitoring.",
                features: ["Collecte SNMP", "Visualisation Grafana", "Alertes seuils critiques", "Historique InfluxDB"],
                result: null
            },
            description: `<p>Superviser en temps réel la santé d'un réseau.</p>`,
            technologies: ["Python", "SNMP", "Grafana", "Prometheus", "InfluxDB"],
            links: { github: "https://github.com/tonprofil/monitoring-reseau", demo: "#" },
            image: "assets/images/monitoring.svg"
        },
        {
            id: "telegram-bot",
            title: "Assistant Virtuel Telegram Bot",
            type: "IA & Automatisation",
            period: "2025",
            featured: false,
            caseStudy: {
                problem: "Besoin d'un accès rapide à l'information technique réseau/sécurité et aux alertes de veille.",
                solution: "Bot Telegram automatisé avec NLP pour répondre aux questions et diffuser des alertes CVE.",
                role: "Développement du bot, intégration NLP et scraping de veille.",
                features: ["Réponses automatiques NLP", "Alertes CVE et actualités sécurité", "Interface Telegram accessible"],
                result: null
            },
            description: `<p>Bot Telegram pour veille cybersécurité et assistance technique.</p>`,
            technologies: ["Python", "API Telegram", "spaCy", "NLTK", "BeautifulSoup"],
            links: { github: "https://github.com/tonprofil/telegram-bot", demo: "https://t.me/NGMattiasBot" },
            image: "assets/images/telegram-bot.svg"
        }
    ],

    skills: {
        categories: [
            {
                name: "Réseaux & Sécurité",
                icon: "fa-solid fa-network-wired",
                items: [
                    { name: "Cisco (OSPF, BGP, VLAN, STP)", level: 90 },
                    { name: "VPN (IPsec, OpenVPN, WireGuard)", level: 85 },
                    { name: "Pare-feu (PFSense, iptables)", level: 85 },
                    { name: "IDS/IPS (Snort, Suricata)", level: 80 },
                    { name: "Protocoles (TCP/IP, DHCP, DNS)", level: 90 }
                ]
            },
            {
                name: "Développement Mobile & Web",
                icon: "fa-solid fa-mobile-screen",
                items: [
                    { name: "Flutter", level: 80 },
                    { name: "React Native", level: 75 },
                    { name: "Firebase", level: 80 },
                    { name: "API REST", level: 85 },
                    { name: "PHP / Laravel", level: 70 }
                ]
            },
            {
                name: "Intelligence Artificielle",
                icon: "fa-solid fa-brain",
                items: [
                    { name: "Python (scikit-learn, TensorFlow)", level: 75 },
                    { name: "NLP (spaCy, NLTK)", level: 70 },
                    { name: "Détection d'anomalies", level: 80 },
                    { name: "Prise de décision adaptative", level: 75 }
                ]
            },
            {
                name: "Systèmes & Virtualisation",
                icon: "fa-solid fa-server",
                items: [
                    { name: "Linux (Debian, Ubuntu, CentOS)", level: 85 },
                    { name: "Windows Server (AD, DHCP, DNS)", level: 80 },
                    { name: "Proxmox / VMware", level: 80 },
                    { name: "Docker", level: 65 },
                    { name: "Scripting (Bash, PowerShell)", level: 75 }
                ]
            },
            {
                name: "Supervision & Outils",
                icon: "fa-solid fa-chart-line",
                items: [
                    { name: "Wireshark / GNS3", level: 90 },
                    { name: "Zabbix / Nagios", level: 85 },
                    { name: "Grafana / Prometheus", level: 75 },
                    { name: "Git / GitHub", level: 85 },
                    { name: "Jira / GLPI", level: 70 }
                ]
            }
        ]
    },

    marqueeSkills: {
        dev: [
            { name: "Python", icon: "fab fa-python", color: "#FFD43B", bg: "rgba(255, 212, 59, 0.15)", border: "rgba(255, 212, 59, 0.4)" },
            { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E", bg: "rgba(247, 223, 30, 0.15)", border: "rgba(247, 223, 30, 0.4)" },
            { name: "TypeScript", icon: "fa-solid fa-code", color: "#38BDF8", bg: "rgba(56, 189, 248, 0.15)", border: "rgba(56, 189, 248, 0.4)" },
            { name: "Flutter", icon: "fa-solid fa-mobile-screen", color: "#54C5F8", bg: "rgba(84, 197, 248, 0.16)", border: "rgba(84, 197, 248, 0.45)" },
            { name: "React / RN", icon: "fab fa-react", color: "#61DAFB", bg: "rgba(97, 218, 251, 0.16)", border: "rgba(97, 218, 251, 0.45)" },
            { name: "Node.js", icon: "fab fa-node-js", color: "#4ADE80", bg: "rgba(74, 222, 128, 0.16)", border: "rgba(74, 222, 128, 0.45)" },
            { name: "PHP / Laravel", icon: "fab fa-laravel", color: "#FF4438", bg: "rgba(255, 68, 56, 0.16)", border: "rgba(255, 68, 56, 0.45)" },
            { name: "API REST", icon: "fa-solid fa-plug", color: "#C084FC", bg: "rgba(192, 132, 252, 0.16)", border: "rgba(192, 132, 252, 0.45)" },
            { name: "Docker", icon: "fab fa-docker", color: "#38BDF8", bg: "rgba(56, 189, 248, 0.16)", border: "rgba(56, 189, 248, 0.45)" },
            { name: "Git & GitHub", icon: "fab fa-github", color: "#FB923C", bg: "rgba(251, 146, 60, 0.16)", border: "rgba(251, 146, 60, 0.45)" },
            { name: "PostgreSQL", icon: "fa-solid fa-database", color: "#60A5FA", bg: "rgba(96, 165, 250, 0.16)", border: "rgba(96, 165, 250, 0.45)" },
            { name: "C / C++", icon: "fa-solid fa-file-code", color: "#818CF8", bg: "rgba(129, 140, 248, 0.16)", border: "rgba(129, 140, 248, 0.45)" },
            { name: "CI/CD", icon: "fa-solid fa-gears", color: "#FBBF24", bg: "rgba(251, 191, 36, 0.16)", border: "rgba(251, 191, 36, 0.45)" }
        ],
        security: [
            { name: "Pentesting & Audit", icon: "fa-solid fa-user-secret", color: "#F87171", bg: "rgba(248, 113, 113, 0.16)", border: "rgba(248, 113, 113, 0.45)" },
            { name: "OWASP Top 10", icon: "fa-solid fa-shield-halved", color: "#FB923C", bg: "rgba(251, 146, 60, 0.16)", border: "rgba(251, 146, 60, 0.45)" },
            { name: "Kali Linux", icon: "fab fa-linux", color: "#38BDF8", bg: "rgba(56, 189, 248, 0.16)", border: "rgba(56, 189, 248, 0.45)" },
            { name: "Wireshark", icon: "fa-solid fa-network-wired", color: "#60A5FA", bg: "rgba(96, 165, 250, 0.16)", border: "rgba(96, 165, 250, 0.45)" },
            { name: "Burp Suite", icon: "fa-solid fa-bug", color: "#FB923C", bg: "rgba(251, 146, 60, 0.18)", border: "rgba(251, 146, 60, 0.45)" },
            { name: "Snort IDS/IPS", icon: "fa-solid fa-shield-virus", color: "#FB7185", bg: "rgba(251, 113, 133, 0.16)", border: "rgba(251, 113, 133, 0.45)" },
            { name: "Cryptographie", icon: "fa-solid fa-key", color: "#FACC15", bg: "rgba(250, 204, 21, 0.16)", border: "rgba(250, 204, 21, 0.45)" },
            { name: "SIEM Wazuh", icon: "fa-solid fa-bell", color: "#C084FC", bg: "rgba(192, 132, 252, 0.16)", border: "rgba(192, 132, 252, 0.45)" },
            { name: "Nmap Recon", icon: "fa-solid fa-crosshairs", color: "#34D399", bg: "rgba(52, 211, 153, 0.16)", border: "rgba(52, 211, 153, 0.45)" },
            { name: "Sécurité OT/IT", icon: "fa-solid fa-industry", color: "#38BDF8", bg: "rgba(56, 189, 248, 0.16)", border: "rgba(56, 189, 248, 0.45)" },
            { name: "Hardening OS", icon: "fa-solid fa-lock", color: "#10B981", bg: "rgba(16, 185, 129, 0.16)", border: "rgba(16, 185, 129, 0.45)" },
            { name: "IA Détection", icon: "fa-solid fa-brain", color: "#F472B6", bg: "rgba(244, 114, 182, 0.16)", border: "rgba(244, 114, 182, 0.45)" }
        ],
        network: [
            { name: "Cisco CCNA", icon: "fa-solid fa-server", color: "#22D3EE", bg: "rgba(34, 211, 238, 0.18)", border: "rgba(34, 211, 238, 0.45)" },
            { name: "TCP/IP & OSI", icon: "fa-solid fa-diagram-project", color: "#60A5FA", bg: "rgba(96, 165, 250, 0.16)", border: "rgba(96, 165, 250, 0.45)" },
            { name: "Routage OSPF", icon: "fa-solid fa-route", color: "#2DD4BF", bg: "rgba(45, 212, 191, 0.16)", border: "rgba(45, 212, 191, 0.45)" },
            { name: "VLAN 802.1Q", icon: "fa-solid fa-arrows-split-up-and-left", color: "#818CF8", bg: "rgba(129, 140, 248, 0.16)", border: "rgba(129, 140, 248, 0.45)" },
            { name: "pfSense", icon: "fa-solid fa-fire", color: "#F87171", bg: "rgba(248, 113, 113, 0.18)", border: "rgba(248, 113, 113, 0.45)" },
            { name: "VPN IPsec", icon: "fa-solid fa-shield", color: "#A78BFA", bg: "rgba(167, 139, 250, 0.16)", border: "rgba(167, 139, 250, 0.45)" },
            { name: "DNS & DHCP", icon: "fa-solid fa-globe", color: "#38BDF8", bg: "rgba(56, 189, 248, 0.16)", border: "rgba(56, 189, 248, 0.45)" },
            { name: "Zabbix SNMP", icon: "fa-solid fa-desktop", color: "#EF4444", bg: "rgba(239, 68, 68, 0.18)", border: "rgba(239, 68, 68, 0.45)" },
            { name: "Grafana", icon: "fa-solid fa-chart-line", color: "#FB923C", bg: "rgba(251, 146, 60, 0.18)", border: "rgba(251, 146, 60, 0.45)" },
            { name: "Subnetting", icon: "fa-solid fa-calculator", color: "#34D399", bg: "rgba(52, 211, 153, 0.16)", border: "rgba(52, 211, 153, 0.45)" },
            { name: "Active Directory", icon: "fab fa-windows", color: "#38BDF8", bg: "rgba(56, 189, 248, 0.18)", border: "rgba(56, 189, 248, 0.45)" },
            { name: "Linux Server", icon: "fab fa-linux", color: "#FACC15", bg: "rgba(250, 204, 21, 0.16)", border: "rgba(250, 204, 21, 0.45)" }
        ]
    },

    certifications: [
        { name: "CCNA 1, 2 & 3 (Cisco)", issuer: "Cisco Networking Academy", year: "2025", status: "Obtenu", icon: "fa-solid fa-certificate" },
        { name: "CompTIA Security+", issuer: "CompTIA", year: "2026", status: "En cours", icon: "fa-solid fa-certificate" },
        { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2026", status: "En cours", icon: "fa-solid fa-cloud" }
    ],

    education: {
        school: "KEYCE Informatique & IA",
        location: "Douala / Garoua, Cameroun",
        degree: "Bachelor 3 – Réseaux, Télécoms & Cybersécurité",
        period: "2024 – 2026",
        description: "Formation orientée métier, alliant expertise technique (Cisco, Linux, sécurité) et compétences en Intelligence Artificielle appliquée aux infrastructures réseau."
    },

    languages: [
        { name: "Français", level: "Langue maternelle (expert)" },
        { name: "Anglais", level: "Technique - Niveau B1/B2 (intermédiaire)" }
    ],

    interests: [
        "Veille cybersécurité (The Hacker News, ZATAZ)",
        "Open source et communautés techniques",
        "Football / Basketball",
        "Jeux vidéo (stratégie, RPG)"
    ],

    contactForm: {
        projectTypes: [
            "Réseau & cybersécurité",
            "Application mobile",
            "Application web",
            "Supervision & monitoring",
            "IA / Automatisation",
            "Autre"
        ],
        budgetRanges: [
            "À définir ensemble",
            "< 500 000 FCFA",
            "500 000 – 1 000 000 FCFA",
            "> 1 000 000 FCFA"
        ]
    }
};

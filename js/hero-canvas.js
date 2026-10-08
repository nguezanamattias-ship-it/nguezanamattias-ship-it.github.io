/**
 * Hero Network Canvas — Visualisation réseau abstraite v2
 */
(function () {
    'use strict';

    const canvas = document.getElementById('network-canvas');
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    let width, height, nodes, animationId;
    let mouse = { x: -1000, y: -1000 };
    let isVisible = true;

    const CONFIG = {
        nodeCount: 55,
        connectionDistance: 145,
        nodeSpeed: 0.25,
        nodeRadius: 1.8,
        lineOpacity: 0.12,
        nodeColor: 'rgba(0, 212, 170, 0.55)',
        lineColor: 'rgba(59, 130, 246, 0.18)',
        accentColor: 'rgba(99, 102, 241, 0.35)',
        pulseNodes: 0.06
    };

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = canvas.offsetWidth;
        height = canvas.offsetHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createNodes() {
        const count = window.innerWidth < 768 ? 30 : CONFIG.nodeCount;
        nodes = [];

        for (let i = 0; i < count; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * CONFIG.nodeSpeed,
                vy: (Math.random() - 0.5) * CONFIG.nodeSpeed,
                radius: CONFIG.nodeRadius + Math.random() * 1.2,
                pulse: Math.random() * Math.PI * 2,
                glow: Math.random() < CONFIG.pulseNodes,
                hub: Math.random() < 0.04
            });
        }
    }

    function drawConnection(x1, y1, x2, y2, opacity, r, g, b) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    function draw() {
        if (!isVisible) return;

        ctx.clearRect(0, 0, width, height);

        nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;
            node.pulse += 0.018;

            if (node.x < 0 || node.x > width) node.vx *= -1;
            if (node.y < 0 || node.y > height) node.vy *= -1;

            node.x = Math.max(0, Math.min(width, node.x));
            node.y = Math.max(0, Math.min(height, node.y));
        });

        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CONFIG.connectionDistance) {
                    const opacity = (1 - dist / CONFIG.connectionDistance) * CONFIG.lineOpacity;
                    drawConnection(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y, opacity, 59, 130, 246);
                }
            }

            const mdx = nodes[i].x - mouse.x;
            const mdy = nodes[i].y - mouse.y;
            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

            if (mDist < 130) {
                const opacity = (1 - mDist / 130) * 0.25;
                drawConnection(nodes[i].x, nodes[i].y, mouse.x, mouse.y, opacity, 0, 212, 170);
            }
        }

        nodes.forEach(node => {
            const pulseScale = 1 + Math.sin(node.pulse) * 0.15;
            const r = (node.hub ? node.radius * 1.8 : node.radius) * pulseScale;

            if (node.glow || node.hub) {
                ctx.beginPath();
                ctx.arc(node.x, node.y, r * 2.5, 0, Math.PI * 2);
                ctx.fillStyle = node.hub ? 'rgba(0, 212, 170, 0.12)' : CONFIG.accentColor;
                ctx.fill();
            }

            ctx.beginPath();
            ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
            ctx.fillStyle = node.hub ? 'rgba(0, 212, 170, 0.85)' : CONFIG.nodeColor;
            ctx.fill();
        });

        animationId = requestAnimationFrame(draw);
    }

    function init() {
        resize();
        createNodes();
        draw();
    }

    function onMouseMove(e) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    }

    function onVisibilityChange() {
        isVisible = !document.hidden;
        if (isVisible) {
            draw();
        } else {
            cancelAnimationFrame(animationId);
        }
    }

    const observer = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting && !document.hidden;
        if (isVisible) draw();
        else cancelAnimationFrame(animationId);
    }, { threshold: 0.05 });

    observer.observe(canvas);

    window.addEventListener('resize', () => {
        resize();
        createNodes();
    }, { passive: true });

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

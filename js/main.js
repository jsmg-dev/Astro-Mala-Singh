/* Astro Mala Singh — Shared site logic */

const SITE = {
    name: 'Astro Mala Singh',
    tagline: 'AI Spiritual Guidance',
    whatsapp: '919166010400',
    email: 'contact@astromalasingh.com'
};

const NAV_LINKS = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'astrologer.html', label: 'Our Astrologer' },
    { href: 'palm-reading.html', label: 'Palm Reading' },
    { href: 'face-reading.html', label: 'Face Reading' },
    { href: 'psychic-reading.html', label: 'Psychic Reading' },
    { href: 'ai-chat.html', label: 'AI Chat' },
    { href: 'pricing.html', label: 'Pricing' },
    { href: 'blog.html', label: 'Blog' },
    { href: 'contact.html', label: 'Contact' },
    { href: 'faq.html', label: 'FAQ' }
];

const FOOTER_LINKS = {
    about: [
        { href: 'about.html', label: 'About Us' },
        { href: 'astrologer.html', label: 'Our Astrologer' },
        { href: 'privacy.html', label: 'Privacy Policy' },
        { href: 'refund.html', label: 'Refund Policy' },
        { href: 'terms.html', label: 'Terms' },
        { href: 'disclaimer.html', label: 'Disclaimer' }
    ],
    services: [
        { href: 'palm-reading.html', label: 'Palm Reading' },
        { href: 'face-reading.html', label: 'Face Reading' },
        { href: 'psychic-reading.html', label: 'Psychic Reading' },
        { href: 'ai-chat.html', label: 'AI Chat' },
        { href: 'pricing.html', label: 'Pricing' }
    ],
    account: [
        { href: 'dashboard.html', label: 'Dashboard' },
        { href: 'profile.html', label: 'User Profile' },
        { href: 'reports.html', label: 'My Reports' },
        { href: 'payments.html', label: 'Payment History' }
    ]
};

const ZODIAC = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];

function currentPage() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    return path;
}

function renderHeader() {
    const el = document.getElementById('site-header');
    if (!el) return;
    const page = currentPage();
    const links = NAV_LINKS.map(l =>
        `<a href="${l.href}" class="${page === l.href ? 'active' : ''}">${l.label}</a>`
    ).join('');

    el.innerHTML = `
    <header class="site-header">
        <div class="container nav">
            <a class="brand" href="index.html">
                <span class="brand-icon">✦</span>
                <span>${SITE.name}</span>
            </a>
            <button class="nav-toggle" id="nav-toggle" aria-label="Menu" aria-expanded="false">
                <span></span><span></span><span></span>
            </button>
            <nav class="nav-links" id="nav-links">${links}</nav>
            <div class="nav-actions">
                <a class="btn btn-outline btn-sm" href="dashboard.html">Dashboard</a>
                <a class="btn btn-gold btn-sm" href="ai-chat.html">Free Reading</a>
            </div>
        </div>
    </header>`;

    document.getElementById('nav-toggle')?.addEventListener('click', () => {
        const nav = document.getElementById('nav-links');
        const open = nav?.classList.toggle('open');
        document.getElementById('nav-toggle')?.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
}

function renderFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;

    const list = (items) => items.map(i => `<li><a href="${i.href}">${i.label}</a></li>`).join('');

    el.innerHTML = `
    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <h4>${SITE.name}</h4>
                    <p style="color:var(--muted);font-size:0.88rem;">Ancient wisdom meets modern AI for palm, face & psychic spiritual guidance.</p>
                    <div class="social-links">
                        <a href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noreferrer" aria-label="WhatsApp">💬</a>
                        <a href="#" aria-label="Facebook">f</a>
                        <a href="#" aria-label="Instagram">📷</a>
                        <a href="#" aria-label="YouTube">▶</a>
                    </div>
                </div>
                <div>
                    <h4>About</h4>
                    <ul>${list(FOOTER_LINKS.about)}</ul>
                </div>
                <div>
                    <h4>Services</h4>
                    <ul>${list(FOOTER_LINKS.services)}</ul>
                </div>
                <div>
                    <h4>Account</h4>
                    <ul>${list(FOOTER_LINKS.account)}</ul>
                    <p style="margin-top:12px;font-size:0.85rem;color:var(--muted);">
                        <a href="contact.html">Contact</a> ·
                        <a href="https://wa.me/${SITE.whatsapp}">WhatsApp</a>
                    </p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>© ${new Date().getFullYear()} ${SITE.name}. All rights reserved. For entertainment & guidance purposes only.</p>
            </div>
        </div>
    </footer>`;
}

function initGalaxy() {
    const canvas = document.getElementById('galaxy-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = [];
    let shooting = [];
    let w, h;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        stars = Array.from({ length: 180 }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 1.5 + 0.3,
            a: Math.random(),
            speed: Math.random() * 0.3 + 0.05
        }));
    }

    function shoot() {
        if (Math.random() > 0.985) {
            shooting.push({
                x: Math.random() * w,
                y: 0,
                len: Math.random() * 80 + 40,
                speed: Math.random() * 8 + 6,
                angle: Math.PI / 4
            });
        }
    }

    function draw() {
        ctx.fillStyle = '#050816';
        ctx.fillRect(0, 0, w, h);

        const grad = ctx.createRadialGradient(w * 0.5, h * 0.3, 0, w * 0.5, h * 0.5, w * 0.8);
        grad.addColorStop(0, 'rgba(109, 40, 217, 0.15)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        stars.forEach(s => {
            s.a += s.speed * 0.01;
            const opacity = 0.3 + Math.abs(Math.sin(s.a)) * 0.7;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.fill();
        });

        shooting = shooting.filter(s => {
            s.x += Math.cos(s.angle) * s.speed;
            s.y += Math.sin(s.angle) * s.speed;
            const g = ctx.createLinearGradient(s.x, s.y, s.x - s.len, s.y - s.len);
            g.addColorStop(0, 'rgba(255,255,255,0.8)');
            g.addColorStop(1, 'transparent');
            ctx.strokeStyle = g;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s.x - s.len * Math.cos(s.angle), s.y - s.len * Math.sin(s.angle));
            ctx.stroke();
            return s.y < h && s.x < w;
        });

        shoot();
        requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    draw();
}

function initZodiacFloat() {
    const wrap = document.querySelector('.site-wrap');
    if (!wrap) return;
    ZODIAC.forEach((z, i) => {
        const el = document.createElement('span');
        el.className = 'zodiac-float';
        el.textContent = z;
        el.style.left = `${5 + (i * 8) % 90}%`;
        el.style.top = `${10 + (i * 17) % 80}%`;
        el.style.animationDelay = `${i * 1.5}s`;
        el.style.animationDuration = `${18 + i * 2}s`;
        wrap.appendChild(el);
    });
}

function initReveal() {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
}

function initChatDemo() {
    const form = document.getElementById('chat-form');
    const messages = document.getElementById('chat-messages');
    if (!form || !messages) return;

    form.addEventListener('submit', e => {
        e.preventDefault();
        const input = form.querySelector('input');
        const text = input?.value.trim();
        if (!text) return;

        appendBubble(messages, text, 'user');
        input.value = '';

        setTimeout(() => {
            const reply = getDemoReply(text);
            appendBubble(messages, reply, 'ai');
            messages.scrollTop = messages.scrollHeight;
        }, 900);
    });
}

function appendBubble(container, text, role) {
    const div = document.createElement('div');
    div.className = `chat-bubble ${role}`;
    div.textContent = text;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function getDemoReply(q) {
    const lower = q.toLowerCase();
    if (lower.includes('business') || lower.includes('career'))
        return 'The lines on your palm suggest a period of growth ahead. Focus on patience and partnerships. Saturn\'s influence favors steady progress in the coming months. For a detailed analysis, try our Premium Consultation.';
    if (lower.includes('marriage') || lower.includes('love'))
        return 'Venus energy indicates meaningful connections are forming. Trust your intuition in relationships. A harmonious phase may arrive when you align with your inner wisdom.';
    if (lower.includes('money') || lower.includes('financial'))
        return 'Jupiter\'s blessing points toward improved financial stability. Avoid impulsive decisions. Remedies including charity on Thursdays may strengthen prosperity.';
    return 'Thank you for your question. Based on ancient palmistry and intuitive guidance, I sense positive transformation ahead. Ask about love, career, health, or spirituality for deeper insights. ✨';
}

function initUploadZones() {
    document.querySelectorAll('.upload-zone').forEach(zone => {
        const input = zone.querySelector('input[type="file"]');
        const preview = zone.querySelector('.upload-preview');
        if (!input) return;

        zone.addEventListener('click', () => input.click());
        zone.addEventListener('dragover', e => { e.preventDefault(); zone.style.borderColor = 'var(--secondary)'; });
        zone.addEventListener('dragleave', () => { zone.style.borderColor = ''; });
        zone.addEventListener('drop', e => {
            e.preventDefault();
            zone.style.borderColor = '';
            if (e.dataTransfer.files[0]) showPreview(e.dataTransfer.files[0], preview, zone);
        });
        input.addEventListener('change', () => {
            if (input.files[0]) showPreview(input.files[0], preview, zone);
        });
    });
}

function showPreview(file, preview, zone) {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = e => {
        if (preview) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }
        const label = zone.querySelector('.upload-label');
        if (label) label.textContent = file.name;
    };
    reader.readAsDataURL(file);
}

document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
    initGalaxy();
    initZodiacFloat();
    initReveal();
    initChatDemo();
    initUploadZones();
});

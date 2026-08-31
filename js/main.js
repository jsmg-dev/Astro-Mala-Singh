/* =========================================================
   Astro Mala Singh — Shared Site Logic
   ========================================================= */

   const SITE = {
    name: 'Astro Mala Singh',
    tagline: 'AI Spiritual Guidance',
    whatsapp: '919166010400',
    email: 'contact@astromalasingh.com'
};


/* =========================================================
   NAVIGATION
   ========================================================= */

const NAV_LINKS = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'astrologer.html', label: 'Our Astrologer' },
    { href: 'products.html', label: 'Products' },
    { href: 'palm-reading.html', label: 'Palm Reading' },
    { href: 'face-reading.html', label: 'Face Reading' },
    { href: 'psychic-reading.html', label: 'Psychic Reading' },
    { href: 'ai-chat.html', label: 'AI Chat' },
    { href: 'pricing.html', label: 'Pricing' },
    { href: 'cart.html', label: '🛒 Cart <span class="cart-count" id="cartCount">0</span>' },
    { href: 'blog.html', label: 'Blog' },
    { href: 'contact.html', label: 'Contact' },
    { href: 'faq.html', label: 'FAQ' }
];


/* =========================================================
   FOOTER LINKS
   ========================================================= */

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


/* =========================================================
   ZODIAC
   ========================================================= */

const ZODIAC = [
    '♈',
    '♉',
    '♊',
    '♋',
    '♌',
    '♍',
    '♎',
    '♏',
    '♐',
    '♑',
    '♒',
    '♓'
];


/* =========================================================
   CURRENT PAGE
   ========================================================= */

function currentPage() {

    const path =
        window.location.pathname.split('/').pop() ||
        'index.html';

    return path;
}


/* =========================================================
   HEADER
   =========================================================
   
   IMPORTANT:
   Old brand-icon has been completely removed.
   Real logo is now images/logo.png
   ========================================================= */

function renderHeader() {

    const el = document.getElementById('site-header');

    if (!el) return;

    const page = currentPage();

    const links = NAV_LINKS.map(link => {

        const active =
            page === link.href
                ? 'active'
                : '';

        return `
            <a href="${link.href}" class="${active}">
                ${link.label}
            </a>
        `;

    }).join('');


    el.innerHTML = `

        <header class="site-header">

            <div class="container nav">


                <!-- REAL LOGO -->

                <a
                    class="site-logo"
                    href="index.html"
                    aria-label="Astro Mala Singh Home"
                >

                    <img
                        src="images/logo.png"
                        alt="Astrologer Mala Singh Logo"
                    >

                </a>


                <!-- MOBILE MENU BUTTON -->

                <button
                    class="nav-toggle"
                    id="nav-toggle"
                    aria-label="Menu"
                    aria-expanded="false"
                    type="button"
                >

                    <span></span>
                    <span></span>
                    <span></span>

                </button>


                <!-- NAVIGATION -->

                <nav
                    class="nav-links"
                    id="nav-links"
                >

                    ${links}

                </nav>


                <!-- ACTION BUTTONS -->

                <div class="nav-actions">

                    <a
                        class="btn btn-outline btn-sm"
                        href="dashboard.html"
                    >
                        Dashboard
                    </a>

                    <a
                        class="btn btn-gold btn-sm"
                        href="ai-chat.html"
                    >
                        Free Reading
                    </a>

                </div>

            </div>

        </header>

    `;


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const toggle =
        document.getElementById('nav-toggle');

    const nav =
        document.getElementById('nav-links');


    if (toggle && nav) {

        toggle.addEventListener('click', () => {

            const open =
                nav.classList.toggle('open');

            toggle.setAttribute(
                'aria-expanded',
                open ? 'true' : 'false'
            );

        });

    }

}


/* =========================================================
   FOOTER
   ========================================================= */

function renderFooter() {

    const el =
        document.getElementById('site-footer');

    if (!el) return;


    const list = (items) => {

        return items
            .map(item => {

                return `
                    <li>
                        <a href="${item.href}">
                            ${item.label}
                        </a>
                    </li>
                `;

            })
            .join('');

    };


    el.innerHTML = `

        <footer class="site-footer">

            <div class="container">

                <div class="footer-grid">


                    <!-- ABOUT -->

                    <div>

                        <h4>
                            ${SITE.name}
                        </h4>

                        <p
                            style="
                                color:var(--muted);
                                font-size:0.88rem;
                            "
                        >
                            Ancient wisdom meets modern AI
                            for palm, face & psychic
                            spiritual guidance.
                        </p>


                        <div class="social-links">

                            <a
                                href="https://wa.me/${SITE.whatsapp}"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="WhatsApp"
                            >
                                💬
                            </a>

                            <a
                                href="#"
                                aria-label="Facebook"
                            >
                                f
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                            >
                                📷
                            </a>

                            <a
                                href="#"
                                aria-label="YouTube"
                            >
                                ▶
                            </a>

                        </div>

                    </div>


                    <!-- ABOUT LINKS -->

                    <div>

                        <h4>
                            About
                        </h4>

                        <ul>
                            ${list(FOOTER_LINKS.about)}
                        </ul>

                    </div>


                    <!-- SERVICES -->

                    <div>

                        <h4>
                            Services
                        </h4>

                        <ul>
                            ${list(FOOTER_LINKS.services)}
                        </ul>

                    </div>


                    <!-- ACCOUNT -->

                    <div>

                        <h4>
                            Account
                        </h4>

                        <ul>
                            ${list(FOOTER_LINKS.account)}
                        </ul>


                        <p
                            style="
                                margin-top:12px;
                                font-size:0.85rem;
                                color:var(--muted);
                            "
                        >

                            <a href="contact.html">
                                Contact
                            </a>

                            ·

                            <a
                                href="https://wa.me/${SITE.whatsapp}"
                                target="_blank"
                                rel="noreferrer"
                            >
                                WhatsApp
                            </a>

                        </p>

                    </div>

                </div>


                <!-- FOOTER BOTTOM -->

                <div class="footer-bottom">

                    <p>
                        © ${new Date().getFullYear()}
                        ${SITE.name}.
                        All rights reserved.
                        For entertainment & guidance purposes only.
                    </p>

                </div>

            </div>

        </footer>

    `;

}


/* =========================================================
   GALAXY BACKGROUND
   ========================================================= */

function initGalaxy() {

    const canvas =
        document.getElementById('galaxy-canvas');

    if (!canvas) return;


    const ctx =
        canvas.getContext('2d');


    let stars = [];
    let shooting = [];

    let w;
    let h;


    function resize() {

        w =
            canvas.width =
            window.innerWidth;

        h =
            canvas.height =
            window.innerHeight;


        stars =
            Array.from(
                { length: 180 },
                () => ({

                    x:
                        Math.random() * w,

                    y:
                        Math.random() * h,

                    r:
                        Math.random() * 1.5 + 0.3,

                    a:
                        Math.random(),

                    speed:
                        Math.random() * 0.3 + 0.05

                })
            );

    }


    function shoot() {

        if (Math.random() > 0.985) {

            shooting.push({

                x:
                    Math.random() * w,

                y:
                    0,

                len:
                    Math.random() * 80 + 40,

                speed:
                    Math.random() * 8 + 6,

                angle:
                    Math.PI / 4

            });

        }

    }


    function draw() {

        ctx.fillStyle =
            '#050816';

        ctx.fillRect(
            0,
            0,
            w,
            h
        );


        const grad =
            ctx.createRadialGradient(
                w * 0.5,
                h * 0.3,
                0,
                w * 0.5,
                h * 0.5,
                w * 0.8
            );


        grad.addColorStop(
            0,
            'rgba(109, 40, 217, 0.15)'
        );

        grad.addColorStop(
            1,
            'transparent'
        );


        ctx.fillStyle =
            grad;

        ctx.fillRect(
            0,
            0,
            w,
            h
        );


        stars.forEach(star => {

            star.a +=
                star.speed * 0.01;


            const opacity =
                0.3 +
                Math.abs(
                    Math.sin(star.a)
                ) * 0.7;


            ctx.beginPath();

            ctx.arc(
                star.x,
                star.y,
                star.r,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
                `rgba(255,255,255,${opacity})`;

            ctx.fill();

        });


        shooting =
            shooting.filter(star => {

                star.x +=
                    Math.cos(star.angle) *
                    star.speed;

                star.y +=
                    Math.sin(star.angle) *
                    star.speed;


                const gradient =
                    ctx.createLinearGradient(
                        star.x,
                        star.y,
                        star.x - star.len,
                        star.y - star.len
                    );


                gradient.addColorStop(
                    0,
                    'rgba(255,255,255,0.8)'
                );

                gradient.addColorStop(
                    1,
                    'transparent'
                );


                ctx.strokeStyle =
                    gradient;

                ctx.lineWidth =
                    2;


                ctx.beginPath();

                ctx.moveTo(
                    star.x,
                    star.y
                );

                ctx.lineTo(
                    star.x -
                    star.len *
                    Math.cos(star.angle),

                    star.y -
                    star.len *
                    Math.sin(star.angle)
                );

                ctx.stroke();


                return (
                    star.y < h &&
                    star.x < w
                );

            });


        shoot();

        requestAnimationFrame(draw);

    }


    resize();

    window.addEventListener(
        'resize',
        resize
    );

    draw();

}


/* =========================================================
   FLOATING ZODIAC
   ========================================================= */

function initZodiacFloat() {

    const wrap =
        document.querySelector('.site-wrap');

    if (!wrap) return;


    ZODIAC.forEach((zodiac, index) => {

        const el =
            document.createElement('span');


        el.className =
            'zodiac-float';


        el.textContent =
            zodiac;


        el.style.left =
            `${5 + (index * 8) % 90}%`;


        el.style.top =
            `${10 + (index * 17) % 80}%`;


        el.style.animationDelay =
            `${index * 1.5}s`;


        el.style.animationDuration =
            `${18 + index * 2}s`;


        wrap.appendChild(el);

    });

}


/* =========================================================
   REVEAL ANIMATION
   ========================================================= */

function initReveal() {

    const elements =
        document.querySelectorAll('.reveal');

    if (!elements.length) return;


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            'visible'
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================================
   CHAT DEMO
   ========================================================= */

function initChatDemo() {

    const form =
        document.getElementById('chat-form');

    const messages =
        document.getElementById('chat-messages');


    if (!form || !messages) return;


    form.addEventListener(
        'submit',
        event => {

            event.preventDefault();


            const input =
                form.querySelector('input');


            const text =
                input?.value.trim();


            if (!text) return;


            appendBubble(
                messages,
                text,
                'user'
            );


            input.value = '';


            setTimeout(
                () => {

                    const reply =
                        getDemoReply(text);


                    appendBubble(
                        messages,
                        reply,
                        'ai'
                    );


                    messages.scrollTop =
                        messages.scrollHeight;

                },
                900
            );

        }
    );

}


/* =========================================================
   CHAT BUBBLE
   ========================================================= */

function appendBubble(
    container,
    text,
    role
) {

    const div =
        document.createElement('div');


    div.className =
        `chat-bubble ${role}`;


    div.textContent =
        text;


    container.appendChild(
        div
    );


    container.scrollTop =
        container.scrollHeight;

}


/* =========================================================
   DEMO AI RESPONSE
   ========================================================= */

function getDemoReply(q) {

    const lower =
        q.toLowerCase();


    if (
        lower.includes('business') ||
        lower.includes('career')
    ) {

        return `
            The lines on your palm suggest
            a period of growth ahead.
            Focus on patience and partnerships.
            Saturn's influence favors steady
            progress in the coming months.
            For a detailed analysis, try our
            Premium Consultation.
        `;

    }


    if (
        lower.includes('marriage') ||
        lower.includes('love')
    ) {

        return `
            Venus energy indicates meaningful
            connections are forming.
            Trust your intuition in relationships.
            A harmonious phase may arrive when
            you align with your inner wisdom.
        `;

    }


    if (
        lower.includes('money') ||
        lower.includes('financial')
    ) {

        return `
            Jupiter's blessing points toward
            improved financial stability.
            Avoid impulsive decisions.
            Remedies including charity on
            Thursdays may strengthen prosperity.
        `;

    }


    return `
        Thank you for your question.
        Based on ancient palmistry and
        intuitive guidance, I sense positive
        transformation ahead.
        Ask about love, career, health,
        or spirituality for deeper insights. ✨
    `;

}


/* =========================================================
   UPLOAD ZONES
   ========================================================= */

function initUploadZones() {

    document
        .querySelectorAll('.upload-zone')
        .forEach(zone => {

            const input =
                zone.querySelector(
                    'input[type="file"]'
                );


            const preview =
                zone.querySelector(
                    '.upload-preview'
                );


            if (!input) return;


            zone.addEventListener(
                'click',
                () => input.click()
            );


            zone.addEventListener(
                'dragover',
                event => {

                    event.preventDefault();

                    zone.style.borderColor =
                        'var(--secondary)';

                }
            );


            zone.addEventListener(
                'dragleave',
                () => {

                    zone.style.borderColor =
                        '';

                }
            );


            zone.addEventListener(
                'drop',
                event => {

                    event.preventDefault();

                    zone.style.borderColor =
                        '';


                    if (
                        event.dataTransfer &&
                        event.dataTransfer.files &&
                        event.dataTransfer.files[0]
                    ) {

                        showPreview(
                            event.dataTransfer.files[0],
                            preview,
                            zone
                        );

                    }

                }
            );


            input.addEventListener(
                'change',
                () => {

                    if (input.files[0]) {

                        showPreview(
                            input.files[0],
                            preview,
                            zone
                        );

                    }

                }
            );

        });

}


/* =========================================================
   IMAGE PREVIEW
   ========================================================= */

function showPreview(
    file,
    preview,
    zone
) {

    if (
        !file.type.startsWith('image/')
    ) {

        return;

    }


    const reader =
        new FileReader();


    reader.onload =
        event => {

            if (preview) {

                preview.src =
                    event.target.result;

                preview.style.display =
                    'block';

            }


            const label =
                zone.querySelector(
                    '.upload-label'
                );


            if (label) {

                label.textContent =
                    file.name;

            }

        };


    reader.readAsDataURL(file);

}


/* =========================================================
   REMOVE OLD BRAND ICON IF ANY OLD HTML REMAINS
   ========================================================= */

function removeOldBrandIcon() {

    document
        .querySelectorAll(
            '.brand-icon'
        )
        .forEach(element => {

            element.remove();

        });


    document
        .querySelectorAll(
            '.brand-mark, .brand-symbol'
        )
        .forEach(element => {

            element.remove();

        });

}



/* =========================================================
   PRODUCT CART / ORDER
   ========================================================= */

const CART_KEY = 'astroMalaSinghCart_v2';
const PRODUCT_PRICES = {
    "5 Mukhi Rudraksha": { price: 200, label: "₹200" },
    "Pyrite": { price: 700, label: "₹700" },
    "Dhan Yog": { price: 700, label: "₹700" },
    "Healing Crystal Bracelet": { price: 1200, label: "₹1,200" },
    "Crystal Shivling": { price: 60000, label: "₹60,000" },
    "Crystal Shri Yantra": { price: 60000, label: "₹60,000" },
    "Ruby Gemstone": { price: 300, label: "₹300/ct" },
    "Neelam Blue Sapphire": { price: 400, label: "₹400/ct" },
    "Panna Emerald": { price: 400, label: "₹400/ct" },
    "Red Coral Gemstone": { price: 300, label: "₹300/ct" }
};

const PRODUCT_CATALOG = [
    { name: "5 Mukhi Rudraksha", image: "./images/5mukhi.jpg" },
    { name: "Pyrite", image: "./images/Pyrite.jpg" },
    { name: "Dhan Yog", image: "./images/dhanyog.jpg" },
    { name: "Healing Crystal Bracelet", image: "./images/healing-crystal-bracelet.jpg" },
    { name: "Crystal Shivling", image: "./images/crystal-shivling.jpg" },
    { name: "Crystal Shri Yantra", image: "./images/crystal-shri-yantra.jpg" },
    { name: "Ruby Gemstone", image: "./images/rubby.jpg" },
    { name: "Neelam Blue Sapphire", image: "./images/neelam.jpg" },
    { name: "Panna Emerald", image: "./images/panna.jpg" },
    { name: "Red Coral Gemstone", image: "./images/coral.PNG" }
];

function getCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (error) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = getCart().reduce((sum, item) => sum + Number(item.qty || 0), 0);
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
}

function addToCart(product, goToCart = false) {
    const cart = getCart();
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: Number(product.price || 0),
            image: product.image,
            qty: 1
        });
    }

    saveCart(cart);

    if (goToCart) {
        window.location.href = 'cart.html';
        return;
    }

    const button = document.querySelector(`.add-to-cart[data-id="${CSS.escape(product.id)}"]`);
    if (button) {
        const old = button.innerHTML;
        button.innerHTML = '✓ Added';
        setTimeout(() => button.innerHTML = old, 1200);
    }
}

function productId(name, image) {
    return `${name}-${image}`.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

function buildShopCard(product) {
    const pricing = PRODUCT_PRICES[product.name] || { price: 0, label: 'Price on request' };
    const isPerCarat = /\/ct$/.test(pricing.label);
    const id = productId(product.name, product.image);

    const card = document.createElement('article');
    card.className = 'shop-card glass';
    card.dataset.productId = id;

    card.innerHTML = `
        <button type="button" class="shop-image product-image"
            data-image="${product.image}" data-name="${product.name}">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </button>
        <div class="shop-info">
            <h3>${product.name}</h3>
            <p class="shop-price">${pricing.label}</p>
            ${isPerCarat ? '<p class="shop-unit">Price per carat (ct)</p>' : ''}
            <div class="shop-actions">
                <button type="button" class="btn btn-outline btn-sm add-to-cart"
                    data-id="${id}" data-name="${product.name}" data-price="${pricing.price}" data-image="${product.image}">
                    🛒 Add to Cart
                </button>
                <button type="button" class="btn btn-gold btn-sm buy-now"
                    data-id="${id}" data-name="${product.name}" data-price="${pricing.price}" data-image="${product.image}">
                    Order Now
                </button>
            </div>
        </div>
    `;
    return card;
}

function wireShopButtons() {
    document.querySelectorAll('.add-to-cart, .buy-now').forEach(button => {
        if (button.dataset.wired === '1') return;
        button.dataset.wired = '1';

        button.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();

            addToCart({
                id: button.dataset.id,
                name: button.dataset.name,
                price: button.dataset.price,
                image: button.dataset.image
            }, button.classList.contains('buy-now'));
        });
    });
}

function initManualSliderControls() {
    document.querySelectorAll('.rudhraksh-slider').forEach(slider => {
        if (slider.dataset.controlsReady === '1') return;

        const track = slider.querySelector('.rudhraksh-track');
        if (!track) return;

        slider.dataset.controlsReady = '1';
        slider.classList.add('manual-slider');

        const prev = document.createElement('button');
        prev.type = 'button';
        prev.className = 'slider-arrow slider-prev';
        prev.setAttribute('aria-label', 'Previous products');
        prev.innerHTML = '‹';

        const next = document.createElement('button');
        next.type = 'button';
        next.className = 'slider-arrow slider-next';
        next.setAttribute('aria-label', 'Next products');
        next.innerHTML = '›';

        slider.appendChild(prev);
        slider.appendChild(next);

        const move = direction => {
            const amount = Math.max(track.clientWidth * 0.72, 260);
            track.scrollBy({ left: direction * amount, behavior: 'smooth' });
        };

        prev.addEventListener('click', () => move(-1));
        next.addEventListener('click', () => move(1));
    });
}

function initShop() {
    const tracks = document.querySelectorAll('.products-track, .gemstones-track');

    tracks.forEach(track => {
        const seen = new Set();
        const oldItems = Array.from(track.querySelectorAll('.product-image'));

        oldItems.forEach(item => {
            const img = item.querySelector('img');
            if (!img) return;

            const name = img.alt || 'Product';
            const image = item.dataset.image || img.getAttribute('src');
            const id = productId(name, image);

            if (seen.has(id)) {
                item.remove();
                return;
            }
            seen.add(id);

            item.replaceWith(buildShopCard({ name, image }));
        });
    });

    wireShopButtons();
    initManualSliderControls();
    updateCartCount();
}

function initProductsPage() {
    const root = document.getElementById('products-catalog');
    if (!root) return;

    root.innerHTML = '';
    PRODUCT_CATALOG.forEach(product => {
        root.appendChild(buildShopCard(product));
    });

    wireShopButtons();
    updateCartCount();
}

function initProductImages() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeButton = document.querySelector('.image-modal-close');
    if (!modal || !modalImage) return;

    document.querySelectorAll('.product-image').forEach(item => {
        item.addEventListener('click', event => {
            if (event.target.closest('.add-to-cart, .buy-now')) return;

            const image = item.querySelector('img');
            const src = item.dataset.image || image?.src;
            if (!src) return;

            modalImage.src = src;
            modalImage.alt = item.dataset.name || image?.alt || 'Product Preview';
            modal.classList.add('active');
        });
    });

    closeButton?.addEventListener('click', () => {
        modal.classList.remove('active');
        modalImage.src = '';
    });

    modal.addEventListener('click', event => {
        if (event.target === modal) {
            modal.classList.remove('active');
            modalImage.src = '';
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            modal.classList.remove('active');
            modalImage.src = '';
        }
    });
}

function initCartPage() {
    const list = document.getElementById('cart-items');
    const empty = document.getElementById('cart-empty');
    const total = document.getElementById('cart-total');
    const checkout = document.getElementById('checkout-form');
    if (!list) return;

    function render() {
        const cart = getCart();
        list.innerHTML = '';

        if (!cart.length) {
            empty?.classList.remove('hidden');
            if (total) total.textContent = 'Price on request';
            return;
        }

        empty?.classList.add('hidden');

        cart.forEach(item => {
            const row = document.createElement('div');
            row.className = 'cart-item glass';
            row.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>${Number(item.price) > 0 ? `₹${Number(item.price).toLocaleString('en-IN')}${['Ruby Gemstone','Neelam Blue Sapphire','Panna Emerald','Red Coral Gemstone'].includes(item.name) ? '/ct' : ''}` : 'Price on request'}</p>
                    <div class="qty-controls">
                        <button type="button" data-action="minus" data-id="${item.id}">−</button>
                        <strong>${item.qty}</strong>
                        <button type="button" data-action="plus" data-id="${item.id}">+</button>
                        <button type="button" class="remove-item" data-action="remove" data-id="${item.id}">Remove</button>
                    </div>
                </div>
            `;
            list.appendChild(row);
        });

        const priced = cart.filter(item => Number(item.price) > 0);
        const hasUnpriced = cart.some(item => Number(item.price) === 0);
        const sum = priced.reduce((n, item) => n + Number(item.price) * item.qty, 0);

        if (total) {
            total.textContent = priced.length
                ? `₹${sum.toLocaleString('en-IN')}${hasUnpriced ? ' + price on request' : ''}`
                : 'Price on request';
        }
    }

    list.addEventListener('click', event => {
        const button = event.target.closest('[data-action]');
        if (!button) return;

        const cart = getCart();
        const item = cart.find(p => p.id === button.dataset.id);
        if (!item) return;

        if (button.dataset.action === 'plus') item.qty += 1;
        if (button.dataset.action === 'minus') item.qty = Math.max(1, item.qty - 1);
        if (button.dataset.action === 'remove') {
            const index = cart.findIndex(p => p.id === button.dataset.id);
            cart.splice(index, 1);
        }

        saveCart(cart);
        render();
    });

    const clearCart = document.getElementById('clear-cart');
    clearCart?.addEventListener('click', () => {
        localStorage.removeItem(CART_KEY);
        render();
        updateCartCount();
    });

    checkout?.addEventListener('submit', event => {
        event.preventDefault();

        const cart = getCart();
        if (!cart.length) {
            alert('Please add at least one product to your cart.');
            return;
        }

        const data = new FormData(checkout);
        const items = cart.map(item => `${item.name} x ${item.qty}`).join(', ');
        const message =
            `Hello Astro Mala Singh, I want to order: ${items}. ` +
            `Name: ${data.get('name')}. Phone: ${data.get('phone')}. ` +
            `Address: ${data.get('address')}.`;

        window.open(
            `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`,
            '_blank'
        );
    });

    render();
}

/* =========================================================
   INITIALIZE WEBSITE
   ========================================================= */

document.addEventListener(
    'DOMContentLoaded',
    () => {

        renderHeader();

        renderFooter();

        removeOldBrandIcon();

        initGalaxy();

        initZodiacFloat();

        initReveal();

        initChatDemo();

        initUploadZones();

        initShop();
        initProductsPage();
        initProductImages();
        initCartPage();

    }
);
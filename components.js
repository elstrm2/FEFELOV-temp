const commonStyles = `
    * { font-family: 'Onest', system-ui, sans-serif; }
    .card-hover { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
    .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1); }
    .nav-link { position: relative; }
    .nav-link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 1px; background: #0a0a0a; transition: width 0.3s ease; }
    .nav-link:hover::after { width: 100%; }
    .toc-link { transition: all 0.2s ease; }
    .toc-link:hover { padding-left: 8px; color: #0a0a0a; }
    html { scroll-behavior: smooth; }
    .contact-card { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
    .contact-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1); }

    .logo-gradient {
        background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe, #667eea);
        background-size: 300% 100%;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        animation: gradient-shift 4s ease infinite;
    }
    .logo-text {
        color: #0a0a0a;
        -webkit-text-fill-color: #0a0a0a;
        background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe, #667eea);
        background-size: 300% 100%;
        -webkit-background-clip: text;
        background-clip: text;
        transition: -webkit-text-fill-color 0.3s ease;
    }
    .logo-container:hover .logo-text {
        -webkit-text-fill-color: transparent;
        animation: gradient-shift 3s ease infinite;
    }
    .logo-dot {
        transition: -webkit-text-fill-color 0.3s ease;
    }
    .logo-container {
        padding: 4px;
        margin: -4px;
        overflow: visible;
        display: inline-block;
    }
    .logo-text, .logo-dot {
        display: inline-block;
    }
    @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    .btn-gradient-border {
        position: relative;
        z-index: 1;
        background: #0a0a0a;
        transition: all 0.3s ease;
    }
    .btn-gradient-border::before {
        content: '';
        position: absolute;
        inset: -2px;
        border-radius: inherit;
        background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe, #667eea);
        background-size: 300% 100%;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s ease;
        animation: gradient-shift 3s ease infinite;
    }
    .btn-gradient-border::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: inherit;
        z-index: -1;
    }
    .btn-gradient-border:hover::before {
        opacity: 1;
    }
    .btn-gradient-border:hover {
        background: #0a0a0a;
        box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
    }

    .btn-gradient-border-light {
        position: relative;
        z-index: 1;
        background: #fafaf9;
        transition: all 0.3s ease;
    }
    .btn-gradient-border-light::before {
        content: '';
        position: absolute;
        inset: -2px;
        border-radius: inherit;
        background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe, #667eea);
        background-size: 300% 100%;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s ease;
        animation: gradient-shift 3s ease infinite;
    }
    .btn-gradient-border-light::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: inherit;
        z-index: -1;
    }
    .btn-gradient-border-light:hover::before {
        opacity: 1;
    }
    .btn-gradient-border-light:hover {
        background: #fafaf9;
        box-shadow: 0 0 25px rgba(102, 126, 234, 0.4);
    }

    .lang-menu { display: none; }
    .lang-menu.active { display: block; }

    .service-card {
        position: relative;
        overflow: hidden;
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .service-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
    }
    .service-card .card-bg {
        position: absolute;
        inset: 0;
        overflow: hidden;
        pointer-events: none;
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .service-card:hover .card-bg {
        transform: scale(1.05);
    }
    .service-card .card-bg svg {
        position: absolute;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .service-card:hover .card-bg svg {
        filter: brightness(1.1);
    }
    .service-card .card-bg .main-icon {
        filter: drop-shadow(0 4px 20px rgba(0,0,0,0.1));
    }
    .service-card:hover .card-bg .main-icon {
        filter: drop-shadow(0 8px 30px rgba(0,0,0,0.15));
    }

    @keyframes float-gentle {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
    }
    @keyframes float-slow {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-12px) rotate(2deg); }
    }
    @keyframes float-reverse {
        0%, 100% { transform: translateY(-6px); }
        50% { transform: translateY(6px); }
    }
    @keyframes pulse-soft {
        0%, 100% { opacity: 0.4; transform: scale(1); }
        50% { opacity: 0.6; transform: scale(1.02); }
    }
    @keyframes rotate-slow {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    @keyframes dash-flow {
        0% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -20; }
    }
    @keyframes glow-pulse {
        0%, 100% { filter: drop-shadow(0 0 8px currentColor); opacity: 0.6; }
        50% { filter: drop-shadow(0 0 16px currentColor); opacity: 0.8; }
    }
    @keyframes morph {
        0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
    }

    .anim-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
    .anim-float-slow { animation: float-slow 6s ease-in-out infinite; }
    .anim-float-slow-delay { animation: float-slow 6s ease-in-out infinite 1.5s; }
    .anim-float-reverse { animation: float-reverse 5s ease-in-out infinite; }
    .anim-pulse-soft { animation: pulse-soft 4s ease-in-out infinite; }
    .anim-rotate-slow { animation: rotate-slow 20s linear infinite; }
    .anim-dash { animation: dash-flow 2s linear infinite; stroke-dasharray: 8 4; }
    .anim-glow { animation: glow-pulse 3s ease-in-out infinite; }
    .anim-morph { animation: morph 8s ease-in-out infinite; }

    .division-card {
        position: relative;
        overflow: hidden;
    }
    .division-card .bg-pattern {
        position: absolute;
        inset: 0;
        opacity: 0.05;
        pointer-events: none;
    }

    .section-note-wrapper {
        transition: transform 0.2s ease;
    }
    .section-note .note-fill {
        transition: all 0.2s ease;
    }
    .section-note .note-outline {
        transition: all 0.2s ease;
    }
    .section-note .note-corner,
    .section-note .note-corner-fill {
        transition: all 0.2s ease;
    }
    .section-note-wrapper:hover {
        transform: scale(1.02);
    }
    .section-note-wrapper:hover .note-fill {
        fill: #fef9c3;
    }
    .section-note-wrapper:hover .note-outline {
        stroke: #f59e0b;
    }
    .section-note-wrapper:hover .note-corner-fill {
        fill: #fcd34d;
    }
`;

const headerHTML = `
<header id="main-header" class="liquid-glass-header fixed top-0 left-0 right-0 z-50">
    <div class="lg-orb-container">
        <div class="lg-orb lg-orb-1"></div>
        <div class="lg-orb lg-orb-2"></div>
        <div class="lg-orb lg-orb-3"></div>
        <div class="lg-orb lg-orb-4"></div>
        <div class="lg-orb lg-orb-5"></div>
    </div>
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 sm:py-6 relative z-10">
        <div class="flex items-center justify-between">
            <a href="index.html" class="lg-logo text-2xl sm:text-3xl font-semibold tracking-tight"><span class="lg-logo-text">FEFELOV</span><span class="lg-logo-dot">.</span></a>
            <nav class="hidden lg:flex items-center gap-10">
                <a href="index.html#services" class="lg-nav-link text-base text-stone-600" data-i18n="common.nav.services">Услуги</a>
                <a href="index.html#divisions" class="lg-nav-link text-base text-stone-600" data-i18n="common.nav.divisions">Подразделения</a>
            </nav>
            <div class="flex items-center gap-3">
                <div class="relative z-10">
                    <button id="lang-btn" class="lg-btn lg-ripple flex items-center gap-2 px-4 sm:px-5 py-2.5 text-base font-medium text-stone-600 rounded-full">
                        <svg class="lg-btn-icon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                        <span id="current-lang">Ру</span>
                        <svg class="w-3.5 h-3.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <div id="lang-menu" class="lang-menu lg-dropdown absolute right-0 top-full mt-2 rounded-xl py-2 min-w-[160px] z-50">
                        <button data-lang="ru" class="lg-dropdown-item w-full px-5 py-2.5 text-left text-base">Русский</button>
                        <button data-lang="uk" class="lg-dropdown-item w-full px-5 py-2.5 text-left text-base">Українська</button>
                        <button data-lang="en" class="lg-dropdown-item w-full px-5 py-2.5 text-left text-base">English</button>
                        <button data-lang="zh" class="lg-dropdown-item w-full px-5 py-2.5 text-left text-base">中文</button>
                    </div>
                </div>
                <a href="contacts.html" class="hidden lg:inline-flex lg-cta-btn text-stone-50 px-6 py-2.5 text-base font-medium rounded-full" data-i18n="common.nav.contact_btn">
                    <span class="lg-cta-btn-shine"></span>
                    <span class="relative z-10">Связаться</span>
                </a>
                <button id="mobile-menu-btn" class="lg-hamburger lg-ripple lg:hidden w-12 h-12 flex items-center justify-center rounded-full">
                    <span class="lg-hamburger-line"></span>
                </button>
            </div>
        </div>
    </div>
    <div id="mobile-menu" class="hidden lg:hidden lg-mobile-menu">
        <nav class="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
            <a href="index.html#services" class="lg-mobile-menu-item px-5 py-4 text-base text-stone-600 rounded-xl" data-i18n="common.nav.services">Услуги</a>
            <a href="index.html#divisions" class="lg-mobile-menu-item px-5 py-4 text-base text-stone-600 rounded-xl" data-i18n="common.nav.divisions">Подразделения</a>
            <a href="contacts.html" class="mt-3 self-start lg-cta-btn text-stone-50 px-8 py-4 text-base font-medium rounded-full text-center" data-i18n="common.nav.contact_btn">
                <span class="lg-cta-btn-shine"></span>
                <span class="relative z-10">Связаться</span>
            </a>
        </nav>
    </div>
</header>
`;

const footerHTML = `
<footer class="py-8 sm:py-10 border-t border-stone-200">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
            <p class="text-base text-stone-500 order-2 sm:order-1">© 2025–<span id="footer-year"></span>. <span data-i18n="common.footer.copyright">ИП Басенко И. К.</span></p>
            <nav class="flex items-center gap-3 order-1 sm:order-2">
                <a href="terms.html" class="text-base text-stone-500 hover:text-stone-900 transition-colors" data-i18n="common.footer.terms">Оферта</a>
                <span class="text-stone-400">·</span>
                <a href="privacy.html" class="text-base text-stone-500 hover:text-stone-900 transition-colors" data-i18n="common.footer.privacy">Конфиденциальность</a>
                <span class="text-stone-400">·</span>
                <a href="refund.html" class="text-base text-stone-500 hover:text-stone-900 transition-colors" data-i18n="common.footer.refund">Возврат</a>
            </nav>
        </div>
    </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', function() {
    const styleElement = document.createElement('style');
    styleElement.textContent = commonStyles;
    document.head.appendChild(styleElement);

    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;

        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
                mobileMenuBtn.classList.toggle('active');
            });

            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    mobileMenuBtn.classList.remove('active');
                });
            });
        }

        const header = document.getElementById('main-header');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }

        const langBtn = document.getElementById('lang-btn');
        const langMenu = document.getElementById('lang-menu');
        const currentLang = document.getElementById('current-lang');

        if (langBtn && langMenu) {
            langBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                langMenu.classList.toggle('active');
            });

            document.addEventListener('click', function() {
                langMenu.classList.remove('active');
            });

            langMenu.querySelectorAll('[data-lang]').forEach(btn => {
                btn.addEventListener('click', function() {
                    const lang = this.dataset.lang;
                    if (typeof I18N !== 'undefined') {
                        I18N.setLanguage(lang);
                    }
                    langMenu.classList.remove('active');
                });
            });
        }
    }

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
        const yearEl = document.getElementById('footer-year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();
    }
});

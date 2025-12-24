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
        transition: all 0.3s ease;
    }
    .logo-text {
        color: #0a0a0a;
        transition: all 0.3s ease;
        padding-right: 1px;
        margin-right: -1px;
    }
    .logo-container:hover .logo-text {
        background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe, #667eea);
        background-size: 300% 100%;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        animation: gradient-shift 3s ease infinite;
    }
    .logo-container:hover .logo-dot {
        background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe, #667eea);
        background-size: 300% 100%;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        animation: gradient-shift 3s ease infinite;
    }
    @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    .lang-menu { display: none; }
    .lang-menu.active { display: block; }
`;

const headerHTML = `
<header class="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div class="flex items-center justify-between">
            <a href="index.html" class="logo-container text-xl font-semibold tracking-tight"><span class="logo-text">FEFELOV</span><span class="logo-dot logo-gradient">.</span></a>
            <nav class="hidden md:flex items-center gap-8">
                <a href="index.html" class="nav-link text-sm text-stone-600 hover:text-stone-900" data-i18n="common.nav.home">Главная</a>
                <a href="index.html#services" class="nav-link text-sm text-stone-600 hover:text-stone-900" data-i18n="common.nav.services">Услуги</a>
                <a href="index.html#divisions" class="nav-link text-sm text-stone-600 hover:text-stone-900" data-i18n="common.nav.divisions">Подразделения</a>
                <a href="contacts.html" class="nav-link text-sm text-stone-600 hover:text-stone-900" data-i18n="common.nav.contacts">Контакты</a>
            </nav>
            <div class="flex items-center gap-3">
                <div class="relative">
                    <button id="lang-btn" class="flex items-center gap-1 px-3 py-2 text-sm text-stone-600 hover:text-stone-900 rounded-full hover:bg-stone-100 transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                        <span id="current-lang">RU</span>
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <div id="lang-menu" class="lang-menu absolute right-0 top-full mt-1 bg-white border border-stone-200 rounded-xl shadow-lg py-1 min-w-[140px] z-50">
                        <button data-lang="ru" class="w-full px-4 py-2 text-left text-sm hover:bg-stone-50 transition-colors">Русский</button>
                        <button data-lang="uk" class="w-full px-4 py-2 text-left text-sm hover:bg-stone-50 transition-colors">Українська</button>
                        <button data-lang="en" class="w-full px-4 py-2 text-left text-sm hover:bg-stone-50 transition-colors">English</button>
                        <button data-lang="zh" class="w-full px-4 py-2 text-left text-sm hover:bg-stone-50 transition-colors">中文</button>
                    </div>
                </div>
                <a href="contacts.html" class="hidden md:inline-flex bg-stone-900 text-stone-50 px-5 py-2.5 text-sm font-medium rounded-full hover:bg-stone-800 transition-colors" data-i18n="common.nav.contact_btn">
                    Связаться
                </a>
                <button id="mobile-menu-btn" class="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-200/50 transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                </button>
            </div>
        </div>
    </div>
    <div id="mobile-menu" class="hidden md:hidden bg-stone-50 border-t border-stone-200/50">
        <nav class="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            <a href="index.html" class="px-4 py-3 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors" data-i18n="common.nav.home">Главная</a>
            <a href="index.html#services" class="px-4 py-3 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors" data-i18n="common.nav.services">Услуги</a>
            <a href="index.html#divisions" class="px-4 py-3 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors" data-i18n="common.nav.divisions">Подразделения</a>
            <a href="contacts.html" class="px-4 py-3 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors" data-i18n="common.nav.contacts">Контакты</a>
            <a href="contacts.html" class="mt-2 bg-stone-900 text-stone-50 px-4 py-3 text-sm font-medium rounded-xl hover:bg-stone-800 transition-colors text-center" data-i18n="common.nav.contact_btn">Связаться</a>
        </nav>
    </div>
</header>
`;

const footerHTML = `
<footer class="py-12 border-t border-stone-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid md:grid-cols-4 gap-8 mb-12">
            <div>
                <h4 class="font-semibold mb-4">FEFELOV<span class="logo-gradient">.</span></h4>
                <p class="text-sm text-stone-600" data-i18n-html="common.footer.tagline">Образовательные услуги<br>и IT-решения</p>
            </div>
            <div>
                <h4 class="font-semibold mb-4" data-i18n="common.footer.divisions_title">Подразделения</h4>
                <ul class="space-y-2 text-sm text-stone-600"><li>FEFELOV.Study</li><li>FEFELOV.Tech</li></ul>
            </div>
            <div>
                <h4 class="font-semibold mb-4" data-i18n="common.footer.docs_title">Документы</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="terms.html" class="text-stone-600 hover:text-stone-900" data-i18n="common.footer.terms">Публичная оферта</a></li>
                    <li><a href="privacy.html" class="text-stone-600 hover:text-stone-900" data-i18n="common.footer.privacy">Политика конфиденциальности</a></li>
                    <li><a href="refund.html" class="text-stone-600 hover:text-stone-900" data-i18n="common.footer.refund">Возврат средств</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-semibold mb-4" data-i18n="common.footer.contacts_title">Контакты</h4>
                <ul class="space-y-2 text-sm text-stone-600">
                    <li><a href="mailto:182003Bkmz@gmail.com" class="hover:text-stone-900">182003Bkmz@gmail.com</a></li>
                    <li><a href="https://vk.com/fefelov_net" target="_blank" class="hover:text-stone-900">vk.com/fefelov_net →</a></li>
                    <li><a href="contacts.html" class="hover:text-stone-900" data-i18n="common.footer.all_contacts">Все контакты →</a></li>
                </ul>
            </div>
        </div>
        <div class="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
            <p data-i18n="common.footer.copyright">© 2025 ИП Басенко И.К. ОГРНИП 325774600531587</p>
            <p data-i18n="common.footer.location">Москва, Россия</p>
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
                const isOpen = !mobileMenu.classList.contains('hidden');
                mobileMenuBtn.innerHTML = isOpen
                    ? '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>'
                    : '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
            });

            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    mobileMenuBtn.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
                });
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
                    currentLang.textContent = lang.toUpperCase();
                    langMenu.classList.remove('active');
                });
            });

            const storedLang = localStorage.getItem('lang') || 'ru';
            currentLang.textContent = storedLang.toUpperCase();
        }
    }

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});

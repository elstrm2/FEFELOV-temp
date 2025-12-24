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
`;

const headerHTML = `
<header class="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div class="flex items-center justify-between">
            <a href="index.html" class="logo-container text-xl font-semibold tracking-tight"><span class="logo-text">FEFELOV</span><span class="logo-dot logo-gradient">.</span></a>
            <nav class="hidden md:flex items-center gap-8">
                <a href="index.html" class="nav-link text-sm text-stone-600 hover:text-stone-900">Главная</a>
                <a href="index.html#services" class="nav-link text-sm text-stone-600 hover:text-stone-900">Услуги</a>
                <a href="index.html#divisions" class="nav-link text-sm text-stone-600 hover:text-stone-900">Подразделения</a>
                <a href="contacts.html" class="nav-link text-sm text-stone-600 hover:text-stone-900">Контакты</a>
            </nav>
            <div class="flex items-center gap-3">
                <a href="contacts.html" class="hidden md:inline-flex bg-stone-900 text-stone-50 px-5 py-2.5 text-sm font-medium rounded-full hover:bg-stone-800 transition-colors">
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
            <a href="index.html" class="px-4 py-3 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors">Главная</a>
            <a href="index.html#services" class="px-4 py-3 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors">Услуги</a>
            <a href="index.html#divisions" class="px-4 py-3 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors">Подразделения</a>
            <a href="contacts.html" class="px-4 py-3 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors">Контакты</a>
            <a href="contacts.html" class="mt-2 bg-stone-900 text-stone-50 px-4 py-3 text-sm font-medium rounded-xl hover:bg-stone-800 transition-colors text-center">Связаться</a>
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
                <p class="text-sm text-stone-600">Образовательные услуги<br>и IT-решения</p>
            </div>
            <div>
                <h4 class="font-semibold mb-4">Подразделения</h4>
                <ul class="space-y-2 text-sm text-stone-600"><li>FEFELOV.Study</li><li>FEFELOV.Tech</li></ul>
            </div>
            <div>
                <h4 class="font-semibold mb-4">Документы</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="terms.html" class="text-stone-600 hover:text-stone-900">Публичная оферта</a></li>
                    <li><a href="privacy.html" class="text-stone-600 hover:text-stone-900">Политика конфиденциальности</a></li>
                    <li><a href="refund.html" class="text-stone-600 hover:text-stone-900">Возврат средств</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-semibold mb-4">Контакты</h4>
                <ul class="space-y-2 text-sm text-stone-600">
                    <li><a href="mailto:182003Bkmz@gmail.com" class="hover:text-stone-900">182003Bkmz@gmail.com</a></li>
                    <li><a href="https://vk.com/fefelov_net" target="_blank" class="hover:text-stone-900">vk.com/fefelov_net →</a></li>
                    <li><a href="contacts.html" class="hover:text-stone-900">Все контакты →</a></li>
                </ul>
            </div>
        </div>
        <div class="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
            <p>© 2025 ИП Басенко И.К. ОГРНИП 325774600531587</p>
            <p>Москва, Россия</p>
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
    }

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});

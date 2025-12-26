const headerHTML = `
<header class="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 sm:py-6">
        <div class="flex items-center justify-between">
            <a href="index.html" class="logo-container text-2xl sm:text-3xl font-semibold tracking-tight"><span class="logo-text">FEFELOV</span><span class="logo-dot logo-gradient">.</span></a>
            <nav class="hidden lg:flex items-center gap-10">
                <a href="index.html#services" class="nav-link text-base text-stone-600 hover:text-stone-900 transition-colors" data-i18n="common.nav.services">Услуги</a>
                <a href="index.html#divisions" class="nav-link text-base text-stone-600 hover:text-stone-900 transition-colors" data-i18n="common.nav.divisions">Подразделения</a>
            </nav>
            <div class="flex items-center gap-3">
                <div class="relative z-10">
                    <button id="lang-btn" class="lang-btn-expand flex items-center justify-center p-2.5 text-base font-medium text-stone-600 hover:text-stone-900 bg-white/60 border border-stone-200 rounded-full hover:bg-white" aria-label="Выбор языка" aria-expanded="false" aria-haspopup="true" aria-controls="lang-menu">
                        <svg class="lang-icon w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                        <span id="current-lang" class="lang-text">Ру</span>
                        <svg class="lang-arrow w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <div id="lang-menu" class="lang-menu absolute right-0 top-full mt-2 bg-white border border-stone-200 rounded-xl shadow-lg py-2 min-w-[160px] z-50" role="menu">
                        <button data-lang="ru" class="w-full text-left text-base" role="menuitem"><svg class="lang-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/></svg><span>Русский</span></button>
                        <button data-lang="uk" class="w-full text-left text-base" role="menuitem"><svg class="lang-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9"/></svg><span>Українська</span></button>
                        <button data-lang="en" class="w-full text-left text-base" role="menuitem"><svg class="lang-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg><span>English</span></button>
                        <button data-lang="zh" class="w-full text-left text-base" role="menuitem"><svg class="lang-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg><span>中文</span></button>
                    </div>
                </div>
                <a href="contacts.html" class="hidden lg:inline-flex items-center btn-gradient-border bg-stone-900 text-stone-50 px-6 py-2.5 text-base font-medium rounded-full">
                    <span data-i18n="common.nav.contact_btn">Связаться</span>
                    <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
                <button id="mobile-menu-btn" class="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white/60 border border-stone-200 hover:bg-white transition-all" aria-label="Меню" aria-expanded="false" aria-controls="mobile-menu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                </button>
            </div>
        </div>
    </div>
    <div id="mobile-menu" class="lg:hidden bg-stone-50 border-t border-stone-200/50">
        <nav class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 flex flex-col gap-2">
            <a href="index.html#services" class="mobile-nav-link py-3 text-base text-stone-600 hover:text-stone-900 transition-colors" data-i18n="common.nav.services">Услуги</a>
            <a href="index.html#divisions" class="mobile-nav-link py-3 text-base text-stone-600 hover:text-stone-900 transition-colors" data-i18n="common.nav.divisions">Подразделения</a>
            <a href="contacts.html" class="mt-4 inline-flex items-center justify-center btn-gradient-border bg-stone-900 text-stone-50 py-4 text-base font-medium rounded-full">
                <span data-i18n="common.nav.contact_btn">Связаться</span>
                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
        </nav>
    </div>
</header>
`;

const footerHTML = `
<footer class="py-8 sm:py-10 border-t border-stone-200">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-6 text-center sm:text-left">
            <p class="text-base text-stone-500 order-2 sm:order-1"><span class="logo-gradient text-lg font-bold">©</span> 2025–<span id="footer-year"></span>. <span data-i18n="common.footer.copyright">ИП Басенко И. К.</span></p>
            <nav class="flex items-center justify-center sm:justify-start gap-3 order-1 sm:order-2">
                <a href="terms.html" class="text-base text-stone-500 hover:text-stone-900 transition-colors" data-i18n="common.footer.terms">Оферта</a>
                <span class="footer-dot logo-gradient text-lg font-bold">·</span>
                <a href="privacy.html" class="text-base text-stone-500 hover:text-stone-900 transition-colors" data-i18n="common.footer.privacy">Конфиденциальность</a>
                <span class="footer-dot logo-gradient text-lg font-bold">·</span>
                <a href="refund.html" class="text-base text-stone-500 hover:text-stone-900 transition-colors" data-i18n="common.footer.refund">Возврат</a>
            </nav>
        </div>
    </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.section-highlight').forEach((el) => {
    el.style.animation = 'none';
    void el.offsetHeight;
    el.style.animation = '';
    const _before = window.getComputedStyle(el, '::before');
  });

  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = headerHTML;

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        const isOpen = mobileMenu.classList.contains('open');
        mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        mobileMenuBtn.innerHTML = isOpen
          ? '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>'
          : '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
      });

      mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
          mobileMenuBtn.innerHTML =
            '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
        });
      });
    }

    const langBtn = document.getElementById('lang-btn');
    const langMenu = document.getElementById('lang-menu');
    const _currentLang = document.getElementById('current-lang');

    function updateLangVisuals(lang) {
      if (langBtn) langBtn.setAttribute('data-active-lang', lang);
      if (langMenu) {
        langMenu.querySelectorAll('[data-lang]').forEach((btn) => {
          btn.classList.toggle('active', btn.dataset.lang === lang);
        });
      }
    }

    const storedLang = localStorage.getItem('lang') || 'ru';
    updateLangVisuals(storedLang);

    if (langBtn && langMenu) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('active');
        langBtn.setAttribute('aria-expanded', langMenu.classList.contains('active'));
      });

      langMenu.addEventListener('click', (e) => {
        e.stopPropagation();
      });

      document.addEventListener('click', () => {
        langMenu.classList.remove('active');
        langBtn.setAttribute('aria-expanded', 'false');
      });

      langMenu.querySelectorAll('[data-lang]').forEach((btn) => {
        btn.addEventListener('click', function () {
          const lang = this.dataset.lang;
          if (typeof I18N !== 'undefined') {
            I18N.setLanguage(lang);
          }
          updateLangVisuals(lang);
          langMenu.classList.remove('active');
          langBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    const logoText = document.querySelector('.logo-text');
    const logoDot = document.querySelector('.logo-dot');
    const logoContainer = document.querySelector('.logo-container');

    if (logoText && logoDot) {
      const fullText = 'FEFELOV';
      let logoAnimationTimer = null;
      let isLogoAnimating = false;

      function animateLogo() {
        if (isLogoAnimating) return;
        isLogoAnimating = true;

        let currentLength = fullText.length;

        const removeInterval = setInterval(() => {
          if (currentLength > 1) {
            currentLength--;
            logoText.textContent = fullText.substring(0, currentLength);
            if (currentLength === fullText.length - 1) {
              logoDot.style.opacity = '0';
            }
          } else {
            clearInterval(removeInterval);
            logoText.style.animation = 'logoPulse 0.3s ease-in-out 4';
            if (typeof window.animateFooterDots === 'function') window.animateFooterDots();

            setTimeout(() => {
              logoText.style.animation = '';
              let shotIndex = 1;
              const shotInterval = setInterval(() => {
                if (shotIndex <= fullText.length) {
                  logoText.textContent = fullText.substring(0, shotIndex);
                  shotIndex++;
                } else {
                  clearInterval(shotInterval);
                  logoDot.style.opacity = '1';
                  isLogoAnimating = false;
                }
              }, 100);
            }, 1200);
          }
        }, 300);
      }

      function resetLogoAnimation() {
        if (logoAnimationTimer) clearTimeout(logoAnimationTimer);
        isLogoAnimating = false;
        logoText.textContent = fullText;
        logoText.style.animation = '';
        logoDot.style.opacity = '1';
        if (typeof window.cancelFooterDots === 'function') window.cancelFooterDots();
        logoAnimationTimer = setTimeout(animateLogo, 30000);
      }

      logoContainer.addEventListener('mouseenter', resetLogoAnimation);
      logoContainer.addEventListener('click', resetLogoAnimation);

      logoAnimationTimer = setTimeout(animateLogo, 30000);
    }
  }

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const footerDots = document.querySelectorAll('.footer-dot');
    if (footerDots.length > 0) {
      const spinnerFrames = ['·', '/', '—', '\\', '|', '\\', '—', '/'];
      let dotsAnimating = false;
      let dotsInterval = null;

      window.animateFooterDots = () => {
        if (dotsAnimating) return;
        dotsAnimating = true;
        let frame = 0;
        dotsInterval = setInterval(() => {
          footerDots.forEach((dot) => {
            dot.textContent = spinnerFrames[frame % spinnerFrames.length];
          });
          frame++;
          if (frame >= spinnerFrames.length) {
            clearInterval(dotsInterval);
            dotsInterval = null;
            footerDots.forEach((dot) => {
              dot.textContent = '·';
            });
            dotsAnimating = false;
          }
        }, 250);
      };

      window.cancelFooterDots = () => {
        if (dotsInterval) {
          clearInterval(dotsInterval);
          dotsInterval = null;
        }
        footerDots.forEach((dot) => {
          dot.textContent = '·';
        });
        dotsAnimating = false;
      };
    }
  }

  function initRandomSvgFloating() {
    const animations = [
      'svgRandomFloat1',
      'svgRandomFloat2',
      'svgRandomFloat3',
      'svgRandomFloat4',
      'svgRandomFloat5',
      'svgRandomFloat6',
    ];
    const durations = [10, 11, 12, 13, 14, 15, 16];
    const directions = ['normal', 'reverse', 'alternate', 'alternate-reverse'];

    document.querySelectorAll('.service-card .svg-bg-full svg').forEach((svg) => {
      const anim = animations[Math.floor(Math.random() * animations.length)];
      const duration = durations[Math.floor(Math.random() * durations.length)];
      const delay = (Math.random() * 5).toFixed(2);
      const direction = directions[Math.floor(Math.random() * directions.length)];

      svg.style.animation = `${anim} ${duration}s ease-in-out infinite ${direction}`;
      svg.style.animationDelay = `${delay}s`;
    });

    document.querySelectorAll('.svg-bg-blur svg').forEach((svg) => {
      const anim = animations[Math.floor(Math.random() * animations.length)];
      const duration = durations[Math.floor(Math.random() * durations.length)] + 2;
      const delay = (Math.random() * 4).toFixed(2);
      const direction = directions[Math.floor(Math.random() * directions.length)];

      svg.style.animation = `${anim} ${duration}s ease-in-out infinite ${direction}`;
      svg.style.animationDelay = `${delay}s`;
    });
  }

  setTimeout(initRandomSvgFloating, 100);

  function initPremiumDisplay() {
    const deviceWrapper = document.getElementById('hero-device-wrapper');
    const particlesContainer = document.getElementById('hero-particles');

    if (!deviceWrapper) return;

    const glowColors = {
      terminal: { color: '#10b981', rgb: '16, 185, 129' },
      browser: { color: '#6366f1', rgb: '99, 102, 241' },
      chat: { color: '#8b5cf6', rgb: '139, 92, 246' },
      document: { color: '#3b82f6', rgb: '59, 130, 246' },
    };

    const desktopDevices = [
      'monitor',
      'imac',
      'macbook',
      'gaming',
      'ultrawide',
      'studio',
      'dell',
      'thinkpad',
      'surface-studio',
      'pc-tower',
    ];
    const tabletDevices = [
      'ipad-pro',
      'ipad-air',
      'ipad-mini',
      'samsung-tab',
      'android-tab',
      'surface-pro',
      'fire',
      'lenovo-tab',
      'xiaomi-pad',
      'huawei-pad',
    ];
    const mobileDevices = [
      'iphone-pro',
      'iphone-se',
      'galaxy',
      'pixel',
      'oneplus',
      'xiaomi',
      'nothing',
      'oppo',
      'budget-phone',
      'fold',
    ];

    let currentDeviceIndex = 0;
    let currentScenarioIndex = 0;
    let cycleCount = 0;
    const scenarioOrder = ['terminal', 'browser', 'chat', 'document'];

    function getScreenCategory() {
      const width = window.innerWidth;
      if (width >= 1024) return 'desktop';
      if (width >= 640) return 'tablet';
      return 'mobile';
    }

    function getDeviceList() {
      const category = getScreenCategory();
      if (category === 'desktop') return desktopDevices;
      if (category === 'tablet') return tabletDevices;
      return mobileDevices;
    }

    function shuffleArray(arr) {
      const shuffled = [...arr];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }

    let shuffledDevices = shuffleArray(getDeviceList());

    function createParticles() {
      if (!particlesContainer) return;
      particlesContainer.innerHTML = '';
      for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 3}s`;
        particle.style.animationDuration = `${2 + Math.random() * 2}s`;
        particlesContainer.appendChild(particle);
      }
    }

    function updateGlow(type) {
      const glow = glowColors[type] || glowColors.terminal;
      document.documentElement.style.setProperty('--display-accent', glow.color);
      document.documentElement.style.setProperty('--display-accent-rgb', glow.rgb);
      document.documentElement.style.setProperty('--display-glow', `rgba(${glow.rgb}, 0.4)`);
    }

    const deviceFrames = {
      monitor: (content) =>
        `<div class="device-monitor"><div class="device-frame"><div class="device-bezel"><div class="device-camera"></div></div><div class="device-screen"><div class="device-content">${content}</div></div><div class="device-chin"><div class="device-logo">FEFELOV</div></div></div><div class="device-stand"><div class="device-stand-neck"></div><div class="device-stand-base"></div></div></div>`,
      imac: (content) =>
        `<div class="device-imac"><div class="device-frame"><div class="device-screen"><div class="device-content">${content}</div></div><div class="device-chin"></div></div><div class="device-stand"><div class="device-stand-neck"></div><div class="device-stand-base"></div></div></div>`,
      macbook: (content) =>
        `<div class="device-macbook"><div class="device-frame"><div class="device-bezel"><div class="device-camera"></div></div><div class="device-screen"><div class="device-content">${content}</div></div><div class="device-keyboard"></div></div><div class="device-base"></div></div>`,
      gaming: (content) =>
        `<div class="device-gaming"><div class="device-frame"><div class="device-screen"><div class="device-content">${content}</div></div><div class="device-rgb"></div></div><div class="device-stand"><div class="device-stand-neck"></div><div class="device-stand-base"></div></div></div>`,
      ultrawide: (content) =>
        `<div class="device-ultrawide"><div class="device-frame"><div class="device-screen"><div class="device-content">${content}</div></div></div><div class="device-stand"><div class="device-stand-neck"></div><div class="device-stand-base"></div></div></div>`,
      studio: (content) =>
        `<div class="device-studio"><div class="device-frame"><div class="device-screen"><div class="device-content">${content}</div></div></div><div class="device-stand"><div class="device-stand-arm"></div><div class="device-stand-base"></div></div></div>`,
      dell: (content) =>
        `<div class="device-dell"><div class="device-frame"><div class="device-bezel"><div class="device-camera"></div></div><div class="device-screen"><div class="device-content">${content}</div></div><div class="device-keyboard"></div></div><div class="device-base"></div></div>`,
      thinkpad: (content) =>
        `<div class="device-thinkpad"><div class="device-frame"><div class="device-bezel"><div class="device-camera"></div></div><div class="device-screen"><div class="device-content">${content}</div></div><div class="device-keyboard"></div></div><div class="device-base"></div></div>`,
      'surface-studio': (content) =>
        `<div class="device-surface-studio"><div class="device-frame"><div class="device-screen"><div class="device-content">${content}</div></div></div><div class="device-hinge"></div><div class="device-base"></div></div>`,
      'pc-tower': (content) =>
        `<div class="device-pc-tower"><div class="device-frame"><div class="device-bezel"><div class="device-camera"></div></div><div class="device-screen"><div class="device-content">${content}</div></div><div class="device-chin"></div></div><div class="device-stand"><div class="device-stand-neck"></div><div class="device-stand-base"></div><div class="device-tower"></div></div></div>`,
      'ipad-pro': (content) =>
        `<div class="device-ipad-pro"><div class="device-frame"><div class="device-camera"></div><div class="device-screen"><div class="device-content">${content}</div></div></div></div>`,
      'ipad-air': (content) =>
        `<div class="device-ipad-air"><div class="device-frame"><div class="device-camera"></div><div class="device-screen"><div class="device-content">${content}</div></div></div></div>`,
      'ipad-mini': (content) =>
        `<div class="device-ipad-mini"><div class="device-frame"><div class="device-screen"><div class="device-content">${content}</div></div></div></div>`,
      'samsung-tab': (content) =>
        `<div class="device-samsung-tab"><div class="device-frame"><div class="device-camera"></div><div class="device-screen"><div class="device-content">${content}</div></div></div></div>`,
      'android-tab': (content) =>
        `<div class="device-android-tab"><div class="device-frame"><div class="device-bezel"><div class="device-camera"></div></div><div class="device-screen"><div class="device-content">${content}</div></div></div></div>`,
      'surface-pro': (content) =>
        `<div class="device-surface-pro"><div class="device-frame"><div class="device-screen"><div class="device-content">${content}</div></div></div><div class="device-kickstand"></div></div>`,
      fire: (content) =>
        `<div class="device-fire"><div class="device-frame"><div class="device-bezel"><div class="device-camera"></div></div><div class="device-screen"><div class="device-content">${content}</div></div></div></div>`,
      'lenovo-tab': (content) =>
        `<div class="device-lenovo-tab"><div class="device-frame"><div class="device-camera"></div><div class="device-screen"><div class="device-content">${content}</div></div></div></div>`,
      'xiaomi-pad': (content) =>
        `<div class="device-xiaomi-pad"><div class="device-frame"><div class="device-screen"><div class="device-content">${content}</div></div></div></div>`,
      'huawei-pad': (content) =>
        `<div class="device-huawei-pad"><div class="device-frame"><div class="device-camera"></div><div class="device-screen"><div class="device-content">${content}</div></div></div></div>`,
      'iphone-pro': (content) =>
        `<div class="device-iphone-pro"><div class="device-frame"><div class="device-screen"><div class="device-island"><div class="device-island-camera"></div></div><div class="device-content">${content}</div><div class="device-bar"></div></div></div></div>`,
      'iphone-se': (content) =>
        `<div class="device-iphone-se"><div class="device-frame"><div class="device-bezel"><div class="device-speaker"></div></div><div class="device-screen"><div class="device-content">${content}</div></div><div class="device-chin"><div class="device-home"></div></div></div></div>`,
      galaxy: (content) =>
        `<div class="device-galaxy"><div class="device-frame"><div class="device-screen"><div class="device-punch-hole"></div><div class="device-content">${content}</div></div></div></div>`,
      pixel: (content) =>
        `<div class="device-pixel"><div class="device-frame"><div class="device-screen"><div class="device-punch-hole"></div><div class="device-content">${content}</div><div class="device-bar"></div></div></div></div>`,
      oneplus: (content) =>
        `<div class="device-oneplus"><div class="device-frame"><div class="device-screen"><div class="device-punch-hole"></div><div class="device-content">${content}</div></div></div></div>`,
      xiaomi: (content) =>
        `<div class="device-xiaomi"><div class="device-frame"><div class="device-screen"><div class="device-punch-hole"></div><div class="device-content">${content}</div></div></div></div>`,
      nothing: (content) =>
        `<div class="device-nothing"><div class="device-glyph"></div><div class="device-frame"><div class="device-screen"><div class="device-punch-hole"></div><div class="device-content">${content}</div></div></div></div>`,
      oppo: (content) =>
        `<div class="device-oppo"><div class="device-frame"><div class="device-screen"><div class="device-punch-hole"></div><div class="device-content">${content}</div></div></div></div>`,
      'budget-phone': (content) =>
        `<div class="device-budget-phone"><div class="device-frame"><div class="device-bezel"><div class="device-speaker"></div><div class="device-camera"></div></div><div class="device-screen"><div class="device-content">${content}</div></div><div class="device-chin"></div></div></div>`,
      fold: (content) =>
        `<div class="device-fold"><div class="device-frame"><div class="device-screen"><div class="device-punch-hole"></div><div class="device-content">${content}</div></div><div class="device-hinge"></div></div></div>`,
    };

    const scenarios = {
      terminal: () => {
        const lines = [
          { type: 'prompt', text: '~/fefelov $', delay: 0 },
          { type: 'cmd', text: ' npx create-bot telegram', delay: 0.3 },
          {
            type: 'out',
            text: I18N.t('scenarios.terminal.init') || '🤖 Инициализация проекта...',
            delay: 0.8,
          },
          {
            type: 'check',
            text: I18N.t('scenarios.terminal.structure') || 'Структура создана',
            delay: 1.4,
          },
          {
            type: 'check',
            text: I18N.t('scenarios.terminal.deps') || 'Зависимости установлены',
            delay: 2.0,
          },
          {
            type: 'check',
            text: I18N.t('scenarios.terminal.webhook') || 'Webhook настроен',
            delay: 2.6,
          },
          {
            type: 'check',
            text: I18N.t('scenarios.terminal.db') || 'База данных подключена',
            delay: 3.2,
          },
          {
            type: 'ok',
            text: I18N.t('scenarios.terminal.running') || 'Бот запущен и работает!',
            delay: 3.8,
          },
        ];
        return `<div class="scenario-container scenario-terminal"><div class="term-header"><span class="term-dot term-dot-r"></span><span class="term-dot term-dot-y"></span><span class="term-dot term-dot-g"></span><span class="term-title">fefelov — zsh</span></div>${lines
          .map((line, i) => {
            if (line.type === 'prompt')
              return `<div class="term-line" style="animation-delay: ${line.delay}s"><span class="term-prompt">${line.text}</span></div>`;
            if (line.type === 'cmd')
              return `<div class="term-line" style="animation-delay: ${line.delay}s; margin-top: -8px; margin-left: 85px"><span class="term-cmd">${line.text}</span>${i === 1 ? '<span class="term-cursor"></span>' : ''}</div>`;
            if (line.type === 'out')
              return `<div class="term-line" style="animation-delay: ${line.delay}s"><span class="term-out">${line.text}</span></div>`;
            if (line.type === 'check')
              return `<div class="term-line" style="animation-delay: ${line.delay}s"><span class="check-icon" style="animation-delay: ${line.delay + 0.1}s"><svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="term-out">${line.text}</span></div>`;
            if (line.type === 'ok')
              return `<div class="term-line" style="animation-delay: ${line.delay}s"><span class="term-ok">✅ ${line.text}</span></div>`;
            return '';
          })
          .join(
            ''
          )}<div class="scenario-status" style="animation-delay: 4.2s; opacity: 0; animation: scenarioFadeIn 0.4s ease forwards 4.2s"><span class="status-dot"></span><span class="status-text">${I18N.t('scenarios.terminal.status') || '@fefelov_bot активен'}</span></div></div>`;
      },
      browser: () =>
        `<div class="scenario-container scenario-browser"><div class="browser-bar"><div class="browser-dots"><span class="browser-dot" style="background: #ff5f56"></span><span class="browser-dot" style="background: #ffbd2e"></span><span class="browser-dot" style="background: #27ca40"></span></div><div class="browser-url"><span class="browser-url-lock">🔒</span><span>client-project.fefelov.ru</span></div></div><div class="browser-body"><div class="browser-loader" id="browser-loader"><div class="browser-loader-block" style="width: 60%"></div><div class="browser-loader-block" style="width: 80%"></div><div class="browser-loader-block" style="width: 40%"></div></div><div class="browser-site" id="browser-site" style="display: none"><div class="site-hero"><h3>${I18N.t('scenarios.browser.welcome') || 'Добро пожаловать'}</h3><p>${I18N.t('scenarios.browser.subtitle') || 'Современный сайт для вашего бизнеса'}</p></div><div class="site-cards"><div class="site-card" style="animation-delay: 1.8s"><div class="site-card-icon"></div><div class="site-card-text"></div></div><div class="site-card" style="animation-delay: 2s"><div class="site-card-icon" style="background: linear-gradient(135deg, #10b981, #059669)"></div><div class="site-card-text"></div></div><div class="site-card" style="animation-delay: 2.2s"><div class="site-card-icon" style="background: linear-gradient(135deg, #f59e0b, #d97706)"></div><div class="site-card-text"></div></div></div></div></div></div>`,
      chat: () => {
        const messages = [
          {
            type: 'user',
            text: I18N.t('scenarios.chat.user1') || 'Нужна помощь с курсовой по экономике',
            delay: 0.4,
          },
          {
            type: 'bot',
            text: I18N.t('scenarios.chat.bot1') || 'Конечно! Какая тема работы?',
            delay: 1.2,
          },
          {
            type: 'user',
            text: I18N.t('scenarios.chat.user2') || 'Анализ рынка криптовалют',
            delay: 2.0,
          },
          {
            type: 'bot',
            text:
              I18N.t('scenarios.chat.bot2') ||
              'Отличная тема! Подготовлю структуру и источники. Ожидайте материалы через 2 часа 📚',
            delay: 2.8,
          },
        ];
        return `<div class="scenario-container scenario-chat"><div class="chat-header"><div class="chat-avatar">F</div><div class="chat-info"><h4>${I18N.t('scenarios.chat.consultant') || 'FEFELOV Консультант'}</h4><span>${I18N.t('scenarios.chat.online') || '● онлайн'}</span></div></div><div class="chat-messages">${messages.map((msg) => `<div class="chat-msg chat-msg-${msg.type}" style="animation-delay: ${msg.delay}s">${msg.text}</div>`).join('')}<div class="chat-typing" style="animation: msgIn 0.4s ease forwards 3.8s; opacity: 0"><span class="chat-typing-dot"></span><span class="chat-typing-dot"></span><span class="chat-typing-dot"></span></div></div></div>`;
      },
      document: () => {
        const items = [
          {
            text: I18N.t('scenarios.document.item1') || 'Введение и актуальность темы',
            delay: 0.6,
          },
          {
            text: I18N.t('scenarios.document.item2') || 'Теоретическая база исследования',
            delay: 1.0,
          },
          {
            text: I18N.t('scenarios.document.item3') || 'Практическая часть с расчётами',
            delay: 1.4,
          },
          { text: I18N.t('scenarios.document.item4') || 'Выводы и рекомендации', delay: 1.8 },
        ];
        return `<div class="scenario-container scenario-doc"><div class="doc-header"><div class="doc-icon">📄</div><span class="doc-title">${I18N.t('scenarios.document.filename') || 'Дипломная_работа.docx'}</span></div><div class="doc-body">${items.map((item) => `<div class="doc-line" style="animation-delay: ${item.delay}s"><span class="doc-bullet"></span><span class="doc-text">${item.text}</span></div>`).join('')}<div class="doc-formula" style="animation-delay: 2.4s">NPV = Σ (CFt / (1+r)^t) − I₀</div><div class="doc-progress" style="animation: scenarioFadeIn 0.4s ease forwards 2.8s; opacity: 0"><div class="doc-progress-bar"><div class="doc-progress-fill" style="animation-delay: 3s"></div></div><span class="doc-progress-text">${I18N.t('scenarios.document.done') || 'Готово!'}</span></div></div></div>`;
      },
    };

    function renderDevice(deviceType, scenarioType) {
      const scenarioContent = scenarios[scenarioType]();
      const deviceFrame = deviceFrames[deviceType];
      if (!deviceFrame) return '';
      return deviceFrame(scenarioContent);
    }

    function switchDevice(newDevice, scenarioType) {
      deviceWrapper.classList.add('device-transition-exit');
      setTimeout(() => {
        deviceWrapper.innerHTML = renderDevice(newDevice, scenarioType);
        deviceWrapper.classList.remove('device-transition-exit');
        void deviceWrapper.offsetWidth;
        deviceWrapper.classList.add('device-transition-enter');
        if (scenarioType === 'browser') {
          setTimeout(() => {
            const loader = deviceWrapper.querySelector('#browser-loader');
            const site = deviceWrapper.querySelector('#browser-site');
            if (loader && site) {
              loader.style.display = 'none';
              site.style.display = 'block';
            }
          }, 1200);
        }
        setTimeout(() => deviceWrapper.classList.remove('device-transition-enter'), 650);
      }, 380);
    }

    function runCycle() {
      const scenarioType = scenarioOrder[currentScenarioIndex];
      updateGlow(scenarioType);

      if (cycleCount === 0 || cycleCount % 4 === 0) {
        const currentDevice = shuffledDevices[currentDeviceIndex];
        switchDevice(currentDevice, scenarioType);
        currentDeviceIndex = (currentDeviceIndex + 1) % shuffledDevices.length;
        if (currentDeviceIndex === 0) {
          shuffledDevices = shuffleArray(getDeviceList());
        }
      } else {
        const content = deviceWrapper.querySelector('.device-content');
        if (content) {
          content.style.opacity = '0';
          content.style.transform = 'scale(0.95) translateY(10px)';
          content.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          setTimeout(() => {
            content.innerHTML = scenarios[scenarioType]();
            content.style.opacity = '1';
            content.style.transform = 'scale(1) translateY(0)';
            if (scenarioType === 'browser') {
              setTimeout(() => {
                const loader = content.querySelector('#browser-loader');
                const site = content.querySelector('#browser-site');
                if (loader && site) {
                  loader.style.display = 'none';
                  site.style.display = 'block';
                }
              }, 1200);
            }
          }, 320);
        }
      }

      currentScenarioIndex = (currentScenarioIndex + 1) % scenarioOrder.length;
      cycleCount++;
    }

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        shuffledDevices = shuffleArray(getDeviceList());
        currentDeviceIndex = 0;
        const scenarioType =
          scenarioOrder[
            currentScenarioIndex > 0 ? currentScenarioIndex - 1 : scenarioOrder.length - 1
          ];
        switchDevice(shuffledDevices[0], scenarioType);
      }, 250);
    });

    createParticles();
    runCycle();
    setInterval(runCycle, 7000);
  }

  setTimeout(initPremiumDisplay, 500);

  function initHeroFloatingIcons() {
    const icons = document.querySelectorAll('.hero-floating-icon');
    const animations = [
      'iconFloat1',
      'iconFloat2',
      'iconFloat3',
      'iconFloat4',
      'iconFloat5',
      'iconFloat6',
    ];
    const durations = [10, 11, 12, 13, 14, 15, 16];

    icons.forEach((icon) => {
      const anim = animations[Math.floor(Math.random() * animations.length)];
      const duration = durations[Math.floor(Math.random() * durations.length)];
      const delay = (Math.random() * 5).toFixed(2);
      icon.style.animationName = anim;
      icon.style.animationDuration = `${duration}s`;
      icon.style.animationDelay = `${delay}s`;
    });
  }

  setTimeout(initHeroFloatingIcons, 100);

  function initHeroBlobs() {
    const blobs = document.querySelectorAll('.hero-blob');
    const animations = ['blobFloat1', 'blobFloat2', 'blobFloat3'];
    const durations = [18, 20, 22, 25, 28];

    blobs.forEach((blob) => {
      const anim = animations[Math.floor(Math.random() * animations.length)];
      const duration = durations[Math.floor(Math.random() * durations.length)];
      const delay = (Math.random() * 8).toFixed(2);
      blob.style.animationName = anim;
      blob.style.animationDuration = `${duration}s`;
      blob.style.animationDelay = `${delay}s`;
    });
  }

  setTimeout(initHeroBlobs, 100);
});

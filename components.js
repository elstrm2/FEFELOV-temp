const commonStyles = `
    * { font-family: 'Onest', system-ui, sans-serif; }
    *:focus-visible { outline: 2px solid #667eea; outline-offset: 2px; }
    button:focus-visible, a:focus-visible, input:focus-visible, textarea:focus-visible, select:focus-visible { outline: 2px solid #667eea; outline-offset: 2px; border-radius: 4px; }
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

    .mobile-nav-link {
        position: relative;
        display: block;
        border-bottom: 1px solid rgba(214, 211, 209, 0.5);
    }
    .mobile-nav-link::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        transition: width 0.3s ease;
    }
    .mobile-nav-link:hover::before {
        width: 100%;
    }

    #mobile-menu {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out;
    }
    #mobile-menu.open {
        max-height: 400px;
    }

    .schedule-bg {
        background: linear-gradient(-45deg, #8b9dc3, #9a8bc4, #b8a9c9, #a3b5d6, #8b9dc3);
        background-size: 400% 400%;
        animation: schedule-gradient 12s ease infinite;
        transition: opacity 0.5s ease;
    }
    .schedule-card:hover .schedule-bg {
        opacity: 0.9;
    }
    @keyframes schedule-gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    .schedule-icon-gradient {
        stroke: url(#schedule-icon-grad);
    }
    .schedule-card::before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        overflow: hidden;
    }
    .schedule-card svg.schedule-icon-gradient {
        stroke: #8b9dc3;
        animation: schedule-icon-color 12s ease infinite;
    }
    @keyframes schedule-icon-color {
        0% { stroke: #8b9dc3; }
        25% { stroke: #9a8bc4; }
        50% { stroke: #b8a9c9; }
        75% { stroke: #a3b5d6; }
        100% { stroke: #8b9dc3; }
    }

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
    }
    .service-card .card-bg svg {
        position: absolute;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .service-card .card-bg svg.icon-left {
        left: 1.25rem;
        top: 1.25rem;
    }
    .service-card .card-bg svg.icon-right {
        right: 1.25rem;
        top: 1.25rem;
    }
    .service-card:hover .card-bg svg.icon-left {
        transform: translate(-8px, -8px);
        opacity: 0.8;
    }
    .service-card:hover .card-bg svg.icon-right {
        transform: translate(8px, -8px);
        opacity: 0.7;
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

    .section-highlight {
        position: relative;
        padding-left: 1.5rem;
        padding-bottom: 0.75rem;
    }
    .section-highlight::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 3px;
        height: 0;
        background: linear-gradient(180deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe, #667eea);
        background-size: 100% 300%;
        border-radius: 2px;
        animation: leftLineGrow 0.8s ease 1.8s forwards, sectionGradientShift 4s ease infinite 2.6s;
    }
    .section-highlight::after {
        content: '';
        position: absolute;
        left: 1.5rem;
        bottom: 0;
        width: 0;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe, #667eea);
        background-size: 300% 100%;
        border-radius: 2px;
        animation: bottomLineDraw 1s ease forwards, bottomLineGradient 4s ease infinite, bottomLineFade 0.5s ease 1.5s forwards;
    }
    @keyframes bottomLineDraw {
        0% { width: 0; opacity: 0; }
        20% { opacity: 1; }
        100% { width: calc(100% - 1.5rem); opacity: 1; }
    }
    @keyframes bottomLineFade {
        to { opacity: 0; }
    }
    @keyframes bottomLineGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    @keyframes leftLineGrow {
        0% { height: 0; opacity: 0; }
        20% { opacity: 1; }
        100% { height: 100%; opacity: 1; }
    }
    @keyframes sectionGradientShift {
        0% { background-position: 50% 0%; }
        50% { background-position: 50% 100%; }
        100% { background-position: 50% 0%; }
    }

    .typewriter {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        border-right: 2px solid rgba(52, 211, 153, 0.7);
        animation: typewriterText 20s steps(12) infinite, typewriterCursor 20s step-end infinite;
    }
    @keyframes typewriterText {
        0% { width: 0; }
        5% { width: 100%; }
        90% { width: 100%; }
        95% { width: 0; }
        100% { width: 0; }
    }
    @keyframes typewriterCursor {
        0%, 5% { border-color: rgba(52, 211, 153, 0.7); }
        6%, 89% { border-color: transparent; }
        90%, 100% { border-color: rgba(52, 211, 153, 0.7); }
    }

    .division-card-study {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #6366f1 100%);
        transition: transform 0.4s ease, box-shadow 0.4s ease;
    }
    .division-card-tech {
        background: linear-gradient(135deg, #10b981 0%, #14b8a6 50%, #06b6d4 100%);
        transition: transform 0.4s ease, box-shadow 0.4s ease;
    }
    .division-card-study:hover, .division-card-tech:hover {
        transform: translateY(-6px);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    .division-card-study .svg-draw, .division-card-tech .svg-draw {
        transition: all 0.4s ease;
    }
    .division-card-study:hover .svg-draw.icon-left, .division-card-tech:hover .svg-draw.icon-left {
        transform: translate(-8px, -8px);
        opacity: 0.35;
    }
    .division-card-study:hover .svg-draw.icon-right, .division-card-tech:hover .svg-draw.icon-right {
        transform: translate(8px, -8px);
        opacity: 0.3;
    }

    .svg-draw path, .svg-draw rect, .svg-draw circle, .svg-draw line, .svg-draw ellipse, .svg-draw text {
        stroke-dasharray: 200;
        stroke-dashoffset: 200;
        animation: svgDraw 1.5s ease forwards;
        fill: none;
    }
    .svg-draw .draw-1 { animation-delay: 0s; }
    .svg-draw .draw-2 { animation-delay: 0.2s; }
    .svg-draw .draw-3 { animation-delay: 0.4s; }
    .svg-draw .draw-4 { animation-delay: 0.6s; }
    .svg-draw .draw-5 { animation-delay: 0.8s; }
    .svg-draw .draw-6 { animation-delay: 1s; }
    .svg-draw .draw-7 { animation-delay: 1.2s; }
    .svg-draw .draw-8 { animation-delay: 1.4s; }
    .svg-draw .draw-9 { animation-delay: 1.6s; }
    .svg-draw .draw-10 { animation-delay: 1.8s; }

    @keyframes svgDraw {
        to { stroke-dashoffset: 0; }
    }

    .svg-draw .fill-after {
        fill: currentColor;
        fill-opacity: 0;
        animation: svgDraw 1.5s ease forwards, svgFillIn 0.5s ease forwards 1.5s;
    }
    @keyframes svgFillIn {
        to { fill-opacity: 0.15; }
    }

    .svg-bg-redraw path, .svg-bg-redraw rect, .svg-bg-redraw circle, .svg-bg-redraw line, .svg-bg-redraw ellipse, .svg-bg-redraw polyline, .svg-bg-redraw polygon {
        stroke-dasharray: 200;
        stroke-dashoffset: 200;
        fill: none;
        opacity: 0;
    }
    .svg-bg-redraw .redraw-1 { animation: svgDrawFirst 1.5s ease forwards 0s, svgRedraw 8s ease-in-out infinite 2s; }
    .svg-bg-redraw .redraw-2 { animation: svgDrawFirst 1.5s ease forwards 0.15s, svgRedraw 10s ease-in-out infinite 2.5s; }
    .svg-bg-redraw .redraw-3 { animation: svgDrawFirst 1.5s ease forwards 0.3s, svgRedraw 12s ease-in-out infinite 3s; }
    .svg-bg-redraw .redraw-4 { animation: svgDrawFirst 1.5s ease forwards 0.45s, svgRedraw 9s ease-in-out infinite 3.5s; }
    .svg-bg-redraw .redraw-5 { animation: svgDrawFirst 1.5s ease forwards 0.6s, svgRedraw 11s ease-in-out infinite 4s; }
    .svg-bg-redraw .redraw-6 { animation: svgDrawFirst 1.5s ease forwards 0.75s, svgRedraw 7s ease-in-out infinite 4.5s; }
    .svg-bg-redraw .redraw-7 { animation: svgDrawFirst 1.5s ease forwards 0.9s, svgRedraw 13s ease-in-out infinite 5s; }
    .svg-bg-redraw .redraw-8 { animation: svgDrawFirst 1.5s ease forwards 1.05s, svgRedraw 10s ease-in-out infinite 5.5s; }
    .svg-bg-redraw .redraw-9 { animation: svgDrawFirst 1.5s ease forwards 1.2s, svgRedraw 8s ease-in-out infinite 6s; }
    .svg-bg-redraw .redraw-10 { animation: svgDrawFirst 1.5s ease forwards 1.35s, svgRedraw 14s ease-in-out infinite 6.5s; }

    @keyframes svgDrawFirst {
        0% { stroke-dashoffset: 200; opacity: 0; }
        10% { opacity: 1; }
        100% { stroke-dashoffset: 0; opacity: 1; }
    }

    @keyframes svgRedraw {
        0%, 40% { stroke-dashoffset: 0; opacity: 1; }
        50% { stroke-dashoffset: 200; opacity: 0.3; }
        60% { stroke-dashoffset: 200; opacity: 0.3; }
        100% { stroke-dashoffset: 0; opacity: 1; }
    }

    .svg-bg-blur {
        filter: blur(2px);
        opacity: 0.15;
        animation: svgFloat 20s ease-in-out infinite;
    }
    @keyframes svgFloat {
        0%, 100% { transform: translate(0, 0) scale(1); }
        25% { transform: translate(10px, -10px) scale(1.02); }
        50% { transform: translate(-5px, 5px) scale(0.98); }
        75% { transform: translate(-10px, -5px) scale(1.01); }
    }

    .service-card .svg-bg-full {
        position: absolute;
        inset: 0;
        overflow: hidden;
        pointer-events: none;
    }
    .service-card .svg-bg-full svg {
        width: 100%;
        height: 100%;
        opacity: 0.12;
        filter: blur(2px);
        animation: svgFloat 25s ease-in-out infinite;
    }
    .service-card:hover .svg-bg-full svg {
        opacity: 0.18;
    }
`;

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
                    <button id="lang-btn" class="flex items-center gap-2 px-4 sm:px-5 py-2.5 text-base font-medium text-stone-600 hover:text-stone-900 bg-white/60 border border-stone-200 rounded-full hover:bg-white transition-all" aria-label="Выбор языка" aria-expanded="false" aria-haspopup="true" aria-controls="lang-menu">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                        <span id="current-lang">Ру</span>
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <div id="lang-menu" class="lang-menu absolute right-0 top-full mt-2 bg-white border border-stone-200 rounded-xl shadow-lg py-2 min-w-[160px] z-50" role="menu">
                        <button data-lang="ru" class="w-full px-5 py-2.5 text-left text-base hover:bg-stone-50 transition-colors" role="menuitem">Русский</button>
                        <button data-lang="uk" class="w-full px-5 py-2.5 text-left text-base hover:bg-stone-50 transition-colors" role="menuitem">Українська</button>
                        <button data-lang="en" class="w-full px-5 py-2.5 text-left text-base hover:bg-stone-50 transition-colors" role="menuitem">English</button>
                        <button data-lang="zh" class="w-full px-5 py-2.5 text-left text-base hover:bg-stone-50 transition-colors" role="menuitem">中文</button>
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
                mobileMenu.classList.toggle('open');
                const isOpen = mobileMenu.classList.contains('open');
                mobileMenuBtn.setAttribute('aria-expanded', isOpen);
                mobileMenuBtn.innerHTML = isOpen
                    ? '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>'
                    : '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
            });

            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('open');
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    mobileMenuBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
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
                langBtn.setAttribute('aria-expanded', langMenu.classList.contains('active'));
            });

            document.addEventListener('click', function() {
                langMenu.classList.remove('active');
                langBtn.setAttribute('aria-expanded', 'false');
            });

            langMenu.querySelectorAll('[data-lang]').forEach(btn => {
                btn.addEventListener('click', function() {
                    const lang = this.dataset.lang;
                    if (typeof I18N !== 'undefined') {
                        I18N.setLanguage(lang);
                    }
                    langMenu.classList.remove('active');
                    langBtn.setAttribute('aria-expanded', 'false');
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

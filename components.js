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
    .footer-dot {
        display: inline-block;
        width: 12px;
        text-align: center;
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
        flex-shrink: 0;
    }
    .logo-text, .logo-dot {
        display: inline-block;
        transform-origin: left center;
    }
    .logo-dot {
        transition: opacity 0.2s ease;
    }
    @keyframes logoPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); filter: drop-shadow(0 0 6px rgba(102, 126, 234, 0.5)); }
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

    .lang-btn-expand {
        transition: width 0.15s ease-out, padding 0.15s ease-out, background 0.2s ease;
        overflow: hidden;
        width: 44px;
        height: 44px;
    }
    .lang-btn-expand .lang-text,
    .lang-btn-expand .lang-arrow {
        opacity: 0;
        max-width: 0;
        margin-left: 0;
        transform: translateX(10px);
        transition: opacity 0.1s ease-out, max-width 0.15s ease-out, margin 0.15s ease-out, transform 0.15s ease-out;
    }
    .lang-btn-expand:hover,
    .lang-btn-expand[aria-expanded="true"] {
        width: auto;
        padding-left: 14px;
        padding-right: 14px;
        transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s ease;
    }
    .lang-btn-expand:hover .lang-text,
    .lang-btn-expand[aria-expanded="true"] .lang-text {
        opacity: 1;
        max-width: 50px;
        margin-left: 8px;
        transform: translateX(0);
        transition: opacity 0.2s ease 0.1s, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1), margin 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s ease;
    }
    .lang-btn-expand:hover .lang-arrow,
    .lang-btn-expand[aria-expanded="true"] .lang-arrow {
        opacity: 1;
        max-width: 20px;
        margin-left: 4px;
        transform: translateX(0);
        transition: opacity 0.2s ease 0.15s, max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1), margin 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s ease;
    }

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
        padding-left: 0;
        animation: textSlideRight 0.5s ease forwards;
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
        animation: leftLineGrow 0.6s ease 0.5s forwards, sectionGradientShift 4s ease infinite 1.1s;
    }
    @keyframes textSlideRight {
        0% { padding-left: 0; }
        100% { padding-left: 1.5rem; }
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
        filter: blur(4px);
        opacity: 0.2;
    }

    @keyframes svgRandomFloat1 {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        17% { transform: translate(12px, -8px) rotate(1.2deg); }
        33% { transform: translate(-5px, -15px) rotate(-0.8deg); }
        50% { transform: translate(-14px, 3px) rotate(0.5deg); }
        67% { transform: translate(8px, 10px) rotate(-1deg); }
        83% { transform: translate(15px, -4px) rotate(0.7deg); }
    }
    @keyframes svgRandomFloat2 {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        14% { transform: translate(-10px, 12px) rotate(-0.9deg); }
        28% { transform: translate(8px, 8px) rotate(1.1deg); }
        42% { transform: translate(14px, -6px) rotate(-0.4deg); }
        57% { transform: translate(-3px, -14px) rotate(0.8deg); }
        71% { transform: translate(-12px, -2px) rotate(-1.2deg); }
        85% { transform: translate(5px, 10px) rotate(0.6deg); }
    }
    @keyframes svgRandomFloat3 {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        20% { transform: translate(-8px, -10px) rotate(0.7deg); }
        40% { transform: translate(10px, -12px) rotate(-1.1deg); }
        60% { transform: translate(6px, 14px) rotate(0.9deg); }
        80% { transform: translate(-12px, 5px) rotate(-0.6deg); }
    }
    @keyframes svgRandomFloat4 {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        12% { transform: translate(15px, 5px) rotate(-0.5deg); }
        25% { transform: translate(10px, -12px) rotate(1deg); }
        37% { transform: translate(-8px, -10px) rotate(-0.8deg); }
        50% { transform: translate(-15px, 2px) rotate(0.4deg); }
        62% { transform: translate(-10px, 12px) rotate(1.2deg); }
        75% { transform: translate(5px, 15px) rotate(-0.7deg); }
        87% { transform: translate(12px, 8px) rotate(0.9deg); }
    }
    @keyframes svgRandomFloat5 {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        16% { transform: translate(-14px, -5px) rotate(0.8deg); }
        33% { transform: translate(-6px, 12px) rotate(-1deg); }
        50% { transform: translate(12px, 10px) rotate(0.5deg); }
        66% { transform: translate(14px, -8px) rotate(-0.6deg); }
        83% { transform: translate(3px, -14px) rotate(1.1deg); }
    }
    @keyframes svgRandomFloat6 {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        10% { transform: translate(8px, -14px) rotate(-0.7deg); }
        30% { transform: translate(-12px, -8px) rotate(0.9deg); }
        50% { transform: translate(-10px, 10px) rotate(-0.5deg); }
        70% { transform: translate(6px, 14px) rotate(1.2deg); }
        90% { transform: translate(14px, 2px) rotate(-0.9deg); }
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
        opacity: 0.15;
        filter: blur(4px);
        animation: svgRandomFloat1 12s ease-in-out infinite;
        animation-delay: var(--svg-delay, 0s);
    }
    .service-card:hover .svg-bg-full svg {
        opacity: 0.18;
    }

    .btn-soft-glow {
        position: relative;
        z-index: 1;
        background: #1c1917;
        transition: all 0.3s ease;
    }
    .btn-soft-glow::before {
        content: '';
        position: absolute;
        inset: -1px;
        border-radius: inherit;
        background: linear-gradient(90deg, rgba(120,113,108,0.3), rgba(168,162,158,0.2), rgba(120,113,108,0.3));
        background-size: 200% 100%;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s ease;
        animation: soft-glow-shift 3s ease infinite;
    }
    .btn-soft-glow::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: inherit;
        z-index: -1;
    }
    .btn-soft-glow:hover::before {
        opacity: 1;
    }
    @keyframes soft-glow-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    #lang-menu {
        background: #fff;
        border: 1px solid #e7e5e4;
        padding: 6px;
        box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.15);
    }

    #lang-menu button {
        color: #57534e;
        border-radius: 10px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        padding: 10px 16px;
        display: flex;
        align-items: center;
        gap: 0;
    }

    #lang-menu button .lang-icon {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
        opacity: 0;
        margin-right: 0;
        transform: translateX(-5px) scale(0.8);
        transition: margin-right 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s ease, opacity 0.15s ease;
    }

    #lang-menu button:hover {
        color: #1c1917;
        background: #f5f5f4;
    }

    #lang-menu button[data-lang="ru"] .lang-icon {
        transform: translateX(-5px) scale(0.7);
    }
    #lang-menu button[data-lang="ru"]:hover .lang-icon {
        transform: translateX(0) scale(0.88);
    }

    #lang-menu button:hover .lang-icon {
        opacity: 1;
        margin-right: 10px;
        transform: translateX(0) scale(1);
        transition: margin-right 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s ease 0.1s, opacity 0.2s ease 0.15s;
    }

    #lang-menu button.active {
        font-weight: 600;
        color: #1c1917;
    }

    #lang-menu button.active .lang-icon {
        opacity: 1;
        margin-right: 10px;
        transform: translateX(0) scale(1);
    }

    #lang-menu button[data-lang="ru"] .lang-icon { color: #0ea5e9; filter: drop-shadow(0 0 3px rgba(14, 165, 233, 0.4)); }
    #lang-menu button[data-lang="ru"]:hover .lang-icon,
    #lang-menu button[data-lang="ru"].active .lang-icon { animation: langIconRu 2s ease-in-out infinite; }

    #lang-menu button[data-lang="en"] .lang-icon { color: #22c55e; filter: drop-shadow(0 0 3px rgba(34, 197, 94, 0.4)); }
    #lang-menu button[data-lang="en"]:hover .lang-icon,
    #lang-menu button[data-lang="en"].active .lang-icon { animation: langIconEn 1.2s ease-in-out infinite; }

    #lang-menu button[data-lang="uk"] .lang-icon { color: #f59e0b; filter: drop-shadow(0 0 3px rgba(245, 158, 11, 0.4)); }
    #lang-menu button[data-lang="uk"]:hover .lang-icon,
    #lang-menu button[data-lang="uk"].active .lang-icon { animation: langIconUk 2.5s ease-in-out infinite; }

    #lang-menu button[data-lang="zh"] .lang-icon { color: #dc2626; filter: drop-shadow(0 0 3px rgba(220, 38, 38, 0.4)); }
    #lang-menu button[data-lang="zh"]:hover .lang-icon,
    #lang-menu button[data-lang="zh"].active .lang-icon { animation: langIconZh 3s ease-in-out infinite; }

    @keyframes langIconRu { 0%, 100% { transform: scale(1) rotate(0deg); } 25% { transform: scale(1.1) rotate(-5deg); } 50% { transform: scale(0.95) rotate(5deg); } 75% { transform: scale(1.05) rotate(-3deg); } }
    @keyframes langIconEn { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(3px); } 50% { transform: translateX(1px); } 75% { transform: translateX(4px); } }
    @keyframes langIconUk { 0%, 100% { transform: scale(1) rotate(0deg); } 33% { transform: scale(1.15) rotate(120deg); } 66% { transform: scale(0.9) rotate(240deg); } }
    @keyframes langIconZh { 0%, 100% { transform: scale(1) translateX(0); } 25% { transform: scale(1.05) translateX(2px); } 50% { transform: scale(1.1) translateX(-1px); } 75% { transform: scale(0.95) translateX(1px); } }

    .hero-blob {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.4;
        pointer-events: none;
        will-change: transform;
    }
    .hero-blob-1 {
        width: 400px;
        height: 400px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        top: 5%;
        right: 10%;
        animation: blobFloat1 20s ease-in-out infinite;
    }
    .hero-blob-2 {
        width: 300px;
        height: 300px;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        bottom: 20%;
        left: 5%;
        animation: blobFloat2 25s ease-in-out infinite;
    }
    .hero-blob-3 {
        width: 250px;
        height: 250px;
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        top: 40%;
        right: 25%;
        animation: blobFloat3 18s ease-in-out infinite;
    }
    @keyframes blobFloat1 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        25% { transform: translate(-30px, 40px) scale(1.05); }
        50% { transform: translate(20px, -20px) scale(0.95); }
        75% { transform: translate(-15px, -30px) scale(1.02); }
    }
    @keyframes blobFloat2 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(40px, -30px) scale(1.08); }
        66% { transform: translate(-20px, 20px) scale(0.92); }
    }
    @keyframes blobFloat3 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        20% { transform: translate(25px, 35px) scale(1.03); }
        40% { transform: translate(-35px, 15px) scale(0.97); }
        60% { transform: translate(15px, -25px) scale(1.05); }
        80% { transform: translate(-20px, -15px) scale(0.98); }
    }

    :root {
        --display-accent: #6366f1;
        --display-accent-rgb: 99, 102, 241;
        --display-glow: rgba(99, 102, 241, 0.4);
    }

    .hero-display-wrapper {
        perspective: 1200px;
        perspective-origin: 50% 30%;
    }

    .hero-display {
        position: relative;
        transform-style: preserve-3d;
        animation: displayFloat 6s ease-in-out infinite;
    }

    @keyframes displayFloat {
        0%, 100% { transform: rotateX(2deg) rotateY(-3deg) translateY(0); }
        50% { transform: rotateX(0deg) rotateY(-1deg) translateY(-8px); }
    }

    .hero-display-glow {
        position: absolute;
        inset: -40px;
        background: radial-gradient(ellipse at center, var(--display-glow) 0%, transparent 70%);
        opacity: 0.6;
        filter: blur(40px);
        z-index: -1;
        animation: glowPulse 4s ease-in-out infinite;
        transition: background 0.8s ease;
    }

    @keyframes glowPulse {
        0%, 100% { opacity: 0.5; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.05); }
    }

    .hero-display-frame {
        background: linear-gradient(165deg, #1a1a1a 0%, #0a0a0a 100%);
        border-radius: 24px;
        padding: 12px 12px 0 12px;
        box-shadow:
            0 50px 100px -30px rgba(0, 0, 0, 0.7),
            0 30px 60px -20px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(0, 0, 0, 0.5);
        position: relative;
        overflow: hidden;
    }

    .hero-display-frame::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%);
        pointer-events: none;
        border-radius: 24px;
    }

    .hero-display-bezel {
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .hero-display-camera {
        width: 8px;
        height: 8px;
        background: radial-gradient(circle, #2a2a2a 40%, #1a1a1a 100%);
        border-radius: 50%;
        box-shadow: inset 0 1px 2px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05);
    }

    .hero-display-screen {
        background: linear-gradient(180deg, #0c0c14 0%, #080810 100%);
        border-radius: 8px;
        min-height: 280px;
        position: relative;
        overflow: hidden;
        box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.8);
    }

    .hero-display-scanline {
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.15) 2px,
            rgba(0, 0, 0, 0.15) 4px
        );
        pointer-events: none;
        z-index: 10;
        opacity: 0.3;
    }

    .hero-display-reflection {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            165deg,
            rgba(255, 255, 255, 0.04) 0%,
            transparent 40%,
            transparent 60%,
            rgba(255, 255, 255, 0.02) 100%
        );
        pointer-events: none;
        z-index: 20;
    }

    .hero-display-content {
        padding: 24px;
        min-height: 280px;
        position: relative;
        z-index: 5;
    }

    .hero-display-chin {
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%);
        border-radius: 0 0 16px 16px;
        margin: 0 -12px -12px -12px;
        padding: 0 12px;
    }

    .hero-display-logo {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 2px;
        color: #3a3a3a;
        text-transform: uppercase;
    }

    .hero-display-stand {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -2px;
    }

    .hero-display-stand-neck {
        width: 60px;
        height: 50px;
        background: linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%);
        clip-path: polygon(15% 0, 85% 0, 100% 100%, 0% 100%);
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
    }

    .hero-display-stand-base {
        width: 140px;
        height: 12px;
        background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
        border-radius: 4px 4px 8px 8px;
        box-shadow:
            0 8px 20px -5px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255,255,255,0.08);
    }

    .scenario-container {
        opacity: 0;
        animation: scenarioFadeIn 0.6s ease forwards;
    }

    @keyframes scenarioFadeIn {
        from { opacity: 0; transform: translateY(10px) scale(0.98); }
        to { opacity: 1; transform: translateY(0) scale(1); }
    }

    /* Terminal Scenario */
    .scenario-terminal {
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 12px;
        line-height: 1.8;
    }

    .term-header {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 16px;
        padding-bottom: 12px;
        border-bottom: 1px solid rgba(255,255,255,0.06);
    }

    .term-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }
    .term-dot-r { background: #ff5f56; box-shadow: 0 0 8px rgba(255, 95, 86, 0.4); }
    .term-dot-y { background: #ffbd2e; box-shadow: 0 0 8px rgba(255, 189, 46, 0.4); }
    .term-dot-g { background: #27ca40; box-shadow: 0 0 8px rgba(39, 202, 64, 0.4); }

    .term-title {
        margin-left: auto;
        font-size: 10px;
        color: #4a4a5a;
        letter-spacing: 0.5px;
    }

    .term-line {
        opacity: 0;
        transform: translateX(-10px);
        animation: termLineIn 0.4s ease forwards;
    }

    @keyframes termLineIn {
        to { opacity: 1; transform: translateX(0); }
    }

    .term-prompt { color: #64ffda; }
    .term-cmd { color: #e2e8f0; }
    .term-out { color: #8892b0; }
    .term-ok { color: #4ade80; }
    .term-cursor {
        display: inline-block;
        width: 8px;
        height: 14px;
        background: #64ffda;
        animation: cursorBlink 1s step-end infinite;
        vertical-align: middle;
        margin-left: 4px;
        box-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
    }

    @keyframes cursorBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }

    /* Browser Scenario */
    .scenario-browser {
        background: #fff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    }

    .browser-bar {
        background: linear-gradient(180deg, #f8f8f8 0%, #e8e8e8 100%);
        padding: 10px 12px;
        display: flex;
        align-items: center;
        gap: 8px;
        border-bottom: 1px solid #ddd;
    }

    .browser-dots {
        display: flex;
        gap: 6px;
    }
    .browser-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #ddd;
    }

    .browser-url {
        flex: 1;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 6px 10px;
        font-size: 11px;
        color: #666;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .browser-url-lock {
        color: #22c55e;
    }

    .browser-body {
        background: #fff;
        min-height: 180px;
        padding: 16px;
    }

    .browser-loader {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .browser-loader-block {
        height: 16px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        border-radius: 4px;
        animation: shimmer 1.5s infinite;
    }

    @keyframes shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
    }

    .browser-site {
        opacity: 0;
        animation: browserSiteIn 0.5s ease forwards;
    }

    @keyframes browserSiteIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
    }

    .site-hero {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 6px;
        padding: 20px;
        margin-bottom: 12px;
        color: #fff;
    }

    .site-hero h3 {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 4px;
    }

    .site-hero p {
        font-size: 10px;
        opacity: 0.8;
    }

    .site-cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
    }

    .site-card {
        background: #f5f5f5;
        border-radius: 4px;
        padding: 10px;
        opacity: 0;
        animation: cardPop 0.3s ease forwards;
    }

    @keyframes cardPop {
        from { opacity: 0; transform: scale(0.8); }
        to { opacity: 1; transform: scale(1); }
    }

    .site-card-icon {
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        border-radius: 4px;
        margin-bottom: 6px;
    }

    .site-card-text {
        height: 6px;
        background: #ddd;
        border-radius: 2px;
    }

    /* Chat Scenario */
    .scenario-chat {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .chat-header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding-bottom: 12px;
        border-bottom: 1px solid rgba(255,255,255,0.1);
    }

    .chat-avatar {
        width: 36px;
        height: 36px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #fff;
        font-weight: 600;
    }

    .chat-info h4 {
        color: #fff;
        font-size: 13px;
        font-weight: 500;
    }

    .chat-info span {
        color: #4ade80;
        font-size: 10px;
    }

    .chat-messages {
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1;
    }

    .chat-msg {
        max-width: 80%;
        padding: 10px 14px;
        border-radius: 16px;
        font-size: 12px;
        line-height: 1.4;
        opacity: 0;
        animation: msgIn 0.4s ease forwards;
    }

    @keyframes msgIn {
        from { opacity: 0; transform: translateY(10px) scale(0.95); }
        to { opacity: 1; transform: translateY(0) scale(1); }
    }

    .chat-msg-user {
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: #fff;
        align-self: flex-end;
        border-bottom-right-radius: 4px;
    }

    .chat-msg-bot {
        background: rgba(255,255,255,0.1);
        color: #e2e8f0;
        align-self: flex-start;
        border-bottom-left-radius: 4px;
    }

    .chat-typing {
        display: flex;
        gap: 4px;
        padding: 12px 16px;
        background: rgba(255,255,255,0.05);
        border-radius: 16px;
        align-self: flex-start;
    }

    .chat-typing-dot {
        width: 6px;
        height: 6px;
        background: #8892b0;
        border-radius: 50%;
        animation: typingDot 1.4s infinite;
    }
    .chat-typing-dot:nth-child(2) { animation-delay: 0.2s; }
    .chat-typing-dot:nth-child(3) { animation-delay: 0.4s; }

    @keyframes typingDot {
        0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
        30% { transform: translateY(-6px); opacity: 1; }
    }

    /* Document Scenario */
    .scenario-doc {
        background: #fff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    }

    .doc-header {
        background: linear-gradient(180deg, #f8f8f8 0%, #efefef 100%);
        padding: 10px 14px;
        display: flex;
        align-items: center;
        gap: 10px;
        border-bottom: 1px solid #e0e0e0;
    }

    .doc-icon {
        width: 24px;
        height: 24px;
        background: linear-gradient(135deg, #3b82f6, #1d4ed8);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 12px;
    }

    .doc-title {
        font-size: 12px;
        color: #333;
        font-weight: 500;
    }

    .doc-body {
        padding: 20px;
        min-height: 180px;
    }

    .doc-line {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 10px;
        opacity: 0;
        animation: docLineIn 0.4s ease forwards;
    }

    @keyframes docLineIn {
        from { opacity: 0; transform: translateX(-10px); }
        to { opacity: 1; transform: translateX(0); }
    }

    .doc-bullet {
        width: 6px;
        height: 6px;
        background: #6366f1;
        border-radius: 50%;
    }

    .doc-text {
        font-size: 11px;
        color: #444;
    }

    .doc-formula {
        background: #f8f8f8;
        padding: 12px 16px;
        border-radius: 6px;
        border-left: 3px solid #6366f1;
        margin: 14px 0;
        font-family: 'Times New Roman', serif;
        font-style: italic;
        color: #333;
        opacity: 0;
        animation: formulaIn 0.5s ease forwards;
    }

    @keyframes formulaIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
    }

    .doc-progress {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 16px;
        padding-top: 12px;
        border-top: 1px solid #eee;
    }

    .doc-progress-bar {
        flex: 1;
        height: 6px;
        background: #eee;
        border-radius: 3px;
        overflow: hidden;
    }

    .doc-progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #6366f1, #8b5cf6);
        border-radius: 3px;
        width: 0;
        animation: progressFill 2s ease forwards;
    }

    @keyframes progressFill {
        to { width: 100%; }
    }

    .doc-progress-text {
        font-size: 10px;
        color: #888;
    }

    /* Particles */
    .hero-display-particles {
        position: absolute;
        inset: 0;
        pointer-events: none;
        overflow: hidden;
    }

    .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: var(--display-accent);
        border-radius: 50%;
        opacity: 0;
        animation: particleFloat 3s ease-in-out infinite;
    }

    @keyframes particleFloat {
        0% { opacity: 0; transform: translateY(100px) scale(0); }
        20% { opacity: 0.8; }
        80% { opacity: 0.4; }
        100% { opacity: 0; transform: translateY(-100px) scale(1); }
    }

    .hero-phone-wrapper {
        display: flex;
        justify-content: center;
        perspective: 1000px;
    }

    .hero-phone {
        position: relative;
        animation: phoneFloat 5s ease-in-out infinite;
    }

    @keyframes phoneFloat {
        0%, 100% { transform: rotateX(5deg) rotateY(-5deg) translateY(0); }
        50% { transform: rotateX(0deg) rotateY(0deg) translateY(-10px); }
    }

    .hero-phone-glow {
        position: absolute;
        inset: -30px;
        background: radial-gradient(ellipse at center, var(--display-glow) 0%, transparent 70%);
        opacity: 0.5;
        filter: blur(30px);
        z-index: -1;
        animation: glowPulse 4s ease-in-out infinite;
    }

    .hero-phone-frame {
        width: 260px;
        background: linear-gradient(165deg, #1a1a1a 0%, #0a0a0a 100%);
        border-radius: 36px;
        padding: 12px;
        box-shadow:
            0 40px 80px -20px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(0, 0, 0, 0.5);
        position: relative;
    }

    .hero-phone-frame::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%);
        pointer-events: none;
        border-radius: 36px;
    }

    .hero-phone-notch {
        position: absolute;
        top: 16px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 28px;
        background: #000;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        z-index: 30;
    }

    .hero-phone-speaker {
        width: 40px;
        height: 4px;
        background: #1a1a1a;
        border-radius: 2px;
    }

    .hero-phone-camera {
        width: 8px;
        height: 8px;
        background: radial-gradient(circle, #1a3a5c 0%, #0a1a2c 100%);
        border-radius: 50%;
        box-shadow: 0 0 0 2px #0a0a0a;
    }

    .hero-phone-screen {
        background: linear-gradient(180deg, #0c0c14 0%, #080810 100%);
        border-radius: 28px;
        min-height: 400px;
        position: relative;
        overflow: hidden;
    }

    .hero-phone-content {
        padding: 50px 16px 24px 16px;
        min-height: 400px;
    }

    .hero-phone-bar {
        position: absolute;
        bottom: 8px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 4px;
        background: rgba(255,255,255,0.2);
        border-radius: 2px;
    }

    /* Mobile scenario adjustments */
    .hero-phone-content .scenario-terminal {
        font-size: 10px;
    }

    .hero-phone-content .term-header {
        padding-bottom: 10px;
        margin-bottom: 12px;
    }

    .hero-phone-content .term-dot {
        width: 8px;
        height: 8px;
    }

    .hero-phone-content .scenario-browser {
        transform: scale(0.95);
        transform-origin: top center;
    }

    .hero-phone-content .browser-body {
        min-height: 140px;
    }

    .hero-phone-content .scenario-chat .chat-msg {
        font-size: 11px;
        padding: 8px 12px;
    }

    .hero-phone-content .scenario-doc {
        transform: scale(0.95);
        transform-origin: top center;
    }

    .hero-phone-content .doc-body {
        min-height: 140px;
        padding: 14px;
    }

    /* Status indicator */
    .scenario-status {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 12px;
        padding: 8px 12px;
        background: rgba(34, 197, 94, 0.1);
        border: 1px solid rgba(34, 197, 94, 0.2);
        border-radius: 8px;
    }

    .status-dot {
        width: 8px;
        height: 8px;
        background: #22c55e;
        border-radius: 50%;
        animation: statusPulse 2s infinite;
    }

    @keyframes statusPulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
        50% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
    }

    .status-text {
        font-size: 11px;
        color: #4ade80;
        font-weight: 500;
    }

    /* Checkmark animation */
    .check-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        background: linear-gradient(135deg, #22c55e, #16a34a);
        border-radius: 50%;
        margin-right: 6px;
        opacity: 0;
        transform: scale(0);
        animation: checkPop 0.4s ease forwards;
    }

    .check-icon svg {
        width: 10px;
        height: 10px;
        stroke: #fff;
        stroke-width: 3;
    }

    @keyframes checkPop {
        0% { opacity: 0; transform: scale(0) rotate(-45deg); }
        50% { transform: scale(1.2) rotate(10deg); }
        100% { opacity: 1; transform: scale(1) rotate(0deg); }
    }

    .hero-floating-icon {
        position: absolute;
        opacity: 0.15;
        pointer-events: none;
        will-change: transform;
    }
    .hero-floating-icon svg {
        width: 100%;
        height: 100%;
        stroke: currentColor;
        stroke-width: 1.5;
        fill: none;
    }
    .hero-icon-1 { width: 60px; height: 60px; top: 15%; left: 8%; color: #667eea; animation: iconFloat1 12s ease-in-out infinite; }
    .hero-icon-2 { width: 45px; height: 45px; top: 25%; right: 15%; color: #f093fb; animation: iconFloat2 15s ease-in-out infinite; }
    .hero-icon-3 { width: 55px; height: 55px; bottom: 30%; left: 12%; color: #4facfe; animation: iconFloat3 10s ease-in-out infinite; }
    .hero-icon-4 { width: 40px; height: 40px; top: 60%; right: 8%; color: #f5576c; animation: iconFloat4 14s ease-in-out infinite; }
    .hero-icon-5 { width: 50px; height: 50px; bottom: 15%; right: 20%; color: #764ba2; animation: iconFloat5 11s ease-in-out infinite; }
    .hero-icon-6 { width: 35px; height: 35px; top: 45%; left: 5%; color: #00f2fe; animation: iconFloat6 13s ease-in-out infinite; }
    @keyframes iconFloat1 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(15px, -20px) rotate(10deg); } }
    @keyframes iconFloat2 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 33% { transform: translate(-20px, 15px) rotate(-8deg); } 66% { transform: translate(10px, -10px) rotate(5deg); } }
    @keyframes iconFloat3 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(20px, 25px) rotate(-12deg); } }
    @keyframes iconFloat4 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(-15px, -15px) rotate(8deg); } 75% { transform: translate(10px, 20px) rotate(-6deg); } }
    @keyframes iconFloat5 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 40% { transform: translate(-25px, 10px) rotate(-10deg); } 80% { transform: translate(15px, -15px) rotate(7deg); } }
    @keyframes iconFloat6 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(18px, 18px) rotate(15deg); } }

    @media (max-width: 1024px) {
        .hero-blob { opacity: 0.25; }
        .hero-blob-1 { width: 250px; height: 250px; }
        .hero-blob-2 { width: 200px; height: 200px; }
        .hero-blob-3 { width: 150px; height: 150px; }
        .hero-floating-icon { opacity: 0.08; }
    }
    @media (max-width: 640px) {
        .hero-blob { opacity: 0.2; filter: blur(60px); }
        .hero-floating-icon { display: none; }
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

        function updateLangVisuals(lang) {
            if (langBtn) langBtn.setAttribute('data-active-lang', lang);
            if (langMenu) {
                langMenu.querySelectorAll('[data-lang]').forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.lang === lang);
                });
            }
        }

        const storedLang = localStorage.getItem('lang') || 'ru';
        updateLangVisuals(storedLang);

        if (langBtn && langMenu) {
            langBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                langMenu.classList.toggle('active');
                langBtn.setAttribute('aria-expanded', langMenu.classList.contains('active'));
            });

            langMenu.addEventListener('click', function(e) {
                e.stopPropagation();
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

            window.animateFooterDots = function() {
                if (dotsAnimating) return;
                dotsAnimating = true;
                let frame = 0;
                dotsInterval = setInterval(() => {
                    footerDots.forEach(dot => {
                        dot.textContent = spinnerFrames[frame % spinnerFrames.length];
                    });
                    frame++;
                    if (frame >= spinnerFrames.length) {
                        clearInterval(dotsInterval);
                        dotsInterval = null;
                        footerDots.forEach(dot => dot.textContent = '·');
                        dotsAnimating = false;
                    }
                }, 250);
            };

            window.cancelFooterDots = function() {
                if (dotsInterval) {
                    clearInterval(dotsInterval);
                    dotsInterval = null;
                }
                footerDots.forEach(dot => dot.textContent = '·');
                dotsAnimating = false;
            };
        }
    }

    function initRandomSvgFloating() {
        const animations = [
            'svgRandomFloat1', 'svgRandomFloat2', 'svgRandomFloat3',
            'svgRandomFloat4', 'svgRandomFloat5', 'svgRandomFloat6'
        ];
        const durations = [10, 11, 12, 13, 14, 15, 16];
        const directions = ['normal', 'reverse', 'alternate', 'alternate-reverse'];

        document.querySelectorAll('.service-card .svg-bg-full svg').forEach((svg, index) => {
            const anim = animations[Math.floor(Math.random() * animations.length)];
            const duration = durations[Math.floor(Math.random() * durations.length)];
            const delay = (Math.random() * 5).toFixed(2);
            const direction = directions[Math.floor(Math.random() * directions.length)];

            svg.style.animation = `${anim} ${duration}s ease-in-out infinite ${direction}`;
            svg.style.animationDelay = `${delay}s`;
        });

        document.querySelectorAll('.svg-bg-blur svg').forEach((svg, index) => {
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
        const desktopContent = document.getElementById('hero-display-content');
        const mobileContent = document.getElementById('hero-phone-content');
        const particlesContainer = document.getElementById('hero-particles');

        if (!desktopContent && !mobileContent) return;

        // Glow color mapping
        const glowColors = {
            terminal: { color: '#10b981', rgb: '16, 185, 129' },
            browser: { color: '#6366f1', rgb: '99, 102, 241' },
            chat: { color: '#8b5cf6', rgb: '139, 92, 246' },
            document: { color: '#3b82f6', rgb: '59, 130, 246' }
        };

        // Create particles
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

        // Update glow color
        function updateGlow(type) {
            const glow = glowColors[type] || glowColors.terminal;
            document.documentElement.style.setProperty('--display-accent', glow.color);
            document.documentElement.style.setProperty('--display-accent-rgb', glow.rgb);
            document.documentElement.style.setProperty('--display-glow', `rgba(${glow.rgb}, 0.4)`);
        }

        // Scenario generators
        const scenarios = {
            // Terminal - Bot Creation
            terminal: () => {
                const lines = [
                    { type: 'prompt', text: '~/fefelov $', delay: 0 },
                    { type: 'cmd', text: ' npx create-bot telegram', delay: 0.3 },
                    { type: 'out', text: '🤖 Инициализация проекта...', delay: 0.8 },
                    { type: 'check', text: 'Структура создана', delay: 1.4 },
                    { type: 'check', text: 'Зависимости установлены', delay: 2.0 },
                    { type: 'check', text: 'Webhook настроен', delay: 2.6 },
                    { type: 'check', text: 'База данных подключена', delay: 3.2 },
                    { type: 'ok', text: 'Бот запущен и работает!', delay: 3.8 }
                ];

                return `
                    <div class="scenario-container scenario-terminal">
                        <div class="term-header">
                            <span class="term-dot term-dot-r"></span>
                            <span class="term-dot term-dot-y"></span>
                            <span class="term-dot term-dot-g"></span>
                            <span class="term-title">fefelov — zsh</span>
                        </div>
                        ${lines.map((line, i) => {
                            if (line.type === 'prompt') {
                                return `<div class="term-line" style="animation-delay: ${line.delay}s"><span class="term-prompt">${line.text}</span></div>`;
                            } else if (line.type === 'cmd') {
                                return `<div class="term-line" style="animation-delay: ${line.delay}s; margin-top: -8px; margin-left: 85px"><span class="term-cmd">${line.text}</span>${i === 1 ? '<span class="term-cursor"></span>' : ''}</div>`;
                            } else if (line.type === 'out') {
                                return `<div class="term-line" style="animation-delay: ${line.delay}s"><span class="term-out">${line.text}</span></div>`;
                            } else if (line.type === 'check') {
                                return `<div class="term-line" style="animation-delay: ${line.delay}s"><span class="check-icon" style="animation-delay: ${line.delay + 0.1}s"><svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="term-out">${line.text}</span></div>`;
                            } else if (line.type === 'ok') {
                                return `<div class="term-line" style="animation-delay: ${line.delay}s"><span class="term-ok">✅ ${line.text}</span></div>`;
                            }
                        }).join('')}
                        <div class="scenario-status" style="animation-delay: 4.2s; opacity: 0; animation: scenarioFadeIn 0.4s ease forwards 4.2s">
                            <span class="status-dot"></span>
                            <span class="status-text">@fefelov_bot активен</span>
                        </div>
                    </div>
                `;
            },

            // Browser - Website Building
            browser: () => {
                return `
                    <div class="scenario-container scenario-browser">
                        <div class="browser-bar">
                            <div class="browser-dots">
                                <span class="browser-dot" style="background: #ff5f56"></span>
                                <span class="browser-dot" style="background: #ffbd2e"></span>
                                <span class="browser-dot" style="background: #27ca40"></span>
                            </div>
                            <div class="browser-url">
                                <span class="browser-url-lock">🔒</span>
                                <span>client-project.fefelov.ru</span>
                            </div>
                        </div>
                        <div class="browser-body">
                            <div class="browser-loader" id="browser-loader">
                                <div class="browser-loader-block" style="width: 60%"></div>
                                <div class="browser-loader-block" style="width: 80%"></div>
                                <div class="browser-loader-block" style="width: 40%"></div>
                            </div>
                            <div class="browser-site" id="browser-site" style="display: none">
                                <div class="site-hero">
                                    <h3>Добро пожаловать</h3>
                                    <p>Современный сайт для вашего бизнеса</p>
                                </div>
                                <div class="site-cards">
                                    <div class="site-card" style="animation-delay: 1.8s">
                                        <div class="site-card-icon"></div>
                                        <div class="site-card-text"></div>
                                    </div>
                                    <div class="site-card" style="animation-delay: 2s">
                                        <div class="site-card-icon" style="background: linear-gradient(135deg, #10b981, #059669)"></div>
                                        <div class="site-card-text"></div>
                                    </div>
                                    <div class="site-card" style="animation-delay: 2.2s">
                                        <div class="site-card-icon" style="background: linear-gradient(135deg, #f59e0b, #d97706)"></div>
                                        <div class="site-card-text"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            },

            // Chat - Consultation
            chat: () => {
                const messages = [
                    { type: 'user', text: 'Нужна помощь с курсовой по экономике', delay: 0.4 },
                    { type: 'bot', text: 'Конечно! Какая тема работы?', delay: 1.2 },
                    { type: 'user', text: 'Анализ рынка криптовалют', delay: 2.0 },
                    { type: 'bot', text: 'Отличная тема! Подготовлю структуру и источники. Ожидайте материалы через 2 часа 📚', delay: 2.8 }
                ];

                return `
                    <div class="scenario-container scenario-chat">
                        <div class="chat-header">
                            <div class="chat-avatar">F</div>
                            <div class="chat-info">
                                <h4>FEFELOV Консультант</h4>
                                <span>● онлайн</span>
                            </div>
                        </div>
                        <div class="chat-messages">
                            ${messages.map(msg => `
                                <div class="chat-msg chat-msg-${msg.type}" style="animation-delay: ${msg.delay}s">
                                    ${msg.text}
                                </div>
                            `).join('')}
                            <div class="chat-typing" style="animation: msgIn 0.4s ease forwards 3.8s; opacity: 0">
                                <span class="chat-typing-dot"></span>
                                <span class="chat-typing-dot"></span>
                                <span class="chat-typing-dot"></span>
                            </div>
                        </div>
                    </div>
                `;
            },

            // Document - Study Help
            document: () => {
                const items = [
                    { text: 'Введение и актуальность темы', delay: 0.6 },
                    { text: 'Теоретическая база исследования', delay: 1.0 },
                    { text: 'Практическая часть с расчётами', delay: 1.4 },
                    { text: 'Выводы и рекомендации', delay: 1.8 }
                ];

                return `
                    <div class="scenario-container scenario-doc">
                        <div class="doc-header">
                            <div class="doc-icon">📄</div>
                            <span class="doc-title">Дипломная_работа.docx</span>
                        </div>
                        <div class="doc-body">
                            ${items.map(item => `
                                <div class="doc-line" style="animation-delay: ${item.delay}s">
                                    <span class="doc-bullet"></span>
                                    <span class="doc-text">${item.text}</span>
                                </div>
                            `).join('')}
                            <div class="doc-formula" style="animation-delay: 2.4s">
                                NPV = Σ (CFt / (1+r)^t) − I₀
                            </div>
                            <div class="doc-progress" style="animation: scenarioFadeIn 0.4s ease forwards 2.8s; opacity: 0">
                                <div class="doc-progress-bar">
                                    <div class="doc-progress-fill" style="animation-delay: 3s"></div>
                                </div>
                                <span class="doc-progress-text">Готово!</span>
                            </div>
                        </div>
                    </div>
                `;
            }
        };

        const scenarioOrder = ['terminal', 'browser', 'chat', 'document'];
        let currentIndex = 0;

        function runScenario() {
            const type = scenarioOrder[currentIndex];
            const html = scenarios[type]();

            updateGlow(type);

            if (desktopContent) {
                desktopContent.innerHTML = html;
                // Browser scenario special handling
                if (type === 'browser') {
                    setTimeout(() => {
                        const loader = desktopContent.querySelector('#browser-loader');
                        const site = desktopContent.querySelector('#browser-site');
                        if (loader && site) {
                            loader.style.display = 'none';
                            site.style.display = 'block';
                        }
                    }, 1200);
                }
            }

            if (mobileContent) {
                mobileContent.innerHTML = html;
                if (type === 'browser') {
                    setTimeout(() => {
                        const loader = mobileContent.querySelector('#browser-loader');
                        const site = mobileContent.querySelector('#browser-site');
                        if (loader && site) {
                            loader.style.display = 'none';
                            site.style.display = 'block';
                        }
                    }, 1200);
                }
            }

            currentIndex = (currentIndex + 1) % scenarioOrder.length;
        }

        createParticles();
        runScenario();
        setInterval(runScenario, 7000);
    }

    setTimeout(initPremiumDisplay, 500);

    function initHeroFloatingIcons() {
        const icons = document.querySelectorAll('.hero-floating-icon');
        const animations = ['iconFloat1', 'iconFloat2', 'iconFloat3', 'iconFloat4', 'iconFloat5', 'iconFloat6'];
        const durations = [10, 11, 12, 13, 14, 15, 16];

        icons.forEach(icon => {
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

        blobs.forEach(blob => {
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

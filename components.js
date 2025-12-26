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
    .logo-dot {
        transition: opacity 0.2s ease;
    }
    @keyframes logoPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.15); filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.6)); }
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
        transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1), padding 0.35s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s ease;
        overflow: hidden;
        width: 44px;
        height: 44px;
    }
    .lang-btn-expand .lang-text,
    .lang-btn-expand .lang-arrow {
        opacity: 0;
        max-width: 0;
        margin-left: 0;
        transition: opacity 0.25s ease, max-width 0.35s cubic-bezier(0.4, 0, 0.2, 1), margin 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .lang-btn-expand:hover,
    .lang-btn-expand[aria-expanded="true"] {
        width: auto;
        padding-left: 14px;
        padding-right: 14px;
    }
    .lang-btn-expand:hover .lang-text,
    .lang-btn-expand[aria-expanded="true"] .lang-text {
        opacity: 1;
        max-width: 50px;
        margin-left: 8px;
    }
    .lang-btn-expand:hover .lang-arrow,
    .lang-btn-expand[aria-expanded="true"] .lang-arrow {
        opacity: 1;
        max-width: 20px;
        margin-left: 4px;
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
        position: relative;
        color: #57534e;
        border-radius: 10px;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        padding: 10px 16px;
        display: flex;
        align-items: center;
    }

    #lang-menu button::before {
        content: '';
        position: absolute;
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    #lang-menu button:hover {
        color: #1c1917;
        background: #f5f5f4;
        padding-left: 36px;
    }

    #lang-menu button:hover::before {
        left: 12px;
        opacity: 1;
    }

    #lang-menu button.active {
        font-weight: 600;
        color: #1c1917;
    }

    #lang-menu button[data-lang="ru"]::before { content: '❄'; background: linear-gradient(135deg, #67e8f9, #0ea5e9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    #lang-menu button[data-lang="ru"]:hover::before { animation: langIconRu 2s ease-in-out infinite; }
    #lang-menu button[data-lang="ru"].active { padding-left: 36px; }
    #lang-menu button[data-lang="ru"].active::before { left: 12px; opacity: 1; font-size: 15px; filter: drop-shadow(0 0 4px rgba(14, 165, 233, 0.5)); animation: langIconRu 2s ease-in-out infinite; }

    #lang-menu button[data-lang="en"]::before { content: '>'; font-family: monospace; font-weight: bold; background: linear-gradient(135deg, #4ade80, #22c55e); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    #lang-menu button[data-lang="en"]:hover::before { animation: langIconEn 1.2s ease-in-out infinite; }
    #lang-menu button[data-lang="en"].active { padding-left: 36px; }
    #lang-menu button[data-lang="en"].active::before { left: 12px; opacity: 1; font-size: 15px; filter: drop-shadow(0 0 4px rgba(34, 197, 94, 0.5)); animation: langIconEn 1.2s ease-in-out infinite; }

    #lang-menu button[data-lang="uk"]::before { content: '✦'; background: linear-gradient(135deg, #fcd34d, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    #lang-menu button[data-lang="uk"]:hover::before { animation: langIconUk 2.5s ease-in-out infinite; }
    #lang-menu button[data-lang="uk"].active { padding-left: 36px; }
    #lang-menu button[data-lang="uk"].active::before { left: 12px; opacity: 1; font-size: 15px; filter: drop-shadow(0 0 4px rgba(245, 158, 11, 0.5)); animation: langIconUk 2.5s ease-in-out infinite; }

    #lang-menu button[data-lang="zh"]::before { content: '☁'; font-size: 15px; background: linear-gradient(135deg, #f87171, #dc2626); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    #lang-menu button[data-lang="zh"]:hover::before { animation: langIconZh 3s ease-in-out infinite; }
    #lang-menu button[data-lang="zh"].active { padding-left: 36px; }
    #lang-menu button[data-lang="zh"].active::before { left: 12px; opacity: 1; font-size: 17px; filter: drop-shadow(0 0 4px rgba(220, 38, 38, 0.5)); animation: langIconZh 3s ease-in-out infinite; }

    @keyframes langIconRu { 0%, 100% { transform: translateY(-50%) scale(1) rotate(0deg); } 25% { transform: translateY(-52%) scale(1.1) rotate(-5deg); } 50% { transform: translateY(-48%) scale(0.95) rotate(5deg); } 75% { transform: translateY(-51%) scale(1.05) rotate(-3deg); } }
    @keyframes langIconEn { 0%, 100% { transform: translateY(-50%) translateX(0); } 25% { transform: translateY(-50%) translateX(3px); } 50% { transform: translateY(-50%) translateX(1px); } 75% { transform: translateY(-50%) translateX(4px); } }
    @keyframes langIconUk { 0%, 100% { transform: translateY(-50%) scale(1) rotate(0deg); } 33% { transform: translateY(-50%) scale(1.15) rotate(120deg); } 66% { transform: translateY(-50%) scale(0.9) rotate(240deg); } }
    @keyframes langIconZh { 0%, 100% { transform: translateY(-50%) scale(1) translateX(0); } 25% { transform: translateY(-53%) scale(1.05) translateX(2px); } 50% { transform: translateY(-47%) scale(1.1) translateX(-1px); } 75% { transform: translateY(-52%) scale(0.95) translateX(1px); } }

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

    .hero-terminal {
        background: linear-gradient(145deg, #1a1a2e 0%, #0f0f1a 100%);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 25px 80px -20px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
    }
    .hero-terminal-header {
        background: rgba(255, 255, 255, 0.03);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        padding: 12px 16px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .hero-terminal-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }
    .hero-terminal-dot-red { background: #ff5f56; }
    .hero-terminal-dot-yellow { background: #ffbd2e; }
    .hero-terminal-dot-green { background: #27ca40; }
    .hero-terminal-body {
        padding: 20px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 13px;
        line-height: 1.6;
        color: #a8b2d1;
        min-height: 180px;
    }
    .hero-terminal-line {
        margin-bottom: 8px;
        opacity: 0;
        transform: translateY(10px);
        animation: terminalLineAppear 0.4s ease forwards;
    }
    .hero-terminal-prompt { color: #64ffda; }
    .hero-terminal-command { color: #e6e6e6; }
    .hero-terminal-output { color: #8892b0; }
    .hero-terminal-success { color: #64ffda; }
    .hero-terminal-warning { color: #ffbd2e; }
    .hero-terminal-cursor {
        display: inline-block;
        width: 8px;
        height: 16px;
        background: #64ffda;
        animation: cursorBlink 1s step-end infinite;
        vertical-align: middle;
        margin-left: 2px;
    }
    @keyframes terminalLineAppear {
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes cursorBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
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

    .hero-service-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 18px;
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(0, 0, 0, 0.06);
        border-radius: 50px;
        font-size: 14px;
        font-weight: 500;
        color: #44403c;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: default;
        white-space: nowrap;
    }
    .hero-service-pill:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 30px -8px rgba(0, 0, 0, 0.15);
        background: #fff;
    }
    .hero-service-pill svg {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
    }
    .hero-service-pill-edu { --pill-color: #6366f1; }
    .hero-service-pill-edu svg { color: var(--pill-color); }
    .hero-service-pill-edu:hover { border-color: var(--pill-color); }
    .hero-service-pill-it { --pill-color: #10b981; }
    .hero-service-pill-it svg { color: var(--pill-color); }
    .hero-service-pill-it:hover { border-color: var(--pill-color); }

    .hero-pills-container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 2rem;
    }

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
        .hero-terminal { display: none; }
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

        // Logo animation
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

                // Phase 1: Remove letters one by one (including dot first)
                const removeInterval = setInterval(() => {
                    if (currentLength > 1) {
                        currentLength--;
                        logoText.textContent = fullText.substring(0, currentLength);
                        if (currentLength === fullText.length - 1) {
                            logoDot.style.opacity = '0';
                        }
                    } else {
                        clearInterval(removeInterval);
                        // Phase 2: F pulses
                        logoText.style.animation = 'logoPulse 0.3s ease-in-out 4';

                        setTimeout(() => {
                            logoText.style.animation = '';
                            // Phase 3: Fast "shot" - write all letters quickly
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

        // Footer dots animation
        const footerDots = document.querySelectorAll('.footer-dot');
        if (footerDots.length > 0) {
            const spinnerFrames = ['·', '/', '—', '\\', '|', '\\', '—', '/'];
            let isAnimating = false;

            function animateDots() {
                if (isAnimating) return;
                isAnimating = true;
                let frame = 0;
                const interval = setInterval(() => {
                    footerDots.forEach(dot => {
                        dot.textContent = spinnerFrames[frame % spinnerFrames.length];
                    });
                    frame++;
                    if (frame >= spinnerFrames.length * 4) {
                        clearInterval(interval);
                        footerDots.forEach(dot => dot.textContent = '·');
                        isAnimating = false;
                    }
                }, 150);
            }

            setInterval(animateDots, 30000);
            setTimeout(animateDots, 5000);
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

    // Hero Terminal Animation
    function initHeroTerminal() {
        const terminalBody = document.getElementById('hero-terminal-body');
        if (!terminalBody) return;

        const scenarios = [
            [
                { type: 'prompt', text: '~/fefelov $' },
                { type: 'command', text: ' npm run build:thesis' },
                { type: 'output', text: '📚 Компиляция дипломной работы...' },
                { type: 'output', text: '✓ Введение — готово' },
                { type: 'output', text: '✓ Глава 1: Теория — готово' },
                { type: 'output', text: '✓ Глава 2: Практика — готово' },
                { type: 'output', text: '✓ Заключение — готово' },
                { type: 'success', text: '✅ Диплом собран успешно!' },
            ],
            [
                { type: 'prompt', text: '~/fefelov $' },
                { type: 'command', text: ' git commit -m "feat: new bot"' },
                { type: 'output', text: '🤖 Создание Telegram-бота...' },
                { type: 'output', text: '✓ Команды настроены' },
                { type: 'output', text: '✓ Webhook подключён' },
                { type: 'output', text: '✓ База данных готова' },
                { type: 'success', text: '✅ Бот развёрнут и работает!' },
            ],
            [
                { type: 'prompt', text: '~/fefelov $' },
                { type: 'command', text: ' python analyze.py --data' },
                { type: 'output', text: '📊 Анализ данных...' },
                { type: 'output', text: '✓ Загрузка датасета: 10000 строк' },
                { type: 'output', text: '✓ Очистка и нормализация' },
                { type: 'output', text: '✓ Построение графиков' },
                { type: 'success', text: '✅ Отчёт сформирован!' },
            ],
            [
                { type: 'prompt', text: '~/fefelov $' },
                { type: 'command', text: ' ./consult --topic "экономика"' },
                { type: 'output', text: '💬 Запуск консультации...' },
                { type: 'output', text: '✓ Анализ темы' },
                { type: 'output', text: '✓ Подбор материалов' },
                { type: 'output', text: '✓ Формирование рекомендаций' },
                { type: 'success', text: '✅ Консультация завершена!' },
            ],
            [
                { type: 'prompt', text: '~/fefelov $' },
                { type: 'command', text: ' make coursework --topic "IT"' },
                { type: 'output', text: '📝 Создание курсовой работы...' },
                { type: 'output', text: '✓ Структура документа' },
                { type: 'output', text: '✓ Обзор литературы' },
                { type: 'output', text: '✓ Практическая часть' },
                { type: 'success', text: '✅ Курсовая готова к сдаче!' },
            ],
        ];

        let currentScenario = 0;

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        shuffle(scenarios);

        function runScenario() {
            const lines = scenarios[currentScenario];
            terminalBody.innerHTML = '';

            lines.forEach((line, index) => {
                const lineEl = document.createElement('div');
                lineEl.className = 'hero-terminal-line';
                lineEl.style.animationDelay = `${index * 0.3}s`;

                let content = '';
                if (line.type === 'prompt') {
                    content = `<span class="hero-terminal-prompt">${line.text}</span>`;
                } else if (line.type === 'command') {
                    content = `<span class="hero-terminal-command">${line.text}</span>`;
                } else if (line.type === 'output') {
                    content = `<span class="hero-terminal-output">${line.text}</span>`;
                } else if (line.type === 'success') {
                    content = `<span class="hero-terminal-success">${line.text}</span>`;
                } else if (line.type === 'warning') {
                    content = `<span class="hero-terminal-warning">${line.text}</span>`;
                }

                // Add cursor to last line
                if (index === lines.length - 1) {
                    content += '<span class="hero-terminal-cursor"></span>';
                }

                lineEl.innerHTML = content;
                terminalBody.appendChild(lineEl);
            });

            currentScenario = (currentScenario + 1) % scenarios.length;
        }

        runScenario();
        setInterval(runScenario, 8000);
    }

    setTimeout(initHeroTerminal, 500);

    // Randomize hero floating icons
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

    // Randomize hero blobs
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

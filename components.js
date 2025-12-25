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

    #lang-btn {
        position: relative;
        isolation: isolate;
        overflow: hidden;
        background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #fff;
        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        box-shadow: 0 4px 15px -3px rgba(0, 0, 0, 0.3);
        z-index: 1;
    }

    #lang-btn > * {
        position: relative;
        z-index: 10;
        transition: all 0.3s ease;
    }

    #lang-btn::before {
        content: '';
        position: absolute;
        inset: -100%;
        width: 300%;
        height: 300%;
        background: conic-gradient(
            from 0deg at 50% 50%,
            var(--lang-color-1, #667eea) 0deg,
            var(--lang-color-2, #764ba2) 90deg,
            var(--lang-color-3, #f093fb) 180deg,
            var(--lang-color-4, #4facfe) 270deg,
            var(--lang-color-1, #667eea) 360deg
        );
        opacity: 0;
        filter: blur(30px);
        animation: langNebulaRotate 8s linear infinite paused;
        transform-origin: center center;
        z-index: -2;
        transition: opacity 0.4s ease;
    }

    #lang-btn::after {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--lang-pattern);
        background-size: var(--lang-pattern-size, 100% 100%);
        opacity: 0;
        mix-blend-mode: overlay;
        z-index: -1;
        transition: opacity 0.3s ease;
        animation: var(--lang-pattern-anim, none) 10s linear infinite;
    }

    #lang-btn:hover {
        transform: translateY(-3px);
        border-color: var(--lang-color-1, rgba(255,255,255,0.3));
        box-shadow:
            0 15px 40px -10px var(--lang-glow-color, rgba(102, 126, 234, 0.4)),
            0 0 30px -5px var(--lang-color-1, rgba(102, 126, 234, 0.3)),
            inset 0 0 20px rgba(255, 255, 255, 0.05);
    }

    #lang-btn:hover::before {
        opacity: 0.8;
        animation-play-state: running;
        transform: scale(1.1);
    }

    #lang-btn:hover::after {
        opacity: 0.6;
    }

    #lang-btn:hover > svg:first-child {
        filter: drop-shadow(0 0 8px var(--lang-color-1, #667eea));
        animation: langIconSpin 4s linear infinite;
    }

    #lang-btn:hover > svg:last-child {
        transform: rotate(180deg);
        filter: drop-shadow(0 0 5px var(--lang-color-2, #764ba2));
    }

    #lang-btn:active {
        transform: scale(0.95);
        transition: transform 0.1s ease;
    }

    #lang-btn[data-active-lang="ru"] {
        --lang-color-1: #00f2fe;
        --lang-color-2: #4facfe;
        --lang-color-3: #a8edea;
        --lang-color-4: #fed6e3;
        --lang-glow-color: rgba(0, 242, 254, 0.5);
        --lang-pattern:
            repeating-linear-gradient(60deg, transparent 0px, transparent 10px, rgba(0, 242, 254, 0.1) 10px, rgba(0, 242, 254, 0.1) 11px),
            repeating-linear-gradient(-60deg, transparent 0px, transparent 10px, rgba(79, 172, 254, 0.1) 10px, rgba(79, 172, 254, 0.1) 11px),
            radial-gradient(circle at 30% 30%, rgba(0, 242, 254, 0.2), transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(79, 172, 254, 0.2), transparent 50%);
        --lang-pattern-size: 100% 100%;
        --lang-pattern-anim: langIceShimmer;
    }

    #lang-btn[data-active-lang="ru"]:hover {
        background: linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0a1628 100%);
        text-shadow: 0 0 10px rgba(0, 242, 254, 0.8);
    }

    #lang-btn[data-active-lang="ru"]:hover::before {
        filter: blur(25px) saturate(1.5);
    }

    #lang-btn[data-active-lang="ru"]:hover::after {
        animation: langIceShimmer 3s ease-in-out infinite;
    }

    #lang-btn[data-active-lang="en"] {
        --lang-color-1: #39ff14;
        --lang-color-2: #00ff88;
        --lang-color-3: #00ffcc;
        --lang-color-4: #88ff00;
        --lang-glow-color: rgba(57, 255, 20, 0.5);
        --lang-pattern:
            linear-gradient(0deg, transparent 24%, rgba(57, 255, 20, 0.15) 25%, rgba(57, 255, 20, 0.15) 26%, transparent 27%, transparent 74%, rgba(57, 255, 20, 0.15) 75%, rgba(57, 255, 20, 0.15) 76%, transparent 77%),
            linear-gradient(90deg, transparent 24%, rgba(57, 255, 20, 0.15) 25%, rgba(57, 255, 20, 0.15) 26%, transparent 27%, transparent 74%, rgba(57, 255, 20, 0.15) 75%, rgba(57, 255, 20, 0.15) 76%, transparent 77%);
        --lang-pattern-size: 25px 25px;
        --lang-pattern-anim: langMatrixScroll;
    }

    #lang-btn[data-active-lang="en"]:hover {
        background: linear-gradient(135deg, #000a00 0%, #001a00 50%, #000a00 100%);
        text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14;
        animation: langGlitchShake 0.3s cubic-bezier(.36,.07,.19,.97) both;
    }

    #lang-btn[data-active-lang="en"]:hover::before {
        filter: blur(20px) hue-rotate(20deg);
    }

    #lang-btn[data-active-lang="uk"] {
        --lang-color-1: #ffd93d;
        --lang-color-2: #ff9500;
        --lang-color-3: #ffeb3b;
        --lang-color-4: #ffe066;
        --lang-glow-color: rgba(255, 217, 61, 0.5);
        --lang-pattern:
            radial-gradient(circle at 50% 50%, rgba(255, 217, 61, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(255, 149, 0, 0.2) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(255, 235, 59, 0.2) 0%, transparent 40%),
            repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255, 217, 61, 0.1) 10deg, transparent 20deg);
        --lang-pattern-size: 100% 100%;
        --lang-pattern-anim: langSolarPulse;
    }

    #lang-btn[data-active-lang="uk"]:hover {
        background: linear-gradient(135deg, #1a1400 0%, #2a1f00 50%, #1a1400 100%);
        text-shadow: 0 0 10px #ffd93d, 0 0 20px #ff9500, 0 0 30px #ffeb3b;
    }

    #lang-btn[data-active-lang="uk"]:hover::before {
        filter: blur(35px) brightness(1.3);
        animation: langSolarFlare 4s ease-in-out infinite;
    }

    #lang-btn[data-active-lang="zh"] {
        --lang-color-1: #8b0000;
        --lang-color-2: #c41e3a;
        --lang-color-3: #2d1b4e;
        --lang-color-4: #4a0e0e;
        --lang-glow-color: rgba(139, 0, 0, 0.5);
        --lang-pattern:
            radial-gradient(ellipse at 30% 30%, rgba(139, 0, 0, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 70%, rgba(45, 27, 78, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(196, 30, 58, 0.2) 0%, transparent 60%);
        --lang-pattern-size: 200% 200%;
        --lang-pattern-anim: langInkFlow;
    }

    #lang-btn[data-active-lang="zh"]:hover {
        background: linear-gradient(135deg, #0a0505 0%, #150a0a 50%, #0a0505 100%);
        text-shadow: 0 0 10px rgba(139, 0, 0, 0.8), 0 0 20px rgba(196, 30, 58, 0.5);
    }

    #lang-btn[data-active-lang="zh"]:hover::before {
        filter: blur(40px);
        animation: langMysticSwirl 10s ease-in-out infinite;
    }

    #lang-btn[data-active-lang="zh"]:hover::after {
        animation: langInkFlow 8s ease-in-out infinite, langSmokeDrift 5s ease-in-out infinite;
    }

    #lang-menu {
        background: rgba(10, 10, 10, 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 8px;
        box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }

    #lang-menu button {
        position: relative;
        color: #a8a29e;
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.3s ease;
        z-index: 1;
    }

    #lang-menu button::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--menu-item-bg, transparent);
        transform: translateX(-100%);
        transition: transform 0.3s ease;
        z-index: -1;
    }

    #lang-menu button:hover {
        color: #fff;
        padding-left: 2.5rem;
        background: transparent;
    }

    #lang-menu button:hover::before {
        transform: translateX(0);
    }

    #lang-menu button[data-lang="ru"] { --menu-item-bg: linear-gradient(90deg, rgba(0, 242, 254, 0.2), transparent); }
    #lang-menu button[data-lang="ru"]:hover { text-shadow: 0 0 10px rgba(0, 242, 254, 0.5); }
    #lang-menu button[data-lang="ru"]::after { content: '❄'; position: absolute; left: 12px; top: 50%; transform: translateY(-50%) scale(0); color: #00f2fe; font-size: 12px; transition: transform 0.3s ease; filter: drop-shadow(0 0 3px #00f2fe); }
    #lang-menu button[data-lang="ru"]:hover::after { transform: translateY(-50%) scale(1); animation: langMenuIconSpin 2s linear infinite; }

    #lang-menu button[data-lang="en"] { --menu-item-bg: linear-gradient(90deg, rgba(57, 255, 20, 0.2), transparent); }
    #lang-menu button[data-lang="en"]:hover { text-shadow: 0 0 10px rgba(57, 255, 20, 0.5); }
    #lang-menu button[data-lang="en"]::after { content: '>'; position: absolute; left: 12px; top: 50%; transform: translateY(-50%) scale(0); color: #39ff14; font-family: monospace; font-weight: bold; transition: transform 0.3s ease; text-shadow: 0 0 5px #39ff14; }
    #lang-menu button[data-lang="en"]:hover::after { transform: translateY(-50%) scale(1); animation: langMenuBlink 0.8s step-end infinite; }

    #lang-menu button[data-lang="uk"] { --menu-item-bg: linear-gradient(90deg, rgba(255, 217, 61, 0.2), transparent); }
    #lang-menu button[data-lang="uk"]:hover { text-shadow: 0 0 10px rgba(255, 217, 61, 0.5); }
    #lang-menu button[data-lang="uk"]::after { content: '✦'; position: absolute; left: 12px; top: 50%; transform: translateY(-50%) scale(0); color: #ffd93d; font-size: 12px; transition: transform 0.3s ease; filter: drop-shadow(0 0 3px #ffd93d); }
    #lang-menu button[data-lang="uk"]:hover::after { transform: translateY(-50%) scale(1); animation: langMenuPulse 0.5s ease infinite; }

    #lang-menu button[data-lang="zh"] { --menu-item-bg: linear-gradient(90deg, rgba(139, 0, 0, 0.2), transparent); }
    #lang-menu button[data-lang="zh"]:hover { text-shadow: 0 0 10px rgba(139, 0, 0, 0.5); }
    #lang-menu button[data-lang="zh"]::after { content: '☁'; position: absolute; left: 12px; top: 50%; transform: translateY(-50%) scale(0); color: #8b0000; font-size: 14px; transition: transform 0.3s ease; filter: blur(1px) drop-shadow(0 0 3px #8b0000); }
    #lang-menu button[data-lang="zh"]:hover::after { transform: translateY(-50%) scale(1); animation: langMenuFloat 2s ease infinite; }

    @keyframes langNebulaRotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    @keyframes langIconSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    @keyframes langIceShimmer { 0% { background-position: 0% 0%, 0% 0%, 30% 30%, 70% 70%; opacity: 0.4; } 50% { background-position: 100% 100%, 100% 100%, 70% 70%, 30% 30%; opacity: 0.7; } 100% { background-position: 0% 0%, 0% 0%, 30% 30%, 70% 70%; opacity: 0.4; } }
    @keyframes langMatrixScroll { 0% { background-position: 0 0; } 100% { background-position: 0 50px; } }
    @keyframes langGlitchShake { 0%, 100% { transform: translateY(-3px) scale(1.05) translate(0, 0); filter: hue-rotate(0deg); } 10% { transform: translateY(-3px) scale(1.05) translate(-2px, 1px); filter: hue-rotate(90deg); } 20% { transform: translateY(-3px) scale(1.05) translate(2px, -1px); filter: hue-rotate(-90deg); } 30% { transform: translateY(-3px) scale(1.05) translate(-1px, 2px); filter: hue-rotate(180deg); } 40% { transform: translateY(-3px) scale(1.05) translate(1px, -2px); filter: hue-rotate(0deg); } }
    @keyframes langSolarPulse { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.1); opacity: 0.8; } }
    @keyframes langSolarFlare { 0%, 100% { transform: rotate(0deg) scale(1); filter: blur(35px) brightness(1.3); } 25% { transform: rotate(90deg) scale(1.1); filter: blur(30px) brightness(1.5); } 50% { transform: rotate(180deg) scale(1); filter: blur(40px) brightness(1.2); } 75% { transform: rotate(270deg) scale(1.1); filter: blur(30px) brightness(1.5); } }
    @keyframes langInkFlow { 0% { background-position: 0% 0%; } 50% { background-position: 100% 100%; } 100% { background-position: 0% 0%; } }
    @keyframes langMysticSwirl { 0% { transform: rotate(0deg) scale(1); } 33% { transform: rotate(120deg) scale(1.1); } 66% { transform: rotate(240deg) scale(0.9); } 100% { transform: rotate(360deg) scale(1); } }
    @keyframes langSmokeDrift { 0%, 100% { transform: translateX(0) translateY(0); } 25% { transform: translateX(10px) translateY(-5px); } 50% { transform: translateX(-5px) translateY(-10px); } 75% { transform: translateX(-10px) translateY(5px); } }
    @keyframes langMenuIconSpin { 0% { transform: translateY(-50%) scale(1) rotate(0deg); } 100% { transform: translateY(-50%) scale(1) rotate(360deg); } }
    @keyframes langMenuBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
    @keyframes langMenuPulse { 0%, 100% { transform: translateY(-50%) scale(1); } 50% { transform: translateY(-50%) scale(1.3); } }
    @keyframes langMenuFloat { 0%, 100% { transform: translateY(-50%) scale(1); } 50% { transform: translateY(-60%) scale(1.1); } }

    @media (max-width: 640px) {
        #lang-btn:hover { transform: translateY(-2px); }
        #lang-btn::before { filter: blur(20px); }
    }

    @media (prefers-reduced-motion: reduce) {
        #lang-btn, #lang-btn::before, #lang-btn::after { animation: none !important; transition: opacity 0.3s ease, background 0.3s ease !important; }
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
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                        <span id="current-lang">Ру</span>
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M19 9l-7 7-7-7"/></svg>
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
                    <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
                <button id="mobile-menu-btn" class="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white/60 border border-stone-200 hover:bg-white transition-all" aria-label="Меню" aria-expanded="false" aria-controls="mobile-menu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M4 6h16M4 12h16M4 18h16"/></svg>
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
                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
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
                    ? '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M6 18L18 6M6 6l12 12"/></svg>'
                    : '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M4 6h16M4 12h16M4 18h16"/></svg>';
            });

            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('open');
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    mobileMenuBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M4 6h16M4 12h16M4 18h16"/></svg>';
                });
            });
        }

        const langBtn = document.getElementById('lang-btn');
        const langMenu = document.getElementById('lang-menu');
        const currentLang = document.getElementById('current-lang');

        function updateLangVisuals(lang) {
            if (langBtn) langBtn.setAttribute('data-active-lang', lang);
        }

        const storedLang = localStorage.getItem('lang') || 'ru';
        updateLangVisuals(storedLang);

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
                    updateLangVisuals(lang);
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
});

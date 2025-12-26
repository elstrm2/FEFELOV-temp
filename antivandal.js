(function() {
    'use strict';

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('copy', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('cut', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('paste', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('drop', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            switch (e.key.toLowerCase()) {
                case 'c':
                case 'x':
                case 'v':
                case 'a':
                case 's':
                case 'u':
                case 'p':
                    e.preventDefault();
                    return false;
            }
        }

        if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
            switch (e.key.toLowerCase()) {
                case 'i':
                case 'j':
                case 'c':
                    e.preventDefault();
                    return false;
            }
        }

        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
    });

    var style = document.createElement('style');
    style.textContent = '*{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;-webkit-user-drag:none!important;user-drag:none!important}img,a,svg{pointer-events:auto;-webkit-user-drag:none!important;user-drag:none!important}';
    document.head.appendChild(style);

    var devToolsOpen = false;
    var threshold = 160;

    setInterval(function() {
        if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
            if (!devToolsOpen) {
                devToolsOpen = true;
                document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;font-size:24px;color:#666;">:(</div>';
            }
        }
    }, 1000);

    var noop = function() {};
    ['log', 'debug', 'info', 'warn', 'error', 'table', 'trace', 'dir', 'group', 'groupEnd', 'time', 'timeEnd', 'assert', 'count', 'clear'].forEach(function(m) {
        if (typeof console !== 'undefined') console[m] = noop;
    });

    setInterval(function() {
        (function() { return false; })['constructor']('debugger')();
    }, 100);

})();

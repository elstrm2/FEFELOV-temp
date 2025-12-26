(function() {
    'use strict';

    var _originals = {
        getSelection: window.getSelection,
        docGetSelection: document.getSelection,
        execCommand: document.execCommand,
        createRange: document.createRange,
        caretRangeFromPoint: document.caretRangeFromPoint,
        getComputedStyle: window.getComputedStyle
    };

    if (window.top !== window.self) {
        window.top.location = window.self.location;
    }

    try {
        var meta = document.createElement('meta');
        meta.httpEquiv = 'X-Frame-Options';
        meta.content = 'DENY';
        document.head.appendChild(meta);
    } catch(e) {}

    try {
        var csp = document.createElement('meta');
        csp.httpEquiv = 'Content-Security-Policy';
        csp.content = "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://fonts.gstatic.com; object-src 'none';";
        document.head.appendChild(csp);
    } catch(e) {}

    window.getSelection = function() {
        return {
            toString: function() { return ''; },
            anchorNode: null,
            anchorOffset: 0,
            focusNode: null,
            focusOffset: 0,
            isCollapsed: true,
            rangeCount: 0,
            type: 'None',
            addRange: function() {},
            collapse: function() {},
            collapseToEnd: function() {},
            collapseToStart: function() {},
            containsNode: function() { return false; },
            deleteFromDocument: function() {},
            empty: function() {},
            extend: function() {},
            getRangeAt: function() { return null; },
            modify: function() {},
            removeAllRanges: function() {},
            removeRange: function() {},
            selectAllChildren: function() {},
            setBaseAndExtent: function() {},
            setPosition: function() {}
        };
    };

    document.getSelection = window.getSelection;

    if (typeof Selection !== 'undefined' && Selection.prototype) {
        Selection.prototype.toString = function() { return ''; };
    }

    if (typeof Range !== 'undefined' && Range.prototype) {
        Range.prototype.toString = function() { return ''; };
        Range.prototype.cloneContents = function() { return document.createDocumentFragment(); };
        Range.prototype.extractContents = function() { return document.createDocumentFragment(); };
    }

    document.execCommand = function(cmd) {
        if (cmd === 'copy' || cmd === 'cut' || cmd === 'paste' || cmd === 'selectAll') {
            return false;
        }
        return _originals.execCommand.apply(document, arguments);
    };

    document.caretRangeFromPoint = function() { return null; };
    if (document.caretPositionFromPoint) {
        document.caretPositionFromPoint = function() { return null; };
    }

    Object.defineProperty(document, 'designMode', {
        get: function() { return 'off'; },
        set: function() {}
    });

    setInterval(function() {
        var all = document.querySelectorAll('[contenteditable="true"]');
        all.forEach(function(el) {
            el.setAttribute('contenteditable', 'false');
        });
    }, 1000);

    if (navigator.webdriver) {
        document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;font-size:24px;color:#666;">:(</div>';
    }

    (function detectHeadless() {
        var dominated = false;
        if (navigator.plugins && navigator.plugins.length === 0 && navigator.userAgent.indexOf('HeadlessChrome') === -1) {
            var dominated = true;
        }
        if (navigator.languages && navigator.languages.length === 0) {
            dominated = true;
        }
        if (window.chrome && !window.chrome.runtime) {
        }
        if (/HeadlessChrome/.test(navigator.userAgent)) {
            document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;font-size:24px;color:#666;">:(</div>';
        }
        if (navigator.webdriver === true) {
            document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;font-size:24px;color:#666;">:(</div>';
        }
    })();

    window.name = '';
    setInterval(function() { window.name = ''; }, 1000);

    navigator.sendBeacon = function() { return false; };

    var _windowOpen = window.open;
    window.open = function(url) {
        if (url && typeof url === 'string') {
            if (url.indexOf('view-source:') === 0 ||
                url.indexOf('data:') === 0 ||
                url.indexOf('blob:') === 0 ||
                url.indexOf('about:') === 0 ||
                url.indexOf('javascript:') === 0) {
                return null;
            }
        }
        return _windowOpen.apply(window, arguments);
    };

    if (typeof MediaRecorder !== 'undefined') {
        window.MediaRecorder = function() {
            throw new Error('MediaRecorder is not allowed');
        };
    }

    if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
        navigator.mediaDevices.getDisplayMedia = function() {
            return Promise.reject(new Error('Screen capture is not allowed'));
        };
    }

    if (typeof HTMLCanvasElement !== 'undefined') {
        var _captureStream = HTMLCanvasElement.prototype.captureStream;
        HTMLCanvasElement.prototype.captureStream = function() {
            return null;
        };
    }

    if (typeof speechSynthesis !== 'undefined') {
        speechSynthesis.speak = function() {};
        speechSynthesis.cancel = function() {};
        speechSynthesis.pause = function() {};
        speechSynthesis.resume = function() {};
    }

    if (typeof TextDetector !== 'undefined') {
        window.TextDetector = function() {
            throw new Error('TextDetector is not allowed');
        };
    }

    if (typeof BarcodeDetector !== 'undefined') {
        window.BarcodeDetector = function() {
            throw new Error('BarcodeDetector is not allowed');
        };
    }

    if (typeof EyeDropper !== 'undefined') {
        window.EyeDropper = function() {
            throw new Error('EyeDropper is not allowed');
        };
    }

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }, true);

    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    }, true);

    document.addEventListener('copy', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.clipboardData) {
            e.clipboardData.clearData();
            e.clipboardData.setData('text/plain', '');
        }
        return false;
    }, true);

    document.addEventListener('cut', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }, true);

    document.addEventListener('paste', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }, true);

    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    }, true);

    document.addEventListener('drag', function(e) {
        e.preventDefault();
        return false;
    }, true);

    document.addEventListener('drop', function(e) {
        e.preventDefault();
        if (e.dataTransfer) {
            e.dataTransfer.clearData();
        }
        return false;
    }, true);

    document.addEventListener('dragover', function(e) {
        e.preventDefault();
        return false;
    }, true);

    document.addEventListener('mousedown', function(e) {
        if (e.detail > 1) {
            e.preventDefault();
        }
        if (e.button === 1) {
            e.preventDefault();
            return false;
        }
    }, true);

    var blockedKeys = {
        'F1': true, 'F2': true, 'F3': true, 'F4': true, 'F5': true, 'F6': true,
        'F7': true, 'F8': true, 'F9': true, 'F10': true, 'F11': true, 'F12': true
    };

    var blockedCtrl = ['c', 'x', 'v', 'a', 's', 'u', 'p', 'o', 'f', 'g', 'h', 'j', 'k', 'l', 'e', 'd', 'b', 'n', 'm'];
    var blockedCtrlShift = ['i', 'j', 'c', 'k', 'm', 'n', 's', 'e', 'd', 'q'];

    document.addEventListener('keydown', function(e) {
        if (blockedKeys[e.key]) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        if (e.ctrlKey || e.metaKey) {
            if (blockedCtrl.indexOf(e.key.toLowerCase()) !== -1) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }

        if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
            if (blockedCtrlShift.indexOf(e.key.toLowerCase()) !== -1) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }

        if ((e.ctrlKey || e.metaKey) && e.altKey) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        if (e.altKey && e.key === 'PrintScreen') {
            e.preventDefault();
            return false;
        }

        if (e.key === 'PrintScreen') {
            e.preventDefault();
            try { navigator.clipboard.writeText(''); } catch(err) {}
            return false;
        }
    }, true);

    document.addEventListener('keyup', function(e) {
        if (e.key === 'PrintScreen') {
            try { navigator.clipboard.writeText(''); } catch(err) {}
        }
    }, true);

    window.print = function() { return false; };

    window.addEventListener('beforeprint', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        document.body.style.visibility = 'hidden';
    }, true);

    window.addEventListener('afterprint', function() {
        document.body.style.visibility = 'visible';
    }, true);

    var style = document.createElement('style');
    style.textContent = [
        '*{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;-webkit-user-drag:none!important;user-drag:none!important;-webkit-touch-callout:none!important}',
        'img,a,svg,video,canvas{pointer-events:auto;-webkit-user-drag:none!important;user-drag:none!important;-webkit-touch-callout:none!important}',
        'img{-webkit-user-select:none!important;pointer-events:none!important}',
        'a img{pointer-events:auto!important}',
        '@media print{body{display:none!important}}',
        '::selection{background:transparent!important;color:transparent!important}',
        '::-moz-selection{background:transparent!important;color:transparent!important}'
    ].join('');
    document.head.appendChild(style);

    document.addEventListener('touchstart', function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('touchend', function(e) {}, { passive: false });

    var touchTimer = null;
    document.addEventListener('touchstart', function(e) {
        touchTimer = setTimeout(function() {
            e.preventDefault();
        }, 500);
    }, { passive: false });

    document.addEventListener('touchend', function() {
        if (touchTimer) {
            clearTimeout(touchTimer);
            touchTimer = null;
        }
    }, { passive: true });

    document.addEventListener('touchmove', function() {
        if (touchTimer) {
            clearTimeout(touchTimer);
            touchTimer = null;
        }
    }, { passive: true });

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText = function() { return Promise.resolve(); };
        navigator.clipboard.write = function() { return Promise.resolve(); };
        navigator.clipboard.readText = function() { return Promise.resolve(''); };
        navigator.clipboard.read = function() { return Promise.resolve([]); };
    }

    if (typeof DataTransfer !== 'undefined') {
        var _getData = DataTransfer.prototype.getData;
        DataTransfer.prototype.getData = function() { return ''; };
        DataTransfer.prototype.setData = function() { return false; };
    }

    if (typeof DataTransferItemList !== 'undefined') {
        DataTransferItemList.prototype.add = function() { return null; };
    }

    if (typeof DataTransferItem !== 'undefined') {
        DataTransferItem.prototype.getAsString = function(cb) { if (cb) cb(''); };
        DataTransferItem.prototype.getAsFile = function() { return null; };
    }

    var devToolsOpen = false;

    var noop = function() {};
    var consoleMethods = ['log', 'debug', 'info', 'warn', 'error', 'table', 'trace', 'dir', 'group', 'groupEnd', 'groupCollapsed', 'time', 'timeEnd', 'timeLog', 'profile', 'profileEnd', 'assert', 'count', 'countReset', 'clear', 'memory'];

    if (typeof console !== 'undefined') {
        consoleMethods.forEach(function(m) {
            try { console[m] = noop; } catch(e) {}
        });
    }

    setInterval(function() {
        try {
            (function() { return false; })['constructor']('debugger')();
        } catch(e) {}
    }, 50);

    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            try { navigator.clipboard.writeText(''); } catch(e) {}
        }
    });

    window.addEventListener('blur', function() {
        try { navigator.clipboard.writeText(''); } catch(e) {}
    });

    if (window.location.protocol === 'view-source:') {
        window.location.href = 'about:blank';
    }

    document.onkeydown = function(e) {
        if (e.ctrlKey && e.key === 'u') {
            return false;
        }
    };

    Object.defineProperty(document, 'oncontextmenu', {
        set: function() {},
        get: function() { return function() { return false; }; }
    });

    Object.defineProperty(document, 'oncopy', {
        set: function() {},
        get: function() { return function() { return false; }; }
    });

    Object.defineProperty(document, 'oncut', {
        set: function() {},
        get: function() { return function() { return false; }; }
    });

    Object.defineProperty(document, 'onselectstart', {
        set: function() {},
        get: function() { return function() { return false; }; }
    });

    Object.defineProperty(document, 'ondragstart', {
        set: function() {},
        get: function() { return function() { return false; }; }
    });

    try {
        Object.defineProperty(window, 'onbeforeprint', {
            set: function() {},
            get: function() { return function(e) { e.preventDefault(); return false; }; }
        });
    } catch(e) {}

    try {
        Object.freeze(document.oncontextmenu);
        Object.freeze(document.oncopy);
        Object.freeze(document.oncut);
        Object.freeze(document.onselectstart);
    } catch(e) {}

    setInterval(function() {
        if (window.getSelection !== _originals.getSelection && typeof window.getSelection === 'function') {
            window.getSelection = function() {
                return { toString: function() { return ''; }, rangeCount: 0 };
            };
        }
        if (document.execCommand !== _originals.execCommand) {
            document.execCommand = function(cmd) {
                if (cmd === 'copy' || cmd === 'cut' || cmd === 'paste') return false;
            };
        }
    }, 2000);

    window.addEventListener('load', function() {
        var images = document.querySelectorAll('img');
        images.forEach(function(img) {
            img.setAttribute('draggable', 'false');
            img.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                return false;
            });
            img.addEventListener('dragstart', function(e) {
                e.preventDefault();
                return false;
            });
        });

        var links = document.querySelectorAll('a');
        links.forEach(function(a) {
            a.addEventListener('dragstart', function(e) {
                e.preventDefault();
                return false;
            });
        });
    });

    var mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) {
                    if (node.tagName === 'IMG') {
                        node.setAttribute('draggable', 'false');
                        node.addEventListener('contextmenu', function(e) { e.preventDefault(); });
                        node.addEventListener('dragstart', function(e) { e.preventDefault(); });
                    }
                    if (node.getAttribute && node.getAttribute('contenteditable') === 'true') {
                        node.setAttribute('contenteditable', 'false');
                    }
                }
            });
        });
    });

    mutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['contenteditable']
    });

    try {
        if (typeof performance !== 'undefined' && performance.clearResourceTimings) {
            setInterval(function() {
                performance.clearResourceTimings();
            }, 5000);
        }
    } catch(e) {}

})();

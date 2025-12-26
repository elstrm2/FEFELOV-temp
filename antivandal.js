(() => {
  'use strict';

  const _originals = {
    getSelection: window.getSelection,
    docGetSelection: document.getSelection,
    execCommand: document.execCommand,
  };

  if (window.top !== window.self) {
    window.top.location = window.self.location;
  }

  try {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Frame-Options';
    meta.content = 'DENY';
    document.head.appendChild(meta);
  } catch (_e) {}

  try {
    const csp = document.createElement('meta');
    csp.httpEquiv = 'Content-Security-Policy';
    csp.content =
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://fonts.gstatic.com; object-src 'none';";
    document.head.appendChild(csp);
  } catch (_e) {}

  window.getSelection = () => ({
    toString: () => '',
    anchorNode: null,
    anchorOffset: 0,
    focusNode: null,
    focusOffset: 0,
    isCollapsed: true,
    rangeCount: 0,
    type: 'None',
    addRange: () => {},
    collapse: () => {},
    collapseToEnd: () => {},
    collapseToStart: () => {},
    containsNode: () => false,
    deleteFromDocument: () => {},
    empty: () => {},
    extend: () => {},
    getRangeAt: () => null,
    modify: () => {},
    removeAllRanges: () => {},
    removeRange: () => {},
    selectAllChildren: () => {},
    setBaseAndExtent: () => {},
    setPosition: () => {},
  });

  document.getSelection = window.getSelection;

  if (typeof Selection !== 'undefined' && Selection.prototype) {
    Selection.prototype.toString = () => '';
  }

  if (typeof Range !== 'undefined' && Range.prototype) {
    Range.prototype.toString = () => '';
    Range.prototype.cloneContents = () => document.createDocumentFragment();
    Range.prototype.extractContents = () => document.createDocumentFragment();
  }

  document.execCommand = function (cmd) {
    if (cmd === 'copy' || cmd === 'cut' || cmd === 'paste' || cmd === 'selectAll') {
      return false;
    }
    return _originals.execCommand.apply(document, arguments);
  };

  document.caretRangeFromPoint = () => null;
  if (document.caretPositionFromPoint) {
    document.caretPositionFromPoint = () => null;
  }

  Object.defineProperty(document, 'designMode', {
    get: () => 'off',
    set: () => {},
  });

  setInterval(() => {
    const all = document.querySelectorAll('[contenteditable="true"]');
    all.forEach((el) => {
      el.setAttribute('contenteditable', 'false');
    });
  }, 1000);

  if (navigator.webdriver) {
    document.body.innerHTML =
      '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;font-size:24px;color:#666;">:(</div>';
  }

  (function detectHeadless() {
    if (/HeadlessChrome/.test(navigator.userAgent)) {
      document.body.innerHTML =
        '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;font-size:24px;color:#666;">:(</div>';
    }
    if (navigator.webdriver === true) {
      document.body.innerHTML =
        '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;font-size:24px;color:#666;">:(</div>';
    }
  })();

  window.name = '';
  setInterval(() => {
    window.name = '';
  }, 1000);

  navigator.sendBeacon = () => false;

  const _windowOpen = window.open;
  window.open = function (url) {
    if (url && typeof url === 'string') {
      if (
        url.indexOf('view-source:') === 0 ||
        url.indexOf('data:') === 0 ||
        url.indexOf('blob:') === 0 ||
        url.indexOf('about:') === 0 ||
        url.indexOf('javascript:') === 0
      ) {
        return null;
      }
    }
    return _windowOpen.apply(window, arguments);
  };

  if (typeof MediaRecorder !== 'undefined') {
    window.MediaRecorder = () => {
      throw new Error('MediaRecorder is not allowed');
    };
  }

  if (navigator.mediaDevices?.getDisplayMedia) {
    navigator.mediaDevices.getDisplayMedia = () =>
      Promise.reject(new Error('Screen capture is not allowed'));
  }

  if (typeof HTMLCanvasElement !== 'undefined') {
    const _captureStream = HTMLCanvasElement.prototype.captureStream;
    HTMLCanvasElement.prototype.captureStream = () => null;
  }

  if (typeof speechSynthesis !== 'undefined') {
    speechSynthesis.speak = () => {};
    speechSynthesis.cancel = () => {};
    speechSynthesis.pause = () => {};
    speechSynthesis.resume = () => {};
  }

  if (typeof TextDetector !== 'undefined') {
    window.TextDetector = () => {
      throw new Error('TextDetector is not allowed');
    };
  }

  if (typeof BarcodeDetector !== 'undefined') {
    window.BarcodeDetector = () => {
      throw new Error('BarcodeDetector is not allowed');
    };
  }

  if (typeof EyeDropper !== 'undefined') {
    window.EyeDropper = () => {
      throw new Error('EyeDropper is not allowed');
    };
  }

  document.addEventListener(
    'contextmenu',
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    },
    true
  );

  document.addEventListener(
    'selectstart',
    (e) => {
      e.preventDefault();
      return false;
    },
    true
  );

  document.addEventListener(
    'copy',
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.clipboardData) {
        e.clipboardData.clearData();
        e.clipboardData.setData('text/plain', '');
      }
      return false;
    },
    true
  );

  document.addEventListener(
    'cut',
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    },
    true
  );

  document.addEventListener(
    'paste',
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    },
    true
  );

  document.addEventListener(
    'dragstart',
    (e) => {
      e.preventDefault();
      return false;
    },
    true
  );

  document.addEventListener(
    'drag',
    (e) => {
      e.preventDefault();
      return false;
    },
    true
  );

  document.addEventListener(
    'drop',
    (e) => {
      e.preventDefault();
      if (e.dataTransfer) {
        e.dataTransfer.clearData();
      }
      return false;
    },
    true
  );

  document.addEventListener(
    'dragover',
    (e) => {
      e.preventDefault();
      return false;
    },
    true
  );

  document.addEventListener(
    'mousedown',
    (e) => {
      if (e.detail > 1) {
        e.preventDefault();
      }
      if (e.button === 1) {
        e.preventDefault();
        return false;
      }
    },
    true
  );

  const blockedKeys = {
    F1: true,
    F2: true,
    F3: true,
    F4: true,
    F5: true,
    F6: true,
    F7: true,
    F8: true,
    F9: true,
    F10: true,
    F11: true,
    F12: true,
  };

  const blockedCtrl = [
    'c',
    'x',
    'v',
    'a',
    's',
    'u',
    'p',
    'o',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'e',
    'd',
    'b',
    'n',
    'm',
  ];
  const blockedCtrlShift = ['i', 'j', 'c', 'k', 'm', 'n', 's', 'e', 'd', 'q'];

  document.addEventListener(
    'keydown',
    (e) => {
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
        try {
          navigator.clipboard.writeText('');
        } catch (_err) {}
        return false;
      }
    },
    true
  );

  document.addEventListener(
    'keyup',
    (e) => {
      if (e.key === 'PrintScreen') {
        try {
          navigator.clipboard.writeText('');
        } catch (_err) {}
      }
    },
    true
  );

  window.print = () => false;

  window.addEventListener(
    'beforeprint',
    (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      document.body.style.visibility = 'hidden';
    },
    true
  );

  window.addEventListener(
    'afterprint',
    () => {
      document.body.style.visibility = 'visible';
    },
    true
  );

  const style = document.createElement('style');
  style.textContent = [
    '*{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;-webkit-user-drag:none!important;user-drag:none!important;-webkit-touch-callout:none!important}',
    'img,a,svg,video,canvas{pointer-events:auto;-webkit-user-drag:none!important;user-drag:none!important;-webkit-touch-callout:none!important}',
    'img{-webkit-user-select:none!important;pointer-events:none!important}',
    'a img{pointer-events:auto!important}',
    '@media print{body{display:none!important}}',
    '::selection{background:transparent!important;color:transparent!important}',
    '::-moz-selection{background:transparent!important;color:transparent!important}',
  ].join('');
  document.head.appendChild(style);

  document.addEventListener(
    'touchstart',
    (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

  document.addEventListener('touchend', (_e) => {}, { passive: false });

  let touchTimer = null;
  document.addEventListener(
    'touchstart',
    (e) => {
      touchTimer = setTimeout(() => {
        e.preventDefault();
      }, 500);
    },
    { passive: false }
  );

  document.addEventListener(
    'touchend',
    () => {
      if (touchTimer) {
        clearTimeout(touchTimer);
        touchTimer = null;
      }
    },
    { passive: true }
  );

  document.addEventListener(
    'touchmove',
    () => {
      if (touchTimer) {
        clearTimeout(touchTimer);
        touchTimer = null;
      }
    },
    { passive: true }
  );

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText = () => Promise.resolve();
    navigator.clipboard.write = () => Promise.resolve();
    navigator.clipboard.readText = () => Promise.resolve('');
    navigator.clipboard.read = () => Promise.resolve([]);
  }

  if (typeof DataTransfer !== 'undefined') {
    const _getData = DataTransfer.prototype.getData;
    DataTransfer.prototype.getData = () => '';
    DataTransfer.prototype.setData = () => false;
  }

  if (typeof DataTransferItemList !== 'undefined') {
    DataTransferItemList.prototype.add = () => null;
  }

  if (typeof DataTransferItem !== 'undefined') {
    DataTransferItem.prototype.getAsString = (cb) => {
      if (cb) cb('');
    };
    DataTransferItem.prototype.getAsFile = () => null;
  }

  const noop = () => {};
  const consoleMethods = [
    'log',
    'debug',
    'info',
    'warn',
    'error',
    'table',
    'trace',
    'dir',
    'group',
    'groupEnd',
    'groupCollapsed',
    'time',
    'timeEnd',
    'timeLog',
    'profile',
    'profileEnd',
    'assert',
    'count',
    'countReset',
    'clear',
    'memory',
  ];

  if (typeof console !== 'undefined') {
    consoleMethods.forEach((m) => {
      try {
        console[m] = noop;
      } catch (_e) {}
    });
  }

  setInterval(() => {
    try {
      (() => false).constructor('debugger')();
    } catch (_e) {}
  }, 50);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      try {
        navigator.clipboard.writeText('');
      } catch (_e) {}
    }
  });

  window.addEventListener('blur', () => {
    try {
      navigator.clipboard.writeText('');
    } catch (_e) {}
  });

  if (window.location.protocol === 'view-source:') {
    window.location.href = 'about:blank';
  }

  document.onkeydown = (e) => {
    if (e.ctrlKey && e.key === 'u') {
      return false;
    }
  };

  Object.defineProperty(document, 'oncontextmenu', {
    set: () => {},
    get: () => () => false,
  });

  Object.defineProperty(document, 'oncopy', {
    set: () => {},
    get: () => () => false,
  });

  Object.defineProperty(document, 'oncut', {
    set: () => {},
    get: () => () => false,
  });

  Object.defineProperty(document, 'onselectstart', {
    set: () => {},
    get: () => () => false,
  });

  Object.defineProperty(document, 'ondragstart', {
    set: () => {},
    get: () => () => false,
  });

  try {
    Object.defineProperty(window, 'onbeforeprint', {
      set: () => {},
      get: () => (e) => {
        e.preventDefault();
        return false;
      },
    });
  } catch (_e) {}

  try {
    Object.freeze(document.oncontextmenu);
    Object.freeze(document.oncopy);
    Object.freeze(document.oncut);
    Object.freeze(document.onselectstart);
  } catch (_e) {}

  setInterval(() => {
    if (
      window.getSelection !== _originals.getSelection &&
      typeof window.getSelection === 'function'
    ) {
      window.getSelection = () => ({ toString: () => '', rangeCount: 0 });
    }
    if (document.execCommand !== _originals.execCommand) {
      document.execCommand = (cmd) => {
        if (cmd === 'copy' || cmd === 'cut' || cmd === 'paste') return false;
      };
    }
  }, 2000);

  window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      img.setAttribute('draggable', 'false');
      img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
      });
      img.addEventListener('dragstart', (e) => {
        e.preventDefault();
        return false;
      });
    });

    const links = document.querySelectorAll('a');
    links.forEach((a) => {
      a.addEventListener('dragstart', (e) => {
        e.preventDefault();
        return false;
      });
    });
  });

  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          if (node.tagName === 'IMG') {
            node.setAttribute('draggable', 'false');
            node.addEventListener('contextmenu', (e) => {
              e.preventDefault();
            });
            node.addEventListener('dragstart', (e) => {
              e.preventDefault();
            });
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
    attributeFilter: ['contenteditable'],
  });

  try {
    if (typeof performance !== 'undefined' && performance.clearResourceTimings) {
      setInterval(() => {
        performance.clearResourceTimings();
      }, 5000);
    }
  } catch (_e) {}
})();

const I18N = {
    supportedLangs: ['ru', 'uk', 'en', 'zh'],
    defaultLang: 'ru',
    currentLang: 'ru',
    translations: {},

    init() {
        this.currentLang = this.detectLanguage();
        document.documentElement.lang = this.currentLang;
        this.loadTranslations(this.currentLang);
    },

    detectLanguage() {
        const stored = localStorage.getItem('lang');
        if (stored && this.supportedLangs.includes(stored)) {
            return stored;
        }
        const browserLang = navigator.language.slice(0, 2);
        if (this.supportedLangs.includes(browserLang)) {
            localStorage.setItem('lang', browserLang);
            return browserLang;
        }
        localStorage.setItem('lang', this.defaultLang);
        return this.defaultLang;
    },

    async loadTranslations(lang) {
        try {
            const response = await fetch(`/locales/${lang}.json`);
            if (!response.ok) throw new Error('Failed to load translations');
            this.translations = await response.json();
            this.applyTranslations();
            this.updateLangSwitcher();
        } catch (error) {
            console.error('i18n error:', error);
            document.body.classList.remove('i18n-loading');
            const langBtn = document.getElementById('lang-btn');
            if (langBtn) langBtn.style.display = 'none';
        }
    },

    applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            const text = this.getNestedValue(key);
            if (text) el.textContent = text;
        });

        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.dataset.i18nHtml;
            const text = this.getNestedValue(key);
            if (text) el.innerHTML = text;
        });

        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.dataset.i18nTitle;
            const text = this.getNestedValue(key);
            if (text) el.title = text;
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            const text = this.getNestedValue(key);
            if (text) el.placeholder = text;
        });

        const titleEl = document.querySelector('title');
        if (titleEl && titleEl.dataset.i18n) {
            const text = this.getNestedValue(titleEl.dataset.i18n);
            if (text) titleEl.textContent = text;
        }

        const descEl = document.querySelector('meta[name="description"]');
        if (descEl && descEl.dataset.i18n) {
            const text = this.getNestedValue(descEl.dataset.i18n);
            if (text) descEl.content = text;
        }

        document.body.classList.remove('i18n-loading');
    },

    getNestedValue(key) {
        if (!key) return null;
        return key.split('.').reduce((obj, k) => obj?.[k], this.translations);
    },

    translate(key) {
        return this.getNestedValue(key) || key;
    },

    setLanguage(lang) {
        if (!this.supportedLangs.includes(lang)) return;
        this.currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        this.loadTranslations(lang);
    },

    langLabels: { ru: 'Ру', en: 'En', uk: 'Укр', zh: '中文' },

    updateLangSwitcher() {
        const currentLangEl = document.getElementById('current-lang');
        if (currentLangEl) {
            currentLangEl.textContent = this.langLabels[this.currentLang] || this.currentLang;
        }
        document.querySelectorAll('[data-lang]').forEach(btn => {
            btn.classList.toggle('font-bold', btn.dataset.lang === this.currentLang);
        });
    },

    getLangName(code) {
        const names = {
            ru: 'Русский',
            uk: 'Українська',
            en: 'English',
            zh: '中文'
        };
        return names[code] || code;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    I18N.init();
});

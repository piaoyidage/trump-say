class LanguageManager {
  constructor() {
    this.currentLang = 'en';
    this.init();
  }

  init() {
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        this.switchLanguage(lang);
      });
    });

    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
      this.switchLanguage(savedLang);
    }

    this.renderQuotes();
  }

  switchLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('lang', lang);
    window.history.pushState({}, '', newUrl);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    this.updateContent();
  }

  updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      element.textContent = i18n[this.currentLang][key];
    });

    document.title = this.currentLang === 'en' 
      ? "Donald Trump Quotes | Presidential Wisdom & Memorable Statements"
      : "特朗普语录 | 总统智慧与难忘言论";

    this.renderQuotes();
  }

  renderQuotes() {
    const container = document.getElementById('quoteContainer');
    const quotes = i18n[this.currentLang].quotes;
    
    container.innerHTML = quotes.map(quote => `
      <article class="quote-card">
        <blockquote class="quote-content">
          ${quote}
        </blockquote>
      </article>
    `).join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new LanguageManager();
});

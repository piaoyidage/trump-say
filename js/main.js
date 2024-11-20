class LanguageManager {
  constructor() {
    this.currentLang = 'en';
    this.init();
  }

  init() {
    this.renderQuotes();
  }

  updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      element.textContent = i18n[this.currentLang][key];
    });

    document.title = "Donald Trump Quotes | Presidential Wisdom & Memorable Statements";
    this.renderQuotes();
  }

  renderQuotes() {
    const container = document.getElementById('quoteContainer');
    const quotes = i18n[this.currentLang].quotes;
    
    container.innerHTML = quotes.map(quote => createQuoteElement(quote)).join('');
  }
}

function createQuoteElement(quote) {
  return `
    <div class="quote-card">
      <div class="quote-content">
        <p class="quote-text">${quote.text}</p>
        <time class="quote-date">${formatDate(quote.date)}</time>
      </div>
    </div>
  `;
}

function formatDate(dateString) {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

document.addEventListener('DOMContentLoaded', () => {
  new LanguageManager();
});

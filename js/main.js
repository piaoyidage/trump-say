// 引用名言数据
const quotes = [
  {
    text: "Make America Great Again!",
    date: "Campaign Slogan, 2016",
  },
  {
    text: "Nobody knows the system better than me, which is why I alone can fix it.",
    date: "Republican National Convention, 2016",
  },
  // 添加更多引用
];

// 动态加载引用
function loadQuotes() {
  const quoteGrid = document.querySelector(".quote-grid");

  quotes.forEach((quote) => {
    const quoteCard = document.createElement("article");
    quoteCard.className = "quote-card";

    quoteCard.innerHTML = `
            <blockquote>
                "${quote.text}"
                // <footer>- ${quote.date}</footer>
            </blockquote>
        `;

    quoteGrid.appendChild(quoteCard);
  });
}

// 页面加载完成后执行
// document.addEventListener('DOMContentLoaded', loadQuotes);

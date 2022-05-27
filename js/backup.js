/*
const mediaTest = matchMedia("( min-width: 1000px)");

mediaMobil.addEventListener("change", function () {
  rows = 1;
  displayCards(apiResult, cardWrapper, rows, count);
});


mediaTest.addEventListener("change", function () {
  rows = 1;
  displayCards(apiResult, cardWrapper, rows, count);
});
*/

let count = 1;
let numberOfCards = 3;

/*
if (mediaTest.matches) {
  numberOfCards = 3;
} else {
  numberOfCards = 1;
}
*/

const cardWrapper = document.querySelector(".card-wrapper");
const rightBtn = document.querySelector(".arrow-right");
const leftBtn = document.querySelector(".arrow-left");

export default function displayCards(cards, container, amountDisplayed, page) {
  container.innerHTML = "";

  page--;

  let start = amountDisplayed * page;
  let end = start + amountDisplayed;

  let currentCards = cards.slice(start, end);

  if (currentCards.length < amountDisplayed) {
    currentCards = cards.slice(-amountDisplayed);
  }

  for (let i = 0; i < currentCards.length; i++) {
    const card = currentCards[i];
    const date = card.date.slice(0, -9);
    const updated = card.modified.slice(0, -9);

    container.innerHTML += `
    <a class="blogpost-card" href="/html/posts.html?id=${card.id}">
                <div class="card-image">
                  <img src="${card.acf.img1_header}" alt="${card.title.rendered} image" />
                </div>
                <div class="card-text-wrapper">
                  <h4>${card.title.rendered}</h4>
                  <p class="read-card">Read post</p>
                  <p class="card-date">Published: ${date} | Last updated: ${updated}</p>
                </div>
              </a>

    
    
    `;
  }
}

displayCards(apiResult, cardWrapper, numberOfCards, count);

/* BACKUP Specific-posts*/

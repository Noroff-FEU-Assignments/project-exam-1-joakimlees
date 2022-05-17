import getRequest from "./components/apiCall.js";
import displayHtml from "./components/displayHtml.js";

const url = "https://joakimlees.no/project-exam-1/wp-json/wp/v2/blog-post?acf_format=standard&per_page=100";

const apiResult = await getRequest(url);

console.log(apiResult);
console.log("-----------------------------------------------");

const mediaTest = matchMedia("( min-width: 1000px)");
/*
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
let rows;

if (mediaTest.matches) {
  rows = 3;
} else {
  rows = 1;
}

console.log(rows);

console.log("-----------------------------------------------");

const cardWrapper = document.querySelector(".card-wrapper");
const rightBtn = document.querySelector(".arrow-right");
const leftBtn = document.querySelector(".arrow-left");

function displayCards(cards, container, rows, page) {
  container.innerHTML = "";

  page--;

  let start = rows * page;
  let end = start + rows;

  let currentCards = cards.slice(start, end);

  if (currentCards.length < rows) {
    currentCards = cards.slice(-rows);
  }

  for (let i = 0; i < currentCards.length; i++) {
    const card = currentCards[i];
    const date = card.date.slice(0, -9);
    const updated = card.modified.slice(0, -9);

    container.innerHTML += `
    <a class="blogpost-card" href="/html/posts.html?id=${card.id}">
                <div class="card-image">
                  <img src="${card.acf.headerimg}" alt="${card.title.rendered} image" />
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

displayCards(apiResult, cardWrapper, rows, count);

rightBtn.addEventListener("click", function pageRight() {
  let pageInc = count;
  if (count >= apiResult.length / rows) {
    pageInc = apiResult.length / rows;
    rightBtn.style.opacity = "50%";
  } else {
    pageInc = count += 1;
  }

  if (count > 1) {
    leftBtn.style.opacity = "100%";
  }

  displayCards(apiResult, cardWrapper, rows, pageInc);
});

leftBtn.addEventListener("click", function pageLeft() {
  let pageDec = count;

  if (count < 2) {
    pageDec = 1;
  } else {
    pageDec = count -= 1;
  }

  if (count <= 1) {
    leftBtn.style.opacity = "50%";
  }

  if (pageDec < apiResult.length / rows) {
    rightBtn.style.opacity = "100%";
  }

  displayCards(apiResult, cardWrapper, rows, pageDec);
});

/*
for (let i = 0; i < apiResult.length; i++) {
  cardWrapper.innerHTML += "";
  cardWrapper.innerHTML += `
  
  <a class="blogpost-card" href="/html/posts.html?id=${apiResult[i].id}">
                <div class="card-image">
                  <img src="${apiResult[i].acf.headerimg}" alt="${apiResult[i].title.rendered} image" />
                </div>
                <div class="card-text-wrapper">
                  <h4>${apiResult[i].title.rendered}</h4>
                  <p class="read-card">Read post</p>
                  <p class="card-date">${apiResult[i].date}</p>
                </div>
              </a>
  
  `;
}

*/

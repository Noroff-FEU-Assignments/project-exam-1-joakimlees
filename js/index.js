import getRequest from "./components/apiCall.js";
import displayHtml from "./components/displayHtml.js";

const url = "https://joakimlees.no/project-exam-1/wp-json/wp/v2/blog-post?acf_format=standard&per_page=100";

const apiResult = await getRequest(url);

console.log(apiResult);

console.log("-------------------------");

const cardWrapper = document.querySelector(".card-wrapper");
const rightBtn = document.querySelector(".arrow-right");
const leftBtn = document.querySelector(".arrow-left");

let count = 1;
let rows = 3;

function displayCards(cards, rows, page) {
  console.clear();
  page--;

  let start = rows * page;
  let end = start + rows;

  let currentCards = cards.slice(start, end);

  if (currentCards.length < rows) {
    currentCards = cards.slice(-rows);
  }

  for (let i = 0; i < currentCards.length; i++) {
    let card = currentCards[i];
  }
}

displayCards(apiResult, rows, count);

rightBtn.addEventListener("click", function pageRight() {
  let test = count;
  if (count >= apiResult.length / rows) {
    test = apiResult.length / rows;
  } else {
    test = count += 1;
  }

  displayCards(apiResult, rows, test);
});

leftBtn.addEventListener("click", function pageLeft() {
  let test2 = count;

  if (count < 2) {
    test2 = 1;
  } else {
    test2 = count -= 1;
  }

  displayCards(apiResult, rows, test2);
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

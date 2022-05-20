import getRequest from "./components/apiCall.js";
import displayHtml from "./components/displayHtml.js";
import pagination from "./components/pagination.js";
import addCards from "./components/createCards.js";

const url = "https://joakimlees.no/project-exam-1/wp-json/wp/v2/blog-post?acf_format=standard&per_page=100";

const apiResult = await getRequest(url);

/*
const mediaTest = matchMedia("( min-width: 1000px)");

if (mediaTest.matches) {
  numberOfCards = 3;
} else {
  numberOfCards = 1;
}

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

const cardWrapper = document.querySelector(".card-wrapper");
const rightBtn = document.querySelector(".arrow-right");
const leftBtn = document.querySelector(".arrow-left");

displayHtml(pagination(apiResult, numberOfCards, count), cardWrapper, addCards);

rightBtn.addEventListener("click", function pageRight() {
  let pageInc = count;
  if (count >= apiResult.length / numberOfCards) {
    pageInc = apiResult.length / numberOfCards;
    rightBtn.style.opacity = "50%";
  } else {
    pageInc = count += 1;
  }

  if (count > 1) {
    leftBtn.style.opacity = "100%";
  }

  displayHtml(pagination(apiResult, numberOfCards, pageInc), cardWrapper, addCards);
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

  if (pageDec < apiResult.length / numberOfCards) {
    rightBtn.style.opacity = "100%";
  }

  displayHtml(pagination(apiResult, numberOfCards, pageDec), cardWrapper, addCards);
});

import getRequest from "./components/apiCall.js";
import displayHtml from "./components/displayHtml.js";
import pagination from "./components/pagination.js";
import addCards from "./components/createCards.js";

const url = "https://joakimlees.no/project-exam-1/wp-json/wp/v2/blog-post?acf_format=standard&per_page=100";

const apiResult = await getRequest(url);

let count = 1;
let numberOfCards = 1;

let screenTwoCards = matchMedia("( min-width: 800px)");
let screenThreeCards = matchMedia("( min-width: 1200px)");

if (screenTwoCards.matches) {
  numberOfCards = 2;
}

if (screenThreeCards.matches) {
  numberOfCards = 3;
}

screenTwoCards.addEventListener("change", function () {
  if (screenTwoCards.matches) {
    numberOfCards = 2;
  } else if (!screenTwoCards.matches) {
    numberOfCards = 1;
  }
  displayHtml(pagination(apiResult, numberOfCards, count), cardWrapper, addCards);
});

screenThreeCards.addEventListener("change", function () {
  if (screenThreeCards.matches) {
    numberOfCards = 3;
  } else if (!screenThreeCards.matches) {
    numberOfCards = 2;
  }
  displayHtml(pagination(apiResult, numberOfCards, count), cardWrapper, addCards);
});

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

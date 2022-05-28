import getRequest from "./components/apiCall.js";
import displayHtml from "./components/displayHtml.js";
import pagination from "./components/pagination.js";
import addCards from "./components/createCards.js";

const url = "https://joakimlees.no/project-exam-1/wp-json/wp/v2/blog-post?acf_format=standard&per_page=100";

/* calling the getRequest function, which will fetch the the url and converts it to json. declaring it to variable apiResult */
const apiResult = await getRequest(url);

/* making variables, which will be used for the carousel */
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

/* 
param1: the matchMedia variable.
param2: the variable for x number of cards.
param3: The value to set, to the x number of cards variable if the matchMedia variable is true.
param4: The value to set, to the x number of cards variable if the matchMedia variable is false.
Function, with a function which triggers the "screen" - parameter on a "change" event. calling the displayHtml function.
*/

function screenCardsChanger(screen, card, amountOne, amountTwo) {
  screen.addEventListener("change", function () {
    if (screen.matches) {
      card = amountOne;
    } else if (!screen.matches) {
      card = amountTwo;
    }
    displayHtml(pagination(apiResult, card, count), cardWrapper, addCards);
  });
}

screenCardsChanger(screenThreeCards, numberOfCards, 3, 2);
screenCardsChanger(screenTwoCards, numberOfCards, 2, 1);

const cardWrapper = document.querySelector(".card-wrapper");
const rightBtn = document.querySelector(".arrow-right");
const leftBtn = document.querySelector(".arrow-left");

displayHtml(pagination(apiResult, numberOfCards, count), cardWrapper, addCards);

rightBtn.addEventListener("click", function pageRight() {
  let pageInc = count;

  if (screenThreeCards.matches) {
    numberOfCards = 3;
  } else if (screenTwoCards.matches) {
    numberOfCards = 2;
  } else {
    numberOfCards = 1;
  }

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

  if (screenThreeCards.matches) {
    numberOfCards = 3;
  } else if (screenTwoCards.matches) {
    numberOfCards = 2;
  } else {
    numberOfCards = 1;
  }

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

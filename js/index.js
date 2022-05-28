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

/* variables used for my media query strings min-width: 800px and min-width 1200
Window.matchMedia() method Which determends if the document matches the media query string, and to monitor it, to see when it matches and not matches the media query.(mdn web docs, 2022).
*/
let screenTwoCards = matchMedia("( min-width: 800px)");
let screenThreeCards = matchMedia("( min-width: 1200px)");

/* sets the value to the numberOfCards variable to either 2 or 3, if they match the media query */
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

console.log(apiResult);
/*
param1: the pagination function, which will return x objects from the array.
param 2: The html-elements, where the "new" html will be made.
param 3: The function which will create the html. Using the first two params of this function as it's params/arguments(so in this case currentCards, which is returned from the pagination function, and the cardWrapper as html element/container).
This function (displayHtml) will display the html (or catch and display errors, if any to the user).
*/
displayHtml(pagination(apiResult, numberOfCards, count), cardWrapper, addCards);

/* function(s) which triggers on click, on the arrows. for iterating through the "array"/cards displayed on the index site*/
rightBtn.addEventListener("click", function pageRight() {
  /* making a new increment variable to incease the value of the count variable */
  let pageInc = count;

  /* if to set the value of numberOfCards depending on the screen size, matching media query */
  if (screenThreeCards.matches) {
    numberOfCards = 3;
  } else if (screenTwoCards.matches) {
    numberOfCards = 2;
  } else {
    numberOfCards = 1;
  }

  /* a if statement which will stop the increment of count, if count is greater then or equall to arrays length divided by the amount of cards displayed at a time. in other words, at the end/last objects of the array. Else "page" or count increases by 1 */
  if (count >= apiResult.length / numberOfCards) {
    pageInc = apiResult.length / numberOfCards;
    rightBtn.style.opacity = "50%";
  } else {
    pageInc = count += 1;
  }

  if (count > 1) {
    leftBtn.style.opacity = "100%";
  }

  /* calling on the displayHtml function again, with a "new"/increased value to the count/page/pageInc variable. */
  displayHtml(pagination(apiResult, numberOfCards, pageInc), cardWrapper, addCards);
});

/* This function do pretty much the same as the function above. Just the other way around. (See my documentation for the pageRight() function).*/
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

/*
param 1: The "Array" -  data/information/stuff to display.
param2: the amount to display at a time(variables/objects/indexes).
param 3: the page/counter, which keep track on at what x cards we are at(page).
*/
export default function pagination(cards, amountDisplayed, page) {
  /* catching error in the instance of typeError, returning the error (dealing with it in the displayHtml function). */
  if (cards instanceof TypeError) {
    let badCards = cards;
    return badCards;
  }

  /* Since array start at index 0, we say page-- */
  page--;

  /*variables to tell which index to start and end on for each refresh/iteration(click). */
  let start = amountDisplayed * page;
  let end = start + amountDisplayed;

  /* variable for the current index(s) the "function" is at. The first index shown is amountDisplayed * page (if the page is 0, it will start at index zero) and the last index shown will be start + amountDisplayed(which will be whatever the value of amountDisplayed is, if the index is 0). Using the slice() method, which extracts parts of the array, extracting and returns the index from my start to end.*/
  let currentCards = cards.slice(start, end);

  /* A checker to make sure the amountDisplayed is always the amount displayed. So if the length of the array, dont adds up evenly to the amountDisplayed. The last page displayed will be the last items/objects(indexes) of the array, and the amount which is ment to be displayed. Using slice(-the amount i want to be displayed) */
  if (currentCards.length < amountDisplayed) {
    currentCards = cards.slice(-amountDisplayed);
  }

  /*the function returns the currentCard(s)/obejct(s)/indexe(s)*/
  return currentCards;
}

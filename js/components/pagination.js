export default function pagination(cards, amountDisplayed, page) {
  if (cards instanceof TypeError) {
    let badCards = cards;
    return badCards;
  }

  page--;

  let start = amountDisplayed * page;
  let end = start + amountDisplayed;

  let currentCards = cards.slice(start, end);

  if (currentCards.length < amountDisplayed) {
    currentCards = cards.slice(-amountDisplayed);
  }

  return currentCards;
}

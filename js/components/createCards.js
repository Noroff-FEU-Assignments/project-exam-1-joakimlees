/**
 * param1: the object fetched from the apiCall.
 * param2: The "div" html container/wrapper, to make the html for.
 * Function which loop though the length of the object/array. Making html for each of them (+=).
 * using slice method to, cut out the last 9 characters of the string on the date and modified properties in the object.
 *
 */
export default function addCards(cardsObject, cardWrapper) {
  for (let i = 0; i < cardsObject.length; i++) {
    const card = cardsObject[i];
    const date = card.date.slice(0, -9);
    const updated = card.modified.slice(0, -9);

    cardWrapper.innerHTML += `
    <a class="card-wrapper__card card card-wrapper--blogs" href="/html/posts.html?id=${card.id}">
                <div class="card__image">
                  <img src="${card.acf.img1_header}" alt="${card.title.rendered} image" />
                </div>
                <div class="card-wrapper__text-card">
                  <h4>${card.title.rendered}</h4>
                  <p class="text-card__read-more">Read post</p>
                  <p class="text-card__date">Published: ${date} | Last updated: ${updated}</p>
                </div>
              </a>

    
    
    `;
  }
}

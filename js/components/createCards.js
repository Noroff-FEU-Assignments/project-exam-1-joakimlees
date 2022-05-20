export default function addCards(cardsObject, cardWrapper) {
  for (let i = 0; i < cardsObject.length; i++) {
    const card = cardsObject[i];
    const date = card.date.slice(0, -9);
    const updated = card.modified.slice(0, -9);

    cardWrapper.innerHTML += `
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

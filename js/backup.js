/*
const mediaTest = matchMedia("( min-width: 1000px)");

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

/*
if (mediaTest.matches) {
  numberOfCards = 3;
} else {
  numberOfCards = 1;
}
*/

const cardWrapper = document.querySelector(".card-wrapper");
const rightBtn = document.querySelector(".arrow-right");
const leftBtn = document.querySelector(".arrow-left");

export default function displayCards(cards, container, amountDisplayed, page) {
  container.innerHTML = "";

  page--;

  let start = amountDisplayed * page;
  let end = start + amountDisplayed;

  let currentCards = cards.slice(start, end);

  if (currentCards.length < amountDisplayed) {
    currentCards = cards.slice(-amountDisplayed);
  }

  for (let i = 0; i < currentCards.length; i++) {
    const card = currentCards[i];
    const date = card.date.slice(0, -9);
    const updated = card.modified.slice(0, -9);

    container.innerHTML += `
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

displayCards(apiResult, cardWrapper, numberOfCards, count);

/* BACKUP Specific-posts*/

function makePostHtml(postObject, container) {
  const date = postObject.date.slice(0, -9);
  const updated = postObject.modified.slice(0, -9);

  container.innerHTML = `
    <h1 class="post-heading">${postObject.title.rendered}</h1>
    <p class="post-date">By: ${postObject.acf.author} | Published: ${date} | Last updated: ${updated}</p>
    <p class="post-para post-intro-para">${postObject.acf.intro_para}</p>
    <a class="post-link post-link-intro" href="${postObject.acf.link_intro}">${postObject.acf.link_text_intro}</a>
    <div class="blog-post-img-wrapper post-img-intro">
      <img class="blog-post-img" src="${postObject.acf.img_intro}" alt="" />
    </div>
    <h2 class="post-subheading post-subheading1">${postObject.acf.subheading1}</h2>
    <p class="post-para post-para1">${postObject.acf.para1}</p>
    <a class="post-link post-link1" href="${postObject.acf.link1}">${postObject.acf.link_text1}</a>
    <div class="blog-post-img-wrapper post-img1">
      <img class="blog-post-img" src="${postObject.acf.img1}" alt="" />
    </div>
    <h2 class="post-subheading post-subheading2">${postObject.acf.subheading2}</h2>
    <p class="post-para post-para2">${postObject.acf.para2}</p>
    <a class="post-link post-link2" href="${postObject.acf.link2}">${postObject.acf.link_text2}</a>
    <div class="blog-post-img-wrapper post-img2">
      <img class="blog-post-img" src="${postObject.acf.img2}" alt="" />
    </div>
    <h2 class="post-subheading post-subheading3">${postObject.acf.subheading3}</h2>
    <p class="post-para post-para3">${postObject.acf.para3}</p>
    <a class="post-link post-link3"  href="${postObject.acf.link3}">${postObject.acf.link_text3}</a>
    <div class="blog-post-img-wrapper post-img3">
      <img class="blog-post-img" src="${postObject.acf.img3}" alt="" />
    </div>
    <h2 class="post-subheading post-subheading4">${postObject.acf.subheading4}</h2>
    <p class="post-para post-para4">${postObject.acf.para4}</p>
    <a class="post-link post-link4"  href="${postObject.acf.link4}">${postObject.acf.link_text4}</a>
    <div class="blog-post-img-wrapper post-img4">
      <img class="blog-post-img" src="${postObject.acf.img4}" alt="" />
    </div>
    <h2 class="post-subheading post-subheading5">${postObject.acf.subheading5}</h2>
    <p class="post-para post-para5">${postObject.acf.para5}</p>
    <a class="post-link post-link5"  href="${postObject.acf.link5}">${postObject.acf.link_text5}</a>
    <div class="blog-post-img-wrapper post-img5">
      <img class="blog-post-img" src="${postObject.acf.img5}" alt="" />
    </div>
  
  `;
}

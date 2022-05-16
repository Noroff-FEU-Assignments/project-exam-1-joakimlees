import getRequest from "./components/apiCall.js";
import displayHtml from "./components/displayHtml.js";

const url = "https://joakimlees.no/project-exam-1/wp-json/wp/v2/blog-post?acf_format=standard&per_page=100";

const apiResult = await getRequest(url);

console.log(apiResult);

const cardWrapper = document.querySelector(".card-wrapper");
const right = document.querySelector(".test-right");
const left = document.querySelector(".test-left");

for (let i = 0; i < apiResult.length; i++) {
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

/*
const test = document.querySelector(".test");

for (let i = 0; i < apiResult.length; i++) {
  test.innerHTML += `<a href="/html/posts.html?id=${apiResult[i].id}"><div>${apiResult[i].title.rendered}</div></a>`;
}
*/

import getRequest from "./components/apiCall.js";
import displayHtml from "./components/displayHtml.js";

const url = "https://joakimlees.no/project-exam-1/wp-json/wp/v2/blog-post?acf_format=standard&per_page=100";

const apiResult = await getRequest(url);

console.log(apiResult);

const blogsContainer = document.querySelector(".blogs-main");

let count = 9;

function displayPost(counter) {
  for (let i = 0; i < counter; i++) {
    const card = apiResult[i];
    const date = card.date.slice(0, -9);
    const updated = card.modified.slice(0, -9);

    blogsContainer.innerHTML += `
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

displayPost(count);

function test() {
  count = apiResult.length;
}

const viewMoreBtn = document.querySelector(".view-more-btn");

viewMoreBtn.addEventListener("click", test);

import getRequest from "./components/apiCall.js";
import displayHtml from "./components/displayHtml.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = params.get("id");

const specificPostUrl = "https://joakimlees.no/project-exam-1/wp-json/wp/v2/blog-post/" + postId + "?acf_format=standard";

const specificPost = await getRequest(specificPostUrl);
console.log("---------------");
console.log(specificPost);
console.log("------------");

const headingPostsImage = document.querySelector(".header-image-posts");
const mainContainer = document.querySelector(".main-posts");

displayHtml(specificPostUrl, headingPostsImage, postHeadingHtml);

function postHeadingHtml() {
  headingPostsImage.innerHTML += ` <img class="post-header-img" src="${specificPost.acf.headerimg}" alt="" />
  `;
}

function testHtml() {
  const date = specificPost.date.slice(0, -9);
  const updated = specificPost.modified.slice(0, -9);

  mainContainer.innerHTML = `
  <section class="blog-post-container">
    <h1>${specificPost.title.rendered}</h1>
    <p>By: ${specificPost.acf.author} Published: ${date} | Last updated: ${updated}</p>
    <p>${specificPost.acf.para1}</p>
    <a href="${specificPost.acf.link1}">${specificPost.acf.link_text1}</a>
    <h2>${specificPost.acf.subheading1}</h2>
    <p>${specificPost.acf.para2}</p>
    <a href="${specificPost.acf.link2}">${specificPost.acf.link_text2}</a>
    <div class="blog-post-img-wrapper">
      <img class="blog-post-img" src="${specificPost.acf.img1}" alt="" />
    </div>
    <h2>${specificPost.acf.subheading2}</h2>
    <p>${specificPost.acf.para3}</p>
    <a href="${specificPost.acf.link3}">${specificPost.acf.link_text3}</a>
    <div class="blog-post-img-wrapper">
      <img class="blog-post-img" src="${specificPost.acf.img2}" alt="" />
    </div>
    <h2>${specificPost.acf.subheading3}</h2>
    <p>${specificPost.acf.para4}</p>
    <a href="${specificPost.acf.link4}">${specificPost.acf.link_text4}</a>
    <div class="blog-post-img-wrapper">
      <img class="blog-post-img" src="${specificPost.acf.img3}" alt="" />
    </div>
    <h2>${specificPost.acf.subheading4}</h2>
    <p>${specificPost.acf.para5}</p>
    <a href="${specificPost.acf.link5}">${specificPost.acf.link_text5}</a>
    <div class="blog-post-img-wrapper">
      <img class="blog-post-img" src="${specificPost.acf.img4}" alt="" />
    </div>
  </section>
  
  
  `;
}

displayHtml(specificPostUrl, mainContainer, testHtml);

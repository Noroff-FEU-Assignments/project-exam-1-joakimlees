import getRequest from "./components/apiCall.js";
import displayHtml from "./components/displayHtml.js";
import hideIfNotProperty from "./components/hideProperty.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = params.get("id");

const specificPostUrl = "https://joakimlees.no/project-exam-1/wp-json/wp/v2/blog-post/" + postId + "?acf_format=standard";

const specificPost = await getRequest(specificPostUrl);
console.log("---------------");
console.log(specificPost);
console.log("------------");

const headingPostsImage = document.querySelector(".header-image-posts");
const postContainer = document.querySelector(".blog-post-container");

displayHtml(specificPostUrl, headingPostsImage, postHeadingHtml);

function postHeadingHtml() {
  headingPostsImage.innerHTML += ` <img class="post-header-img" src="${specificPost.acf.img1_header}" alt="" /> 
  `;
}

function testHtml() {
  const date = specificPost.date.slice(0, -9);
  const updated = specificPost.modified.slice(0, -9);

  postContainer.innerHTML = `
    <h1 class="post-heading">${specificPost.title.rendered}</h1>
    <p class="post-date">By: ${specificPost.acf.author} | Published: ${date} | Last updated: ${updated}</p>
    <p class="post-para post-intro-para">${specificPost.acf.intro_para}</p>
    <a class="post-link post-link-intro" href="${specificPost.acf.link_intro}">${specificPost.acf.link_text_intro}</a>
    <div class="blog-post-img-wrapper post-img-intro">
      <img class="blog-post-img" src="${specificPost.acf.img_intro}" alt="" />
    </div>
    <h2 class="post-subheading post-subheading1">${specificPost.acf.subheading1}</h2>
    <p class="post-para post-para1">${specificPost.acf.para1}</p>
    <a class="post-link post-link1" href="${specificPost.acf.link1}">${specificPost.acf.link_text1}</a>
    <div class="blog-post-img-wrapper post-img1">
      <img class="blog-post-img" src="${specificPost.acf.img1}" alt="" />
    </div>
    <h2 class="post-subheading post-subheading2">${specificPost.acf.subheading2}</h2>
    <p class="post-para post-para2">${specificPost.acf.para2}</p>
    <a class="post-link post-link2" href="${specificPost.acf.link2}">${specificPost.acf.link_text2}</a>
    <div class="blog-post-img-wrapper post-img2">
      <img class="blog-post-img" src="${specificPost.acf.img2}" alt="" />
    </div>
    <h2 class="post-subheading post-subheading3">${specificPost.acf.subheading3}</h2>
    <p class="post-para post-para3">${specificPost.acf.para3}</p>
    <a class="post-link post-link3"  href="${specificPost.acf.link3}">${specificPost.acf.link_text3}</a>
    <div class="blog-post-img-wrapper post-img3">
      <img class="blog-post-img" src="${specificPost.acf.img3}" alt="" />
    </div>
    <h2 class="post-subheading post-subheading4">${specificPost.acf.subheading4}</h2>
    <p class="post-para post-para4">${specificPost.acf.para4}</p>
    <a class="post-link post-link4"  href="${specificPost.acf.link4}">${specificPost.acf.link_text4}</a>
    <div class="blog-post-img-wrapper post-img4">
      <img class="blog-post-img" src="${specificPost.acf.img4}" alt="" />
    </div>
    <h2 class="post-subheading post-subheading5">${specificPost.acf.subheading5}</h2>
    <p class="post-para post-para5">${specificPost.acf.para5}</p>
    <a class="post-link post-link5"  href="${specificPost.acf.link5}">${specificPost.acf.link_text5}</a>
    <div class="blog-post-img-wrapper post-img5">
      <img class="blog-post-img" src="${specificPost.acf.img5}" alt="" />
    </div>
  
  `;
}

displayHtml(specificPostUrl, postContainer, testHtml);

hideIfNotProperty(specificPost.acf.img1_header, ".post-header-img");

hideIfNotProperty(specificPost.acf.subheading1, ".post-subheading1");
hideIfNotProperty(specificPost.acf.subheading2, ".post-subheading2");
hideIfNotProperty(specificPost.acf.subheading3, ".post-subheading3");
hideIfNotProperty(specificPost.acf.subheading4, ".post-subheading4");
hideIfNotProperty(specificPost.acf.subheading5, ".post-subheading5");

hideIfNotProperty(specificPost.acf.intro_para, ".post-intro-para");
hideIfNotProperty(specificPost.acf.para1, ".post-para1");
hideIfNotProperty(specificPost.acf.para2, ".post-para2");
hideIfNotProperty(specificPost.acf.para3, ".post-para3");
hideIfNotProperty(specificPost.acf.para4, ".post-para4");
hideIfNotProperty(specificPost.acf.para5, ".post-para5");

hideIfNotProperty(specificPost.acf.link_intro, ".post-link-intro");
hideIfNotProperty(specificPost.acf.link1, ".post-link1");
hideIfNotProperty(specificPost.acf.link2, ".post-link2");
hideIfNotProperty(specificPost.acf.link3, ".post-link3");
hideIfNotProperty(specificPost.acf.link4, ".post-link4");
hideIfNotProperty(specificPost.acf.link5, ".post-link5");

hideIfNotProperty(specificPost.acf.img_intro, ".post-img-intro");
hideIfNotProperty(specificPost.acf.img1, ".post-img1");
hideIfNotProperty(specificPost.acf.img2, ".post-img2");
hideIfNotProperty(specificPost.acf.img3, ".post-img3");
hideIfNotProperty(specificPost.acf.img4, ".post-img4");
hideIfNotProperty(specificPost.acf.img5, ".post-img5");

import getRequest from "./components/apiCall.js";
import displayHtml from "./components/displayHtml.js";
import hideIfNotProperty from "./components/hideProperty.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = params.get("id");

const PostUrl = "https://joakimlees.no/project-exam-1/wp-json/wp/v2/blog-post/" + postId + "?acf_format=standard";

const specificPostUrl = await getRequest(PostUrl);

const headingPostsImage = document.querySelector(".header-image-posts");
const postContainer = document.querySelector(".blog-post-container");

function postHeadingHtml() {
  headingPostsImage.innerHTML += ` <img class="post-header-img" src="${specificPostUrl.acf.img1_header}" alt="" /> 
  `;
}

displayHtml(specificPostUrl, headingPostsImage, postHeadingHtml);

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

displayHtml(specificPostUrl, postContainer, makePostHtml);

hideIfNotProperty(specificPostUrl.acf.img1_header, ".post-header-img");

hideIfNotProperty(specificPostUrl.acf.subheading1, ".post-subheading1");
hideIfNotProperty(specificPostUrl.acf.subheading2, ".post-subheading2");
hideIfNotProperty(specificPostUrl.acf.subheading3, ".post-subheading3");
hideIfNotProperty(specificPostUrl.acf.subheading4, ".post-subheading4");
hideIfNotProperty(specificPostUrl.acf.subheading5, ".post-subheading5");

hideIfNotProperty(specificPostUrl.acf.intro_para, ".post-intro-para");
hideIfNotProperty(specificPostUrl.acf.para1, ".post-para1");
hideIfNotProperty(specificPostUrl.acf.para2, ".post-para2");
hideIfNotProperty(specificPostUrl.acf.para3, ".post-para3");
hideIfNotProperty(specificPostUrl.acf.para4, ".post-para4");
hideIfNotProperty(specificPostUrl.acf.para5, ".post-para5");

hideIfNotProperty(specificPostUrl.acf.link_intro, ".post-link-intro");
hideIfNotProperty(specificPostUrl.acf.link1, ".post-link1");
hideIfNotProperty(specificPostUrl.acf.link2, ".post-link2");
hideIfNotProperty(specificPostUrl.acf.link3, ".post-link3");
hideIfNotProperty(specificPostUrl.acf.link4, ".post-link4");
hideIfNotProperty(specificPostUrl.acf.link5, ".post-link5");

hideIfNotProperty(specificPostUrl.acf.img_intro, ".post-img-intro");
hideIfNotProperty(specificPostUrl.acf.img1, ".post-img1");
hideIfNotProperty(specificPostUrl.acf.img2, ".post-img2");
hideIfNotProperty(specificPostUrl.acf.img3, ".post-img3");
hideIfNotProperty(specificPostUrl.acf.img4, ".post-img4");
hideIfNotProperty(specificPostUrl.acf.img5, ".post-img5");

// pop up image
const popUpContainer = document.querySelector(".popup-img-container");
const selectedImage = document.querySelectorAll(".blog-post-img");

for (let i = 0; i < selectedImage.length; i++) {
  selectedImage[i].addEventListener("click", function () {
    popUpContainer.innerHTML = `<img class="popup-img" src="${selectedImage[i].src}" />`;
    popUpContainer.style.display = "block";
  });
}

popUpContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("popup-img")) {
    popUpContainer.style.display = "block";
  } else {
    popUpContainer.style.display = "none";
  }
});

/* Looping object note:

const testUrl = specificPostUrl.acf;

console.log(testUrl);

for (const [key, value] of Object.entries(testUrl)) {
  console.log(`${key}: ${value}`);
}


*/

import getRequest from "./components/apiCall.js";
import displayHtml from "./components/displayHtml.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = params.get("id");

const specificPostUrl = "https://joakimlees.no/project-exam-1/wp-json/wp/v2/blog-post/" + postId + "?acf_format=standard";

const specificPost = await getRequest(specificPostUrl);
console.group("---------------");
console.log(specificPost);
console.log("------------");

const headingPostsImage = document.querySelector(".header-image-posts");
const mainContainer = document.querySelector(".main-posts");

displayHtml(specificPostUrl, headingPostsImage, postHtml);

function postHtml() {
  headingPostsImage.innerHTML += ` <img src="${specificPost.acf.headerimg}" alt="" />
  `;
}

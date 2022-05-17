import getRequest from "./components/apiCall.js";
import displayHtml from "./components/displayHtml.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = params.get("id");

const specificPostUrl = "https://joakimlees.no/project-exam-1/wp-json/wp/v2/blog-post/" + postId + "?acf_format=standard";

const test = await getRequest(specificPostUrl);
console.group("---------------");
console.log(test);
console.log("------------");

const mainContainer = document.querySelector(".main-posts");

displayHtml(specificPostUrl, mainContainer, postHtml);

function postHtml() {
  mainContainer.innerHTML = `
  
  <h1>${test.title.rendered}</h1>
  
  
  
  
  `;
}

import getRequest from "./components/apiCall.js";
import displayHtml from "./components/displayHtml.js";

const url = "https://joakimlees.no/project-exam-1/wp-json/wp/v2/blog-post?acf_format=standard&per_page=100";

const apiResult = await getRequest(url);
const test = document.querySelector(".test");

/*
function getUrl() {
  for (let i = 0; i < apiResult.length; i++) {
    const apiUrl = new URL("https://joakimlees.no/project-exam-1/wp-json/wp/v2/blog-post/" + `${apiResult[i].id}` + "?acf_format=standard");
  }
}

getUrl();
*/

for (let i = 0; i < apiResult.length; i++) {
  test.innerHTML += `<a href="/html/posts.html?id=${apiResult[i].id}"><div>${apiResult[i].title.rendered}</div></a>`;

  console.log(apiResult[i].id);
}

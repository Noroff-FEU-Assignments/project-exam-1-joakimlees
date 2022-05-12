import getRequest from "./components/apiCall.js";
import displayHtml from "./components/displayHtml.js";

const url = "https://joakimlees.no/project-exam-1/wp-json/wp/v2/blog-post?acf_format=standard";

const apiResult = await getRequest(url);

const test1 = document.querySelector(".test1");

test1.innerHTML = `${apiResult[0]._links.author[0].href}`;

console.log(apiResult[0]._links.author[0].href);

console.log(apiResult);

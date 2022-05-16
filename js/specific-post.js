import getRequest from "./components/apiCall.js";
import displayHtml from "./components/displayHtml.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = params.get("id");

console.log(queryString);
console.log(params);
console.log(postId);

const specificPostUrl = "https://joakimlees.no/project-exam-1/wp-json/wp/v2/blog-post/" + postId;

const test = await getRequest(specificPostUrl);
console.group("---------------");
console.log(test);
console.log("------------");

/*

const url = new URL(window.location.href);

console.log(url);

const pathname = url.pathname;

const lastThingInPathName = pathname.split("/").pop();

console.log(lastThingInPathName);

console.log(typeof lastThingInPathName);

const specificPostUrl = "https://joakimlees.no/project-exam-1/wp-json/wp/v2/blog-post/" + lastThingInPathName;

const test = await getRequest(specificPostUrl.toString());

console.log(specificPostUrl);

console.log(test);
*/

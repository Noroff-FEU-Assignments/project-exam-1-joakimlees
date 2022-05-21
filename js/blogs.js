import getRequest from "./components/apiCall.js";
import displayHtml from "./components/displayHtml.js";
import pagination from "./components/pagination.js";
import addCards from "./components/createCards.js";

const url = "https://joakimlees.no/project-exam-1/wp-json/wp/v2/blog-post?acf_format=standard&per_page=100";

const apiResult = await getRequest(url);

console.log(apiResult.length);

console.log(apiResult);

const blogsContainer = document.querySelector(".blogs-main");

let count = 1;
let numberOfCards = 9;

displayHtml(pagination(apiResult, numberOfCards, count), blogsContainer, addCards);

const viewMoreBtn = document.querySelector(".view-more-btn");

viewMoreBtn.addEventListener("click", function viewMore() {
  switch (numberOfCards) {
    case 9:
      numberOfCards = apiResult.length;
      viewMoreBtn.innerHTML = "Show less blogs";
      break;
    case apiResult.length:
      numberOfCards = 9;
      viewMoreBtn.innerHTML = "Show more blogs";
    default:
      numberOfCards = 9;
      viewMoreBtn.innerHTML = "Show more blogs";
  }
  displayHtml(pagination(apiResult, numberOfCards, count), blogsContainer, addCards);
});

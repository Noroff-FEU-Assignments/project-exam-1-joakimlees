import errorMessage from "./error.js";

/*
param1 = url/api variable
param2 = the html element variable(document.querySelector)
param3 = a function for creating html.
If the apiCall has a property called "error". (In this case, if it is an error with the api call). making html using the errorMessage function and gives it the value of the error property. 
Else it creates html using the htmlCreator (function) for the htmlContainer.
*/
export default function displayHtml(apiCall, htmlContainer, htmlCreator) {
  if (apiCall.hasOwnProperty("error")) {
    htmlContainer.innerHTML = errorMessage("Error: " + apiCall.error);
  } else {
    htmlContainer.innerHTML = "";
    htmlCreator(apiCall);
  }
}

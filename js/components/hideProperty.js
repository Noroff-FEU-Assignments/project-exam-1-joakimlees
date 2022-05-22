/**
 * A function to check if the property is true or false. (which is it for images) or if it is a string, and its emty, which it is for (paragaphs, links, headings). If it is hide the html element(display none).
 * @param {The property in an array to check for} property
 * @param {targeting the html element by its classnName} className
 */

export default function hideIfNotProperty(property, className) {
  const classDiv = document.querySelector(className);

  if (!property || property === "") {
    classDiv.style.display = "none";
  }
}

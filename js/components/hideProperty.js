export default function hideIfNotProperty(property, className) {
  const classDiv = document.querySelector(className);

  if (!property) {
    classDiv.style.display = "none";
  }
}

const navCloser = document.querySelector("#nav-closer");
const burgerMenu = document.querySelector("#hamburger-menu");

navCloser.addEventListener("click", function () {
  burgerMenu.checked = false;
});

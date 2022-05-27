const navCloser = document.querySelector("#nav-closer");
const burgerMenu = document.querySelector("#hamburger-menu");

console.log(burgerMenu);

navCloser.addEventListener("click", function () {
  burgerMenu.checked = false;
});

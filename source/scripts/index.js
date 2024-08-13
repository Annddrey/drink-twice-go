const nav = document.querySelector(".nav");
const navButton = document.querySelector(".nav__nav-button");

if (nav) {
  nav.classList.remove("nav--nojs");

  navButton.addEventListener("click", () => {
    nav.classList.toggle("nav--closed");
    nav.classList.toggle("nav--opened");
  });
}

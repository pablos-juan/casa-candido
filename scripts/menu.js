const hamburger = document.querySelector(".menu-svg");
const navbarLinks = document.querySelector(".links-list");

hamburger.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

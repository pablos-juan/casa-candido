const hamburger = document.querySelector(".menu-svg");
const navbarLinks = document.querySelector(".links-list");
const listItems = document.querySelectorAll(".links-list li a");

hamburger.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});

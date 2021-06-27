// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".links");

navToggleBtn.addEventListener("click", function () {
  //   if (navLinks.classList.contains("show-links")) {
  //     navLinks.classList.remove("show-links");
  //   } else {
  //     navLinks.classList.add("show-links");
  //   }
  navLinks.classList.toggle("show-links");
});

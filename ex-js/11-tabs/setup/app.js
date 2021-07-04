const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from all button
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide all content
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

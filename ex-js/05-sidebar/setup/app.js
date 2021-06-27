const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".close-btn");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

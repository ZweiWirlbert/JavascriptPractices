// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalContent = document.querySelector(".modal-overlay");
const modalOpen = document.querySelector(".modal-btn");
const modalClose = document.querySelector(".close-btn");

modalOpen.addEventListener("click", () => {
  modalContent.classList.add("open-modal");
});

modalClose.addEventListener("click", () => {
  modalContent.classList.remove("open-modal");
});

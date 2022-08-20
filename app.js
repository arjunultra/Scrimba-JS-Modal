const openModal = document.getElementById("open-modal");
const closeBtn = document.getElementById("close-btn");
const modal = document.getElementById("modal");
modal.style.display = "none";
openModal.addEventListener("click", function () {
  modal.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

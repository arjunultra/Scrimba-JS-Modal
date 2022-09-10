const openModal = document.getElementById("open-modal");
const closeBtn = document.getElementById("close-btn");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const container = document.getElementById("container");
modal.style.display = "none";
openModal.addEventListener("click", function () {
  modal.style.display = "block";
  overlay.style.display = "none";
  container.style.backgroundColor = "black";
});
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
  overlay.style.display = "block";
  container.style.backgroundColor = "plum";
});

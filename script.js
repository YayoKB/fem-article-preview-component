const shareStart = document.querySelector(".share-icon");
const shareDiv = document.querySelector(".share");
const shareEnd = document.querySelector(".shared");

shareStart.addEventListener("click", (e) => {
  shareDiv.classList.toggle("show");
});

shareEnd.addEventListener("click", (e) => {
  shareDiv.classList.toggle("show");
});

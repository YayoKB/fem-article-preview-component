const shareStart = document.querySelector(".share-icon");
const shareDiv = document.querySelector(".share");
const authorDiv = document.querySelector(".author");
const shareEnd = document.querySelector(".shared");

shareStart.addEventListener("click", (e) => {
  //if mobile view
  if (window.innerWidth < 900) {
    //show ShareDiv and hide authorDiv
    shareDiv.classList.toggle("display-flex");
    authorDiv.classList.toggle("display-none");
  }

  if (window.innerWidth >= 900) {
    shareDiv.classList.toggle("display-flex");
  }
});

shareEnd.addEventListener("click", (e) => {
  if (window.innerWidth < 900) {
    shareDiv.classList.toggle("display-flex");
    authorDiv.classList.toggle("display-none");
  }
});

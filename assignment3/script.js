const hoverButton = document.querySelector("#hover-button");
console.log(hoverButton);

const senchaReveal = document.querySelector("#sencha-reveal");
console.log(senchaReveal);

hoverButton.addEventListener("mouseover", showsenchaReveal);
hoverButton.addEventListener("mouseout", hidesenchaReveal);

function showsenchaReveal() {
  moreInfo.classList.add("show");
}

function hidesenchaReveal() {
  moreInfo.classList.remove("show");
}
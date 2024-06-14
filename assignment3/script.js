const sencha = document.querySelector("#sencha");
console.log(sencha);

const senchaReveal = document.querySelector("#sencha-reveal");
console.log(senchaReveal);

hoverButton.addEventListener("mouseover", showsenchaReveal);
hoverButton.addEventListener("mouseout", hidesenchaReveal);

function showsenchaReveal() {
  senchaHover.classList.add("show");
}

function hidesenchaReveal() {
  senchaHover.classList.remove("show");
}
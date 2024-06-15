// sencha hover reveal
// defining the senchaImg and senchaReveal variables
const senchaImg = document.querySelector("#sencha-img");
console.log(senchaImg);

const senchaReveal = document.querySelector("#sencha-reveal");
console.log(senchaReveal);

// adding event listeners to the senchaImg
senchaImg.addEventListener("mouseover", showReveal);
senchaImg.addEventListener("mouseout", hideReveal);

// defining the showReveal and hideReveal functions
function showReveal() {
  senchaReveal.classList.add("show");
}

function hideReveal() {
  senchaReveal.classList.remove("show");
}

// ujicha hover reveal
const ujichaImg = document.querySelector("#ujicha-img");
console.log(ujichaImg);

const ujichaReveal = document.querySelector("#ujicha-reveal");
console.log(ujichaReveal);

ujichaImg.addEventListener("mouseover", showRevealUjicha);
ujichaImg.addEventListener("mouseout", hideRevealUjicha);

function showRevealUjicha() {
  ujichaReveal.classList.add("show");
}

function hideRevealUjicha() {
  ujichaReveal.classList.remove("show");
} 

// kukicha hover reveal
const kukichaImg = document.querySelector("#kukicha-img");
console.log(kukichaImg);

const kukichaReveal = document.querySelector("#kukicha-reveal");
console.log(kukichaReveal);

kukichaImg.addEventListener("mouseover", showRevealKukicha);
kukichaImg.addEventListener("mouseout", hideRevealKukicha);

function showRevealKukicha() {
  kukichaReveal.classList.add("show");
}

function hideRevealKukicha() {
  kukichaReveal.classList.remove("show");
}

// hojicha hover reveal
const hojichaImg = document.querySelector("#hojicha-img");  
console.log(hojichaImg);  

const hojichaReveal = document.querySelector("#hojicha-reveal");  
console.log(hojichaReveal);

hojichaImg.addEventListener("mouseover", showRevealHojicha);
hojichaImg.addEventListener("mouseout", hideRevealHojicha);

function showRevealHojicha() {
  hojichaReveal.classList.add("show");
}

function hideRevealHojicha() {
  hojichaReveal.classList.remove("show");
}

// genmaicha hover reveal
const genmaichaImg = document.querySelector("#genmaicha-img");
console.log(genmaichaImg);

const genmaichaReveal = document.querySelector("#genmaicha-reveal");
console.log(genmaichaReveal);

genmaichaImg.addEventListener("mouseover", showRevealGenmaicha);
genmaichaImg.addEventListener("mouseout", hideRevealGenmaicha);

function showRevealGenmaicha() {
  genmaichaReveal.classList.add("show");
}

function hideRevealGenmaicha() {
  genmaichaReveal.classList.remove("show");
}

// about us hover reveal

const about = document.querySelector("#about");
console.log(about);

const moreInfo = document.querySelector("#more-info");
console.log(moreInfo);

about.addEventListener("mouseover", showMoreInfo);
about.addEventListener("mouseout", hideMoreInfo);

function showMoreInfo() {
  moreInfo.classList.add("show");
}

function hideMoreInfo() {
  moreInfo.classList.remove("show");
}
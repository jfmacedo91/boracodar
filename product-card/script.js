const productImg = document.querySelector(".product-image img")
const button360 = document.querySelector("#image-button")
const buttonImg = button360.querySelector("img")
let active = false

button360.addEventListener("click", () => {
  if(active) {
    buttonImg.src = "./images/360.svg"
    productImg.src = "./images/sofa-margot-II.png"
    active = false
    console.log("estava rodando");
  } else {
    buttonImg.src = "./images/x.svg"
    productImg.src = "./images/sofa-margot-II-animation.gif"
    active = true
    console.log("estava parado");
  }
})
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const img5 = document.querySelector("#img5");
const img6 = document.querySelector("#img6");
const img7 = document.querySelector("#img7");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
let i=0;

let carouselArray = [img1, img2, img3, img4, img5, img6, img7];

function carouselSwitchLeft(){
  carouselArray[i].style.display = "none";
  i--;
  if(i < 0){
    i = 6;
  }
  carouselArray[i].style.display = "inline-block";
}
function carouselSwitchRight(){
  carouselArray[i].style.display = "none";
  i++;
  if(i > 6){
    i = 0;
  }
  carouselArray[i].style.display = "inline-block";
}

arrowLeft.addEventListener("click", carouselSwitchLeft);
arrowRight.addEventListener("click", carouselSwitchRight);
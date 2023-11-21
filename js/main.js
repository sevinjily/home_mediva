"use strict";
// Header start
// ------------------

// Header finish
const next = document.querySelector(".slider .next");
const prev = document.querySelector(".slider .prev");
// const category = document.querySelectorAll(".slider .  sliderCategory .category");
const slider = document.querySelector(".slider .sliderCategory");
let current = 0;
next.addEventListener("click", function () {
  if(current<slider.children.length-1){
    current++;
  }
  else{
    current=0;
  }
  updateSlider();

});
prev.addEventListener("click",function(){
    if(current>0){
        current--;
    }
    else{
        current=slider.children.length-1;
    }
    updateSlider();

});
function updateSlider() {
    const translateValue = -current * 100 + '%';
    slider.style.transform = 'translateX('+ translateValue + ')';
  }
;

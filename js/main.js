"use strict";
// Header start
// ------------------







// Header finish
const next=document.getElementsByClassName("slider next");
const prev=document.getElementsByClassName("slider prev");
const category=document.querySelectorAll("slider","sliderCategory");
let current=0;
next.addEventListener("click",function(){


if(current<slider.length-1){
    current+=1;
}
else{
    current=0;
}
updateSlider();

})

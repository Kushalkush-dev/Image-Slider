const images=document.querySelectorAll(".images img");
let indeximg=0;
document.addEventListener("DOMContentLoaded",()=>initial(indeximg));

 function initial(index){
  images[index].classList.add("enabled")

 }


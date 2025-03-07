const images=document.querySelectorAll(".images img");
let indeximg=0;
document.addEventListener("DOMContentLoaded",()=>initial());
let timeoutid;

 function initial(){
  images[indeximg].classList.add("enabled");
  if(images.length>0){
    timeoutid=setInterval(nextimg,5000);

  }
  

 }


 function showimg(){

  images.forEach(image=>{image.classList.remove("enabled")})
 
    if(indeximg>=images.length){
      indeximg=0;
    }else if(indeximg<0){
      indeximg=images.length-1;
    }

      images[indeximg].classList.add("enabled")
  }
    

 

 function nextimg(){
  indeximg++;
  showimg()
 }

 function previmg(){
  indeximg--;
  showimg()
  clearInterval(timeoutid)

 }
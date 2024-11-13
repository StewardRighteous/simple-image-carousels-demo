const body = document.querySelector("body");
const slideshowContainer = body.querySelector(".slideshow");
const eachSlide = slideshowContainer.querySelectorAll(".slide");
const dots = slideshowContainer.querySelector(".dots");
const dot = dots.querySelectorAll(".dot");
const previousButton = slideshowContainer.querySelector("button.prev");
const nextButton = slideshowContainer.querySelector("button.next");

let slideShow;
let slideNumber = 0;

function startSlideShow() {
  slideShow = setInterval(showSlide, 2000);
  incrementSlideShowNumber = setInterval(incrementSlide, 2000);
}

function stopSlideShow() {
  clearInterval(slideShow);
  clearInterval(incrementSlideShowNumber);
}

previousButton.addEventListener("click", ()=>{
    stopSlideShow();
    decrementSlide();
    showSlide();
});

nextButton.addEventListener("click",()=>{
    stopSlideShow();
    incrementSlide();
    showSlide();
});

dot.forEach((eachDot) =>
  eachDot.addEventListener("click", (e) => {
    let dotIndex = eachDot.getAttribute("data-index");
    stopSlideShow();
    showSlide(dotIndex);
    setTimeout(startSlideShow, 3000);
  })
);

function decrementSlide(){
    if(slideNumber != 0 ){
        slideNumber--;
    }else{
        slideNumber = eachSlide.length -1;
    }
}

function incrementSlide() {
  if (slideNumber == 0 || slideNumber < eachSlide.length - 1) {
    slideNumber++;
  } else {
    slideNumber = 0;
  }
  return slideNumber;
}

function showSlide(currentSlideNumber = slideNumber) {
  slideNumber = currentSlideNumber;
  eachSlide.forEach((slide) => slide.classList.remove("show"));
  eachSlide.forEach((slide) => slide.classList.add("hide"));
  eachSlide.item(currentSlideNumber).classList.add("show");
  eachSlide.item(currentSlideNumber).classList.remove("hide");
}

startSlideShow();

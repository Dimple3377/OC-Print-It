const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const bannerImg = document.querySelector(".banner-img");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const tagLine = document.querySelector(".tagLine");
const path = "./assets/images/slideshow/";
const dotContainer = document.querySelector(".dots");
let currentIndex = 0;

function createDots() {
  slides.forEach((slide) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotContainer.appendChild(dot);
  });
}
createDots();
arrowLeft.addEventListener("click", function () {
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  const currentSlide = slides[currentIndex];
  bannerImg.src = path + currentSlide.image;
  tagLine.innerHTML = currentSlide.tagLine;
  updateDots();
});

arrowRight.addEventListener("click", function () {
  currentIndex = currentIndex + 1;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  const currentSlide = slides[currentIndex];
  bannerImg.src = path + currentSlide.image;
  tagLine.innerHTML = currentSlide.tagLine;

  updateDots();
});

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    if (i === currentIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

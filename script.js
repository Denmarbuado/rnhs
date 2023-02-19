let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll("#slideshow img");
  const dots = document.querySelectorAll(".dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 5000);
}

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
prevBtn.addEventListener("click", () => {
  const slides = document.querySelectorAll("#slideshow img");
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
});

nextBtn.addEventListener("click", () => {
  const slides = document.querySelectorAll("#slideshow img");
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
});

const dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const slides = document.querySelectorAll("#slideshow img");
    slideIndex = index + 1;
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
  });
});

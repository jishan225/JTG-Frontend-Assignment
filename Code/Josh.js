//  VIDEO FUNCTIONALITY
function toggleVideo() {
  const video = document.getElementById("myVideo");
  const playIcon = document.getElementById("playIcon");

  if (video.paused) {
    video.play();
    playIcon.style.display = "none";
  } else {
    video.pause();
    playIcon.style.display = "block";
  }
}

// TESTIMONIAL
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.getElementById("slides");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;
  let totalSlides = dots.length;
  let interval;

  function goToSlide(index) {
    currentSlide = index % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentSlide].classList.add("active");
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function startSlider() {
    interval = setInterval(nextSlide, 5000);
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      clearInterval(interval);
      goToSlide(idx);
      startSlider();
    });
  });

  goToSlide(0);
  startSlider();
});

// PRICING CARDS
var card = document.querySelectorAll(".card1, .card2, .card3");
for (var i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function() {
    for (var j = 0; j < card.length; j++) {
      card[j].classList.remove("display");
    }
    this.classList.add("display");
  });
}

// HIDDEN MODAL
const open = document.getElementById("open");
const modalContainer = document.getElementById("modal-container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modalContainer.classList.add("show");
});
close.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});



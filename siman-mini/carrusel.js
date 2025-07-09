let index = 0;
const carousel = document.querySelector(".carousel");
const slides = Array.from(carousel.querySelectorAll("img"));

slides.forEach(img => {
  const clone = img.cloneNode(true);
  carousel.appendChild(clone);
});

const allSlides = carousel.querySelectorAll("img");

function nextSlide() {
  index++;
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(-${index * 100}%)`;

  if (index === allSlides.length / 2) { 
    setTimeout(() => {
      carousel.style.transition = 'none'; 
      index = 0;
      carousel.style.transform = `translateX(0)`;
    }, 400);  
  }
}


setInterval(nextSlide, 4000);

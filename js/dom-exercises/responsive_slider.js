export default function createSlider(slides, previous, next) {
  let $slides = document.querySelectorAll(slides);
  let $prev = document.getElementById(previous);
  let $next = document.getElementById(next);
  let currentSlide = 0;
  let $active = $slides[0];
  function changeSliderImage(change) {
    $active.classList.remove("active");
    console.log($active);
    currentSlide += change;
    if (currentSlide < 0) {
      currentSlide = $slides.length - 1;
    } else if (currentSlide >= $slides.length) {
      currentSlide = 0;
    }
    $active = $slides[currentSlide];
    $active.classList.add("active");
    console.log($active);
  }

  $prev.addEventListener("click", (e) => changeSliderImage(-1));
  $next.addEventListener("click", (e) => changeSliderImage(1));
}

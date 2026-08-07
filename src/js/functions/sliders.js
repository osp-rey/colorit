export default function sliders() {
  const headerNavSlider = document.querySelector(".header-nav__slider");

  if (headerNavSlider) {
    const swiper = new Swiper(headerNavSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 40,
      navigation: {
        prevEl: ".header-nav__slider .slider-arrow._prev",
        nextEl: ".header-nav__slider .slider-arrow._next",
      },
    });
  }
}

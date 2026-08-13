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

  const heroSlider = document.querySelector(".s-hero__slider");

  if (heroSlider) {
    const swiper = new Swiper(heroSlider, {
      speed: 900,
      spaceBetween: 15,
      slidesPerView: "auto",
      centeredSlides: true,
      initialSlide: 1,
      autoplay: {
        delay: 6000,
      },
      navigation: {
        prevEl: ".s-hero .slider-arrow._prev",
        nextEl: ".s-hero .slider-arrow._next",
      },
      pagination: {
        el: ".s-hero .slider-pagination",
        clickable: true,
      },
    });
  }

  const catsSliders = document.querySelectorAll(".s-cats__slider");

  if (catsSliders.length) {
    catsSliders.forEach((slider) => {
      const sect = slider.closest("section");

      const swiper = new Swiper(slider, {
        speed: 900,
        slidesPerView: "auto",
        spaceBetween: 5,
        autoplay: {
          delay: 6500,
        },
        navigation: {
          prevEl: sect.querySelector(".slider-arrow._prev"),
          nextEl: sect.querySelector(".slider-arrow._next"),
        },
        pagination: {
          el: sect.querySelector(".slider-pagination"),
          clickable: true
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          576: {
            slidesPerView: "auto",
            spaceBetween: 16,
          },
        },
      });
    });
  }

  const recSliders = document.querySelectorAll(".s-rec__slider");

  if (recSliders.length) {
    recSliders.forEach((slider) => {
      const sect = slider.closest("section");

      const swiper = new Swiper(slider, {
        speed: 900,
        slidesPerView: 6,
        spaceBetween: 10,
        autoplay: {
          delay: 6000,
        },
        navigation: {
          prevEl: sect.querySelector(".slider-arrow._prev"),
          nextEl: sect.querySelector(".slider-arrow._next"),
        },
        pagination: {
          el: sect.querySelector(".slider-pagination"),
          clickable: true,
        },
      });
    });
  }

  const productsSlider = document.querySelectorAll(".products-slider");

  if (productsSlider.length) {
    productsSlider.forEach((slider) => {
      const sect = slider.closest("section");

      const swiper = new Swiper(slider, {
        speed: 900,
        slidesPerView: 5,
        spaceBetween: 15,
        autoplay: {
          delay: 6500,
        },
        navigation: {
          prevEl: sect.querySelector(".slider-arrow._prev"),
          nextEl: sect.querySelector(".slider-arrow._next"),
        },
        pagination: {
          el: sect.querySelector(".slider-pagination"),
          clickable: true,
        },
      });
    });
  }

  const sectNavSliders = document.querySelectorAll(".sect-nav");

  if (sectNavSliders.length) {
    sectNavSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 5,
        slidesPerView: "auto",
      });
    });
  }

  const catsListSliders = document.querySelectorAll(".s-cats-list__slider");

  if (catsListSliders.length) {
    catsListSliders.forEach((slider) => {
      const sect = slider.closest("section");

      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 40,
        slidesPerView: 5,
        navigation: {
          prevEl: sect.querySelector(".slider-arrow._prev"),
          nextEl: sect.querySelector(".slider-arrow._next"),
        },
        pagination: {
          el: sect.querySelector(".slider-pagination"),
          clickable: true,
        },
      });
    });
  }
}

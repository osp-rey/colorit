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

  const catsSlidersSect = document.querySelectorAll(".s-cats__slider");

  if (catsSlidersSect.length) {
    catsSlidersSect.forEach((slider) => {
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
          clickable: true,
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
        slidesPerView: "auto",
        spaceBetween: 5,
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
        breakpoints: {
          1365: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          1026: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: "auto",
            spaceBetween: 10,
          },
        },
      });
    });
  }

  const productsSlider = document.querySelectorAll(".products-slider");

  if (productsSlider.length) {
    productsSlider.forEach((slider) => {
      const sliderWrap = slider.closest(".slider-wrapper");

      const swiper = new Swiper(slider, {
        speed: 900,
        slidesPerView: "auto",
        spaceBetween: 10,
        autoplay: {
          delay: 6500,
        },
        navigation: {
          prevEl: sliderWrap.querySelector(".slider-arrow._prev"),
          nextEl: sliderWrap.querySelector(".slider-arrow._next"),
        },
        pagination: {
          el: sliderWrap.nextElementSibling,
          clickable: true,
        },
        breakpoints: {
          1540: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          576: {
            slidesPerView: "auto",
            spaceBetween: 15,
          },
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
        navigation: {
          prevEl: slider.querySelector(".sect-nav-side._prev"),
          nextEl: slider.querySelector(".sect-nav-side._next"),
        },
      });
    });
  }

  const catsListSliders = document.querySelectorAll(".s-cats-list__slider");

  if (catsListSliders.length) {
    catsListSliders.forEach((slider) => {
      const sect = slider.closest("section");

      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 10,
        slidesPerView: "auto",
        navigation: {
          prevEl: sect.querySelector(".slider-arrow._prev"),
          nextEl: sect.querySelector(".slider-arrow._next"),
        },
        pagination: {
          el: sect.querySelector(".slider-pagination"),
          clickable: true,
        },
        breakpoints: {
          1026: {
            spaceBetween: 40,
            slidesPerView: 5,
          },
          576: {
            spaceBetween: 20,
            slidesPerView: "auto",
          },
        },
      });
    });
  }

  const allCatsSliders = document.querySelectorAll(".s-all__cats-slider");

  if (allCatsSliders) {
    allCatsSliders.forEach((slider) => {
      const wrap = slider.closest(".s-all__cats-wrap");

      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 5,
        slidesPerView: "auto",
        pagination: {
          el: wrap?.querySelector(".slider-pagination"),
          clickable: true,
        },
        autoplay: {
          delay: 7500,
        },
        breakpoints: {
          1365: {
            spaceBetween: 16,
            slidesPerView: 6,
          },
          1200: {
            spaceBetween: 16,
            slidesPerView: 5,
          },
          1026: {
            spaceBetween: 16,
            slidesPerView: 4,
          },
        },
      });
    });
  }

  const offerSliders = document.querySelectorAll(".s-offer__slider");

  if (offerSliders.length) {
    offerSliders.forEach((slider) => {
      const sect = slider.closest("section");

      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 10,
        slidesPerView: 1,
        autoplay: {
          delay: 7000,
        },
        pagination: {
          pagination: {
            el: sect.querySelector(".slider-pagination"),
            clickable: true,
          },
        },
        breakpoints: {
          576: {
            spaceBetween: 15,
            slidesPerView: 2,
          },
        },
      });
    });
  }

  const shopItemsGallerySliders = document.querySelectorAll(
    ".s-shops__item-gallery",
  );

  if (shopItemsGallerySliders.length) {
    shopItemsGallerySliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 5,
        slidesPerView: 4,
        breakpoints: {
          1200: {
            spaceBetween: 5,
            slidesPerView: 2,
          },
        },
      });
    });
  }

  const catsSliders = document.querySelectorAll(".cats-slider");

  if (catsSliders.length) {
    catsSliders.forEach((slider) => {
      const wrap = slider.closest(".slider-wrapper");

      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 5,
        slidesPerView: "auto",
        navigation: {
          prevEl: wrap.querySelector(".slider-arrow._prev"),
          nextEl: wrap.querySelector(".slider-pagination._next"),
        },
        pagination: {
          el: wrap.nextElementSibling,
          clickable: true,
        },
        autoplay: {
          delay: 7500,
        },
        breakpoints: {
          1365: {
            spaceBetween: 16,
            slidesPerView: 6,
          },
          1200: {
            spaceBetween: 16,
            slidesPerView: 5,
          },
          1026: {
            spaceBetween: 16,
            slidesPerView: 4,
          },
        },
      });
    });
  }

  const productSlider = document.querySelector(".s-product__slider");

  if (productSlider) {
    const thumbSlider = document.querySelector(".s-product__thumb-slider");
    const thumbSliderWrap = document.querySelector(".s-product__thumb-wrap");

    const thumbsSwiper = new Swiper(thumbSlider, {
      speed: 900,
      spaceBetween: 5,
      slidesPerView: 5,
      direction: "vertical",
      navigation: {
        prevEl: ".s-product__thumb-arrow._prev",
        nextEl: ".s-product__thumb-arrow._next",
      },
      on: {
        init: (swiper) => {
          isEndSlider(swiper);
        },
        slideChange: (swiper) => {
          isEndSlider(swiper);
        },
      },
      breakpoints: {
        1200: {
          spaceBetween: 5,
          slidesPerView: 6,
        },
      },
    });

    function isEndSlider(swiper) {
      if (swiper.isEnd) {
        thumbSliderWrap.classList.add("_end");
      } else {
        thumbSliderWrap.classList.remove("_end");
      }
    }

    const swiper = new Swiper(productSlider, {
      speed: 900,
      spaceBetween: 15,
      slidesPerView: 1,
      thumbs: {
        swiper: thumbSlider,
      },
      pagination: {
        el: ".s-product__gallery .slider-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 6500,
      },
    });
  }
}

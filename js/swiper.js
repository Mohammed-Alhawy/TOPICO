// swiper slide (side bare)

var swiper = new Swiper(".slide-swp", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullests: true,
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
});


// swiper slide (sale_slide)


var swiper = new Swiper(".sale_sec", {
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,

  breakpoints: {
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});



// swiper slide (ِAll_Producrs)

var swiper = new Swiper(".All_products_swip", {
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    901: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  },
});


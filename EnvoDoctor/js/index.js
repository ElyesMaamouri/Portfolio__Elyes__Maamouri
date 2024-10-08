const swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".custom-pagination",
    clickable: true,
    type: "bullets",
  },
  // navigation: {
  //   nextEl: ".custom-button-prev",
  //   prevEl: ".custom-button-next",
  // },
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },

    1368: {
      slidesPerView: 2,
    },
  },
});

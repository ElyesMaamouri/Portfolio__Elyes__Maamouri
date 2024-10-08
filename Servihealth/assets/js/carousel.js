$("#carousel-surgical").owlCarousel({
  loop: true,
  autoplay: true,
  // margin: 10,
  navText: [
    '<div class="prv-btn"><img class="img-arrow" src="./assets/img/arrow-carousel.svg" alt=""></div>',
    '<div class="next-btn"><img class="img-arrow img-arrow-reverse" src="./assets/img/arrow-carousel.svg" alt=""></div>',
  ],
  nav: true,
  dots: false,
  navContainer: ".container-carousel",
  responsive: {
    0: {
      items: 1,
    },
  },
});

$(document).ready(function () {
  $("#carousel-testimonials-web").owlCarousel({
    loop: true,
     autoplay: true,
    smartSpeed: 500,
    margin: 40,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
    },
  })

  $("#carousel-testimonials-mobile").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 500,
    margin: 40,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
    },
  })
})

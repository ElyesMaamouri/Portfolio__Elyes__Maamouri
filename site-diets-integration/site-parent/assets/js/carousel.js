$(document).ready(function () {
    $("#carousel-testemonials").owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed:500,
      margin: 10,
      nav: false,
      dots: false,
      center: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
      }
    });
  });
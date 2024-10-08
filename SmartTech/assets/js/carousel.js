$("#carousel-hero").owlCarousel({
  loop: true,
  margin: 14,
  nav: true,
  navigation: false,
  responsive: {
    0: {
      items: 1,
      margin: 20,
    },
    1000: {
      items: 1,
    },
  },
});

$("#carousel-categorie").owlCarousel({
  loop: true,
  margin: 14,
  nav: true,
  dots: true,

  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$("#carousel-customer-review").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 15,
  nav: true,
  dots: true,
  navigation: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
      margin: 20,
    },
    768: {
      items: 3,
    },
  },
});

$("#carousel-instagram").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 15,

  dots: false,
  navigation: false,
  responsive: {
    0: {
      items: 1,
    },
   375: {
        items: 2,
      },
    576: {
      items: 3,
    },
    768: {
      items: 5,
    },
  },
});

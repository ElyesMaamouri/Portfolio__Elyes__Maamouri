// Carousel
$(document).ready(function () {
  $("#carousel-promo").owlCarousel({
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
  });
  $("#carousel-promo-mobile").owlCarousel({
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
  });
  $("#carousel-promotion-product-mobile").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      414: {
        items: 2,
      },
      991: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  $("#carousel-animal").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
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
  });

  $("#carousel-animal-mobile").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
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
  });
  $("#carousel-1").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      414: {
        items: 2,
      },
      991: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  $("#carousel-2").owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    dots: false,

    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      768: {
        items: 2,
        nav: false,
        dots: true,
      },
      999: {
        items: 2,
        nav: false,
        dots: true,
      },
      1200: {
        items: 3,
      },
    },
  });

  $("#carousel-3").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      414: {
        items: 2,
      },
      991: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  $("#carousel-4").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      414: {
        items: 2,
      },
      991: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  $("#carousel-5").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      414: {
        items: 2,
      },
      991: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  $("#carousel-6").owlCarousel({
    loop: true,
    // autoplay: true,
    margin: 10,
    navText: [
      '<div class="carousel-6 prv-btn"><img class=" " src="./assets/img/prv-arrow.svg" alt=""></div>',
      '<div class="carousel-6 next-btn"><img class=" " src="./assets/img/next-arrow.svg" alt=""></div>',
    ],
    nav: true,
    dots: false,
    navContainer: ".container-btn-1",
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1400: {
        items: 1,
      },
    },
  });

  $("#carousel-7").owlCarousel({
    loop: true,
    margin: 10,
    // autoplay: true,
    navText: [
      '<div class="carousel-7 prv-btn"><img src="./assets/img/prv-arrow.svg" alt=""></div>',
      '<div class="carousel-7 next-btn"><img src="./assets/img/next-arrow.svg" alt=""></div>',
    ],
    nav: true,
    dots: false,
    navContainer: ".container-btn-2",
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1400: {
        items: 1,
      },
    },
  });

  $("#carousel-8").owlCarousel({
    loop: true,
    margin: 10,
    // autoplay: true,
    navText: [
      '<div class="prv-btn"><img src="./assets/img/prv-arrow.svg" alt=""></div>',
      '<div class="next-btn"><img src="./assets/img/next-arrow.svg" alt=""></div>',
    ],
    navContainer: ".container-btn-3",
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1400: {
        items: 1,
      },
    },
  });
});

// Menu responsive
function openNav() {
  document.getElementById("mySidenav").style.width = "265px";
  document.getElementById("backdrop").style.visibility = "inherit";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("backdrop").style.visibility = "hidden";
}

function subMenu() {
  document.getElementById("sub-menu-1").style.display = "inherit";
}

function openNavProfileMobile() {
  const viewPortWidth = window.innerWidth;
  if (viewPortWidth <= 991) {
    document.getElementById("sideNavCredentialsMobile").style.width = "250px";
  } else {
    document.getElementById("sideNavCredentialsMobile").style.width = "420px";
  }

  document.getElementById("backdrop-web").style.visibility = "inherit";
}

function openNavProfile() {
  const viewPortWidth = window.innerWidth;
  console.log(  document.getElementById("sideNavCredentials"))
  if (viewPortWidth <= 991) {
  
    document.getElementById("sideNavCredentials").style.width = "250px";
    
  } else {
    document.getElementById("sideNavCredentials").style.width = "420px";
  }

  document.getElementById("backdrop-web").style.visibility = "inherit";
}
function closeNavProfile() {
  document.getElementById("sideNavCredentials").style.width = "0";
  document.getElementById("sideNavCredentials").style.transform = "none";
  document.getElementById("backdrop-web").style.visibility = "hidden";
}
function closeNavProfileMobile() {
  
  document.getElementById("sideNavCredentialsMobile").style.width = "0";
  document.getElementById("sideNavCredentialsMobile").style.transform = "none";
  document.getElementById("backdrop-web").style.visibility = "hidden";
}

// Rotate icon menu mobile
function rotateImgArrow(id) {
  let div = document.getElementById(id);
  let img = div.getElementsByTagName("img")[0];

  if (img.style.transform === "rotate(360deg)") {
    img.style.transform = "rotate(270deg)";
  } else {
    img.style.transform = "rotate(360deg)";
  }
}

// Picture in page details product
const sliderMainImage = document.getElementById("product-main-image");
const sliderImageList = document.getElementsByClassName("miniature-picture");
const specificItem = document.getElementsByClassName("image-container");

specificItem[0].classList.remove("picture-container");
specificItem[0].classList.add("image-clicked");

sliderImageList[0].onclick = function () {
  sliderMainImage.src = sliderImageList[0].src;
  specificItem[0].classList.remove("picture-container");
  specificItem[0].classList.add("image-clicked");
  specificItem[1].classList.add("picture-container");
  specificItem[2].classList.add("picture-container");
  specificItem[3].classList.add("picture-container");
  specificItem[4].classList.add("picture-container");
};

sliderImageList[1].onclick = function () {
  sliderMainImage.src = sliderImageList[1].src;
  specificItem[1].classList.remove("picture-container");
  specificItem[1].classList.add("image-clicked");
  specificItem[0].classList.add("picture-container");
  specificItem[2].classList.add("picture-container");
  specificItem[3].classList.add("picture-container");
  specificItem[4].classList.add("picture-container");
};

sliderImageList[2].onclick = function () {
  sliderMainImage.src = sliderImageList[2].src;
  specificItem[2].classList.remove("picture-container");
  specificItem[2].classList.add("image-clicked");
  specificItem[1].classList.add("picture-container");
  specificItem[0].classList.add("picture-container");
  specificItem[3].classList.add("picture-container");
  specificItem[4].classList.add("picture-container");
};

sliderImageList[3].onclick = function () {
  sliderMainImage.src = sliderImageList[3].src;
  specificItem[3].classList.remove("picture-container");
  specificItem[3].classList.add("image-clicked");
  specificItem[1].classList.add("picture-container");
  specificItem[2].classList.add("picture-container");
  specificItem[0].classList.add("picture-container");
  specificItem[4].classList.add("picture-container");
};

sliderImageList[4].onclick = function () {
  sliderMainImage.src = sliderImageList[4].src;
  specificItem[4].classList.remove("picture-container");
  specificItem[4].classList.add("image-clicked");
  specificItem[1].classList.add("picture-container");
  specificItem[2].classList.add("picture-container");
  specificItem[3].classList.add("picture-container");
  specificItem[0].classList.add("picture-container");
};

const imageContainers = document.querySelectorAll(
  ".other-picture-item .image-container"
);
imageContainers.forEach((container) => {
  container.addEventListener("click", function () {
    container.style.display = "none";
  });
});

//Tabs Page Deatails Product
function tabsOfProduct(evt, idTab) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(idTab).style.display = "flex";
  evt.currentTarget.className += " active";
}

// Min and max price filter
function upMinPrice() {
  document.getElementById("input-min-price").stepDown();
  document.getElementById("input-min-price-mobile").stepDown();
}

function downMinPrice() {
  document.getElementById("input-min-price").stepUp();
  document.getElementById("input-min-price-mobile").stepUp();
}

function upMaxPrice() {
  document.getElementById("input-max-price").stepUp();
  document.getElementById("input-max-price-mobile").stepUp();
}

function downMaxPrice() {
  document.getElementById("input-max-price").stepDown();
  document.getElementById("input-max-price-mobile").stepDown();
}

// Filter in device mobile and web
function openFilterMobile() {
  document.getElementById("filterMobileWeb").style.width = "100%";
  document.getElementById("filterMobileWeb").style.display = "block";
  document.body.style.overflow = "hidden";
}
function closeFilterMobile() {
  document.getElementById("filterMobileWeb").style.width = "0";
  document.getElementById("filterMobileWeb").style.display = "none";
  document.body.style.overflow = "inherit";
}

// Read more / less description category
function readMore() {
  let element = document.getElementById("resume-category");
  let btnText = document.getElementById("btnShowText");

  if (element.style.overflow === "hidden" || element.style.overflow === "") {
    element.style.webkitLineClamp = "none";
    element.style.overflow = "visible";
    element.style.textOverflow = "clip";
    element.style.webkitBoxOrient = "initial";
    btnText.innerHTML = "Lire moins";
  } else {
    element.style.webkitLineClamp = "2";
    element.style.overflow = "hidden";
    element.style.textOverflow = "ellipsis";
    element.style.webkitBoxOrient = "vertical";
    btnText.innerHTML = "Lire plus";
  }
}
// Open menu
function dropDownMenu(menu, idPolygone) {
  let dropdown = document.getElementById(menu);
  let polygone = document.getElementById(idPolygone);
  let dropdowns = document.getElementsByClassName("dropdown-content");
  let polygones = document.getElementsByClassName("icon-polygone");
  for (let i = 0; i < dropdowns.length; i++) {
    let openDropdown = dropdowns[i];
    let openPolygone = polygones[i];
    if (
      openDropdown.classList.contains("show-menu") &&
      openDropdown !== dropdown
    ) {
      openDropdown.classList.remove("show-menu");
    }
    else if (
      openPolygone.classList.contains("show-polygone") &&
      openPolygone !== polygone
    ) {
      openPolygone.classList.remove("show-polygone");
    }
  }
  dropdown.classList.toggle("show-menu");
  polygone.classList.toggle("show-polygone");
}

function unchekChekBoxDelivery(checkbox) {
  let checkboxes = document.getElementsByName("delivery");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] !== checkbox) {
      checkboxes[i].checked = false;
    }
  }
}

function unchekChekBoxPayment(checkbox) {
  let checkboxes = document.getElementsByName("payment");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] !== checkbox) {
      checkboxes[i].checked = false;
    }
  }
}

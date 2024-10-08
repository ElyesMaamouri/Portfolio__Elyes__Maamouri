// // // Get the container element
// // var btnContainer = document.getElementById("navigation-menu");

// // // Get all buttons with class="btn" inside the container
// // var btns = btnContainer.getElementsByClassName("nav-link");
// // // Loop through the buttons and add the active class to the current/clicked button

// // for (var i = 0; i < btns.length; i++) {
// //     btns[i].addEventListener("click", function() {
// //       console.log('clicked', btns[0])
// //       var current = document.getElementsByClassName("hello");
// //       current[0].className = current[0].className.replace(" menuActive", "");
// //       this.className += " menuActive";
// //     });
// //   }

//   // Get the container element
// var btnContainer = document.getElementById("navigation-menu");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("hello");

// // // Loop through the buttons and add the active class to the current/clicked button

// // for (var i = 0; i < btns.length; i++) {
// //     btns[i].addEventListener("click", function() {
// //       var current = document.getElementsByClassName("menuActive");
// //       current[0].className = current[0].className.replace(" menuActive", "");
// //       this.className += " menuActive";
// //     });
// //   }
// var i = 0;
// btns.forEach((nav) => {
//     console.log({
//       navPathname: nav.pathname,
//       windowLocationPathname: window.location.pathname,
//       areEqual: nav.pathname === window.location.pathname,
//     });
//   if (nav.pathname === window.location.pathname) {
//     nav.classList.add('menuActive')
//   } else {
//     nav.classList.remove('menuActive')
//   }
// })
// console.log(document.querySelectorAll(".nav-link"))
// document.querySelectorAll(".nav-link").forEach((ele) =>
//   ele.addEventListener("click", function (event) {
//     event.preventDefault();
//     document
//       .querySelectorAll(".hello")
//       .forEach((ele) => ele.classList.remove("menuActive"));
//     this.classList.add("menuActive")
//   })
// );

var currentPage = document.URL;
var links = document.getElementsByClassName("hello");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    if (currentPage.includes(links[i].id)) {
      links[i].classList.add("menuActive");
    }
  });
}

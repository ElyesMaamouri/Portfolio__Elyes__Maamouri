let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector("#menu-toggle");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
let menuCloseOverlay = document.getElementById("menu-overlay");

// Open the menu with the transition

menuOpenBtn.onclick = function() {
  document.getElementById("links-web-site").style.opacity = "1";
  document.getElementById("links-web-site").style.visibility = "visible";
  navLinks.style.left = "0";  
  document.getElementById("menu-overlay").style.display ="block";
}

// Close the menu with the transition
function closeMenu() {
  document.getElementById("menu-overlay").style.display = "none";
  navLinks.style.left = "-100%";  
  setTimeout(() => {  
      document.getElementById("links-web-site").style.opacity = "0";
      document.getElementById("links-web-site").style.visibility = "hidden";
  }, 500);
}
menuCloseBtn.onclick = closeMenu;
menuCloseOverlay.onclick = closeMenu;


// Submenu in the navigation
function showMenuInSideBar (idDiv, idIcon) {
  const element = document.getElementById(idDiv);
  const icon = document.getElementById(idIcon)
 if(icon.style.transform === "rotate(360deg)" || icon.style.transform === "") {
  icon.style.transform ="rotate(180deg)"
 } else {
  icon.style.transform ="rotate(360deg)"
 }
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block"
  } else {
    element.style.display = "none"
  }
}
 
// Open the search
function openSearch() {
    document.getElementById("menu-overlay").style.display ="none"
  document.getElementById("myOverlay").style.display = "block";
  if (window.matchMedia("(max-width: 1100px)").matches) {
      navLinks.style.left = "-100%"; 
      document.getElementById("links-web-site").style.opacity = "0";
      document.getElementById("links-web-site").style.visibility = "hidden";
  }
}

// Close the search
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
  if (window.matchMedia("(min-width: 1100px)").matches) {
      navLinks.style.left = "0"; 
      document.getElementById("links-web-site").style.opacity = "1";
      document.getElementById("links-web-site").style.visibility = "visible";
  }
}


function showFiltersMobile() {
    let filterMobile = document.getElementById("filter-mobile");

    filterMobile.style.display = "block";
    filterMobile.style.padding = "20px"
    filterMobile.style.position = "fixed";
    filterMobile.style.top = "0";
    filterMobile.style.left = "0";
    filterMobile.style.width = "100vw";  
    filterMobile.style.height = "100vh"; 
    filterMobile.style.backgroundColor = "#fff";
    filterMobile.style.zIndex = "999";
    document.body.style.overflow = "hidden";
 
}
function deleteFilterMobile() {
  let filterMobile = document.getElementById("filter-mobile");
filterMobile.style.display = "none";
document.body.style.overflow = "auto";
}
 
document.getElementById("filter-button-mobile").addEventListener("click", showFiltersMobile);
document.getElementById("btn-close-filter-mobile").addEventListener("click", deleteFilterMobile);

 
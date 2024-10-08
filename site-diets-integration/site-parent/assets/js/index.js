const brand = document.getElementById("brand");
const elements = brand.querySelectorAll("*");

if (elements.length > 10) {
  brand.style.overflowX = "scroll";
  brand.style.flexWrap = "nowrap";
  brand.style.maxWidth="900px"
}

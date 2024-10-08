// Display sidebar in mobile
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector("#menu-toggle");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

function showMenuInSideBar(idDiv, idIcon) {
  const element = document.getElementById(idDiv);
  const icon = document.getElementById(idIcon);
  if (
    icon.style.transform === "rotate(360deg)" ||
    icon.style.transform === ""
  ) {
    icon.style.transform = "rotate(180deg)";
  } else {
    icon.style.transform = "rotate(360deg)";
  }
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

// Flags and number phone inputs (Forms)
let locationData = {};
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  separateDialCode: true,
});
const phoneInputFieldSuregy = document.querySelector("#phone-suregy");
let configPhoneInputSuregy = "";
if (phoneInputFieldSuregy !== null) {
  const phoneInputSuregy = window.intlTelInput(phoneInputFieldSuregy, {
    separateDialCode: true,
  });
  configPhoneInputSuregy = phoneInputSuregy;
}

fetch("https://ipinfo.io/?token=47b7f8ac8a0dc7")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error");
    }
    return response.json();
  })
  .then((data) => {
    locationData = data.country;
    console.log(locationData);

    $("#country_selector").countrySelect({
      preferredCountries: [locationData.toLowerCase()],
    });
    phoneInput.setCountry(locationData);

    $("#country_selector_suregy").countrySelect({
      preferredCountries: [locationData.toLowerCase()],
    });

    configPhoneInputSuregy.setCountry(locationData);
  })
  .catch((error) => {
    throw new Error("Error");
  });

$("#country_selector").on("change", function () {
  const selectedCountry = $("#country_selector").countrySelect(
    "getSelectedCountryData"
  );
  phoneInput.setCountry(selectedCountry.iso2);
});

$("#country_selector_suregy").on("change", function () {
  const selectedCountry = $("#country_selector_suregy").countrySelect(
    "getSelectedCountryData"
  );
  configPhoneInputSuregy.setCountry(selectedCountry.iso2);
});

//Tabs Experience suregy
function tabsSuregy(evt, projectName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(projectName).style.display = "block";
  evt.currentTarget.className += " active";
}

//Tabs Price (Page : tarifs)
function tabsPrice(evt, projectName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tabPrice");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      " active-card-surgery",
      ""
    );
  }
  document.getElementById(projectName).style.display = "grid";
  evt.currentTarget.className += " active-card-surgery";
}

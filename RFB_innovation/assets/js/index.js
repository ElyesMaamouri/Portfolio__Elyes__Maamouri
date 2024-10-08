/*Range salary*/
const setLabel = (lbl, val) => {
  const label = $(`#slider-${lbl}-label`);
  label.text(val);
  const slider = $(`#slider-div .${lbl}-slider-handle`);
  const rect = slider[0].getBoundingClientRect();
};
const setLabels = (values) => {
  setLabel("min", values[0] + " €");
  setLabel("max", values[1] + " €");
};

$("#ex2")
  .slider()
  .on("slide", function (ev) {
    setLabels(ev.value);
  });
setLabels($("#ex2").attr("data-value").split(","));


/*Change color card of job if selected*/
let divCardOfJob = document.getElementsByClassName("card-of-job");
let divCardJob = document.getElementsByClassName("card-job");
let divResumeJob = document.getElementsByClassName("resume-job");
let cardToSelect = document.getElementById("selected");
for (let i = 0, len = cardToSelect.children.length; i < len; i++) {
  (function (index) {
    cardToSelect.children[i].onclick = function () {
      resetColor();
      divCardJob[index].style.backgroundColor = "#F6FAFF";
      divResumeJob[index].style.backgroundColor = "#F6FAFF";
      divCardJob[index].style.border = "1px solid #0073FF";
      divResumeJob[index].style.border = "1px solid #0073FF";
      divCardJob[index].style.borderTop = "none";
      divResumeJob[index].style.borderBottom = "none";
    };
  })(i);
}
/*Function to reset color card job*/
function resetColor() {
  for (var j = 0; j < divCardJob.length; j++) {
    for (var k = 0; k < divResumeJob.length; k++) {
      var secondItem = divCardJob[j];
      var thirdItem = divResumeJob[k];
      secondItem.style.backgroundColor = "#FFFFFF";
      secondItem.style.border = "1px solid #eaebef";
      thirdItem.style.backgroundColor = "#eaebef";
      thirdItem.style.border = "1px solid #eaebef";
    }
  }
}
/* Display all filters*/
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close-modal")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/*Reset all filters */
$(document).ready(function () {
  $(".btn-reset").click(function () {
    /*Reset input radio*/
    $(this)
      .parents(".filter-publication")
      .find("#date-1")
      .prop("checked", true);
    $(this)
      .parents(".filter-publication")
      .find("[checked = 'checked']")
      .prop("checked", false);
    /*Reset input checkbox*/
    $("#id_label_1").attr("checked", false);
    $("#id_label_2").attr("checked", false);
    $("#id_label_3").attr("checked", false);
    $("#id_label_4").attr("checked", false);
    $("#id_label_5").attr("checked", false);
    $("#id_label_6").attr("checked", false);
    $("#id_label_7").attr("checked", false);
    $("#id_label_8").attr("checked", false);
    $("#id_label_9").attr("checked", false);
    $("#id_label_10").attr("checked", false);
    $("#id_label_11").attr("checked", false);
    $("#id_label_12").attr("checked", false);
    $("#id_label_13").attr("checked", false);
    $("#id_label_14").attr("checked", false);
    $("#id_label_15").attr("checked", false);
    $("#id_label_16").attr("checked", false);
    $("#id_label_17").attr("checked", false);
    $("#id_label_18").attr("checked", false);
  });
});

/*Active button filter */
$("input[class='form-check-input']").click(function () {
  if ($("#form_id_2 input:checkbox:checked").length > 0) {
    $(".btn-remote-job").addClass("btn-active");
    $(".arrow-img5").addClass("btn-remove-active");
  } else {
    $(".btn-remote-job").removeClass("btn-active");
    $(".arrow-img5").removeClass("btn-remove-active");
  }
});

$("input[class='form-check-input']").click(function () {
  if ($("#form_id_1 input:checkbox:checked").length > 0) {
    $(".btn-contract").addClass("btn-active");
    $(".arrow-img1").addClass("btn-remove-active");
  } else {
    $(".btn-contract").removeClass("btn-active");
    $(".arrow-img1").removeClass("btn-remove-active");
  }
});

/*Remove problem dropdown Menu */
$(document).on("click", ".dropdown-menu", function (e) {
  e.stopPropagation();
});
/*Change icon in button show all filters */
function changeIcon() {
  if (document.getElementById("toj").src.includes("btn-plus")) {
    document
      .getElementById("toj")
      .setAttribute("src", "./assets/img/dash.svg");
  } else if (document.getElementById("toj").src.includes("dash")) {
    document
      .getElementById("toj")
      .setAttribute("src", "./assets/img/btn-plus.svg");
  }
}
/*Custom parameters Data List */
$('.flexdatalist').flexdatalist({
    minLength: 1,
    noResultsText : "Pas de résultat"
});

/*Remove problem dropdown Menu */
$(document).on('click', '.dropdown-menu', function (e) {
    e.stopPropagation();
});



function openProject(evt, projectName) {
  var i, tabcontent, tablinks;
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

/* Open side navigation */
function openNav() {
  document.getElementById("mySideBar").style.width = "250px";
 
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementsByClassName('sidenav').style.backgroundColor = "rgba(0, 0, 0, 0.5)"
}

/*Close side navigation*/
function closeNav() {
  document.getElementById("mySideBar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}




 
function tabsPortfolio(evt, contentDiv) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(contentDiv).style.display = "block";
    evt.currentTarget.className += " active";
  }




















// Récupérer les éléments du carrousel et de la modal
var carouselImages = document.querySelectorAll('.carousel-img');
var modalImage = document.getElementById('modalImage');
var imageModal = new bootstrap.Modal(document.getElementById('imageModal'));

// Ajouter un gestionnaire de clic aux images du carrousel
carouselImages.forEach(function (image) {
  image.addEventListener('click', function () {
    // Récupérer la source de l'image depuis l'attribut data-src
    var imageSrc = image.getAttribute('data-src');
    
    // Mettre à jour la source de l'image dans la modal
    modalImage.setAttribute('src', imageSrc);

    // Afficher la modal
    imageModal.show();
  });
});



















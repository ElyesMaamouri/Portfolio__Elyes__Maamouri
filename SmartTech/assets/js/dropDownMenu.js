function displayFilterMenuButton() {
    const dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.querySelectorAll(".dropdown-content.show");
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove("show");
        });
    }
});
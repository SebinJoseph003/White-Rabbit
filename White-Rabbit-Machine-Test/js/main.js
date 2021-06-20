// === mobile menu ====

let hamberger = document.getElementById("hamberger-menu");
let mobileMenu = document.querySelector(".nav-links ul");
let closeBtn = document.getElementById("pencet");
let allSections = document.getElementsByTagName("section");

function toggleMenu() {
    mobileMenu.classList.toggle("active");
    closeBtn.classList.toggle("close");
}

hamberger.addEventListener('click', toggleMenu);
// === mobile menu ends ====
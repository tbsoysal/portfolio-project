const hamburgerEl = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.nav-menu-mobile');
const closeMenuBtn = document.getElementById("closeMenu");

hamburgerEl.addEventListener('click', ()=> {
    mobileMenu.style.display = "flex";
})

closeMenuBtn.addEventListener('click', ()=> {
    mobileMenu.style.display = "none";
})
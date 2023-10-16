const hamburgerEl = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.nav-menu-mobile');
const closeMenuBtn = document.getElementById("closeMenu");
const body = document.querySelector("body");
const mobileLinks = document.querySelectorAll(".mobile-link");

hamburgerEl.addEventListener('click', ()=> {
    mobileMenu.style.display = "flex";
    body.style.overflowY = "hidden";
})

closeMenuBtn.addEventListener('click', ()=> {
    mobileMenu.style.display = "none";
    body.style.overflowY = "scroll";
})

mobileLinks.forEach(link => link.addEventListener('click', ()=>{
    mobileMenu.style.display = "none";
    body.style.overflowY = "scroll";
}))
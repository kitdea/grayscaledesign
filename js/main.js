const menuBtn = document.getElementsByClassName('toggle-btn')[0];
const navMenu = document.getElementsByClassName('nav-menu')[0];

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
} )
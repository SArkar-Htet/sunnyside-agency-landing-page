const btnHamburger = document.querySelector('#btnHamburger');
const fill = document.querySelector('#btnHamburger svg path');
const navMenu = document.querySelector('#navMenu');

btnHamburger.addEventListener('click', function () {
  if (navMenu.classList.contains('fade-in')) { //Close Hamburger Menu
    navMenu.classList.add('fade-out');
    navMenu.classList.remove('fade-in');
    fill.style.fill = "rgba(250, 250, 250)";
  } else { //Open Hamburger Menu
    navMenu.classList.remove('fade-out');
    navMenu.classList.add('fade-in');
    fill.style.fill = "rgba(250, 250, 250, 0.7)";
  }
})
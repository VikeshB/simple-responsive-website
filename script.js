// script.js

const menuToggle = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello Webpack Playground');
});
/* .container .main-nav .main-menu */
const menuBtn = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main-menu');

menuBtn.addEventListener('click', (e) => {
    mainMenu.classList.toggle('show');
});

mainMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
});
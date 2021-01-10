const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("menuItems");
hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});
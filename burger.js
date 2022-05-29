export default toggleMenu;

// Burger menu
// const burgerBtn = document.querySelector('.burger');
const links = document.querySelectorAll('.mobile-link');
const background = document.querySelector('.shadow-layer');
const menuMobile = document.querySelector('.burger__menu');
const scroll = document.querySelector('body');


links.forEach((link) => link.addEventListener('click', function(event){
    if (link.classList.contains('disabled-link')) {
                event.preventDefault();}
          else         { toggleMenu();}
}))


  background?.addEventListener('click', toggleMenu);


 function toggleMenu () {
    menuMobile.classList.toggle('burger__menu_active');
    background.classList.toggle('shadow_add');
    burgerBtn.classList.toggle('burger_active');


    if (background.classList.contains('shadow_add')) {
        scroll.style.overflowY = 'hidden';
    }
    else {
        scroll.style.overflowY = 'auto';
    }
 }
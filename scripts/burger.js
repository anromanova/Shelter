export const burgerBtn = document.querySelector('.burger');
export const menuMobile = document.querySelector('.burger__menu');
export const links = document.querySelectorAll('.mobile-link');

export const background = document.querySelector('.shadow-layer');
export const scroll = document.querySelector('body');


export const toggleMenu = () => {
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
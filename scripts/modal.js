export const modalButton = document.querySelector('.modal-button');
export const petCard = document.querySelectorAll('article');
export const learnButton = document.querySelectorAll('.item__button');
export const modal = document.querySelector('.modal__card');
export const modalShadow = document.querySelector('.modal-shadow');
export const cardHover = document.querySelector('.card-content');

import { petShow } from './card.js';
import { scroll } from './burger.js';


petCard.forEach(card => card.addEventListener('click', (e) => {
    const index = e.currentTarget.getAttribute('data-dog-id');
    modalOpen(index);
    petShow(index);
}));


learnButton.forEach(button => button.addEventListener('click', (e) => {
    const index = e.target.getAttribute('data-dog-id');
    modalOpen(index);
    petShow(index);
}));


export const modalOpen = (index) => {
    modal.classList.add('modal_open');
    modalShadow.classList.add('shadow_active');
    petShow(index);
    scroll.style.overflowY = 'hidden';
    modal.classList.add('slider_active');
}


export const modalClose = () => {
    modal.classList.remove('modal_open');
    modalShadow.classList.remove('shadow_active');
    scroll.style.overflowY = 'auto';
}


modalButton.addEventListener('click', modalClose);
modalShadow.addEventListener('click', modalClose);
cardHover.addEventListener('mouseout', () => {
    modalButton.style.backgroundColor = '#f1cdb3'
})

cardHover.addEventListener('mouseover', () => {
    modalButton.style.backgroundColor = 'transparent'
})

modalButton.addEventListener('mousemove', () => {
    modalButton.style.backgroundColor = '#fddcc4'
})
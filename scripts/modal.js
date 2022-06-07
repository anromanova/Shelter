const modalButton = document.querySelector('.modal-button');
const petCard = document.querySelectorAll('article');
const learnButton = document.querySelectorAll('.item__button');
const modal = document.querySelector('.modal__card');
const modalShadow = document.querySelector('.modal-shadow');
const cardHover = document.querySelector('.card-content');

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


const modalOpen = (index) => {
    modal.classList.add('modal_open');
    modalShadow.classList.add('shadow_active');
    petShow(index);
    scroll.style.overflowY = 'hidden';
    modal.classList.add('slider_active');
}


const modalClose = () => {
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
'use strict'

import './burger.js';
import './modal.js';
import './card.js';

export let petsArr;
export function getPets() {
  return fetch('../../scripts/pets.json')
    .then(response => {
      return response.json();
    })
    .then(data => {
      petsArr = data.map((item, index) => ({ ...item, id: index }));
      return petsArr;
    });
}

getPets();


export const slide = document.querySelectorAll('.slider__item');


export const renderSlide = (data) => {

  slide.forEach((item, index) => {
    item.querySelector('img').setAttribute('src', `../../${data[index].img}`);
    item.querySelector('p').innerHTML = data[index].name;
    item.querySelector('button').setAttribute('data-dog-id', data[index].id);
    item.setAttribute('data-dog-id', data[index].id);
  })
}


slide.forEach(item => ('animationend', () => {
  item.classList.remove('slider_active')
}))
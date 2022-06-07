import './burger.js';
import './modal.js';
import './card.js';

import pets from './pets.json' assert { type: "json" };
export let petsArr = pets.map((item, index) => ({ ...item, id: index }));

// 'use strict'

// let petsArr;
// function getPets() {
//   return fetch('../../pets.json')
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       petsArr = data.map((item, index) => ({ ...item, id: index }));
//       console.log(petsArr);
//       return petsArr;
//     });
// }

// getPets();


export const slide = document.querySelectorAll('.slider__item');


export function renderSlide(data) {

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
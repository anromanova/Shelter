import { burgerBtn, toggleMenu, background, links } from './burger.js';
import './modal.js';

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


links.forEach((link) => link.addEventListener('click', function (event) {
  if (link.classList.contains('disabled-link')) {
    event.preventDefault();
  }
  else { toggleMenu(); }
}))

burgerBtn.addEventListener('click', toggleMenu);
background.addEventListener('click', toggleMenu);


// pet's card
const card = document.querySelector('.modal__card');
const age = card.querySelector('.card-age');
const inoculations = card.querySelector('.card-inoculations');
const diseases = card.querySelector('.card-diseases');
const parasites = card.querySelector('.card-parasites');
let petImg = card.querySelector('img');
let petName = card.querySelector('h3');
const petText = card.querySelector('.card-text');
const petBreed = card.querySelector('.card-pet');


export function petShow(index) {
  inoculations.innerHTML = ` ${pets[index].inoculations}`;
  age.innerHTML = pets[index].age;
  parasites.innerHTML = pets[index].parasites;
  diseases.innerHTML = pets[index].diseases;
  petName.innerHTML = pets[index].name;
  petText.innerHTML = pets[index].description;
  petBreed.innerHTML = `${pets[index].type} - ${pets[index].breed}`;
  petImg.setAttribute('src', `../../${pets[index].img}`);

}


//render cards
export const slide = document.querySelectorAll('.slider__item');


export function renderSlide(data) {

  slide.forEach((item, index) => {
    item.querySelector('img').setAttribute('src', `../../${data[index].img}`);
    item.querySelector('p').innerHTML = data[index].name;
    item.querySelector('button').setAttribute('data-dog-id', data[index].id);
    item.setAttribute('data-dog-id', data[index].id);
  })
}


slide?.forEach(item => ('animationend', () => {
  item.classList.remove('slider_active')
}))


// window.addEventListener('load', () => {
//   getDataForNextSlide(dataCurSlide);
//   renderSlide(dataCurSlide);
// });
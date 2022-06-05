import { burgerBtn, toggleMenu, background, links } from './burger.js';
import { modalOpen, modalClose, learnButton, petCard, modalButton, modal, modalShadow, cardHover } from './modal.js';

import pets from '../../pets.json' assert { type: "json" };
let petsArr = pets.map((item, index) => ({ ...item, id: index }));

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

// slider
const buttonNext = document.querySelector('.slider_next');
const buttonPrev = document.querySelector('.slider_prev');


//render cards
const sliderElement = document.querySelector('.slider_items');
const slide = document.querySelectorAll('.slider__item');
const allPetsElement = document.querySelector('.pets-cards');


// function renderPagination() {
//   allPetsElement?.querySelectorAll('.slider__item').forEach((item, index) => {
//     item.querySelector('img').setAttribute('src', `../../${petsArr[index].img}`);
//     item.querySelector('p').innerHTML = petsArr[index].name;
//     item.querySelector('button').setAttribute('data-dog-id', index);
//     item.setAttribute('data-dog-id', index);
//   })
// }


// window.addEventListener('load', renderPagination());


function renderSlide(data) {

  slide.forEach((item, index) => {
    item.querySelector('img').setAttribute('src', `../../${data[index].img}`);
    item.querySelector('p').innerHTML = data[index].name;
    item.querySelector('button').setAttribute('data-dog-id', data[index].id);
    item.setAttribute('data-dog-id', data[index].id);
  })
}

// function renderSlide(data, part) {

//   part.forEach((item, index) => {
//     item.querySelector('img').setAttribute('src', `../../${data[index].img}`);
//     item.querySelector('p').innerHTML = data[index].name;
//     item.querySelector('button').setAttribute('data-dog-id', data[index].id);
//     item.setAttribute('data-dog-id', data[index].id);
//   })
// }

const cardsPerSlide = 3;


let dataCurSlide = petsArr.slice(0, cardsPerSlide);
// renderSlide(dataCurSlide);


const getDataForNextSlide = (dataCurrentSlide) => {
  let curSlideIndexes = dataCurrentSlide.map((index => index.id));
  const filteredDogsArr = petsArr.map(index => index.id).filter(item => !curSlideIndexes.includes(item));
  const shuffled = filteredDogsArr.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, cardsPerSlide);
  dataCurSlide = selected.map(index => ({ ...petsArr[index], id: index }));
  return dataCurSlide;
}


buttonNext?.addEventListener('click', () => {
  const dataNexSlide = getDataForNextSlide(dataCurSlide);
  renderSlide(dataNexSlide);

})

buttonPrev?.addEventListener('click', () => {
  const dataNexSlide = getDataForNextSlide(dataCurSlide);
  renderSlide(dataNexSlide);
})

buttonPrev?.addEventListener('mouseup', () => {
  slide.forEach(item => { item.classList.add('slider_active') })
})
buttonPrev?.addEventListener('mousedown', () => {
  slide.forEach(item => { item.classList.remove('slider_active') })
})

buttonNext?.addEventListener('mouseup', () => {
  slide.forEach(item => { item.classList.add('slider_active') })
})
buttonNext?.addEventListener('mousedown', () => {
  slide.forEach(item => { item.classList.remove('slider_active') })
})




slide?.forEach(item => ('animationend', () => {
  item.classList.remove('slider_active')
}))


// pagination

const pagination = document.querySelector('.pagination-list__pets');
const btnPaginationLast = pagination.querySelector('.pagination-list__last');
const btnPaginationNext = pagination.querySelector('.pagination-list__next');
const btnPaginationFirst = pagination.querySelector('.pagination-list__first');
const btnPaginationPrev = pagination.querySelector('.pagination-list__prev');
const pageNumber = pagination.querySelector('.pagination-list__number');

let totalPets = 48;
let currentPage = 1;
let petsPerPage;
let width = document.body.clientWidth;

if (width >= 1280) {
  petsPerPage = 8;
}
else if (width < 1280 && width >= 768) {
  petsPerPage = 6;
}
else {
  petsPerPage = 3;
}

let totalPages = Math.ceil(totalPets / petsPerPage);

let paginationPetsArr = [];
function createPaginationArray() {
  currentPage = -1;
  for (let i = 0; i < totalPets; i++) {
    if (i % 8 === 0) {
      currentPage++;
      paginationPetsArr[currentPage] = [];
    }
    // paginationPetsArr[currentPage].push(i % 8);
    paginationPetsArr[currentPage].push(petsArr[i % 8]);
  }
  for (let i = 0; i < paginationPetsArr.length; i++) {
    shuffle(paginationPetsArr[i]);
  }
  paginationPetsArr = paginationPetsArr.flat();
  console.log(paginationPetsArr);
  return paginationPetsArr;
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


// function createPaginationArray() {
//   currentPage = -1;
//   for (let i = 0; i < totalPets; i++) {
//     paginationPetsArr.push((i % 8));
//   }
//   for (let i = 0; i % 8 === 0; i++) {
//     paginationPetsArr = paginationPetsArr.slice(i, i + 7).sort(() => Math.random() - 0.5).concat(paginationPetsArr.slice(i + 7));
//     i++;
//   }
// console.log(paginationPetsArr)
// return paginationPetsArr;
// }



btnPaginationPrev.addEventListener('click', prevPage);
btnPaginationNext.addEventListener('click', nextPage);
btnPaginationLast.addEventListener('click', lastPage);
btnPaginationFirst.addEventListener('click', firstPage);


function lastPage() {
  currentPage = totalPages;
  changePage(currentPage);
}

function firstPage() {
  currentPage = 1;
  changePage(currentPage);
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    changePage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    changePage(currentPage);
  }
}

function changePage(page) {
  page = currentPage;
  if (page < 1) {
    page = 1;
  }
  if (page > totalPages) {
    page = totalPages;
  }
  for (let i = (page - 1) * petsPerPage; i < (page * petsPerPage); i++) {
    renderSlide(paginationPetsArr);
  }
  pageNumber.innerHTML = page;

  if (page === 1) {
    btnPaginationFirst.classList.add('button-round--inactive');
    btnPaginationPrev.classList.add('button-round--inactive');
  }
  else {
    btnPaginationFirst.classList.remove('button-round--inactive');
    btnPaginationPrev.classList.remove('button-round--inactive');
  }
  if (page === totalPages) {
    btnPaginationLast.classList.add('button-round--inactive');
    btnPaginationNext.classList.add('button-round--inactive');
  }
  else {
    btnPaginationLast.classList.remove('button-round--inactive');
    btnPaginationNext.classList.remove('button-round--inactive');
  }
}


window.addEventListener('load', () => {
  createPaginationArray();
  changePage();
  // renderSlide(paginationPetsArr)
});
// window.addEventListener('load', renderSlide(paginationPetsArr));
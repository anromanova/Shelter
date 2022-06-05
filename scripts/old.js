'use strict'
import pets from '../../pets.json' assert { type: "json" };
let petsArr = pets.map((item, index) => ({ ...item, id: index }));
console.log(petsArr)


// Burger menu
const burgerBtn = document.querySelector('.burger');
const links = document.querySelectorAll('.mobile-link');
const background = document.querySelector('.shadow-layer');
const menuMobile = document.querySelector('.burger__menu');
const scroll = document.querySelector('body');


burgerBtn.addEventListener('click', toggleMenu);

links.forEach((link) => link.addEventListener('click', function (event) {
    if (link.classList.contains('disabled-link')) {
        event.preventDefault();
    }
    else { toggleMenu(); }
}))


background?.addEventListener('click', toggleMenu);


function toggleMenu() {
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


// popup open/close
const modalButton = document.querySelector('.modal-button');
const petCard = document.querySelectorAll('article');
const learnButton = document.querySelectorAll('.item__button');
const modal = document.querySelector('.modal__card');
const modalShadow = document.querySelector('.modal-shadow');
const cardHover = document.querySelector('.card-content')

modalShadow?.addEventListener('click', modalClose);
cardHover?.addEventListener('mouseout', () => {
    modalButton.style.backgroundColor = '#f1cdb3'
})

cardHover?.addEventListener('mouseover', () => {
    modalButton.style.backgroundColor = 'transparent'
})

modalButton?.addEventListener('mousemove', () => {
    modalButton.style.backgroundColor = '#fddcc4'
})


petCard.forEach(card => card.addEventListener('click', (e) => {
    const index = e.currentTarget.getAttribute('data-dog-id');
    console.log(index)
    modalOpen(index);
    petShow(index);
}));


learnButton.forEach(button => button.addEventListener('click', (e) => {
    const index = e.target.getAttribute('data-dog-id');
    modalOpen(index);
    petShow(index);
}));

modalButton?.addEventListener('click', modalClose);


function modalOpen(index) {
    modal.classList.add('modal_open');
    modalShadow?.classList.add('shadow_active');
    petShow(index);
    scroll.style.overflowY = 'hidden';
    renderSlide(dataCurSlide);
    modal.classList.add('slider_active');
}


function modalClose() {
    modal.classList.remove('modal_open');
    modalShadow.classList.remove('shadow_active');
    scroll.style.overflowY = 'auto';
}


// pet's card
const card = document.querySelector('.modal__card');
const age = document.querySelector('.card-age');
const inoculations = document.querySelector('.card-inoculations');
const diseases = document.querySelector('.card-diseases');
const parasites = document.querySelector('.card-parasites');
let petImg = document.querySelector('img');
let petName = document.querySelector('h3');
const petText = document.querySelector('.card-text');
const petBreed = document.querySelector('.card-pet');


function petShow(index) {
    console.log(index)
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
const allPetsElement = document.querySelector('.pets-cards')


function renderPagination() {
    allPetsElement?.querySelectorAll('.slider__item').forEach((item, index) => {
        item.querySelector('img').setAttribute('src', `../../${petsArr[index].img}`);
        item.querySelector('p').innerHTML = petsArr[index].name;
        item.querySelector('button').setAttribute('data-dog-id', index);
        item.setAttribute('data-dog-id', index);
    })
}

window.addEventListener('load', renderPagination());


function renderSlide(data) {

    sliderElement?.querySelectorAll('.slider__item').forEach((item, index) => {
        item.querySelector('img').setAttribute('src', `../../${data[index].img}`);
        item.querySelector('p').innerHTML = data[index].name;
        item.querySelector('button').setAttribute('data-dog-id', data[index].id);
        item.setAttribute('data-dog-id', data[index].id);
    })
}


const cardsPerSlide = 3;


let dataCurSlide = petsArr.slice(0, cardsPerSlide);
renderSlide(dataCurSlide);


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


const slide = sliderElement?.querySelectorAll('.slider__item');

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
        let paginationPetsArr = [];
        petsArr.sort(() => 0.5 - Math.random());

        for (let i = 0; i < totalPages; i++) {
            petsArr.forEach((pet) => paginationPetsArr.push(pet));
            paginationPetsArr.push(paginationPetsArr);

        }
        allPetsElement?.querySelectorAll('.slider__item').forEach((item, index) => {
            item.querySelector('img').setAttribute('src', `../../${paginationPetsArr[index].img}`);
            item.querySelector('p').innerHTML = paginationPetsArr[index].name;
            item.querySelector('button').setAttribute('data-dog-id', paginationPetsArr[index].id);
            item.setAttribute('data-dog-id', paginationPetsArr[index].id);
        })
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

window.addEventListener('load', changePage());

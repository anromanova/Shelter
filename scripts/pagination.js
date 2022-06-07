// import { petsArr, renderSlide } from './index.js';
import { getPets, petsArr, renderSlide } from './index.js';

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
        paginationPetsArr[currentPage].push(petsArr[i % 8]);
    }
    for (let i = 0; i < paginationPetsArr.length; i++) {
        shuffle(paginationPetsArr[i]);
    }
    paginationPetsArr = paginationPetsArr.flat();
    return paginationPetsArr;
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}


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
    renderSlide(paginationPetsArr.slice((page - 1) * petsPerPage, (page - 1) * petsPerPage + petsPerPage));
    if (pageNumber) {
        pageNumber.innerHTML = page;
    }

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
    getPets().then(() => {
        createPaginationArray();
        firstPage();
    });
});

// window.addEventListener('load', () => {
//     createPaginationArray();
//     firstPage();
// });
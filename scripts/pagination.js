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

const createPaginationArray = () => {
    currentPage = -1;
    for (let i = 0; i < totalPets; i++) {
        if (i % petsPerPage === 0) {
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

const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
}

const lastPage = () => {
    currentPage = totalPages;
    changePage(currentPage);
}

const firstPage = () => {
    currentPage = 1;
    changePage(currentPage);
}

const nextPage = () => {
    if (currentPage < totalPages) {
        currentPage++;
        changePage(currentPage);
    }
}

const prevPage = () => {
    if (currentPage > 1) {
        currentPage--;
        changePage(currentPage);
    }
}

const changePage = (page) => {
    page = currentPage;
    if (page < 1) {
        page = 1;
    }
    if (page > totalPages) {
        page = totalPages;
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
    pageNumber.innerHTML = page;
    let data = paginationPetsArr.slice((page - 1) * petsPerPage, (page - 1) * petsPerPage + petsPerPage);
    renderSlide(data);
}

btnPaginationPrev.addEventListener('click', prevPage);
btnPaginationNext.addEventListener('click', nextPage);
btnPaginationLast.addEventListener('click', lastPage);
btnPaginationFirst.addEventListener('click', firstPage);


window.addEventListener('load', () => {
    getPets().then(() => {
        createPaginationArray();
        firstPage();
    });
});
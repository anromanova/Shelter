import { petsArr } from './index.js';


const card = document.querySelector('.modal__card');
const age = card.querySelector('.card-age');
const inoculations = card.querySelector('.card-inoculations');
const diseases = card.querySelector('.card-diseases');
const parasites = card.querySelector('.card-parasites');
let petImg = card.querySelector('img');
let petName = card.querySelector('h3');
const petText = card.querySelector('.card-text');
const petBreed = card.querySelector('.card-pet');


export const petShow = (index) => {
    inoculations.innerHTML = ` ${petsArr[index].inoculations}`;
    age.innerHTML = petsArr[index].age;
    parasites.innerHTML = petsArr[index].parasites;
    diseases.innerHTML = petsArr[index].diseases;
    petName.innerHTML = petsArr[index].name;
    petText.innerHTML = petsArr[index].description;
    petBreed.innerHTML = `${petsArr[index].type} - ${petsArr[index].breed}`;
    petImg.setAttribute('src', `../../${petsArr[index].img}`);
}
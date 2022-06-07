import { petsArr } from './index.js';
// import pets from './pets.json' assert { type: "json" };

const card = document.querySelector('.modal__card');
const age = card.querySelector('.card-age');
const inoculations = card.querySelector('.card-inoculations');
const diseases = card.querySelector('.card-diseases');
const parasites = card.querySelector('.card-parasites');
let petImg = card.querySelector('img');
let petName = card.querySelector('h3');
const petText = card.querySelector('.card-text');
const petBreed = card.querySelector('.card-pet');


// export function petShow(index) {
//     inoculations.innerHTML = ` ${pets[index].inoculations}`;
//     age.innerHTML = pets[index].age;
//     parasites.innerHTML = pets[index].parasites;
//     diseases.innerHTML = pets[index].diseases;
//     petName.innerHTML = pets[index].name;
//     petText.innerHTML = pets[index].description;
//     petBreed.innerHTML = `${pets[index].type} - ${pets[index].breed}`;
//     petImg.setAttribute('src', `../../${pets[index].img}`);
// }

export function petShow(index) {
    inoculations.innerHTML = ` ${petsArr[index].inoculations}`;
    age.innerHTML = petsArr[index].age;
    parasites.innerHTML = petsArr[index].parasites;
    diseases.innerHTML = petsArr[index].diseases;
    petName.innerHTML = petsArr[index].name;
    petText.innerHTML = petsArr[index].description;
    petBreed.innerHTML = `${petsArr[index].type} - ${petsArr[index].breed}`;
    petImg.setAttribute('src', `../../${petsArr[index].img}`);
}
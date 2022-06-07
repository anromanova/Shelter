// import { petsArr, renderSlide, dataCurSlide, slide } from './index.js'
// // import { getPets, petsArr, renderSlide, dataCurSlide, slide } from './index.js'

// export let cardsPerSlide = 3;

// const buttonNext = document.querySelector('.slider_next');
// const buttonPrev = document.querySelector('.slider_prev');

// buttonNext.addEventListener('click', () => {
//     let dataNexSlide = getDataForNextSlide(dataCurSlide);
//     renderSlide(dataNexSlide);

// })

// buttonPrev.addEventListener('click', () => {
//     let dataNexSlide = getDataForNextSlide(dataCurSlide);
//     renderSlide(dataNexSlide);
// })

// buttonPrev.addEventListener('mouseup', () => {
//     slide.forEach(item => { item.classList.add('slider_active') })
// })
// buttonPrev.addEventListener('mousedown', () => {
//     slide.forEach(item => { item.classList.remove('slider_active') })
// })

// buttonNext.addEventListener('mouseup', () => {
//     slide.forEach(item => { item.classList.add('slider_active') })
// })
// buttonNext.addEventListener('mousedown', () => {
//     slide.forEach(item => { item.classList.remove('slider_active') })
// })

// export let getDataForNextSlide = (dataCurrentSlide) => {
//     console.log(dataCurrentSlide)
//     let curSlideIndexes = dataCurrentSlide.map((index => index.id));
//     const filteredDogsArr = petsArr.map(index => index.id).filter(item => !curSlideIndexes.includes(item));
//     const shuffled = filteredDogsArr.sort(() => 0.5 - Math.random());
//     const selected = shuffled.slice(0, cardsPerSlide);
//     dataCurSlide = selected.map(index => ({ ...petsArr[index], id: index }));
//     return dataCurSlide;
// }

// // window.addEventListener('load', () => {
// //     getPets().then(() => {
// //         dataCurSlide = petsArr.slice(0, cardsPerSlide);
// //         getDataForNextSlide(dataCurSlide);
// //     });
// // });


// window.addEventListener('load', () => {
//     // dataCurSlide = petsArr.slice(0, cardsPerSlide);
//     // getDataForNextSlide(dataCurSlide);
// });
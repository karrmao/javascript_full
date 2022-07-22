/**************************************************************************/
// const searchInput = document.querySelector('.search__input');
// const searchBtn = document.querySelector('.search__btn');

// const funcOutputText = () => {
//   const inputText = searchInput.value;
//   console.log(inputText);
// };

// searchBtn.addEventListener('click', funcOutputText);

/**************************************************************************/
// //ref1

// const searchInput = document.querySelector('.search__input');
// const searchBtn = document.querySelector('.search__btn');

// const funcOutputText = () => {
//   console.log(searchInput.value);
// };

// searchBtn.addEventListener('click', funcOutputText);

/**************************************************************************/
// //ref2

// const searchInput = document.querySelector('.search__input');
// const searchBtn = document.querySelector('.search__btn');

// searchBtn.addEventListener(
//   'click',
//   (funcOutputText = () => {
//     console.log(searchInput.value);
//   }),
// );

/**************************************************************************/
//ref3

const searchInput = document.querySelector('.search__input');
const searchBtn = document.querySelector('.search__btn');

searchBtn.addEventListener('click', () => {
  console.log(searchInput.value);
});

/**************************************************************************/
//ref4

// const searchInput = document.querySelector('.search__input');
// const searchBtn = document.querySelector('.search__btn');

// searchBtn.addEventListener('click', () => console.log(searchInput.value));

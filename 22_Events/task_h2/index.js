// const textInput = document.querySelector('.text-input');

// const imputChange = () => {
//   const inputValue = textInput.value;
//   console.log(inputValue);
// };

// textInput.addEventListener('change', imputChange);

// /**************************************************************************/
////ref1

// const textInput = document.querySelector('.text-input');

// const imputChange = () => {
//   console.log(textInput.value);
// };

// textInput.addEventListener('change', imputChange);

// /**************************************************************************/
////ref2

// const textInput = document.querySelector('.text-input');

// textInput.addEventListener(
//   'change',
//   (imputChange = () => {
//     console.log(textInput.value);
//   }),
// );

// /**************************************************************************/
// //ref3

const textInput = document.querySelector('.text-input');

textInput.addEventListener('change', () => {
  console.log(textInput.value);
});

// /**************************************************************************/
// //ref4

// const textInput = document.querySelector('.text-input');

// textInput.addEventListener('change', () => console.log(textInput.value));

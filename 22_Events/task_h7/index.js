// const twoBtns = document.querySelectorAll('.btn');

// const handleClick = event => {
//   console.log(event.target.textContent);
// };

// [...twoBtns].map(el => el.addEventListener('click', handleClick));

const textInput = document.querySelector('.text-input');
const getTextInput = event => {
  console.log(event.target.value);
};
textInput.addEventListener('change', getTextInput);

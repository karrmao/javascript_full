const textInput = document.querySelector('.text-input');
const getTextInput = event => {
  console.log(event.target.value);
};
textInput.addEventListener('change', getTextInput);

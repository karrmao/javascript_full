/*export*/ const createButton = buttonText => {
  //document.createElement('button');
  const button = document.createElement('button');
  console.log(button);
  button.textContent = buttonText;
  document.querySelector('body').append(button);
  return button;
};
// };
/*export*/
console.log(createButton('Просто кнопка'));

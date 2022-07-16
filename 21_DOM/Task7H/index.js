// /*export*/ const setButton = buttonText => {
//   const res = (document.querySelector('body').innerHTML = `<button>${buttonText}</button>`);
//   console.dir(res);
// };

// setButton('Просто кнопка');

//console.log('bb');

export const createButton = buttonText => {
  document.createElement('button').body.append(`<button>${buttonText}</button>`);
};
/*export*/
//document.creat('.categories').innerHTML = '';

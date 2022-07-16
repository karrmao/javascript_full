// /*export*/ const setTitle = text => {
//   document.querySelector('.title').textContent = text;
//   //   console.dir(addText);
//   //return addText;
// };

export const setButton = buttonText => {
  const addBody = (document.querySelector('body').innerHTML = buttonText);
};

setButton('<button>button text</button>');

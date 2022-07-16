export let setTitle = text => {
  let addText = document.querySelector('.title');
  addText.textContent = text;
  //   console.dir(addText);
  //return addText;
};

console.log(setTitle('lll'));

// export const setTitle = text => {
//   const addText = document.querySelector('.title');
//   //addText.textContent = text;
//   //console.dir(addText);
//   return addText;
// };

// console.log((setTitle.textContent = 'lll'));

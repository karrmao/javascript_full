// const squaredNumbers = () => {
//   const dataNumber = [...document.querySelectorAll('.number')];
//   const toSquared = el => el * el;

//   dataNumber.forEach(el => {
//     const { _, number } = el.dataset;
//     el.setAttribute('data-squared-number', toSquared(number));
//   });
// };

/*********/
function squaredNumbers() {
  const listItems = Array.from(document.querySelectorAll('li'));
  listItems.forEach(el => {
    const squared = el.dataset.number * el.dataset.number;
    console.log('squ ', squared);
    console.log((el.dataset.squaredNumber = squared));
  });
  console.log(listItems);
}

squaredNumbers();

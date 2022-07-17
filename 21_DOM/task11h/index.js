export const squaredNumbers = () => {
  const dataNumber = [...document.querySelectorAll('.number')];
  const toSquared = el => el * el;

  dataNumber.forEach(el => {
    const { _, number } = el.dataset;
    el.setAttribute('data-squared-number', toSquared(number));
  });
};
//console.log(squaredNumbers());

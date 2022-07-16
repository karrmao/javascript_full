export const getTitle = () => {
  const textContent = document.querySelector('.title');
  console.dir(textContent);
  return textContent;
};
getTitle();

export const getDescription = () => {
  const innerText = document.querySelector('.about');
  console.dir(innerText);
  return innerText;
};

getDescription();

export const getPlans = () => {
  const innerHTML = document.querySelector('.plans');
  console.dir(innerHTML);
  return innerHTML;
};

getPlans();

export const getGoal = () => {
  const outerHTML = document.querySelector('.goal');
  console.dir(outerHTML);
  return outerHTML;
};

getGoal();
// /*export*/

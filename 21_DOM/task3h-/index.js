export const getTitle = () => {
  const textContent = document.querySelector('.title').textContent;
  //console.dir(textContent);
  return textContent;
};

getTitle();

export const getDescription = () => {
  const innerText = document.querySelector('.about').innerText;
  //console.dir(innerText);
  return innerText;
};

getDescription();

export const getPlans = () => {
  const innerHTML = document.querySelector('.plans').innerHTML;
  //console.dir(innerHTML);
  return innerHTML;
};

getPlans();

export const getGoal = () => {
  const outerHTML = document.querySelector('.goal').outerHTML;
  //console.dir(outerHTML);
  return outerHTML;
};

getGoal();
// /*export*/

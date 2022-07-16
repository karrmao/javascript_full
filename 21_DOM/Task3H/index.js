// export const getTitle = () => {
//   const textContent = document.querySelector('.title');
//   console.dir(textContent);
//   return textContent;
// };

// getTitle();
// // getTitle.textContent;
// console.log(getTitle.textContent);

// export const getDescription = () => {
//   const innerText = document.querySelector('.about');
//   console.dir(innerText);
//   return innerText;
// };

// getDescription();

// export const getPlans = () => {
//   const innerHTML = document.querySelector('.plans');
//   console.dir(innerHTML);
//   return innerHTML;
// };

// getPlans();

// export const getGoal = () => {
//   const outerHTML = document.querySelector('.goal');
//   console.dir(outerHTML);
//   return outerHTML;
// };

// getGoal();
// /*export*/

export const getTitle = document.querySelector('.title');
console.log(getTitle.textContent);

export const getDescription = document.querySelector('.about');
console.log(getDescription.innerText);

export const getPlans = document.querySelector('.plans');
console.log(getDescription.innerHTML);

export const getGoal = document.querySelector('.goal');
console.log(getDescription.outerHTML);

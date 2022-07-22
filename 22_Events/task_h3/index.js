// const taskStatus = document.querySelector('.task-status');
// const funcChekedOrNot = () => {
//   console.log(taskStatus.checked);
// };
// taskStatus.addEventListener('change', funcChekedOrNot);

/**************************************************************************/
// //ref1

// const taskStatus = document.querySelector('.task-status');

// taskStatus.addEventListener(
//   'change',
//   (funcChekedOrNot = () => {
//     console.log(taskStatus.checked);
//   }),
// );

// /**************************************************************************/
// //ref2

const taskStatus = document.querySelector('.task-status');

taskStatus.addEventListener('change', () => {
  console.log(taskStatus.checked);
});

/**************************************************************************/
//ref3

// const taskStatus = document.querySelector('.task-status');
// taskStatus.addEventListener('change', () => console.log(taskStatus.checked));

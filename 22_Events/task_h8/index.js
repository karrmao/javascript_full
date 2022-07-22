const taskStatus = document.querySelector('.task-status');
const changeInput = event => {
  console.log(event.target.checked);
};
taskStatus.addEventListener('change', changeInput);

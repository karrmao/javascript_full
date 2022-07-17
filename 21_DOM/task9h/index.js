export const finishForm = () => {
  const addInnput = document.querySelector('.login-form');

  const input = document.createElement('input');

  input.setAttribute('type', 'text');
  input.setAttribute('name', 'login');
  addInnput.prepend(input);

  addInnput.lastElementChild.setAttribute('type', 'password');
};

//console.log(finishForm());

const finishFrom = () => {
  const addInnput = document.querySelector('.login-form');

  const input = document.createElement('input');

  console.log(input.setAttribute('type', 'text'));
  console.log(input.setAttribute('name', 'login'));
  console.log(addInnput.prepend(input));

  addInnput.lastElementChild.setAttribute('type', 'password');
};

//console.log(finishFrom());

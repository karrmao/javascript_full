const twoBtns = document.querySelectorAll('.btn');

const handleClick = event => {
  console.log(event.target.textContent);
};

[...twoBtns].map(el => el.addEventListener('click', handleClick));

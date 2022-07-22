const numberBtns = document.querySelectorAll('.pagination__page');
const handleClick = event => {
  console.log(event.target.dataset.pageNumber);
};
[...numberBtns].map(el => el.addEventListener('click', handleClick));

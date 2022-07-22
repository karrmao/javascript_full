const singleUseBtn = document.querySelector('.single-use-btn');

const funcToClicked = () => {
  console.log('clicked');
  singleUseBtn.removeEventListener('click', funcToClicked);
};

singleUseBtn.addEventListener('click', funcToClicked);

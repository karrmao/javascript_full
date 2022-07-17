export const manageClasses = () => {
  document.querySelector('.one').classList.add('selected');
  document.querySelector('.two').classList.remove('selected');
  document.querySelector('.three').classList.toggle('three_done');

  const includesSomeClass = document.querySelector('.four');
  if (includesSomeClass.classList.contains('some-class')) {
    includesSomeClass.classList.add('another-class');
  }
};

console.log(manageClasses());

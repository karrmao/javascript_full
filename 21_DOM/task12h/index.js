const getSection2 = num => {
  const findNumber = document.querySelector(`span[data-number="${num}"`);
  return findNumber.parentElement.dataset.section;
};
console.log(getSection2(5));

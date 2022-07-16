export const finishList = () => {
  const items = document.querySelector('.list');
  const specialItem = items.querySelector('.special');

  const firstItem = document.createElement('li');
  firstItem.textContent = 1;
  items.prepend(firstItem);

  const thirdItem = document.createElement('li');
  thirdItem.textContent = 4;
  specialItem.before(thirdItem);

  const sixthItem = document.createElement('li');
  thirdItem.textContent = 6;
  specialItem.after(thirdItem);

  const lastItem = document.createElement('li');
  lastItem.textContent = 8;
  items.append(lastItem);
};
finishList(); /*export*/

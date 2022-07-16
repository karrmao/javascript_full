export const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};

getItemsList();

export const getItemsArray = () => {
  const elementsArray = document.querySelectorAll('.tool');

  const nodeList = Array.prototype.slice.call(elementsArray);
  console.dir(nodeList);
  return nodeList;
};

getItemsArray();

/*export*/

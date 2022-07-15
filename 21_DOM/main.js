// /*********************21_DOM***********************************/
//Task1 from lesson
'use strict';

export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */

const renderTasks = tasksList => {
  // put your code here
  const listElem = document.querySelector('.list'); /*1*/

  const listItemsElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li'); /*2*/
      listItemElem.classList.add('list__item');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.checked = done;
      checkboxElem.classList.add('list__item-checkbox');
      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });

  listElem.append(...listItemsElems);
};

renderTasks(tasks);

/*Формуємо html елементи li через .createElement(добавляємо його у змінну)*/
/*Отримуємо доступ до .list через .querySelector(добавляємо його у змінну)*/

//console.log('/***********************************************/');

/*1*/
/*2*/

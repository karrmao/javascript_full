/*export*/ const tasks = [
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
  const listElem = document.querySelector('.list'); /*1*/

  const listItemsElems = tasksList
    .sort((a, b) => a.done - b.done) /*14*/
    .map(({ text, done }) => {
      /*4*/ /*12*/
      const listItemElem = document.createElement('li'); /*2*/
      listItemElem.classList.add('list__item'); /*3*/
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkboxElem = document.createElement('input'); /*8*/
      checkboxElem.setAttribute('type', 'checkbox'); /*10*/ /*11*/
      checkboxElem.checked = done; /*13*/
      checkboxElem.classList.add('list__item-checkbox'); /*9*/
      listItemElem.append(checkboxElem, text);

      return listItemElem; /*5*/
    });

  listElem.append(...listItemsElems); /*6*/
};

renderTasks(tasks); /*7*/

/*1**Добавляєм наш ul.list в js*/
/*2**Формуємо список з li в js*/
/*3**Добавить стилі до нашого обєкту js*/
/*4**.map перетворить наш обєет(tasks) у html структуру списку js*/
/*5**поверне цей весь ліст-елемент js*/
/*6**розібє (спредане) js*/
/*7**вмклик функції з даними з #tasks# js*/
/*8**створюємо імпут*/
/*9**створюємо клас для чекбокса*/
/*10**чекбокс добавимо в ліст*/
/*11**встановлюємо атрибут Type в чекбокс*/

/*12**будемо отримувати обєкт з текстом(text) та виконаною дією done властивостями текст*/
/*13**встановлюємо властивість done*/
/*14**якшо done то відмітити увесь елемент */
/*15**сортанемо не викон і yt вик */

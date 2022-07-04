// console.log('hello');

/*******************************************************************************/
//Task1 .pop()

// const numbersList1 = [1, 2, 3, 4, 5];

// //pop
// //input: none
// //output: last number of array

// console.log('BEFORE POP ', numbersList1);
// const lastNumber = numbersList1.pop();
// console.log(lastNumber);
// console.log('AFTER POP ', numbersList1);

// console.log('/*****************************************************/');
// /*******************************************************************************/
// //Task2 .push()

// const numbersList2 = [1, 2, 3, 4, 5];

// //push
// //input: element(number) //=> 777
// //output: new length of array //=> 6

// console.log('BEFORE PUSH ', numbersList2);
// const pushRes = numbersList2.push(777);
// console.log(pushRes);
// console.log('AFTER PUSH ', numbersList2);

// console.log('/*****************************************************/');
// /*******************************************************************************/
// //Task3 shift()

// const numbersList3 = [1, 2, 3, 4, 5];

// //shift
// //input: none
// //output: first element of array //=> 1

// console.log('BEFORE SHIFT ', numbersList3);
// const shiftRes = numbersList3.shift();
// console.log(shiftRes);
// console.log('AFTER SHIFT ', numbersList3);

// console.log('/*****************************************************/');
// /*******************************************************************************/

// const anotherNumbersList = [5, 0, 8, 10, -4, 50, 200];

//input: callback
//output: new array
//filter

/* OUR FUNCTION
 const filterRes = anotherNumbersList.filter(); //=> наша функція 
*/

//callback
//input: element(any type), index (optional), array (optional)
//output: boolean

/* OUR CALLBACK
function filterCallback(element) { //=> наш callback до функції
  return element > 5;
}
*/

/* Функція а в середині callback */
// const filterRes = anotherNumbersList.filter(function filterCallback(element) {
//   return element > 5;
// });

// /*Та сама функція але Стрілочна */
// const filterResClone = anotherNumbersList.filter(el => el > 5);

// /*Та сама Стрілочна але анонімна*/
// console.log(anotherNumbersList.filter(el => el > 5));

// console.log(filterRes);
// console.log(filterResClone);

/*******************************************************************************/
// У випадку коли ми задаємо додаткові маніпуляції для index. Ми задаємо index як
//аргумент і можемо робити з ним додаткові маніпуляція як наприклад тут Boolean

// function filterCallback(element, index) {
//   return index > 3 && element > 5;
// }

/*******************************************************************************/

// function sum(from, to, resolver) {
//   let sumRes = 0;
//   for (let i = from; i <= to; i++) {
//     sumRes += i;
//   }
//   console.log(sumRes);

//   resolver(sumRes);
// }

// //--data test
// function resolver(number) {
//   console.log(number);
// }

// function func(number) {
//   console.log(number);
// }

// function funcAlert(number) {
//   alert(number);
// }

// function sendEmail(number) {
//   //
// }

// sum(1, 10, resolver);
// sum(1, 4, func);
// sum(1, 7, funcAlert);

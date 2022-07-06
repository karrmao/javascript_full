//console.log('Hello');
/*******************************************************************************/
// -- task 1
// const numbersList = [5, 0, 8, 10, -4, 50, 220];
// console.log(numbersList);
// console.log('/***********************************/');

//.map();
//input: callback
//output: array

//callback(.map())
//input: element, index(optional), array(optional)
//output: new element

//option 1
// const mapRes = numbersList.map(el => {
//   const newEl = el * el;
//   return newEl;
// });

//option 2
// const mapRes = numbersList.map(el => el * el);
// console.log(mapRes);

/***********************************************/
//extra task 1
// const mapRes = numbersList.map((el, index) => {
//   let newEl = null;

//   if (index > 2) {
//     newEl = el * el;
//   } else {
//     newEl = el;
//   }
//   return newEl;
// });

//extra task 1 ternar
// const mapRes = numbersList.map((el, index) => {
//   return index > 2 ? el * el : el;
// });
// console.log(mapRes);

/**************/
//extra task 2

// const mapRes = numbersList.map((el, index, array) => {
//   if (array.includes(el)) {
//   }

//   console.log('arr', array);
//   let newEl = null;

//   if (index > 2) {
//     newEl = el * el;
//   } else {
//     newEl = el;
//   }
//   return newEl;
// });

/*******************************************************************************/
// -- task 2

//.forEach();
//input: callback
//output: undefined

//callback(.forEach())
//input: element
//output: undefined

//option 1
// const forEachRes1 = numbersList.forEach((el, index) => {
//   numbersList[index] = el * el;
// });

// console.log(numbersList); //=> [25, 0, 64, 100, 16, 2500, 48400]
// console.log(forEachRes1); //=> undefined

/*******************************************************************************/
// -- task 3

// const forEachRes2 = numbersList.forEach(el => {
//   if (el > 0) {
//     console.log(el);
//   }
// });

// console.log(forEachRes2); //=> undefined
/*******************************************************************************/
// -- task 4

// const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];
// console.log(transactions);
// console.log('/***********************************/');

//.reduce();
//input: callback, acc init value (optional)
//output: number

//callback(.reduce())
//input: acc, element, index(optional), array(optional)
//output: new a

//option 1
// const reduceSum = transactions.reduce((sum, el) => {
//   console.log('acc', el);
//   console.log('el', el);
//   if (el > 100) {
//     return sum + el;
//   }
//   return sum;
// }, 0);

// console.log(reduceSum);

//option 2
// const reduceSum = transactions.reduce((sum, el) => (el > 100 ? sum + el : sum), 0);
// console.log(reduceSum);

/*************************************************/

// const res = transactions.reduce((acc, el) => {
//   console.log('acc', acc);
//   console.log('el', el);

//   acc += 7;
//   return acc;
// });

/***************************************************/

// /*********************18_context_part_2***********************************/
// /*1*This в callback/

// // const event = {
// //   message: 'Welcome to the party',
// //   guests: [
// //     { name: 'John', age: 18, email: 'example@server.com' },
// //     { name: 'Paraska', age: 89, email: 'paraska@server.com' },
// //     { name: 'Lykyan', age: 16, email: 'lykyan@server.com' },
// //     { name: 'Vinton', age: 14, email: 'vinton@server.com' },
// //     { name: 'Andy', age: 14, email: 'andy@server.com' },
// //   ],
// //   getInvitations() {
// //     return this.guests
// //       .filter(({ age }) => age >= 18)
// //       .map(({ name, email }) => ({ email: `${email}`, message: `Dear ${name}! ${this.message}` }));
// //   },
// // };

// // console.log(event.getInvitations());
// /******************************************************************/
// /*2*Запозичення*методу*/

// // const wallet = {
// //   transactions: [1000, 4000, 4300, 100],
// //   getMax() {
// //     return Math.max(...this.transactions);
// //   },

// //   getMin() {
// //     return Math.min(...this.transactions);
// //   },
// // };

// // console.log(wallet.getMax());
// // console.log(wallet.getMin());

// /******************************************************************/
// /*3*Робота з псевдомасивами*/
// // function sumOfSquares(...num) {
// //   return num.slice().reduce(function (sum, n) {
// //     return n * n + sum;
// //   }, 0);
// // }

// // const numbers = [2, 5, -10];
// // console.log(sumOfSquares(numbers));
// // console.log(numbers);

// /******************************************************************/
// /*1h***Spay***/
// 'use strict';

// function saveFuncCalls(func) {
//   // put your code here
//   const calls = [];

//   return function withMtmory(...args) {
//     calls.push([...args]);
//     withMtmory.calls = calls;
//     return func.apply(this);
//   };
// }

// // example 1
// function sum(firstNum, secondNum) {
//   return firstNum + secondNum;
// }

// const sumWithMemory = saveFuncCalls(sum);
// sumWithMemory(4, 2); // ===> 6
// sumWithMemory(9, 1); // ===> 10

// sumWithMemory.callsHistory; // ===> [ [4, 2], [9, 1] ]

// // example 2
// function addDelta(array, delta) {
//   return array.map(el => el + delta);
// }

// const addDeltaWithMemory = saveFuncCalls(addDelta);
// addDeltaWithMemory([111, 22, 55, 4], 8); // ===> [119, 30, 63, 12]
// addDeltaWithMemory([9, 1, -8, 15, 7, 0], 7); // ===> [16, 8, -1, 22, 14, 7]

// addDeltaWithMemory.callsHistory; // ===> [ [[111, 22, 55, 4], 8], [[9, 1, -8, 15, 7, 0], 7] ]

// // example 3
// const user = {
//   name: 'John',
//   sayHi() {
//     return this.name;
//   },
// };

// const sayHiWithMemory = saveFuncCalls(user.sayHi);
// // sayHiWithMemory(); // ===> throw error // because sayHiWithMemory lost context
// const sayHiWithMemoryBinded = sayHiWithMemory.bind({ name: 'Tom' });
// console.log(sayHiWithMemoryBinded());
// // ===> Tom // because we fixed context with bind and run functon again

// console.log(sayHiWithMemory.callsHistory); // [ [] ]

// console.log('xxx');

//console.log('hello guys');
//

// 'use strict';

// let message = 'Just learn it!';

// function sendMessage(name) {
//   const sender = 'Gromcode';

//   console.log(`${name}, ${message}. You ${sender}`);
// }

// function setMessage(text) {
//   message = text;
// }

// sendMessage('Tom');
// /***/
// setMessage('Hello');
// sendMessage('Tom');
// // /***/
// // message = 'Hi!';
// // sendMessage('Kate');

/******************************************************************/

//'use strict';

// let message = 'Just learn it!';

// export function sendMessage(name) {
//   const sender = 'Gromcode';

//   console.log(`${name}, ${message}! Your ${sender}`);
// }

// export function setMessage(text) {
//   message = text;
// }

// sendMessage('Ann');
// /***/
// setMessage('Good Job!');
// sendMessage('Ann');

/****2*/
// let message = 'Hi!';

// const createMessenger = () => {

//   function sendMessage(name) {
//     const sender = 'Gromcode';

//     console.log(`${name}, ${message} Your ${sender}`);
//   }

//   function setMessage(text) {
//     message = text;
//   }

//   return {
//     sendMessage,
//     setMessage,
//   };
// };

// const messenger = createMessenger();
// messenger.sendMessage('Bob');
// /***/
// const messenger2 = createMessenger();
// messenger.sendMessage('Tom');
// /***/
// messenger2.setMessage('Hello');
// messenger.sendMessage('Ann');

/******************************************************************/

// let message = 'Hello,';

// const createMessenger = () => {
//   const sender = 'Gromcode';

//   function sendMessage(name) {
//     console.log(`${message} ${name}! This message was sent by ${sender}`);
//   }

//   function setMessage(text) {
//     message = text;
//   }
//   return {
//     sendMessage,
//     setMessage,
//   };
// };

// let message = 'ho';

// const createMessenger = () => {

//   function sendMessage(name) {
//     let sender = 'Gromcode';

//     console.log(`Hello, ${name}! ${message} This message was sent by ${sender}!`);

//     function setMessage(text) {
//       message = text;
//     }

//     return {
//       sendMessage,
//       setMessage,
//     };
//   }
// };
/******************************************************************/

// let sender = 'Gromcode';
// let message;

// export const createMessenger = () => {
//   /*1*/
//   function sendMessage(name) {
//     console.log(`Hello, ${name}!/*3*/ ${message}!/*2*/ This message was sent by ${sender}`);
//   }

//   function setMessage(text) {
//     message = text;
//   }

//   function setSender(text) {
//     sender = text;
//   }

//   return {
//     sendMessage,
//     setMessage,
//   };
// };
/******************************************************************/

// const createMessenger = () => {
//   let message = 'Just learn it';
//   let sender = 'Gromcode';

//   function sendMessage(name) {
//     console.log(`Hello, ${name}! ${message}! This message was sent by ${sender}`);
//   }

//   function setMessage(text) {
//     message = text;
//   }

//   function setSender(text) {
//     sender = text;
//   }

//   return {
//     sendMessage,
//     setMessage,
//     setSender,
//   };
// };

// const messanger1 = createMessenger(); /*1*/
// messanger1.setMessage(''); /*2*/
// messanger1.sendMessage('Anna'); /*3*/
// // ===> Hello, Anna! Just learn it! This message was sent by Gromcode

// const messanger2 = createMessenger(''); /*1*/
// messanger2.setMessage('You are learning JS and you do it well'); /*2*/
// messanger2.sendMessage('Michael'); /*3*/
// // ===> Hello, Michael! You are learning JS and you do it well! This message was sent by Gromcode

// const messanger3 = createMessenger(); /*1*/
// messanger3.setMessage('The weather is amazing today'); /*2*/
// messanger3.setSender('Anna');
// messanger3.sendMessage('Alex'); /*3*/
// ===> Hello, Alex! The weather is amazing today! This message was sent by Anna

/******************************************************************/
//по замовчуванню 0
// let memory = 0;

// //функція повинна прийм num і сумувати його зтим шо в памяті
// export function add(num) {
//   return (memory += num);
// }

// //функція повинна прийм num і віднімати його зтим шо в памяті
// export function decrease(num) {
//   return (memory -= num);
// }

// //функція повинна скидувати на 0
// export function reset(num) {
//   memory = 0;
// }

// //функція повинна повернути число в память
// export function getMemo() {
//   return memory;
// }

// function makeCounter() {}

/******************************************************************/

const makeCounter = () => {
  let count = 0;
  return function () {
    return count++;
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1()); //0
console.log(counter1()); //1
console.log(counter2()); //0
console.log(counter1()); //2
console.log(counter2()); //1

export const createCalculator = () => {
  function add(num) {
    return (memory += num);
  }

  function decrease(num) {
    return (memory -= num);
  }

  function reset(num) {
    memory = 0;
  }

  function getMemo() {
    return memory;
  }
};

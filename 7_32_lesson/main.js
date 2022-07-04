// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// //Debag
// function getPrimes(num) {
//   for (let number = 2; number < num; number++) {
//     let isPrime = true;

//     // console.log('CHECKING NUMBER: ' + number);

//     for (let index = 2; index < number; index++) {
//       // console.log('INDEX: ' + index);

//       if (number % index === 0) {
//         // console.log('NUMBER IS NOT PRIME: ' + number);

//         isPrime = false;
//       }
//     }
//     if (isPrime) {
//       console.log(number);
//     }
//   }
// }

// //AfterDebug
// function isPrime(isNumber) {
//   let isPrime = true;
//   for (let index = 2; index < isNumber; index++) {
//     if (isNumber % index === 0) {
//       isPrime = false;
//     }
//   }
//   console.log(isPrime);
// }

// function getPrimes(num) {
//   for (let number = 2; number <= num; number += 1) {
//     if (isPrime(number)) {
//       // console.log(number);
//     }
//   }
// }

// getPrimes(10);

//Sort ploskiy arr
// const flatArray = arr => {
//   const flatArray = arr.reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);
//   return flatArray.sort((a, b) => a - b);
// };

// const initArray = [2, [1, 6, 4], 5, [3]];
// console.log(flatArray(initArray));

//

/*****************************************************************************/
//BEST STUDENTS

// const getMassagesForPassedStudents = (allStudents, failedStudents) => {
//   const passedStudents = allStudents.filter(name => !failedStudents.includes(name));

//   const message = passedStudents.map(name => 'Good jobe, ' + name);

//   return message;
// };

// const allStudents = ['Ann', 'Tom', 'Bob', 'Victor', 'Seam'];
// const failedStudents = ['Bob', 'Ann'];

// console.log(getMassagesForPassedStudents(allStudents, failedStudents));
/*******************************/
/**REFACTORING **/

// const getMassagesForPassedStudents = (allStudents, failedStudents) =>
//   allStudents.filter(name => !failedStudents.includes(name)).map(name => 'Good jobe, ' + name);

// const allStudents = ['Ann', 'Tom', 'Bob', 'Victor', 'Seam'];
// const failedStudents = ['Bob', 'Ann'];

// console.log(getMassagesForPassedStudents(allStudents, failedStudents));

/*****************************************************************************/

// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
//   const passedStudents = allStudentsList.filter(name => !studentsForRetake.includes(name));
//   const message = passedStudents.map(name => 'Good jobe, ' + name);
//   return message;
// };

// // examples
// const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
// const retakeStudTest1 = ['John', 'Mike'];
// console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1)); // ===> ['Good job, Den', 'Good job, Ann']

// const allStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
// const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
// console.log(getMessagesForBestStudents(allStudTest2, retakeStudTest2)); // ===> []

/*****************************************************************************/
/*7.1H */

// function squareArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.map(el => el * el);
// }

// console.log(squareArray([2, 6, 4, 2]));
// console.log(squareArray('Bibica'));

/*****************************************************************************/
/*7.2H */

// function reverseArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.slice().reverse();
// }

// console.log(reverseArray([2, 6, 4, 1])); //=>[1, 4, 6, 2];
// console.log(reverseArray('Bibica'));

/*****************************************************************************/
/*7.3H ЗАПИТАТИ*/

/*1*/
// const ofcreaseEvenEl = (arr, delta) =>
//   Array.isArray(arr) ? arr.map(x => (x % 2 === 0 ? x + delta : x)) : null;

// console.log(ofcreaseEvenEl([2, 5, 4, 1], 20)); //=>[22, 5, 24, 1];

// /*2*/
// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.map(x => (x % 2 === 0 ? x + delta : x));
// };

// console.log(increaseEvenEl([2, 5, 4, 1], 20)); //=>[22, 5, 24, 1];

// /*3*/

// const tocreaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.map(x => {
//     if (x % 2 === 0) {
//       return x + delta;
//     }
//     return x;
//   });
// };

// console.log(tocreaseEvenEl([2, 5, 4, 1], 20)); //=>[22, 5, 24, 1];

/*****************************************************************************/
/*7.3H */

// function cloneArr(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.slice();
// }

// console.log(cloneArr([2, 5, 4, 1], 20)); //=>[22, 5, 24, 1];
// console.log(cloneArr('Bibica'));

/*****************************************************************************/
/**Trening */

// const getSpecialNumber = numbers => {
//   let speciaNumber = [];

//   function chaeckIfSpecialNumber(num) {
//     if (num % 3 === 0) {
//       speciaNumber.push(num);
//     }
//   }

//   numbers.forEach(chaeckIfSpecialNumber);

//   // for (let i = 0; i < numbers.length; i++) {
//   //   if (numbers[i] % 3 === 0) {
//   //     speciaNumber.push(numbers[i]);
//   //   }
//   // }

//   return speciaNumber;
// };

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(getSpecialNumber(arr));

/******Part 2***Doesn't work*****************/

// function chaeckIfSpecialNumber(num) {
//   if (num % 3 === 0) {
//     speciaNumber.push(num);
//   }
// }

// const getSpecialNumber = numbers => {
//   let speciaNumber = [];

//   numbers.forEach(chaeckIfSpecialNumber);

//   return speciaNumber;
// };

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(getSpecialNumber(arr));

/***********Part 3*************************************************/

// const getSpecialNumber = numbers => {
//   let speciaNumber = [];

//   numbers.forEach(function chaeckIfSpecialNumber(num) {
//     if (num % 3 === 0) {
//       speciaNumber.push(num);
//     }
//   });

//   return speciaNumber;
// };

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(getSpecialNumber(arr));

/***********Part 4*************************************************/

// const getSpecialNumber = numbers => {
//   let speciaNumber = [];

//   numbers.forEach(num => {
//     if (num % 3 === 0) {
//       speciaNumber.push(num);
//     }
//   });

//   return speciaNumber;
// };

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(getSpecialNumber(arr));

/***********Filter*************************************************/
/*Filter*/

// const getSpecialNumber = numbers => {
//   const result = numbers.filter(num => {
//     return num % 3 === 0 ? true : false;
//   });

// const result = numbers.filter(num => {
//   if (num % 3 === 0) {
//     return true;
//   }
//   return false;
// });

// return result;
// };

// const arr = [1, 2, 3, 4, 5, 6, 18];
// console.log(getSpecialNumber(arr));

/***********Filter*************************************************/

// const withdraw = (clients, balances, client, amount) => {
// put your code here
// function withdraw(clients, balances, client, amount) {

//   for (let i = 0; i < clients.length; i++) {
//     if (balances[i] < amount) {
//       return -1;
//     }
//     if (client === clients[i]) {
//       return balances[i] - amount;
//     }
//   }
// }
// const wirdrow = clients.include(client);
// return wirdrow;
// };

//example 1:

// input
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

// output
// 37
// и массив balances должен быть [1400, 37, -6]

// example 2:

// input
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

// output
// -1
// и массив balances должен быть [1400, 87, -6]

// const tocreaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.map(x => {
//     if (x % 2 === 0) {
//       return x + delta;
//     }
//     return x;
//   });
// };

// console.log(tocreaseEvenEl([2, 5, 4, 1], 20)); //=>[22, 5, 24, 1];
/*****************************************************************************/
/*7.6H */

// function sum(arr) {
//   return arr.reduce((acc, num) => acc + num, 0);
// }

// console.log(sum([2, 5, 6, 3, 0, 3, -1]));

// const array1 = [1, 2, 3, 4];

// console.log(sumWithInitial);
// // expected output: 10

/*****************************************************************************/
/*7.7H */

// function filterNames(arr, text) {
//   let result = arr.filter(item => {
//     return item.includes(text) && item.length > 5;
//   });

//   return result;
// }

/**2**/
// function filterNames(arr, text) {
//   return arr.filter(item => item.includes(text) && item.length > 5);
// }

// console.log(filterNames(['John', 'Olivya', 'Nastya', 'Cattya', 'Bob', 'Vanya'], 'ya'));

/*****************************************************************************/
/*7.8H */

// function arrAverage(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   let sumArr = arr.reduce((acc, num) => acc + num, 0);
//   return sumArr / arr.length;
// }

// const array1 = [1, 2, 3, 4];
// console.log(arrAverage(array1));

/*****************************************************************************/
/*7.H */

// const withdraw = (clients, balances, client, amount) => {
// const result = clients.filter(name => {
//   if (client === name && balances > amount) {
//     return balances - amount;
//   } else {
//     return -1;
//   }
// });
// return result;

// const resultF = clients.filter(name => {
//   console.log(name);
// });

//   const resultS = resultF.map(name => {
//     if (client === name) {
//       return balances - amount;
//     }
//   });
//   return resultS;
// };

// const tocreaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.map(x => {
//     if (x % 2 === 0) {
//       return x + delta;
//     }
//     return x;
//   });
// };

//  console.log(tocreaseEvenEl([2, 5, 4, 1], 20)); //=>[22, 5, 24, 1];

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
// // 37

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
// -1

//put your code here
// function withdraw(clients, balances, client, amount) {
//     for(let i = 0; i < clients.length; i++){
//         if(balances[i] < amount){
//             return -1;
//         }
//         if(client === clients[i]){
//             return balances[i] - amount;
//         }

//     }
// }

/*****************************************************************************/
/**Objects*/
/*****************************************************************************/
/*8.1 */
// const transformToObject = arr => {
//   let obj = {};

//   arr.forEach(el => {
//     obj[el] = el;
//   });
//   return obj;
// };

// // examples
// console.log(transformToObject(['a', 17.1, 'John Doe']));
// ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }

/*****************************************************************************/
/*8.2 */
// const concatProps = obj => {
//   const arr = [];

//   for (let key in obj) {
//     arr.push(obj[key]);
//   }
//   return arr;
// };

// // examples
// console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' })); // ==> ['John Doe', 17, 'football']

/*****************************************************************************/
/*8.1H */

/* eslint-disable dot-notation */

/**
 * Для решения этой задачи нужно использовать как квадратные скобки так и точки для чтения свойства объекта. В реальных проектах
 * более предпочтительный вариант - обращение через точку. Но нам нужно научиться работать со всеми опциями.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 */

// const transaction = {
//   currency: 'USD',
//   value: 170,
//   operation: 'sale',
//   agent: {
//     country: 'Ukraine',
//     company: 'NYSE',
//   },
//   'operation time': 1584029990001,
// };

// /* 1. Выведи в консоль значение свойства 'currency' с помощью точки */
// console.log(transaction.currency);
// /* 2. Выведи в консоль значение свойства 'value' с помощью квадратных скобок */
// console.log(transaction.value);

// const key = 'operation';
// /* 3. Выведи в консоль значение свойства обьекта transaction, название которого находится в переменной key - используй квадратные скобки */
// console.log(transaction[key]);
// /* 4. Введи в консоль значение свойства 'company' используя квадратные скобки */
// console.log(transaction.agent['company']);

// /* 5. Выведи в консоль значение свойства 'country' используя точку */
// console.log(transaction.agent.country);
// /* 6. Выведи в консоль значение свойства 'operation time' используя квадратные скобки */
// console.log(transaction['operation time']);

/*****************************************************************************/
/*8.1H */

// const user = {
//   name: 'Tom',
//   age: 17,
// };

// /* присвой объекту свойство hobby со значением 'football' с помощью точки */
// user.hobby = 'football';

// const anotherKey = 'married';
// /* название свойства хранится в переменной anotherKey. Присвой объекту такое свойство со значением false */
// user[anotherKey] = false;
// console.log(anotherKey);
// /* присвой объекту свойство 'favorite music' со значением 'rock' */
// user['favorite music'] = 'rock';
// /* присвой объекту свойство 'address', которое будет пустым объкетом */
// user.address = {};
// /* присвой объекту в 'address' свойство 'country', со значением 'Ukraine' */
// user.address.country = 'Ukraine';
// /* присвой объекту в 'address' свойство 'building', со значением 17 */
// user.address.building = 17;
// /* выведи в консоль итоговый объект user */
// console.log(user);

/*****************************************************************************/
/*8.3H */

// function getKeys(obj) {
//   for (let key in obj) {
//     console.log(key);
//   }
// }

// getKeys({ name: 'John Doe', age: 17, interest: 'football' });

/*****************************************************************************/
/*8.4H */

// const pickProps = (obj, props) => {
//   let result = {};
//   //console.log(result);

//   for (let el in obj) {
//     if (props.includes(el)) {
//       //console.log(props.includes(el));
//       result[el] = obj[el];
//       console.log(el);
//       result[el] = obj[el];
//     }
//   }
//   return result;
// };

//pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']); // ==> { a: 1, c: 3 }
//pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex']); // ==> { a: 1, c: 3 }

/*****************************************************************************/
/*8.5H */
// const getAdults = obj => {
//   let result = {};
//   console.log(result);
//   for (let el in obj) {
//     if (obj[el] >= 18) {
//       result[el] = obj[el];
//     }
//   }
//   return result;
// };

// getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
// getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }

/*****************************************************************************/
/**Objects, keys*/
/*****************************************************************************/
/*9.1 */

// const users = {
//   'John Doe': 19,
//   Tom: 17,
//   Bob: 18,
// };

// const getAdults = usersObj =>
//   Object.entries(usersObj)
//     .filter(user => user[1] >= 18)
//     .map(user => user[0]);

// console.log(getAdults(users));

/*****************************************************************************/
/*9.2 */

// const user = {
//   name: 'Tom',
//   age: 17,
//   father: {
//     name: 'Bob',
//   },
// };

// const copyObj = { ...user };
// console.log(copyObj);

/*****************************************************************************/
/*9.2 */

// function getKeys(obj) {
//   Object.keys(obj).forEach(key => /*{*/ console.log(key) /*;}*/);
// }

// examples
// getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel

/*****************************************************************************/
/*9.3 */
function addPropertyV1(userData, userId) {
  // put your code here
  console.log((userData = 'id'));
}
// ==> { name: 'Sam', id: '1234567' }

// put your code here
function addPropertyV2(userData, userId) {}
// put your code here
function addPropertyV3(userData, userId) {}
// put your code here
function addPropertyV4(userData, userId) {}

// examples
const user = {
  name: 'Sam',
};

console.log(addPropertyV1(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }

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
/*9.1H */

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
/*9.2H */
// function addPropertyV1(userData, userId) {
//   // put your code here
//   userData.id = userId;
//   return userData;
// }

// function addPropertyV2(userData, userId) {
//   let userData2 = {};
//   console.log(userData2);
//   userData2.id = userId;
//   Object.assign(userData, userData2);
//   return userData;
// }
// // put your code here
// function addPropertyV3(userData, userId) {
//   let userData3 = {};
//   console.log(userData3);
//   userData3.id = userId;
//   Object.assign(userData3, userData);
//   return userData3;
// }
// // put your code here
// function addPropertyV4(userData, userId) {
//   let userData4 = {};
//   userData4.id = userId;
//   Object.assign(...userData, ...userData4);
//   return userData4;
// }

// // examples
// const user = {
//   name: 'Sam',
// };

// console.log(user);

// console.log(addPropertyV1(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }

/*****************************************************************************/
/*9.3H */

/* eslint-disable prefer-object-spread */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

// function mergeObjectsV1(obj1, obj2) {
//   // put your code here
//   console.log(Object.assign(obj1, obj2));
// }

// function mergeObjectsV2(obj1, obj2) {
//   // put your code here
//   console.log(Object.assign(obj2, obj1));
// }

// function mergeObjectsV3(obj1, obj2) {
//   // put your code here
//   console.log({ ...obj1, ...obj2 });
// }

// function mergeObjectsV4(obj1, obj2) {
//   // put your code here
//   console.log({ ...obj2, ...obj1 });
// }

// // examples
// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   student: false,
// };

// mergeObjectsV1(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
// mergeObjectsV2(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }
// mergeObjectsV3(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
// mergeObjectsV4(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }

/*****************************************************************************/
/*9.4H */

// const getPeople = obj => {
//   // put your code here
//   const roomsInOneArray = Object.assign(room1, room2, room3);

//   const usersArray = Object.entries(roomsInOneArray);
//   const userNames = usersArray.map(user => user[1]);

//   return userNames;
// };

// rooms = {
//   room1: [{ name: 'Jack' }, { name: 'Andy' }, { name: 'Ann' }, { name: 'Vasyl' }],
//   room2: [{ name: 'Vasyl' }],
//   room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
// };

/*****************************************************************************/
/*9.4H */
// const getPeople = obj => {
//   return [].concat(...Object.values(obj)).map(el => el.name);
// };

// const rooms = {
//   room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
//   room2: [{ name: 'Dan' }],
//   room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
// };

//getPeople(rooms);
/*****************************************************************************/
/*9.5H */
// const dayTransactions = [
//   { userId: 22, amount: 60, operation: 'sell' },
//   { userId: 22, amount: 160, operation: 'buy' },
//   { userId: 44, amount: 90, operation: 'sell' },
// ];

// // 37
// const getTotalRevenue = dayTransactions => {
//   let res = 0;

//   for (let amounts of Object.values(dayTransactions)) {
//     console.log(Object.values(dayTransactions));
//     res += amounts.amount;
//     console.log(amounts.amount);
//   }
//   console.log(Object.values(dayTransactions));

//   // console.log(res);
// };

// getTotalRevenue(dayTransactions);

/*****************************************************************************/
/**Numbers*/
/*****************************************************************************/
/*10.1 */
// const arr = [2, 2e64, -7, Infinity, 44, -Infinity, 0, NaN, 0.545];
// const copyArr = arr.slice();

// const getFiniteNumbers = copyArr.filter(function filterCallbackArr(el) {
//   return Number.isFinite(el);
// });

// console.log(getFiniteNumbers);

// /******/
// const getFiniteNumbersV2 = copyArr.filter(function filterCallbackArr(el) {
//   return isFinite(el);
// });

// console.log(getFiniteNumbersV2);

// /******/
// const getNaN = copyArr.filter(function filterCallbackArr(el) {
//   return Number.isNaN(el);
// });

// console.log(getNaN);

// /******/
// const getNaNV2 = copyArr.filter(function filterCallbackArr(el) {
//   return isNaN(el);
// });

// console.log(getNaNV2);

// /******/
// const getIntegers = copyArr.filter(function filterCallbackArr(el) {
//   return Number.isInteger(el);
// });

// console.log(getIntegers);

// console.log(arr);

/******/
// function getFiniteNumbers(copyArr) {
//   return copyArr.filter(el => Number.isFinite(el));
// }

// function etFiniteNumbersV2(copyArr) {
//   return copyArr.filter(el => isFinite(el));
// }
// /******/
// function getNaN(copyArr) {
//   return copyArr.filter(el => Number.isNaN(el));
// }
// /******/
// function getNaNV2(copyArr) {
//   return copyArr.filter(el => isNaN(el));
// }
// /******/

// function getIntegers(copyArr) {
//   return copyArr.filter(el => Number.isInteger(el));
// }
// /******/

// console.log(getFiniteNumbers(copyArr));
// console.log(etFiniteNumbersV2(copyArr));
// console.log(getNaN(copyArr));
// console.log(getNaNV2(copyArr));
// console.log(getIntegers(copyArr));

/*****************************************************************************/
/*10.2 */

// const arr = [2, 2e64, -7, Infinity, 44, -Infinity, 0, NaN, 0.545, '100px', 0.5, '0.15.15text'];
// const copyArr = arr.slice();

// function getParsedIntegers(arr) {
//   return arr.map(el => Number.parseInt(el));
// }

// function getParsedIntegersV2(arr) {
//   return arr.map(el => parseInt(el));
// }

// function getParsedFloats(arr) {
//   return arr.map(el => Number.parseFloat(el));
// }

// function getParsedFloatsV2(arr) {
//   return arr.map(el => parseFloat(el));
// }

// console.log(getParsedIntegers(arr));
// console.log(getParsedIntegersV2(arr));
// console.log(getParsedFloats(arr));
// console.log(getParsedFloatsV2(arr));

// console.log(Number.parseInt(2e64));
// console.log(Number.parseInt('100px'));

/*****************************************************************************/
/*10.3 */

// const multiRound = num => {
//   // const resMathFloor = num.map(el => Math.floor(el));
//   // return resMathFloor;
//   return [
//     Math.floor(num * 100) / 100,
//     Math.trunc(num * 100) / 100,
//     Math.ceil(num * 100) / 100,
//     Math.round(num * 100) / 100,
//     Number(num.toFixed(2)),
//   ];
// };

// // examples
// console.log(multiRound(11.12556)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
// console.log(multiRound(6.112)); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]

/*****************************************************************************/
/*10.4 */

// const getMaxAbsoluteNumber = arr => {
//   // put your code here
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   console.log(...arr);

//   const absoluteValues = arr.map(num => Math.abs(num));
// console.log(absoluteValues);
// console.log(...absoluteValues);

//   return (maxRes = Math.max(...absoluteValues));
// };

// // examples
// console.log(getMaxAbsoluteNumber());
//console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
// getMaxAbsoluteNumber([2.1, 0, 1.6]); // ===> 2.1
// getMaxAbsoluteNumber([-6, 3, 5, -1]); // ===> 6
// getMaxAbsoluteNumber([-777, 3, -1, 45, -20]); // ===> 777

/*****************************************************************************/
/*10.1H */

// function getTotalPrice(arr) {
//   const res = Math.floor([...arr].reduce((first, second) => first + second, 0) * 100) / 100;

//   return '$' + res; //17.159 => 17.15
// }

// const array = [17.159, 18.748, 20.558];
// console.log(getTotalPrice(array));
//

/*****************************************************************************/
/*10.2H */
 const getRandomNumbers = (length, from, to) => {
   const resArr = [];

   if (to - from < 1) {
     return null;
   }

   // if (!Number.isInteger(arr)) {
   //   return null;
   // }

   for (let i = 0; i < length; i += 1) {
     resArr.push(Number((Math.random() * (to - from) + from).toFixed()));
   }
   return resArr;
 };

 console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
 console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
 console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
/*****************************************************************************/
/*10.3H */
 const superRound = (num, prec) => {
   let multyPrec = 1;
   for (let i = 1; i <= prec; i++) {
     multyPrec *= 10;
   }

   return [
     Math.floor(num * multyPrec) / multyPrec,
     Math.trunc(num * multyPrec) / multyPrec,
     Math.ceil(num * multyPrec) / multyPrec,
     Math.round(num * multyPrec) / multyPrec,
     Number(num.toFixed(prec)),
   ];
 };

 // examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
 console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]

/*****************************************************************************/
/**String*/
/*****************************************************************************/
/*11.1 */

// function splitText(string, num = 10) {
//   if (typeof string !== 'string') {
//     return null;
//   }

//   console.log(num);
//   const strArr = [];
//   let startPosition = 0;
//   while (true) {
//     let chunk = string.substr(startPosition, num);
//     if (chunk.length === 0) {
//       break;
//     }
//     strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
//     startPosition += num;
//   }
//   return strArr.join('\n');
// }

// console.log(splitText('abcdefg', 4));
// console.log(splitText('some message with the text'));
// console.log(splitText('xsf', 5));

/*****************************************************************************/
/*11.2 */
//const contacts = 'string';

// const contacts = [
//   { name: 'Tom', phoneNumber: '777-77-77' },
//   { name: 'Ann', phoneNumber: '555-55-5' },
//   { name: 'Mary', phoneNumber: '444-44-44' },
//   { name: 'Hary', phoneNumber: '333-33-33' },
// ];

// const sortContactsF = (contacts, ask) => {
//   if (!Array.isArray(contacts)) {
//     return null;
//   }

//   const result = contacts.sort((a, b) => {
//     if (ask === true) {
//       return a.name.localeCompare(b.name);
//     } else {
//       return b.name.localeCompare(a.name);
//     }
//   });
//   return result;
// };

// console.log(sortContactsF(contacts, true));
// console.log(sortContactsF(contacts, false));

// console.log('************V2******************');

// const sortContacts = (contacts, isAsc) => {
//   if (!Array.isArray(contacts)) {
//     return null;
//   }
//   const result = contacts;
//   contacts.sort((a, b) => {
//     return a.name.localeCompare(b.name);
//   });
//   if (isAsc === false) {
//     contacts.sort((a, b) => {
//       return b.name.localeCompare(a.name);
//     });
//   }
//   return result;
// };

// console.log(sortContacts(contacts, true));
// console.log(sortContacts(contacts, false));

/*****************************************************************************/
/*11.3*/

function splitString(string, num = 10) {
  if (typeof string !== 'string') {
    return null;
  }

  //console.log(num);
  const strArr = [];
  let startPosition = 0;
  while (true) {
    let chunk = string.substr(startPosition, num);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0] + chunk.slice(1));
    startPosition += num;
  }
  let strArrD = strArr.join('\n');
  console.log(strArrD);
  return strArrD;
}

console.log(splitString('abcd efgh', 4)); //=> ['abcd', ' efg', 'h...']

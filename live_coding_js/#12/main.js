// /********Task1********/
// //algo
// //1. create new obj
// //2. iterate
// //3. put key value/value to the obj

// //--test data

// function buildObject(keysList, valuesList) {
//   // put you code here
//   const obj = {};
//   for (let index = 0; index < keysList.length; index++) {
//     obj[keysList[index]] = valuesList[index];
//     //obj = {...obj, obj[keysList[index]] : valuesList[index]}
//   }

//   return obj;
// }

// //option-2
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});
// }

// //option-3
// // function buildObject(keysList, valuesList) {
// //   // put you code here
// //   return keysList.reduce((obj, key, index) => {
// //     console.log('before ', obj)
// //     const res = Object.assign( {}, obj { [key]: valuesList[index] })
// // }

// //--test data
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 37];
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
// console.log(result);

// // console.log('/*****************************/');

/********Task2********/
// function compareObjects(obj1, obj2) {
//   // put your code here
// }

// // examples
// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   age: 17,
// };

// const obj3 = {
//   name: 'Bob',
//   age: 17,
//   student: false,
// };

// const obj4 = {
//   name: 'Tom',
//   age: 17,
// };

// compareObjects(obj1, obj2); // ==> false
// compareObjects(obj2, obj3); // ==> false
// compareObjects(obj1, obj4); // ==> true

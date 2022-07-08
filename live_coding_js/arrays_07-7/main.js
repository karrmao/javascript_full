// console.log('Hello');
// /*******************************************************************************/
// // -- task 1

// //input: arr,func
// //output: new arr

// //input: el , index(optional), array(optional)
// //output: boolean

// //algo
// //1.create new arr
// //2.iterate input arr
// //3.apply callback for every el
// //4.if true - push

// const filterArrayElements = (arr, callback) => {
//   // put you code here
//   const newArr = [];
//   for (let index = 0; index < arr.length; index++) {
//     const el = arr[index];
//     if (callback(el, index, arr)) {
//       newArr.push(el);
//     }
//   }
//   return newArr;
// };

// // -- testdata

// const testaArr = [1, 20, 2, 11, 0, -5, 50, 4, 77, 8, NaN];
// // const testCallback = (el, index, arr) => {
// //   console.log(index);
// //   console.log(arr);

// //   if (index > 10 && el > 10) {
// //     return true;
// //   }
// //   return false;
// // };

// // const filterRes = filterArrayElements(testaArr, testCallback);

// const filterRes = filterArrayElements(testaArr, el => el > 10);

// console.dir(filterRes);

// /*******************************************************************************/
// //--multiply
// // number1, number2... numberN
// //number

// function multiply(...args) {
//   console.log(arguments);
//   return args.reduce((acc, el) => acc * el);
//   //..
// }

// // -- test data
// console.log(multiply(10, 2, 5, 7, -2));

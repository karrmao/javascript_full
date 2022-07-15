/*********************16_hosting***********************************/
/*1*Оголошення*змінних*/

//var a = 17;
//
//if (a) {
//  let a = 1;
//
//  console.log(a);
//}
//
//console.log(a);

/******************************************************************/
/*2*Масив*Функцій/

var arr = [];

for (let i = 0; i < 10; i += 1) {
  arr[i] = function () {
    return i;
  };
}

export { arr };
/******************************************************************/
/*1h*Фабрика*Функцій*/

///*export*/ function createArrayOfFunctions(num = 0) {
//  var arr = [];
//  if (!Number.isInteger(num)) {
//    return null;
//  }
//
//  for (let i = 0; i < num; i++) {
//    arr.push(function () {
//      return i;
//    });
//  }
//
//  return arr;
//}
//
//console.log(createArrayOfFunctions(5));
/******************************************************************/
/*2h*var*головоломка*/

//export default foo = 1;
//
//function bar() {
//  if (!foo) {
//    var foo = 10;
//  }
//
//  return foo;
//}
//
//var foo = bar();



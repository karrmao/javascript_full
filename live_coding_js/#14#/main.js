// const getCustomersList = obj => {
//   let copyObj = Object.assign(obj);

//   let sortObj = copyObj.sort((a, b) => {
//     return a.age - b.age;
//   });

//   console.log(sortObj);
//   let resObj = sortObj.map(el => {
//     return `${el.name}, ${el.age}, ${el.id}`;
//   });

//   return [resObj];
// };

// const users = {

// }

/******************************/
//input:obj
//output:obj[]

//algorithm:
//1.get arr of key-value - entries [[key1,value1],[key2,value2]]
//2.iterate arr of entries - on every syep create new [obj1, obj2]]
//3.sort arr & return

//algorithm2:
//1.get arr of key - entries [key1],[key2...]
//2.iterate arr key - on every syep create new obj
//3.sort arr  & return

//Andy
//Good
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((a, b) => a.age - b.age);

/******************************/
//draft1
// const getCustomersList = obj =>
//   Object.entries(obj)
//     //inp: 0bj;
//     //out: [[key1,value1],[key2,value2]...];
//     .map(entry => {
//       console.log('entry is', entry);
//       const obj = {};
//       Object.assign(obj, { id: entry[0] });
//       console.log('some res', obj);

//       return Object.assign(obj, entry[1]);
//     })
//     .sort((a, b) => a.age - b.age);
/******************************/
//draft2
// const getCustomersList = obj =>
//   Object.entries(obj)
//     //inp: 0bj;
//     //out: [[key1,value1],[key2,value2]...];
//     .map(([id, customer]) => {
//       // console.log('entry is', entry);
//       // const obj = {};
//       // Object.assign(obj, { id: entry[0] });
//       // console.log('some res', obj);
//       //return Object.assign(obj, entry[1]);
//       return { id, ...customer };
//     })
//     .sort((a, b) => a.age - b.age);

/******************************/
/******************************/
//Anna
//NORMAL
//1.use distractimg

// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(arr => ({ ...arr[1], id: arr[0] }))
//     .sort((a, b) => a.age - b.age);
// };

/******************************/
/******************************/
//Roman
//1. Use push insted of concat
//2. Use map instead of concat
//3. rename data

// const getCustomersList = customers =>
//   Object.entries(customers)
//     .reduce((acc, [id, customerObj]) => acc.concat({ id, ...customerObj}), [])
//     .sort((a, b) => a.age - b.age);

/******************************/
/******************************/
//Alex 7

// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((customerFirst, customerSecond) => customerFirst.age - customerSecond.age);

/******************************/
/******************************/
//Anstasia
//bad
//1. don't use values
//2. don't use index
//3. bad naming
// const getCustomersList = obj => {
//   const keys = Object.keys(obj);
//   const values = Object.values(obj);

//   return values.map((el, index) => ({ ...el, id: keys[index] })).sort((a, b) => a.age - b.age);
// };
/******************************/
// const getCustomersList = obj => {
//   return Object.keys(obj);
//   const values = Object.values(obj);

//  .map(key => ({ ...obj[key],id :key  })).sort((a, b) => a.age - b.age);
// };
/******************************/
/******************************/
//Alexey
//bad
//1. don't use values
//2. don't use index
//3. bad naming

// const getCustomersList = obj => {
//   const customersIdList = Object.keys(obj);

//   const resultArray = Object.values(obj)
//     .map((customerIdValue, index) => ({ ...customerIdValue, id: customersIdList[index] }))
//     .sort((a, b) => a.age - b.age);
//   return resultArray;
// };

/******************************/
/******************************/
//Alexey2
//bad
// const getCustomersList = obj => {
//   if (obj === {}) {
//     return [];
//   }

//   const keys = Object.keys(obj);
//   const arr = Object.values(obj);

//   arr.map((el, index) => {
//     el.id = keys[index];
//   });
//   arr.sort((a, b) => +a.age - +b.age);

//   console.log(arr);
//   console.log(obj);

//   return arr;
// };
/******************************/
/******************************/
//Vitaliy
//bad
//1. don't use shift
//2. fix eslint errors
//3. bad namin
//4. redudant variable

// const getCustomersList = obj => {
//   const moderArr = Object.entries(obj).map(arr => {
//     let id = { id: arr.shift() };
//     return (arr[0] = { ...arr[0], ...id });
//   });

//   return moderArr.sort((a, b) => a.age - b.age);
// };

/******************************/

// const getCustomersList = obj => {
//   return Object.entries(obj).map(arr => {
//     const idObj = { id: arr[0] };
//     return (arr[0] = { ...arr[1], idObj });
//   });

//   return moderArr.sort((a, b) => a.age - b.age);
// };

/******************************/
/******************************/
//Evgen
//1. dont use index
//2. bad naming

// const getCustomersList = customers =>
//   Object.keys(customers)
//     .reduce((resArr, key) => {
//       resArr.push({ id: key, ...customers[key] });
//       return resArr;
//     }, [])
//     .sort((a, b) => a.age - b.age);

/******************************/
/******************************/
//Dmytro
//1. dont use index
//2. bad naming

// const getCustomersList = obj => {
//   // obj is the object we want to get the keys from
//   const order = Object.entries(obj).sort((a, b) => a[1].age - b[1].age); // sort the object by age
//   const first = order.map(el => el[1]); // get the values
//   const second = order.map(el => el[0]); // get the keys
//   return first.map((el, index) => ({ ...el, id: second[index] })); // print the values and keys
// };

// const customers = {
//   'customer-id-1': {
//     name: 'William',
//     age: 54,
//   },
//   'customer-id-2': {
//     name: 'Tom',
//     age: 20,
//   },
//   'customer-id-3': {
//     name: 'Bob',
//     age: 17,
//   },
//   'customer-id-4': {
//     name: 'John',
//     age: '22',
//   },
//   'customer-id-5': {
//     name: 'Oscar',
//     age: undefined,
//   },
//   'customer-id-6': {
//     name: 'Ann',
//     age: null,
//   },
//   'customer-id-7': {},
//   'customer-id-8': {
//     name: 'Jim',
//     age: NaN,
//   },
// };

// console.log(getCustomersList(customers));

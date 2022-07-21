//console.log('Hell World');

//input: obj, obj
//output: boolean;

//algorithm:
//1. get keys1, keys2
//2. if length1 !== length2 return false
//3. iterate kayes1
//4. compare key1/value with key2/value
//5. if(step4 === false) return false

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  if (keys1.length !== Object.keys(obj2).length) {
    return false;
  }
  return keys1.every(key => obj2[key] === obj1[key]);
}
// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // false
console.log(compareObjects(obj1, obj3)); // false
console.log(compareObjects(obj1, obj4)); // true
console.log(compareObjects(obj2, obj3)); // false
console.log(compareObjects(obj2, obj4)); // false
console.log(compareObjects(obj3, obj4)); // false
console.log(compareObjects(obj1, obj1)); // true

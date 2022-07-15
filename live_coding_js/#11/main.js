//input: obj, string, and type(value)
//output: obj

/********V1********/
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return value;
}

/*********V2*******/
function addPropertyV2(obj, key, value) {
  //input: obj;
  //output: old obj with new property
  return Object.assign(obj, { [key]: value });
}

/********V3********/
function addPropertyV3(obj, key, value) {
  //input: obj;
  //output: old obj with new property
  return Object.assign({}, obj, { [key]: value });
}

/********V4********/
function addPropertyV4(obj, key, value) {
  // ...obj === Object.assign({}, obj
  return { ...obj, [key]: value };
}

// //--test data
const transaction = {
  amount: 170,
};

const res1 = addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
const res2 = addPropertyV1(transaction, 'BMW', 'M4'); // ==> { value: 170, currency: 'USD' }
console.log('resyult test1 ', res1);
console.log('resyult test1 ', res2);
console.log('obj after ', transaction);
console.log('x');

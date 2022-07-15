/*********************17_context_part_1***********************************/
/*1*/
///*export*/ const user = {
//  firstName: 'John',
//  lastName: 'Doe',
//  getFullName() {
//    return `${this.firstName} ${this.lastName}`;
//  },
//};
//
//const getFullName = user.getFullName.bind(user);
//
//console.log(getFullName());

/******************************************************************/
/*2*/
///*export*/ const callbackPrompt = {
//  message: 'Tell me your number',
//  showPrompt() {
//    const phoneNumber = prompt(this.message);
//    console.log(phoneNumber);
//  },
//  showDeferredPrompt(ms) {
//    setTimeout(() => this.showPrompt(), ms);
//  },
//};
//
//callbackPrompt.showDeferredPrompt(1000);

/******************************************************************/
/*3*/
///*export*/function defer(func, ms) {
//  return function () {
//    setTimeout(() => func.apply(this, arguments, ms));
//  };
//}
//
//const user = {
//  name: 'Tom',
//  sayHi() {
//    console.log(`Hi, I'm ${this.name}!`);
//  },
//};
//
//const deferredHi = defer(user.sayHi, 1000);
//deferredHi.call({ name: 'Bob' });

/******************************************************************/
/*1h***.call()***/

/* ===> 1 <=== */
//const student = {
//    name: 'Tom',
//};
//
///*export*/ function sayName() {
//    console.log(this.name);
//}
//
//// вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента 
//// ... your code here
//
//sayName.call(student);
//
//// вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
//// ... your code here
//
//sayName.call({ name: 'Bruce' });
//
///* ===> 2 <=== */
//const company = {
//    companyName: 'Microsoft'
//};
//
//function greeting(firstName, lastName) {
//    console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
//}
//
//// вызовите ф-цию greeting так, чтобы в консоль вывелось 
//// 'Hello, Bob Marley. Welcome to the Microsoft'
//// используйте объект company
//// ... your code here
//
//greeting.call(company, 'Bob', 'Marley');
//
///* ===> 3 <=== */
//const country = {
//    countryName: 'Ukraine',
//    capital: 'Kyiv'
//};
//
//function getPopulation(population) {
//    return `Population in ${this.countryName} is ${population}`;
//}
//
//// вызовите ф-цию getPopulation так, чтобы она вернула 
//// 'Population in Ukraine is 43000'
//// 43000 передавайте в виде числа
//// используйте объект country
//// результат работы ф-ции getPopulation присвойте в переменную и выведите в консоль
//// ... your code here
//
//console.log(getPopulation.call(country, 43000));
//
///* ===> 4 <=== */
//const transaction = {
//    amount: 1200,
//    operation: 'sell',
//    currency: 'USD',
//    exchange: 'NYSE',
//    printTransaction() {
//        console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
//    }
//}
//
//const anotherTransaction = {
//    amount: 400,
//    operation: 'buy',
//    currency: 'USD',
//    exchange: 'NASDAQ',
//};
//
//// вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
//// '400 USD - buy on NASDAQ'
//// используйте объект anotherTransaction как контекст
//// ... your code here
//
//transaction.printTransaction.call(anotherTransaction);

/******************************************************************/
/*2h***.apply()***/

/* ===> 1 <=== */
//const student = {
//    name: 'Tom',
//};
//
//function sayName() {
//    console.log(this.name);
//}
//
//// вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента 
//// ... your code here
//
//sayName.apply(student);
//
//// вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
//// ... your code here
//
//sayName.apply({ name: 'Bruce' })
//
///* ===> 2 <=== */
//const company = {
//    companyName: 'Microsoft'
//};
//
//function greeting(firstName, lastName) {
//    console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
//}
//
//// вызовите ф-цию greeting так, чтобы в консоль вывелось 
//// 'Hello, Bob Marley. Welcome to the Microsoft'
//// используйте объект company
//// ... your code here
//greeting.apply(company, ['Bob', 'Marley']);
//
//
///* ===> 3 <=== */
//const country = {
//    countryName: 'Ukraine',
//    capital: 'Kyiv'
//};
//
//function getPopulation(population) {
//    return `Population in ${this.countryName} is ${population}`;
//}
//
//// вызовите ф-цию getPopulation так, чтобы она вернула 
//// 'Population in Ukraine is 43000'
//// 43000 передавайте в виде числа
//// используйте объект country
//// результат работы ф-ции getPopulation присвойте в переменную и выведите в консоль
//// ... your code here
//
//console.log(getPopulation.apply(country, [43000]));
//
//
///* ===> 4 <=== */
//const transaction = {
//    amount: 1200,
//    operation: 'sell',
//    currency: 'USD',
//    exchange: 'NYSE',
//    printTransaction() {
//        console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
//    }
//}
//
//const anotherTransaction = {
//    amount: 400,
//    operation: 'buy',
//    currency: 'USD',
//    exchange: 'NASDAQ',
//};
//
//// вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
//// '400 USD - buy on NASDAQ'
//// используйте объект anotherTransaction как контекст
//// ... your code here
//
//transaction.printTransaction.apply(anotherTransaction);

/******************************************************************/
/*3h***.bind()***/

/* ===> 1 <=== */
//const student = {
//  name: 'Tom',
//};
//
//function sayName() {
//  console.log(this.name);
//}
//
///*
// * создайте ф-цию sayStudentName которая будет выводить в консоль имя студента 'Tom'
// * используйте .bind и ф-цию sayName
// */
//
///*export*/ const sayStudentName = sayName.bind(student);
//sayStudentName();
///*
// * создайте ф-цию sayBruceName которая будет выводить в консоль имя 'Bruce'
// * используйте ф-цию sayName и .bind с нужным объектом
// */
//
///*export*/ const sayBruceName = sayName.bind({ name: 'Bruce' });
//sayBruceName();
//
///* ===> 2 <=== */
//const company = {
//  companyName: 'Microsoft',
//};
//
//function greeting(firstName, lastName) {
//  console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
//}
//
///*
// * создайте ф-цию specialGreeting которая будет выводить в консоль
// * 'Hello, Bob Marley. Welcome to the Microsoft`
// * используйте ф-цию greeting и .bind с нужным объектом и аргументами
// * specialGreeting не должна принимать ни одного аргумента
// */
//
///*export*/ const specialGreeting = greeting.bind(company, 'Bob', 'Marley');
//specialGreeting();
///* ===> 3 <=== */
//const country = {
//  countryName: 'Ukraine',
//  capital: 'Kyiv',
//};
//
//function getPopulation(population) {
//  return `Population in ${this.countryName} is ${population}`;
//}
//
///*
// * создайте ф-цию getUkrainePopulation которая будет возвращать строку
// * 'Population in Ukraine is 43000`
// * 43000 передавайте в виде числа
// * используйте ф-цию getPopulation и .bind с нужным объектом и аргументами
// * getUkrainePopulation не должна принимать ни одного аргумента
// */
///*export*/ const getUkrainePopulation = getPopulation.bind(country, 43000);
//console.log(getUkrainePopulation());
//
///* ===> 4 <=== */
//const transaction = {
//  amount: 1200,
//  operation: 'sell',
//  currency: 'USD',
//  exchange: 'NYSE',
//  printTransaction() {
//    console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
//  },
//};
//
//const anotherTransaction = {
//  amount: 400,
//  operation: 'buy',
//  currency: 'USD',
//  exchange: 'NASDAQ',
//};
//
///*
// * создайте ф-цию printSpecialTransaction которая будет выводить в консоль
// * '400 USD - buy on NASDAQ`
// * используйте метод transaction.printTransaction и .bind с нужным объектом
// * printSpecialTransaction не должна принимать ни одного аргумента
// */
//
///*export*/ const printSpecialTransaction = transaction.printTransaction.bind(anotherTransaction);
//printSpecialTransaction();

/******************************************************************/
/*4h*/
///*export*/const user = {
//  firstName: 'John',
//  lastName: 'Doe',
//  getFullname() {
//    return `${this.firstName} ${this.lastName}`;
//  },
//  setFullName(fullName) {
//    const [newName, newLastname] = fullName.split(' ');
//    this.firstName = newName;
//    this.lastName = newLastname;
//  },
//};
//
//user.setFullName('Vasily Vasilciv');
//console.log(user);
//console.log(user.getFullname());

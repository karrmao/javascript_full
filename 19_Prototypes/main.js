/*********************19_prototypes***********************************/
/*1*/
const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'Argo',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
    ship.stop();
  },
};

Object.setPrototypeOf(ship, vehicle);

ship.move();
ship.stop();

ship.startMachine();
ship.stopMachine();

console.log('/***********************************************/');
/***************************************************************/
/*2*/

const getOwnProps = obj => {
  let arrProp = [];
  console.log(arrProp);
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arrProp.push(prop);
    }
  }
  return arrProp.filter(el => typeof obj[el] !== 'function');
};

//refactoring
const getOwnProps1 = obj => {
  return Object.keys(obj).filter(el => typeof obj[el] !== 'function');
};

//refactoring
const getOwnProps2 = obj => Object.keys(obj).filter(el => typeof obj[el] !== 'function');
console.log(getOwnProps2);
console.log('/***********************************************/');
/***************************************************************/
/*3*/

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (age) {
  this.age = age;
  if (age < 0) {
    return false;
  }
  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  if (age >= 0) {
    return age;
  }
};

const user1 = new User();
user1.sayHi();

const user2 = new User();
user2.requestNewPhoto();

const user3 = new User();
user3.setAge(25);

console.log('/***********************************************/');
/***************************************************************/
/*4*/
const obj = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

console.log(obj.fullName);
console.log('/***********************************************/');
/***************************************************************/

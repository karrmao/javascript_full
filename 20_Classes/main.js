// /*********************20_Classes***********************************/
// /*1*/

// /*export*/ class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   createEmpty() {
//     return new User('', null);
//   }
//   sayHi() {
//     console.log(`Hi, I am ${this.name}`);
//   }

//   requestNewPhoto() {
//     console.log(`New photo request was sent for ${this.name}`);
//   }

//   setAge(age) {
//     this.age = age;
//     if (age < 0) {
//       return false;
//     }
//     if (age >= 25) {
//       console.log(`New photo request was sent for ${this.name}`);
//     }
//     return age;
//   }
// }

// const user0 = new User('');
// user0.createEmpty();

// const user1 = new User('Tom');
// user1.sayHi();

// const user2 = new User('Bob');
// user2.requestNewPhoto();

// const user3 = new User('Ann');
// user3.setAge(27);

// console.log('/***********************************************/');
// /***************************************************************/
// /*2*/

// /*export*/ class Vehicle {
//   constructor(name, hasWeels, maxSpeed) {
//     this.hasWeels = hasWeels;
//     this.name = name;
//     this.maxSpeed = maxSpeed;
//   }

//   move() {
//     console.log(`${this.name} is moving`);
//   }

//   stop() {
//     console.log(`${this.name} stopped`);
//   }
// }

// /*export*/ class Ship extends Vehicle {
//   startMachine() {
//     console.log(`${this.name} lifting anchor up`);
//     super.move();
//   }

//   stopMachine() {
//     console.log(`${this.name} lifting anchor down`);
//     super.stop();
//   }
// }

// const ship1 = new Ship('Argo', false);
// // console.log(ship1);
// ship1.startMachine();
// ship1.stopMachine();

// console.log('/***********************************************/');
// /***************************************************************/
// /*3*/

// class Wallet {
//   _balance = 0;

//   getBalance(amount) {
//     return this._balance;
//   }

//   deposit(amount) {
//     this._balance += amount;
//   }

//   withdraw(amount) {
//     if (amount > this._balance) {
//       console.log('No enough funds');
//       return;
//     }
//     this._balance -= amount;
//   }
// }

// const wallet1 = new Wallet();

// console.log(wallet1.getBalance());

// wallet1.deposit(45);
// console.log(wallet1.getBalance());

// wallet1.withdraw(34);
// console.log(wallet1.getBalance());

// wallet1.withdraw(134);
// console.log(wallet1.getBalance());

// console.log('/***********************************************/');
// /***************************************************************/

// /*1H*/
// /*export*/ class Order {
//   // put your code here
//   constructor(price, city, type) {
//     this.id = Math.random().toString(36).substring(2, 9);
//     this.price = price;
//     this.dateCreated = new Date();
//     this.isConfirmed = false;
//     this.dateConfirmed = this.city = city;
//     this.type = type;
//   }

//   checkPrice() {
//     if (this.price > 1000) {
//       return true;
//     }
//     return false;
//   }

//   confirmOrder() {
//     if (!this.isConfirmed) {
//       this.isConfirmed = true;
//       this.dateConfirmed = new Date();
//     }
//   }

//   isValidType() {
//     if (this.type === 'Buy' || this.type === 'Sell') {
//       return true;
//     }
//     return false;
//   }
// }

// console.log('/***********************************************/');
// /***************************************************************/
/*2H*/
// /*export*/ class User {
//   constructor(id, name, sessionId) {
//     this._id = id;
//     this._name = name;
//     this._sessionId = sessionId;
//   }

//   get id() {
//     return this._id;
//   }

//   get name() {
//     return this._name;
//   }

//   get sessionId() {
//     return this._sessionId;
//   }
// }

// /*export*/ class UserRepository {
//   constructor(users) {
//     this._users = users;
//     this._users = Object.freeze(users);
//   }
//   get users() {
//     return this._users;
//   }

//   getUserNames() {
//     return this._users.map(el => el.name);
//   }
//   getUserIds() {
//     return this._users.map(el => el.id);
//   }
//   getUserNameById(id) {
//     return this._users.find(el => id === el.id).name;
//   }
// }

// // examples
// const user = new User('1', 'Tom', 'session-id');

// // получить свойства можем
// console.log(user.id); // ===> '1'
// console.log(user.name); // ===> 'Tom'
// console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

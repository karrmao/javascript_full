//Hlib
//Bed

// const withdraw = (clients, balances, client, amount) => {
//   //remote logic from it
//   //get rid of duplicated code
//   // don't use find

//   //Bad
//   balances.find((item, index) => clients.indexOf(client) === index) < amount;

//   //Good
//   balances[clients.indexOf(client)];

//   if (balances.find((item, index) => clients.indexOf(client) === index) < amount) {
//     return -1;
//   }
//   return balances.find((item, index) => clients.indexOf(client) === index) - amount;
// };

//Igor
// const withdraw = (clients, balances, client, amount) => {
//   return balances[clients.indexOf(client)] >= amount
//     ? (balances[clients.indexOf(client)] -= amount)
//     : -1;
//     const res = bool ? value1 : value2;
// };

//Oleksiy
//Bad
// const withdraw = (clients, balances, client, amount) => {
//   let clientBalance = balances[clients.indexOf(client)];
//   if (clientBalance >= amount) {
//     clientBalance -= amount;
//     balances[clients.indexOf(client)] = clientBalance;
//     return clientBalance;
//   }

//   return -1;
// };

//God
// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);
//   //const balance = balance[clientIndex];

//   if (balances[clientIndex] < amount) {
//     return -1;
//   }
// //eslint-disable-next-line no-parram-reassion
//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };

//Serhiy
// const withdraw = (clients, balances, client, amount) => {
//   const curentIndex = clients.indexOf(client);
//   const newBalance = balances[curentIndex] - amount;
//   return newBalance > 0 ? newBalance : -1;
// };

//Denis
//Norm
// const withdraw = function (clients, balances, client, amount) {
//   if (balances[clients.indexOf(client)] - amount < 0) {
//     return -1;
//   }
//   balances[clients.indexOf(client)] -= amount;
//   return balances[clients.indexOf(client)];
// };

//Good
// const withdraw = function (clients, balances, client, amount) {
//   const clientIndex = clients.indexOf(client);
//   if (balances[clientIndex] < amount) {
//     return -1;
//   }
//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };

//Volodymyr
//Norm
// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);
//   return balances[clientIndex] < amount ? -1 : (balances[clientIndex] -= amount);
// };

//Dimon
//Bad
// const withdraw = (clients, balances, client, amount) => {
//   const clientBalance = balances[clients.indexOf(client)];

//   return clientBalance < amount ? -1 : clientBalance - amount;
// };

//Oleksander
// const withdraw = (clients, balances, client, amount) => {
//   if (balances[clients.indexOf(client)] > amount) {
//     return (balances[clients.indexOf(client)] -= amount);
//   } else {
//     return -1;
//   }
// };

//Anastasiia
//Bad
// const withdraw = (clients, balances, client, amount) =>
//   balances[clients.indexOf(client)] >= amount ? balances[clients.indexOf(client)] - amount : -1;

//Anna
// const getRandomNumbers = (length, from, to) => {
//   const arr = new Array(length);
//   if (to - from < 1) {
//     return null;
//   }
//   return arr.fill(Math.trunc(Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)));
// };

// const getRandomNumbers = (length, from, to) => {
//   const fromCeil = Math.ceil(from);
//   const toCeil = Math.ceil(to);

//   if (toCeil - fromCeil < 1) {
//     return null;
//   }

//   return new Array(length).fill(Math.trunc(Math.random() * (toCeil - fromCeil) + fromCeil));
// };

// console.log(getRandomNumbers(1, 1.7, 2.5));
// console.log(getRandomNumbers(1, 0.5, 0.9));

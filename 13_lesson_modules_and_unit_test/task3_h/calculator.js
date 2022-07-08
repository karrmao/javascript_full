export const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
};

export const withdraw = (clients, balances, client, amount) => {
  if (balances[clients.indexOf(client)] < amount) {
    return -1;
  }
  return balances[clients.indexOf(client)] - amount;
};

export const getAdults = obj => {
  let result = {};
  console.log(result);
  for (let el in obj) {
    if (obj[el] >= 18) {
      result[el] = obj[el];
    }
  }
  return result;
};

export const getSquaredOfMinNumber = arr => Math.pow(Math.min(...arr.map(el => Math.abs(el))), 2);

'use strict';

/**
 * @param {number} first
 * @param {number} second
 * @param {number} third
 * @return {number[]}
 */

const getRandomNumbers = (length, from, to) => {
  const ceilTo = Math.ceil(to);
  const ceilFrom = Math.ceil(from);

  if (ceilFrom >= ceilTo) {
    return null;
  }

  return Array.from({ length }, () => Math.trunc(Math.random() * (ceilTo - ceilFrom) + ceilFrom));
};

// examples
getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
getRandomNumbers(3, 2.4, 4.5); // ==> [4, 3, 4]
getRandomNumbers(3, 1.9, 2.5); // ==> [2, 2, 2]

getRandomNumbers(7, 1.4, 1.9); // ==> null
getRandomNumbers(7, 2.11, 2.9); // ==> null
getRandomNumbers(1, 2.5, 0.9); // ==> null

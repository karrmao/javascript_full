import { reverseArray, withdraw, getAdults } from './calculator.js';

it('Should return null', () => {
  expect(reverseArray(Array.isArray([1, 2, 3]))).not.toEqual(true);
});

it('Should return reverse array', () => {
  expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
});

it('Should return people older then 18', () => {
  expect(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })).toEqual(
    getAdults({ 'John Doe': 19, Bob: 18 }),
  );
});

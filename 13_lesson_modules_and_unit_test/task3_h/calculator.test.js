import { calc } from './calculator.js';

it('Should return null', () => {
  expect(calc('x')).toEqual(null);
});

it('Should return sum', () => {
  expect(calc('2 + 2')).toEqual('2 + 2 = 4');
});

it('Should return subtraction', () => {
  expect(calc('4 - 2')).toEqual('4 - 2 = 2');
});

it('Should return multiplication', () => {
  expect(calc('5 * 5')).toEqual('5 * 5 = 25');
});

it('Should return division', () => {
  expect(calc('15 / 3')).toEqual('15 / 3 = 5');
});

import { getSquaredOfMinNumber } from './getMinSquaredNumber.js';

it('should get the square of the smallest number', () => {
  const result = getSquaredOfMinNumber([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});

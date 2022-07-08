it('17 то замало для Африки 17', () => {
  expect(17).toEqual(17);
});

it('18 то не дорівнює 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = numbers => numbers.filter(num => num % 2 === 0);

it('should get only even numbers from array', () => {
  const result = getEvenNumbers([1, 2, 3, 4]);

  expect(result).not.toEqual(2, 4);
});

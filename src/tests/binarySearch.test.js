const binarySearch = require('../search/binarySearch')

test('not found', () => {
  expect(binarySearch([1,4,6,9,23], 8)).toEqual(-1);
});

test('el in list', () => {
  expect(binarySearch([1,2,3,4], 3)).toEqual(2);
});

test('first el', () => {
  expect(binarySearch([1,7,42,56,88], 1)).toEqual(0);
});

test('negative numbers', () => {
  expect(binarySearch([-32, -23, -1, 0, 8], -23)).toEqual(1);
});

test('empty array', () => {
  expect(binarySearch([], 4)).toEqual(-1);
});

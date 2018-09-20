const mergeSort = require('../sorting/mergeSort')

test('sorts array', () => {
  expect(mergeSort([4,1,3,2])).toEqual([1,2,3,4]);
});

test('sorts sorted array', () => {
  expect(mergeSort([1,2,3,4])).toEqual([1,2,3,4]);
});

test('empty array', () => {
  expect(mergeSort([])).toEqual([]);
});

test('one number array', () => {
  expect(mergeSort([5])).toEqual([5]);
});

test('negative numbers', () => {
  expect(mergeSort([-45,23,-12,4,6,8,2,4,4,4])).toEqual([-45,-12,2,4,4,4,4,6,8,23]);
});
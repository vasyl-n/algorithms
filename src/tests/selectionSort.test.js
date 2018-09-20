const selectionSort = require('../sorting/selectionSort')

const sorts = [selectionSort];
sorts.forEach((sort) => {
  test('sorts array', () => {
    expect(sort([4,1,3,2])).toEqual([1,2,3,4]);
  });
  
  test('sorts sorted array', () => {
    expect(sort([1,2,3,4])).toEqual([1,2,3,4]);
  });
  
  test('empty array', () => {
    expect(sort([])).toEqual([]);
  });
  
  test('one number array', () => {
    expect(sort([5])).toEqual([5]);
  });
  
  test('negative numbers', () => {
    expect(sort([-45,23,-12,4,6,8,2,4,4,4])).toEqual([-45,-12,2,4,4,4,4,6,8,23]);
  });
})


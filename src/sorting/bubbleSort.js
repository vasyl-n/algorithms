const bubbleSort = (arr) => {
  for ( let i = 0; i < arr.length; i++ ) {
    for ( let j = 0; j < arr.length - 1; j++ ) {
      if ( arr[j] > arr[j+1] ) {
        swap(j, j + 1, arr);
      }
    }
  }
  return arr;
}

const swap = (a, b, arr) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

module.exports = bubbleSort;

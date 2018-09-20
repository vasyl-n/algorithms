const selectionSort = (arr) => {
  for ( var i = 0; i < arr.length; i++ ) {
    let minInd = i;
    for ( var j = i+1; j < arr.length; j++ ) {
      if ( arr[j] < arr[minInd] ) {
        minInd = j;
      }
    }
    swap(i, minInd, arr)
  }

  return arr
}

const swap = (a, b, arr) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

module.exports = selectionSort;

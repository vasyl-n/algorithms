var mergeSort = (arr) => {
  if ( arr.length === 1 || arr.length === 0 ) return arr;
  return merge(mergeSort(arr.slice(0, Math.floor(arr.length / 2))), mergeSort(arr.slice( Math.floor(arr.length/2), arr.length )))
  
}

var merge = (left, right) => {
  var result = [];
  var leftInd = 0;
  var rightInd = 0;
  while( leftInd <= left.length || rightInd <= right.length ) {
    if( leftInd === left.length ) return result.concat(right.slice(rightInd))
    if ( rightInd === right.length ) return result.concat(left.slice(leftInd))
    if( left[leftInd] < right[rightInd] ) {
      result.push(left[leftInd]);
      leftInd++;
    }
    else {
      result.push(right[rightInd]);
      rightInd++;
    }
  }
}


module.exports = mergeSort

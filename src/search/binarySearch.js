const binarySearch = (arr, target, start=0, end=arr.length-1) => {

  if( !arr.length ) return -1;
  const middleIndex = Math.floor((start + end) / 2)
  if( arr[middleIndex] === target ) return middleIndex;
  if( start >= end ) return -1;
  if( target < arr[middleIndex] ) {
    return binarySearch(arr, target, start, middleIndex-1);
  }
  else {
    return binarySearch(arr, target, middleIndex+1, end);
  }

}

module.exports = binarySearch

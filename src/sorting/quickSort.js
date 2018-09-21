var quickSort = (arr, low=0, high=arr.length-1) => {
  if( low < high ) {

    let p = partition(arr, low, high);
    
    quickSort(arr, low, p-1);
    quickSort(arr, p+1, high);
  }
  return arr;
}

var partition = (arr, low, high) => {
  var pivot = arr[high];
  var wallInd = low;
  for( let i = low; i < high; i++ ) {
    if( arr[i] < pivot ) {
      swap(arr, wallInd, i);
      wallInd++;
    }
  }
  swap(arr, wallInd, high)
  return wallInd;
}



var swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = quickSort;

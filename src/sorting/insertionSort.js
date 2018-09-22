var insertionSort = (arr) => {
for ( var i = 0; i < arr.length -1; i++ ) {
  let extractedInd = i+1;
  for ( var j = i; j >= 0; j-- ) {
    if (arr[extractedInd] < arr[j]) {
         swap(extractedInd, j, arr);
         extractedInd = j;
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

module.exports = insertionSort;

var insertionSort = (arr) => {
for ( var i = 0; i < arr.length -1; i++ ) {
  let extractedInd = i+1;
  for ( var j = extractedInd - 1; j >= 0; j-- ) {
    if (arr[extractedInd] < arr[j]) {
         swap(extractedInd, j, arr);
         extractedInd = j;
    }
  }
 
}
return arr;
}
4132
const swap = (a, b, arr) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

module.exports = insertionSort;

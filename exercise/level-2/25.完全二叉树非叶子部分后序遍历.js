function getResult(arr, rootIndex) {
  let result = [];
  function recursion(arr, rootIndex) {
    let leftIndex = 2 * rootIndex + 1;
    if (arr[leftIndex]) {
      recursion(arr, leftIndex);
      let rightIndex = 2 * rootIndex + 2;
      if (arr[rightIndex]) {
        recursion(arr, rightIndex);
      }
      result.push(arr[rootIndex]);
    }
  }
  recursion(arr, rootIndex);
  return result;
}
console.log(getResult([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 0));
// [ 4, 5, 2, 6, 3, 1 ]

console.log(getResult([1, 2, 3, 4, 5, 6, 7], 0));
// [2, 3, 1];

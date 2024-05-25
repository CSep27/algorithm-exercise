function getResult(arr, n) {
  let count = 0;
  arr.sort((a, b) => b - a);
  let j = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item >= n) {
      count++;
    } else {
      while (j > i) {
        if (item + arr[j] >= n) {
          count++;
          j--;
          break;
        } else {
          j--;
        }
      }
    }
  }
  return count;
}
console.log(getResult([3, 1, 5, 7, 9], 8)); //3
console.log(getResult([3, 1, 5, 7, 9, 2, 6], 7)); //4
console.log(getResult([1, 2, 3, 4, 5, 6, 9], 8)); //3
console.log(getResult([1, 1, 9], 8)); //1
console.log(getResult([10, 11, 9], 8)); //3
console.log(getResult([10, 1, 9], 8)); //2
console.log(getResult([10, 1, 9, 9], 8)); //3

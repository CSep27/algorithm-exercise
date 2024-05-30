function getResult(arr) {
  let maxArea = 0;
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let x = j - i;
    let y = arr[i] < arr[j] ? arr[i++] : arr[j--];
    maxArea = Math.max(maxArea, x * y);
  }
  return maxArea;
}
console.log(getResult([2, 8, 4, 9, 5, 10, 1, 3, 6, 7]));

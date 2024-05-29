/* 
5 3 1 2 3
偶数位 高 奇数位矮
左右指针
符合 不交换
3 1 不符合 r小于l 此时 l小于 l-1 所以交换肯定满足

*/
function getResult(arr) {
  function isEvenNum(num) {
    return num % 2 === 0;
  }
  let l = 0;
  let r = 1;
  let count = 0;
  while (l < arr.length) {
    let leftVal = arr[l];
    let rightVal = arr[r];
    if (isEvenNum(l)) {
      // l在偶数位，高
      if (leftVal < rightVal) {
        // 如果小于 互换
        arr[l] = rightVal;
        arr[r] = leftVal;
        count++;
      }
    } else {
      // l在奇数位，矮
      if (leftVal > rightVal) {
        // 如果大于 互换
        arr[l] = rightVal;
        arr[r] = leftVal;
        count++;
      }
    }
    l++;
    r++;
  }
  console.log(arr);
  return count;
}
console.log(getResult([4, 3, 5, 7, 8]));
console.log(getResult([4, 1, 3, 5, 2]));
console.log(getResult([1, 1, 1, 1, 1]));

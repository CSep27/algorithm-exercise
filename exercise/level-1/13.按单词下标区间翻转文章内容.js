/* 
下标小于0，从第一个开始 =》 取0和下标的最大值
下标大于个数，按最大下标算 =》 取下标和总个数的最小值

*/
function strReverse(str, start, end) {
  let arr = str.split(" ");
  let l = Math.max(0, start);
  let r = Math.min(end, arr.length - 1);

  if (l >= r) {
    return str;
  }

  while (l < r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
  }
  return arr.join(" ");
}

console.log(strReverse("I am a developer", 1, 2));
console.log(strReverse("I am a developer", -1, 2));
console.log(strReverse("I am a developer", 0, 5));
console.log(strReverse("I am a developer", -2, -1));
console.log(strReverse("I am a developer", 2, 1));

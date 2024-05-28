function getResult(arr, x) {
  const n = arr.length;
  let preSum = new Array(n + 1);
  preSum[0] = 0;
  // 求前缀和
  for (let i = 1; i <= n; i++) {
    preSum[i] = preSum[i - 1] + arr[i - 1];
  }
  console.log(preSum);

  let l = 0;
  let r = 1;
  let count = 0;

  while (r <= n) {
    if (preSum[r] - preSum[l] >= x) {
      count += n - r + 1;
      l++;
      r = l + 1;
    } else {
      r++;
    }
  }

  return count;
}
console.log(getResult([3, 4, 7], 7)); //4
console.log(getResult([3, 4, 7, 6, 5], 7)); // 11
console.log(getResult([3, 4, 7, 6, 5], 1000)); // 0

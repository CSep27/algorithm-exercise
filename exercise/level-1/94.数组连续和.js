function getResult(arr, x) {
  const len = arr.length;
  let prefixSum = [];
  prefixSum[0] = arr[0];
  // 求前缀和
  for (let i = 1; i < len; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }
  console.log(prefixSum);

  // 获取i-j范围的和 i<=j
  function getRangeSum(i, j) {
    if (i === 0) {
      return prefixSum[j];
    } else {
      return prefixSum[j] - prefixSum[i - 1];
    }
  }

  let count = 0;
  let l = 0;
  let r = 0;
  while (r < len) {
    const sum = getRangeSum(l, r);
    if (sum >= x) {
      count += len - r;
      l++;
      r = l;
    } else {
      r++;
    }
  }
  return count;
}
console.log(getResult([3, 4, 7], 7)); // 4
console.log(getResult([3, 4, 7, 6, 5], 7)); // 11
console.log(getResult([3, 4, 7, 6, 5], 1000)); // 0

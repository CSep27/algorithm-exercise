function getResult(A, B, r) {
  let len = B.length;
  function binarySearch(arr, target, start, end) {
    // start是向下取整，二分到只有两个数时能判断到左边界
    // 而当start === end 时 可以到右边界
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] > target) {
        end = mid - 1;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        return mid;
      }
    }
    // 此时start为刚好大于target的索引
    // end为刚好小于target的索引
    return start;
  }
  for (let i = 0; i < A.length; i++) {
    const j = binarySearch(B, A[i], 0, len - 1);
    if (B[j] - A[i] <= r) {
      console.log(A[i], B[j]);
    }
  }
}
console.log(getResult([1, 5, 5, 10], [1, 3, 8, 8, 20], 5));
console.log(getResult([1, 2, 5, 10], [1, 3, 8, 8, 20], 5));

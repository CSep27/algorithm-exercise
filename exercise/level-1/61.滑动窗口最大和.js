// 双重循环
function getResult1(n, m, arr) {
  let max = 0;
  for (let i = 0; i <= n - m; i++) {
    let sum = 0;
    for (let j = i; j < i + m; j++) {
      sum += arr[j];
    }
    max = Math.max(sum, max);
  }
  return max;
}
console.log(getResult1(6, 3, [10, 20, 30, 15, 23, 12]));

// 优化
function getResult1(n, m, arr) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < n - m; i++) {
    sum += arr[i];
  }
  let right = n - m;
  let left = 0;
  while (right < n) {
    let increaseNum = arr[right];
    let decreaseNum = arr[left];
    sum += increaseNum - decreaseNum;
    max = Math.max(sum, max);
    right++;
    left++;
  }
  return max;
}
console.log(getResult1(6, 3, [10, 20, 30, 15, 23, 12]));

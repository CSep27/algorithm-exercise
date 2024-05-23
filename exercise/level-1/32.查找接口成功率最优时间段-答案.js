function getResult(arr, minAverageLost) {
  const n = arr.length;

  const dp = new Array(n).fill(0);

  dp[0] = arr[0];

  for (let i = 1; i < n; i++) {
    dp[i] = dp[i - 1] + arr[i];
  }

  let ans = [];
  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = i === 0 ? dp[j] : dp[j] - dp[i - 1];
      let len = j - i + 1;
      let lost = len * minAverageLost;
      if (sum <= lost) {
        if (len > maxLen) {
          ans = [[i, j]];
          maxLen = len;
        } else if (len === maxLen) {
          ans.push([i, j]);
        }
      }
    }
  }

  return ans
    .sort((a, b) => a[0] - b[0])
    .map((arr) => arr.join("-"))
    .join(" ");
}
console.log(getResult([0, 1, 2, 3, 4], 1));
console.log(getResult([0, 0, 100, 2, 2, 99, 0, 2], 2));

function getResult(arr) {
  let dp = [];
  for (let i = 0; i < arr.length; i++) {
    // 前面两个if 表示 1-3次翻牌数小于0的话，取0
    // 当前的得分 = 上一次得分 + 当前牌数字
    if (i === 0) {
      dp[0] = Math.max(0, arr[i]);
    } else if (i < 3) {
      dp[i] = Math.max(0, dp[i - 1] + arr[i]);
    } else {
      // 如果 当前得分 < 往前数三次的得分
      // 那么 当前得分 = 往前数三次的得分
      // 也就是取两者之间的最大值
      dp[i] = Math.max(dp[i - 3], dp[i - 1] + arr[i]);
    }
  }
  console.log(dp);
  return dp.at(-1);
}
console.log(getResult([1, -5, -6, 4, 7, 2, -2]));

// 答案动态规划思路
const n = 4;
const w = 20;
// const values = [200, 300, 350, 400, 500];
const workers = [5, 10, 2, 11];
const arr = new Array(w + 1).fill(0);

for (let i = 0; i < n; i++) {
  // 把每件物品价值看做1
  const value = 1;
  const worker = workers[i];
  // 从后往前 人数 j=10 ... 0
  for (let j = w; j >= worker; j--) {
    arr[j] = Math.max(arr[j], value + arr[j - worker]);
  }
}
// 最后得到的价值最大的数字，就刚好是物品的件数
console.log(arr);

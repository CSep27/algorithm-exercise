const n = 2; // 菜个数
const m = 1; // 手速
// 第x秒下的菜到第y秒合适
const arr = [
  [1, 2],
  [2, 1],
];
function getResult(arr, n, m) {
  // 菜合适的时间
  let time = arr.map((item) => item[0] + item[1]);
  time.sort((a, b) => a - b);
  let count = 1; // 第一个合适的菜肯定捞
  let k = 0; // 记录上一个捞的菜的索引，第一个捞了，所以就是0
  for (let i = 1; i < time.length; i++) {
    if (time[k] + m > time[i]) {
      count++;
      k = i;
    }
  }
  console.log(count);
}
getResult(arr, n, m);

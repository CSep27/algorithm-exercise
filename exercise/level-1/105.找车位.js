const str = "1,0,0,0,0,1,0,0,1,0,1"; // 2 两个1中间0是偶数
// const str = "1,0,0,0,0,0,1,0,0,1,0,1"; // 3 两个1中间0是奇数
// const str = "0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1"; // 5 开头最长
// const str = "0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0"; // 6 结尾最长
const arr = str.split(",");

let left = 0;
let right = 0;
let len = 0;
while (right < arr.length) {
  right++;
  let current = arr[right];
  // 右指针指向1
  if (current === "1") {
    if (arr[left] === "0") {
      // 左指针为0，说明是开头 0001 的情况
      len = Math.max(len, right - left);
    } else {
      // 左指针为1，说明是 10001 的情况
      // 中间值最短间距为 Math.floor((right - left) / 2)
      len = Math.max(len, Math.floor((right - left) / 2));
    }
    // 左指针移动到右指针位置
    left = right;
  } else if (current === "0") {
    if (arr[left] === "1" && right === arr.length - 1) {
      // 100 左边是1，右边已经到末尾了
      len = Math.max(len, right - left);
    }
    // 000 左右都是0，右指针继续++，不需要处理
  }
}
console.log(len);

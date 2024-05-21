/* 
1. 只包含一个字母，其余是数字
2. 字母可以在子串中任意位置
3. 全部是字母或者全部是数字，返回-1；那也就是说长度不可能为1，至少为2

学习滑动窗口思想
按照分析的流程做出来的，第三点在最后判断了一下
*/
/* const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  // abc124acb
  console.log(getResult(line));
}); */
function getResult(line) {
  // 最长长度
  let maxLen = -1;
  // 左右指针
  let l = 0;
  let r = 0;
  // 是不是有字母了
  let hasLetter = false;
  // 字母索引
  const letterIndex = [];
  const testLetter = (x) => /[a-z|A-Z]/.test(x);
  const testDigit = (x) => /\d/.test(x);
  while (r < line.length) {
    // 如果是字母
    if (testLetter(line[r])) {
      letterIndex.push(r);
      if (hasLetter) {
        // 已经有字母了，现在就有两个字母
        // 那么看下是否更新最大长度
        maxLen = r - l > maxLen ? r - l : maxLen;
        if (testLetter(line[l])) {
          // 如果左指针指向字母，那么右移
          l++;
        } else if (testDigit(line[l])) {
          // 如果左指针指向数字
          // 获取第一个字母后面的一个位置
          // 此时letterIndex倒数第二位是第一个字母，倒数第一位是第二个字母
          const target = letterIndex[letterIndex.length - 2] + 1;
          l = target;
        }
      } else {
        // 还没有字母，现在有了
        hasLetter = true;
      }
      // 右指针右移
      r++;
    } else {
      // 右指针右移
      r++;
      // 更新长度
      maxLen = r - l > maxLen ? r - l : maxLen;
    }
  }
  return maxLen === 1 ? -1 : maxLen;
}
console.log(getResult("abc124acb")); // 4
console.log(getResult("ab4a1c1111")); // 6
console.log(getResult("4a1c1111")); // 6
console.log(getResult("4a1c1111aa")); // 6
console.log(getResult("411c1111aa")); // 8
console.log(getResult("a5")); // 2
console.log(getResult("aBB9")); // 2
console.log(getResult("abcdef")); // -1

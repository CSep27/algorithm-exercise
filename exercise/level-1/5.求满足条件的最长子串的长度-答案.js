/* 
1. 只包含一个字母，其余是数字
2. 字母可以在子串中任意位置

滑动窗口
学习滑动窗口思想
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
  while (r < line.length) {
    // 如果是字母
    if (testLetter(line[r])) {
      hasLetter = true;
      letterIndex.push(r);
      if (letterIndex.length > 1) {
        l = letterIndex.shift() + 1;
      }
      if (r == l) {
        r++;
        continue;
      }
    }
    maxLen = Math.max(maxLen, r - l + 1);
    r++;
  }
  return maxLen;
}
console.log(getResult("abc124acb")); // 4
console.log(getResult("ab4a1c1111")); // 6
console.log(getResult("4a1c1111")); // 6
console.log(getResult("4a1c1111aa")); // 6
console.log(getResult("411c1111aa")); // 8
console.log(getResult("a5")); // 2
console.log(getResult("aBB9")); // 2
console.log(getResult("abcdef")); // -1

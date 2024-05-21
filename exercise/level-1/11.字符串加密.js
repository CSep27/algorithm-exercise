const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.output,
});
let num = 0;
const strs = [];

/* 
输入多行的思路
1. 输入完一行，把每行数据放入数组
2. 每次都判断数组长度是否达到指定数量，达到则处理
3. 处理完则清空数组
*/
rl.on("line", (line) => {
  strs.push(line);

  if (strs.length === 1) {
    num = strs[0] - 0;
  }
  if (num && strs.length === num + 1) {
    strs.shift();
    strs.forEach((str) => {
      console.log(encrypt(str));
    });
    strs.length = 0;
  }
});
// xy
function encrypt(str) {
  const l = str.length;

  const a = new Array(l);
  if (l > 0) a[0] = 1;
  if (l > 1) a[1] = 2;
  if (l > 2) a[2] = 4;
  if (l > 3) {
    for (let i = 3; i < l; i++) {
      a[i] = a[i - 1] + a[i - 2] + a[i - 3];
    }
  }
  const arr = [...str];
  const newStr = arr
    .map((item, i) => {
      return String.fromCharCode(((item.charCodeAt() - 97 + a[i]) % 26) + 97);
    })
    .join("");
  return newStr;
}

const str = "AAAAHHHBBCDHHHH";
const k = 3;

// 只需要输入长度值
let letter = str[0];
let len = 1;
let count = {};

for (let index = 1; index < str.length; index++) {
  const element = str[index];

  if (element === letter) {
    len++;
  } else {
    // 不相等了，说明开始新的字母，此时可以存储长度，或者更新长度
    if (count[letter] === undefined || count[letter] < len) {
      count[letter] = len;
    }
    letter = element;
    len = 1;
  }
  if (index === str.length - 1) {
    if (count[letter] === undefined || count[letter] < len) {
      count[letter] = len;
    }
  }
}
console.log(count);
const arr = [];
for (const key in count) {
  arr.push(count[key]);
}
arr.sort((a, b) => {
  b - a;
});
console.log(arr);
console.log(arr[k - 1]);

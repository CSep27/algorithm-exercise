const str = "17";
const arr = str.split("").map((ele) => parseInt(ele));

let correct = 0;
for (let i = 0; i < arr.length; i++) {
  let fault = arr[i];
  // 大于4的数，减一，变成原本的数
  // 每一位就是9进制数的正确数字
  if (fault > 4) {
    fault--;
  }
  // 每一位转换成十进制
  fault = fault * Math.pow(9, arr.length - 1 - i);
  // 加起来得到正确的数
  correct += fault;
}
console.log(correct);

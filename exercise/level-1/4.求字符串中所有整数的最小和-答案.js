/* 
所有整数的最小和
正数就只取一位
遇到负数就取多位

考虑超大整数，用BigInt，并且按位数存储数字
*/
const minSum = (str) => {
  let sum = BigInt(0);
  let i = 0;
  const reg = /\d/;
  let isNegative = false;
  const negative = [];
  for (const c of str) {
    if (reg.test(c)) {
      if (isNegative) {
        negative.push(c);
      } else {
        sum += BigInt(c);
      }
    } else {
      if (isNegative) {
        sum -= BigInt(negative.join(""));
        negative.length = 0;
      }
      isNegative = c === "-";
    }
  }
  if (negative.length > 0) {
    sum -= BigInt(negative.join(""));
  }
  return sum.toString();
};
console.log(minSum("bb1234aa"));
console.log(minSum("bb12-34aa"));
console.log(minSum("12bb-1234aa"));
console.log(minSum("12bb-1234aa-"));
console.log(minSum("12bb-1234aa-1"));

/* 
所有整数的最小和
正数就只取一位
遇到负数就取多位

考虑超大整数，用BigInt，并且按位数存储数字
*/
// const str = "bb1234aa";
const minSum = (str) => {
  let sum = 0;
  let i = 0;
  const reg = /d+/;
  while (i < str.length) {
    const element = str[i];
    if (element === "-") {
      // 碰到负号，就把-后面的数字拿到
      const match = str.match(/\d+/);
      if (match) {
        let numStr = match[0];
        sum -= Number(numStr);
        // 加上一个-的长度，从数字后面第一位开始截取
        str = str.substring(numStr.length + 1);
        continue;
      } /*  else {
        str = str.substring(i + 1);
      } */
    } else if (/\d/.test(element)) {
      // 是一位数字
      let num = Number(str.match(/\d/)[0]);
      sum += num;
      // str = str.substring(i + 1);
    } /* else {
      str = str.substring(i + 1);
    } */
    str = str.substring(i + 1);
  }
  return sum;
};
console.log(minSum("bb1234aa"));
console.log(minSum("bb12-34aa"));
console.log(minSum("12bb-1234aa"));
console.log(minSum("12bb-1234aa-"));
console.log(minSum("12bb-1234aa-1"));

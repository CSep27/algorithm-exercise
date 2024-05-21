const num = 1000;

const binNum = num.toString(2);

let len =
  binNum.length % 7 === 0
    ? binNum.length / 7
    : Math.floor(binNum.length / 7) + 1;

let arr = [];
let result = "";

let i = 1;
while (i <= len) {
  let startIndex = -7 * i;
  let endIndex = i === 1 ? undefined : -7 * (i - 1);

  let subStr = binNum.slice(startIndex, endIndex);
  let l = subStr.length;
  if (l < 7) {
    l = 7 - l;
    while (l--) {
      subStr = `0${subStr}`;
    }
  }
  let hexStr = "";
  if (i === len) {
    hexStr = parseInt(`0${subStr}`, 2).toString(16);
  } else {
    hexStr = parseInt(`1${subStr}`, 2).toString(16);
  }
  hexStr = hexStr.length === 1 ? `0${hexStr}` : hexStr;
  result += hexStr;
  i++;
}
console.log(result.toLocaleUpperCase());

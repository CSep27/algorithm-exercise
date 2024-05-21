/* 
"aaabbccccd" 超过2个的字母压缩
"3abb4cd" 

编写解压函数，判断是否为合法压缩过的字符串
若合法，输出解压后的字符串
否则输出!error
*/
const compression = (str) => {
  let newStr = "";
  let i = 0;
  const stack = [];
  const genNewStr = () => {
    const num = stack.length;
    if (num > 2) {
      let subStr = `${num}${stack[0]}`;
      newStr += subStr;
    } else {
      newStr += stack.join("");
    }
  };
  while (i < str.length) {
    let letter = str[i];
    if (stack.length !== 0 && letter !== stack[stack.length - 1]) {
      genNewStr();
      // 置空
      stack.length = 0;
    }
    stack.push(letter);
    i++;
    /* if (stack.length === 0) {
        stack.push(letter);
      } else {
        // 如果等于上一个值
        if (letter === stack[stack.length - 1]) {
          stack.push(letter);
        } else {
          // 如果不等于说明出现了新值
        //   const num = stack.length;
        // if (num > 2) {
        //   let subStr = `${num}${stack[0]}`;
        //   newStr += subStr;
        // } else {
        //   newStr += stack.join("");
        // }
          genNewStr();
          // 先置空
          stack.length = 0;
          // 再放入新值
          stack.push(letter);
        }
      } */
  }
  genNewStr();
  return newStr;
};
/* console.log(compression("aaabbccccd"));
console.log(compression("aaabbccccdd"));
console.log(compression("aaabbccccddd"));
console.log(compression("eaaabbccccddd"));
console.log(compression("eeaaabbccccddd")); */

const decompression = (str) => {
  // 压缩后字符应该符合以下正则
  const reg1 = /^[a-z]*(\d*[a-z]+)+$/;
  if (!reg1.test(str)) {
    return "!error";
  }
  // 匹配压缩后的字符串 如：3a
  const reg2 = /\d[a-z]/g;
  const match = str.match(reg2);
  if (!match) {
    return;
  }
  match.forEach((item) => {
    let i = str.indexOf(item);
    let newStr = "";
    let num = Number(item[0]);
    while (num--) {
      newStr += item[1];
    }
    str = str.replace(item, newStr);
  });
  return str;
};

/* 
判断不合法
1. 原始压缩后字符串str：2dff
解压后s1，按照正确的压缩算法压缩得到字符串s2，
如果str!=s2，说明str不合法

2. 压缩后的字符串只有数字和小写字母，出现其他字符不合法
*/
// 最终的解压方法
const de = (str) => {
  const s1 = decompression(str);
  // console.log("s1", s1);
  const s2 = compression(s1);
  // console.log("s2", s2);
  if (str !== s2) {
    return "!error";
  }
  return s1;
};

console.log(de("3abb4cd"));
console.log(de("2dff"));
console.log(de("2d@a"));

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const str = 'aaa_password_"a12_45678"_timeout_100_""_';
const encrypt = (str, i) => {
  let result = [];
  const stack = [];
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (element === "_") {
      // 如果栈底是 " ，则说明是命令字的组成部分
      if (stack[0] === '"') {
        stack.push(element);
      } else {
        // 如果栈底不是 " ，则说明是分隔符
        // 那么把stack前面的内容放到result
        result.push(stack.join(""));
        stack.length = 0;
      }
    } else if (element === '"') {
      if (stack[0] === '"') {
        // 那么此时是碰到了闭合的引号
        stack.push(element);
        result.push(stack.join(""));
        stack.length = 0;
      } else {
        // 把双引号放进去
        stack.push(element);
      }
    } else {
      stack.push(element);
    }
  }
  console.log(result);
  result = result.filter((item) => item !== "");
  console.log(result);
  result[i] = "******";
  return result.join("_");
};

console.log(encrypt(str, 2));

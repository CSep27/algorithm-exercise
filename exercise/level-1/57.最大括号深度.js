/* const str = "(1+(2+3)*(3+(8+0))+1-2)";
const s = str.replace(/[^\(\)]/g, "");
console.log(str);
console.log(s); // (()(())) */

function getResult(str) {
  let deepth = 0;

  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let i = 0;
  while (i < str.length) {
    // 栈为空
    if (stack.length === 0) {
      // 第一个元素是右括号，说明不符合条件
      if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
        return 0;
      }
    } else {
      if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
        if (stack[stack.length - 1] === map[str[i]]) {
          deepth = Math.max(deepth, stack.length);
          stack.pop();
          i++;
          continue;
        }
      }
    }
    stack.push(str[i]);
    i++;
  }
  return deepth;
}
console.log(getResult("([]{()})")); // 3
console.log(getResult(")([]{()})")); //0
console.log(getResult("()([]{()})")); //3
console.log(getResult("{]")); //0
console.log(getResult("[]]")); //0 数量不相等
console.log(getResult("[]")); //1

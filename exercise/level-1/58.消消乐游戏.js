function getResult(str) {
  if (/[^a-zA-Z]/.test(str)) {
    return 0;
  }
  let stack = [];
  stack.push(str[0]);
  let i = 1;
  while (i < str.length) {
    if (stack[stack.length - 1] === str[i]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
    i++;
  }
  return stack.length;
}
console.log(getResult("mMbccbc"));
console.log(getResult("gg"));

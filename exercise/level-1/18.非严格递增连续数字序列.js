// const str = "abc2234019A334bc";
const str = "abc2234019A334bc445678";

let l = 0;
let r = 0;
let maxLen = 0;
const isLetter = (s) => {
  return /[a-zA-Z]/.test(s);
};
const isNum = (s) => {
  return /\d/.test(s);
};
while (r < str.length) {
  let left = str[l];
  let right = str[r];
  /* if (isNum(left) && isNum(right)) {
    if (right === str[r - 1] || +right === +str[r - 1] + 1) {
      let len = r - l + 1;
      maxLen = len > maxLen ? len : maxLen;
    } else {
      l = r;
    }
  } else {
    l = r;
  } */
  if (
    isNum(left) &&
    isNum(right) &&
    (right === str[r - 1] || +right === +str[r - 1] + 1)
  ) {
    let len = r - l + 1;
    maxLen = len > maxLen ? len : maxLen;
  } else {
    l = r;
  }
  r++;
}
console.log(maxLen);

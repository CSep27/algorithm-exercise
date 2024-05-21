const str1 = "bbach";
const str2 = "bbaaccedfg";

/* 答案的做法更充分的利用了Set */
// 给字符串去重
const s1 = new Set(str1);
const s2 = new Set(str2);

const r = [...s1]
  .filter((s) => s2.has(s))
  .sort()
  .join("");
console.log(r);

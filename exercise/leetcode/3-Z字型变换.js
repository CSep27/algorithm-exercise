var convert = function (s, numRows) {
  if (numRows < 2) {
    return s;
  }
  const rows = new Array(numRows);
  for (let i = 0; i < rows.length; i++) {
    rows[i] = [];
  }
  let i = 0;
  let flag = -1;
  for (let j = 0; j < s.length; j++) {
    rows[i].push(s[j]);
    // rows 的索引变化区间是 0 - numRows - 1
    // 当遇到首尾索引时，需要改变索引变化的规律 递增还是递减
    if (i === 0 || i === numRows - 1) {
      flag = -flag;
    }
    i += flag;
  }
  return rows.map((item) => item.join("")).join("");
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));

function getResult(n, m) {
  if (n < 3 || n > 7) {
    return -1;
  }
  let lastNum;
  let count = -1;
  let start = Math.pow(10, n - 1);
  let end = Math.pow(10, n);

  const powN = {};
  for (let i = 0; i <= 9; i++) {
    powN[i] = Math.pow(i, n);
  }
  for (let i = start; i < end; i++) {
    let sum = String(i)
      .split("")
      .reduce((p, c) => {
        return powN[c] + p;
      }, 0);

    if (sum === i) {
      count++;
      if (count === m) {
        return i;
      } else {
        lastNum = i;
      }
    }
  }
  console.log("lastNum", lastNum);
  // 到这里说明m大于水仙花的个数了
  return lastNum * m;
}
console.log(getResult(3, 0)); // 153
console.log(getResult(3, 100)); // 40700
console.log(getResult(9, 1)); // -1

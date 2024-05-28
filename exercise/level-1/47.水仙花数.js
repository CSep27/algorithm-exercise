function getResult(n, m) {
  if (n < 3 || n > 7) {
    return -1;
  }
  let result = [];
  let start = Math.pow(10, n - 1);
  let end = Math.pow(10, n);

  for (let i = start; i < end; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += Math.pow(Number(String(i)[j]), n);
    }
    if (sum === i) {
      if (result.length === m) {
        console.log(i);
        return i;
      } else {
        result.push(i);
      }
    }
  }
  console.log(result);
  // 到这里说明m大于水仙花的个数了
  return result[result.length - 1] * m;
}
console.log(getResult(3, 0)); // 153
console.log(getResult(3, 100)); // 40700
console.log(getResult(9, 1)); // -1

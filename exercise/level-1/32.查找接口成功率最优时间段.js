function getResult(arr, minAverageLost) {
  // 存储 数字和 的数组
  const sumsArr = arr.concat();
  const result = [];
  // 索引之间间隔
  let len = 1;
  let maxLen = 1;
  while (sumsArr.length > 1) {
    for (let i = 0; i < sumsArr.length - 1; i++) {
      sumsArr[i] = sumsArr[i] + arr[i + len];
      // 计算平均值并比较
      if (sumsArr[i] / (len + 1) <= minAverageLost) {
        if (len > maxLen) {
          result.length = 0;
          maxLen = len;
        }
        result.push([i, i + len]);
      }
    }
    len++;
    sumsArr.length--;
  }
  return result.map((item) => item.join("-")).join(" ");
}
console.log(getResult([0, 1, 2, 3, 4], 1));
console.log(getResult([0, 0, 100, 2, 2, 99, 0, 2], 2));
console.log(getResult([0, 0, 100, 2, 2, 99, 0, 2], 200));
console.log(getResult([0, 0, 100, 2, 2, 99, 0, 2], 26));
console.log(getResult([0, 0, 100, 2, 2, 99, 0, 100], 30));

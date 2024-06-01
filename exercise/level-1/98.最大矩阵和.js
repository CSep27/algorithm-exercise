function getResult(matrix) {
  let maxSum = -Infinity;
  let preSums = [];
  let n = matrix.length;

  let newMatrix = matrix.concat();

  /* 
  1. 得到新的matrix 3行

  2. 新的matrix求每一行前缀和
  3. 再比较大小
  */

  // 将每 l 行合并成一行
  // l表示 每几行合并
  function unionLine(l) {
    for (let i = 0; i <= n - l; i++) {
      const item = matrix[i];
      const line = [];
      for (let j = 0; j < item.length; j++) {
        // 几行合并，这里就有几个值相加
        let k = 1;
        let value = matrix[i][j];
        while (k < l) {
          value += matrix[i + k][j];
          k++;
        }
        line.push(value);
      }
      newMatrix.push(line);
    }
  }

  // 最少每2行合并，最多每n行合并
  for (let i = 2; i <= n; i++) {
    unionLine(i);
  }

  // 获取 newMatrix 每一行的前缀和
  for (let i = 0; i < newMatrix.length; i++) {
    const item = newMatrix[i];
    preSums[i] = [];
    for (let j = 0; j < item.length; j++) {
      const value = item[j];
      preSums[i][j] = j === 0 ? value : value + preSums[i][j - 1];
    }
  }

  function getRangeSum(preSum, i, j) {
    if (i === 0) {
      return preSum[j];
    }
    return preSum[j] - preSum[i - 1];
  }

  // 根据 newMatrix 前缀和，获取最大值
  for (let i = 0; i < newMatrix.length; i++) {
    const item = preSums[i];
    for (let j = 0; j < item.length; j++) {
      for (let k = j; k < item.length; k++) {
        // j-k范围的和
        const sum = getRangeSum(item, j, k);
        maxSum = Math.max(maxSum, sum);
      }
    }
  }
  console.log("newMatrix", newMatrix);
  console.log("preSums", preSums);

  return maxSum;
}
console.log(
  getResult([
    [-3, 5, -1, 5],
    [2, 4, -2, 4],
    [-1, 3, -1, 3],
  ])
);

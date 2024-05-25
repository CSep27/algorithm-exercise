// 练习一遍，传入无向和有向数据
function getResult(matrix) {
  const n = matrix.length;
  const distance = new Array(n).fill(Infinity);
  distance[0] = 0;
  const nodes = new Array(n).fill(false);
  /* 
  1. 获取distance里的最小值，和最小值索引，就是下一个要找的点
  2. 将目前的最短路径 ，和经过下一个点到各点的最短路径相比，如果新值更小，则distance更新
  3. 注意，已经找过的点不再找
  */
  for (let i = 0; i < n; i++) {
    let minValue = Infinity;
    let minValueIndex = n + 1;
    for (let j = 0; j < n; j++) {
      if (!nodes[j] && distance[j] < minValue) {
        minValue = distance[j];
        minValueIndex = j;
      }
    }
    nodes[minValueIndex] = true;

    for (let j = 0; j < n; j++) {
      distance[j] = Math.min(
        distance[j],
        distance[minValueIndex] + matrix[minValueIndex][j]
      );
    }
  }
  return distance;
}
// 表示点到点的距离
// 无向 matrix1[0][1] = matrix1[1][0]
const matrix1 = [
  [0, 10, Infinity, 4, Infinity, Infinity],
  [10, 0, 8, 2, 6, Infinity],
  [Infinity, 8, 10, 15, 1, 5],
  [4, 2, 15, 0, 6, Infinity],
  [Infinity, 6, 1, 6, 0, 12],
  [Infinity, Infinity, 5, Infinity, 12, 0],
];
// 有向：0 能到 1，1 无法到 0
// matrix1[0][1] = 10
// matrix1[1][0] = Infinity
const matrix2 = [
  [0, 10, Infinity, 4, Infinity, Infinity],
  [Infinity, 0, 2, 2, 6, Infinity],
  [Infinity, Infinity, 0, Infinity, 1, 3],
  [Infinity, Infinity, 15, 0, 6, Infinity],
  [Infinity, Infinity, Infinity, Infinity, 0, 12],
  [Infinity, Infinity, Infinity, Infinity, Infinity, 0],
];
console.log(getResult(matrix1)); // [ 0, 6, 11, 4, 10, 16 ]
console.log(getResult(matrix2)); // [ 0, 10, 12, 4, 10, 15 ]

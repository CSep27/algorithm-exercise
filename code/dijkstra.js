// 表示点到点的距离
const matrix = [
  [0, 10, Infinity, 4, Infinity, Infinity],
  [10, 0, 8, 2, 6, Infinity],
  [Infinity, 8, 10, 15, 1, 5],
  [4, 2, 15, 0, 6, Infinity],
  [Infinity, 6, 1, 6, 0, 12],
  [Infinity, Infinity, 5, Infinity, 12, 0],
];
// 节点个数
const n = matrix.length;
// 记录节点是否被选择
const nodes = new Array(n).fill(false);
// 记录最短距离 初始时就是第一个
const distance = matrix[0].concat();
nodes[0] = true;

while (nodes.includes(false)) {
  let minValue = Infinity;
  let minValueIndex = n + 1;
  for (let i = 0; i < n; i++) {
    // 已经计算过的点，不再参与最小值计算
    if (!nodes[i] && distance[i] < minValue) {
      minValue = distance[i];
      minValueIndex = i;
    }
  }
  nodes[minValueIndex] = true;

  // 计算经过minValueIndex对应的点，到其他点的距离并更新
  for (let j = 0; j < n; j++) {
    distance[j] = Math.min(
      distance[j],
      distance[minValueIndex] + matrix[minValueIndex][j]
    );
  }
}
console.log(distance);

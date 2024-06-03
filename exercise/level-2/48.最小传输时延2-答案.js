const offsets = [
  [-1, 1],
  [0, 1],
  [1, 1],
  [-1, 0],
  [1, 0],
  [-1, -1],
  [0, -1],
  [1, -1],
];

function getResult(matrix, m, n) {
  let result = [];
  // 存放已经走过的点，存放一维坐标
  const path = new Set();
  /**
   * @description:
   * @param {*} i 当前节点横坐标
   * @param {*} j 当前节点的纵坐标
   * @param {*} totalDelay 已累计的时延值
   * @param {*} lastDelay 上一个节点的时延值
   * @param {*} path 记录扫描过的节点的位置，避免重复扫描。
   * @param {*} result 记录各种从起点到终点的路径的时延值。
   * @return {*}
   */
  function dfs(i, j, totalDelay, lastDelay, path, result) {
    const currentDelay = matrix[i][j];
    let flag = currentDelay === lastDelay;
    if (i === m - 1 && j === n - 1) {
      totalDelay += currentDelay - (flag ? 1 : 0);
      // 到右下角了 结束递归
      return result.push(totalDelay);
    }

    offsets.forEach((item) => {
      const [x, y] = item;
      // 新坐标
      const newI = i + x;
      const newJ = j + y;
      // 点的一维坐标
      const pos = newI * m + newJ;
      // 判断 1. 新坐标值有效；2. 新坐标不在path中
      if (newI >= 0 && newI < m && (newJ >= 0) & (newJ < n) && !path.has(pos)) {
        path.add(pos);
        // 继续深度遍历
        dfs(
          newI,
          newJ,
          totalDelay + currentDelay - (flag ? 1 : 0),
          currentDelay,
          path,
          result
        );
        path.delete(pos);
      }
    });
  }
  path.add(0);
  dfs(0, 0, 0, Infinity, path, result);
  console.log(result);
  // return result.sort((a, b) => a - b)[0];
  return Math.min.apply(null, result);
}
console.log(
  getResult(
    [
      [0, 2, 2],
      [1, 2, 1],
      [2, 2, 1],
    ],
    3,
    3
  )
);
console.log(
  getResult(
    [
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2],
    ],
    3,
    3
  )
);

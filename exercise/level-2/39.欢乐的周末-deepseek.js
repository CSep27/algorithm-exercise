/* 
具体步骤如下：

解析输入：首先读取地图的长宽（m和n），然后读取具体的地图数据。地图中包含0（道路）、1（障碍物）、2（小华或小为的位置，以及3（聚餐地点）。

找到小华和小为的位置：遍历地图，找到两个标记为2的位置，分别作为小华和小为的起点。

广度优先搜索（BFS）或深度优先搜索（DFS）：从小华和小为的位置分别出发，使用BFS或DFS探索他们能够到达的所有3的位置。BFS通常更适合寻找最短路径或可达性问题。

记录可达的3的位置：对于小华和小为，分别记录他们能够到达的3的位置。

求交集：找出小华和小为都能到达的3的位置，统计这些位置的数量。

输出结果：输出这个数量。
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let m = 4;
let n = 4;
// let map = [];
/* let map = [
  [2, 1, 0, 3],
  [0, 1, 2, 1],
  [0, 3, 0, 0],
  [0, 0, 0, 0],
]; */
let map = [
  [2, 1, 2, 3],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
];
let people = [];
let lineCount = 0;

/* rl.on("line", (line) => {
  if (lineCount === 0) {
    [m, n] = line.split(" ").map(Number);
    lineCount++;
  } else {
    const row = line.split(" ").map(Number);
    map.push(row);
    if (map.length === m) {
      solve();
      rl.close();
    }
  }
}); */

function solve() {
  // 找到两个2的位置
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === 2) {
        people.push([i, j]);
      }
    }
  }

  const [x1, y1] = people[0];
  const [x2, y2] = people[1];

  // BFS for the first person
  const reachable1 = bfs(x1, y1);
  // BFS for the second person
  const reachable2 = bfs(x2, y2);

  // Find intersection
  let count = 0;
  for (const pos of reachable1) {
    if (reachable2.has(pos)) {
      count++;
    }
  }

  console.log(count);
}

function bfs(startX, startY) {
  const visited = new Set();
  const queue = [[startX, startY]];
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const reachable = new Set();

  visited.add(`${startX},${startY}`);

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < m && ny >= 0 && ny < n && map[nx][ny] !== 1) {
        const key = `${nx},${ny}`;
        if (!visited.has(key)) {
          visited.add(key);
          if (map[nx][ny] === 3) {
            reachable.add(key);
          }
          queue.push([nx, ny]);
        }
      }
    }
  }

  return reachable;
}

console.log(solve());

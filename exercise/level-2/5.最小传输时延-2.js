const n = 3; // 网络结点的个数n
const m = 3; // 时延列表的长度
// u源 v目的 w时延
// 有向无环的区别在于，可能有些点到不了

/* 
u>=1
v<=n
1<=w<=100
*/
const arr = [
  ["1", "2", 11],
  ["2", "3", 13],
  ["1", "3", 50],
];
let startIndex = "1";
let endIndex = "3";

function getResult(arr, n, m, startIndex, endIndex) {
  /* 
    distance 长度为 网络节点个数+1
    由于源从1开始，索引0位置不用，为了方便索引对应
    1. distance数组存储，startIndex到所有其他点的路径，不能直达的填Infinity
    2. distance数组中，找到与startIndex直接相连的路径最短的点minValueIndex，经过该点，更新distance
    3. 注意，已经找过的点，不再参与minValueIndex的查找
  */
  const distance = new Array(n + 1).fill(Infinity);
  distance[1] = 0;
  /*
    将arr处理为对象
    {
      1: [
        ["2", 11],
        ["3", 50],
      ],
      2: [["3", 13]],
    }
  */
  const obj = {};
  for (let i = 0; i < m; i++) {
    const [u, v, w] = arr[i];
    if (obj[u]) {
      obj[u].push([v, w]);
    } else {
      obj[u] = [[v, w]];
    }
  }
  console.log(obj);
  // 存放需要检查的索引
  let needCheckArr = [];
  // 需要循环的次数是不确定的，能够走通的路径都要尝试一下
  while (true) {
    let needSort = false;
    // obj[startIndex]需要有值，也就是能够走到其他元素
    obj[startIndex]?.forEach((item) => {
      const [v, w] = item;
      const newDist = distance[startIndex] + w;
      if (newDist > distance[v]) {
        return;
      }
      distance[v] = newDist;
      // 只要从当前startIndex能连通的路径，都需要走一下试试
      // 放入needCheckArr中
      if (!needCheckArr.includes(v)) {
        needCheckArr.push(v);
        // 加入了新元素，才需要执行排序
        needSort = true;
      }
    });
    // 没有需要检查的元素了，结束循环
    if (!needCheckArr.length) {
      break;
    }
    // 从当前经过路径短的开始尝试
    needSort && needCheckArr.sort((a, b) => distance[a] - distance[b]);
    startIndex = needCheckArr.shift();
  }
  console.log(distance);
  // 不可达时为Infinity
  return distance[endIndex] === Infinity ? -1 : distance[endIndex];
}
// console.log(getResult(arr, n, m, startIndex, endIndex));
/* 
只要点能够到达的路径，都需要走一下，进行比较，
比如这个例子中，第一步时，1-4 比1-2小，但是到终点6来说，1-4-5-6比1-2-3-6大
所以只要相连的点，都需要去尝试走，尝试的顺序是先从距离小的尝试

在图论中，如果一个有向图无法从某个顶点出发经过若干条边回到该点，则这个图是一个有向无环图（DAG图）。
因为有向图中一个点经过两种路线到达另一个点未必形成环，因此有向无环图未必能转化成树，但任何有向树均为有向无环图。
https://oi-wiki.org/graph/dag/
*/
console.log(
  getResult(
    [
      ["1", "2", 10],
      ["2", "3", 2],
      ["2", "4", 2],
      ["2", "5", 6],
      ["1", "4", 4],
      ["3", "5", 1],
      ["3", "6", 3],
      ["4", "3", 15],
      ["4", "5", 6],
      ["5", "6", 12],
    ],
    6,
    10,
    "1",
    "6"
  )
);
// [0,  0, 10, 12,  4, 10, 15]

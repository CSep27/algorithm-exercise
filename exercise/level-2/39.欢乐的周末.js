/* 
题目描述
小华和小为是很要好的朋友，他们约定周末一起吃饭。

通过手机交流，他们在地图上选择了多个聚餐地点(由于自然地形等原因，部分聚餐地点不可达)。

求小华和小为都能到达的聚餐地点有多少个?

输入描述
第一行输入m和n，m代表地图的长度，n代表地图的宽度

第二行开始具体输入地图信息，地图信息包含:

0 为通畅的道路

1 为障碍物 (且仅1为障碍物)

2 为小华或者小为，地图中必定有且仅有2个(非障碍物)

3 为被选中的聚餐地点 (非障碍物)

输出描述
可以被两方都到达的聚餐地点数量，行末无空格

示例1
输入：
4 4
2 1 0 3
0 1 2 1
0 3 0 0
0 0 0 0

输出：
2

说明：第一行输入地图的长宽为4，4，接下来4行是地图2表示华为的位置，3是聚餐地点，图中的两个3，小华和小为都可到小华和小为都可到达，所以输出2
*/

/* 
网上找到的答案说，并不适用于并查集，PDF中的代码写出来也没有得到正确的结果
想了一下并查集，确实会觉得有点奇怪，好像并不适合？
*/

/* ！运行出来的答案不对！ */
class UnionFindSet {
  constructor(n) {
    this.fa = new Array(n).fill(0).map((_, index) => index);
    this.count = n;
  }
  find(x) {
    return x !== this.fa[x] ? this.find(this.fa[x]) : x;
  }
  union(i, j) {
    const fa_i = this.fa[i];
    const fa_j = this.fa[j];
    if (fa_i !== fa_j) {
      this.fa[fa_j] = this.find(i);
      this.count--;
    }
  }
}

function countAddress(grid) {
  const n = grid.length;
  const m = grid[0].length;

  const ufs = new UnionFindSet(n * m);
  const huawei = [];
  const restaurant = [];
  const offsets = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const element = grid[i][j];
      if (element !== 1) {
        const x = i * m + j;
        if (element === 2) {
          huawei.push(x);
        } else if (element === 3) {
          restaurant.push(x);
        }
        for (let offset of offsets) {
          const newI = i + offset[0];
          const newJ = j + offset[1];
          if (
            newI >= 0 &&
            newI < n &&
            newJ >= 0 &&
            newJ < m &&
            grid[newI][newJ] !== 1
          ) {
            ufs.union(x, newI * m + newJ);
          }
        }
      }
    }
  }
  const [hua, wei] = huawei;
  const hua_fa = ufs.find(hua);
  const wei_fa = ufs.find(wei);
  if (hua_fa !== wei_fa) {
    return 0;
  }
  return restaurant.filter((r) => ufs.find(r) === hua_fa.length);
}

console.log(
  countAddress([
    [2, 1, 0, 3],
    [0, 1, 2, 1],
    [0, 3, 0, 0],
    [0, 0, 0, 0],
  ])
);

console.log(
  countAddress([
    [2, 1, 2, 3],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ])
);

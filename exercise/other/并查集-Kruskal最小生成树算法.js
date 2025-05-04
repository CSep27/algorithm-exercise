/* 



*/
// 并查集
class UnionFindSet {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((_, index) => index);
    this.rank = new Array(n).fill(1);
    this.count = n;
  }
  find(x) {
    if (x === this.parent[x]) {
      return x;
    }
    // 路径压缩
    this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  union(x, y) {
    const parentX = this.find(x);
    const parentY = this.find(y);
    if (parentX === parentY) {
      // 表示已经在同一个集合里了
      return true;
    }
    // 按秩合并
    if (this.rank[x] < this.rank[y]) {
      this.parent[x] = parentY;
    } else if (this.rank[x] > this.rank[y]) {
      this.parent[y] = parentX;
    } else {
      this.parent[y] = parentX;
      this.rank[y]++;
    }
    this.count--;
    return false;
  }
  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }
}

const fn = (arr) => {
  const edges = [];
  let totalWeight = 0;
  let side = 0;
  const n = arr.length;
  arr.sort((a, b) => {
    return a[0] - b[0];
  });
  console.log(arr);
  const ufs = new UnionFindSet(n);
  for (let i = 0; i < n; i++) {
    let [weight, x, y] = arr[i];
    x = Number(x);
    y = Number(y);
    if (side === n - 1) {
      break;
    }
    if (!ufs.isConnected(x, y)) {
      // 不属于一个集合，说明没有连成环
      // 那么放入一个集合中
      edges.push([x, y]);
      totalWeight += weight;
      ufs.union(x, y);
      side++;
    }
  }
  console.log(ufs);
  return { totalWeight, edges };
};
// 对应最小生成树图片，A B都表示城市
/* console.log(
  fn([
    [7, "A", "B"],
    [1, "A", "C"],
    [5, "B", "C"],
    [6, "B", "D"],
    [3, "C", "D"],
    [4, "C", "E"],
    [2, "D", "E"],
  ])
); */
// 方便使用并查集，都改成数字？
console.log(
  fn([
    [7, "0", "1"],
    [1, "0", "2"],
    [5, "1", "2"],
    [6, "1", "3"],
    [3, "2", "3"],
    [4, "2", "4"],
    [2, "3", "4"],
  ])
);

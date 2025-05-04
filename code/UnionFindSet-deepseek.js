class UnionFindSet {
  constructor(size) {
    this.parent = Array(size)
      .fill(0)
      .map((_, i) => i); // 初始化每个元素的父节点是自己
    this.rank = Array(size).fill(1); // 初始化每个树的秩（高度）为1
  }

  // 查找元素 x 的根（路径压缩优化）
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // 递归压缩路径
    }
    return this.parent[x];
  }

  // 合并 x 和 y 所在的集合（按秩合并优化）
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return; // 已经在同一集合

    // 较小的树合并到较大的树上
    if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++; // 高度相同，合并后树高+1
    }
  }

  // 判断 x 和 y 是否连通
  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }
}

const uf = new UnionFindSet(5); // 初始化 5 个元素（0, 1, 2, 3, 4）

uf.union(0, 1); // 合并 0 和 1
uf.union(2, 3); // 合并 2 和 3

console.log(uf.isConnected(0, 1)); // true（0 和 1 连通）
console.log(uf.isConnected(1, 2)); // false（1 和 2 不连通）

uf.union(1, 2); // 合并 1 和 2
console.log(uf.isConnected(0, 3)); // true（0 -> 1 -> 2 -> 3）

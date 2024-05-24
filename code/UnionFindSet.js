/* 并查集 */
class UnionFindSet {
  constructor(n) {
    // 初始化
    this.fa = new Array(n).fill(0).map((_, i) => i);
    // 表示有几个集合
    this.count = n;
  }
  // 查找
  // 如果索引等于值，返回索引
  // 如果索引不等于值，说明存储的时父级索引，将值作为新的索引继续找，直至满足索引等于值，也就是找到了最终代理的父级元素
  find(x) {
    if (x !== this.fa[x]) {
      return (this.fa[x] = this.find(this.fa[x]));
    }
    return x;
  }
  // 合并，将x和y位置的元素放入一个集合中
  // x和y不同时，y位置的值存储为x，即最终用x位置的值代理y位置的值
  // 表示将x和y放入来了一个集合中
  union(x, y) {
    const x_fa = this.find(x);
    const y_fa = this.find(y);
    if (x_fa !== y_fa) {
      this.fa[y_fa] = x_fa;
      this.count--;
    }
  }
}

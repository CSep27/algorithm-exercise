/* 并查集 */
/* 
优化点：
1. 路径压缩
2. 按秩合并
*/
class UnionFindSet {
  constructor(n) {
    // 初始化
    this.fa = new Array(n).fill(0).map((_, i) => i);
    this.rank = new Array(n).fill(1);
    // 表示有几个集合
    this.count = n;
  }
  // 查找
  // 如果索引等于值，返回索引
  // 如果索引不等于值，说明存储的是父级索引，将值作为新的索引继续找，直至满足索引等于值，也就是找到了最终代理的父级元素
  find(x) {
    if (x !== this.fa[x]) {
      return (this.fa[x] = this.find(this.fa[x]));
    }
    return x;
  }
  // 合并，将x和y位置的元素放入一个集合中
  // x和y不同时，y位置的值存储为x，即最终用x位置的值代理y位置的值
  // 表示将x和y放入了一个集合中
  union(x, y) {
    // 增加了按秩优化的内容
    const x_fa = this.find(x);
    const y_fa = this.find(y);
    if (this.rank[x] <= this.rank[y]) {
      this.fa[x_fa] = y_fa;
    } else {
      this.fa[y_fa] = x_fa;
    }
    this.count--;
    // 两个层级相等的树合并时，深度会加一
    if (this.rank[x] === this.rank[y] && x_fa !== y_fa) {
      this.rank[y]++;
    }
    // 旧版本代码
    /* if (x_fa !== y_fa) {
      this.fa[y_fa] = x_fa;
      this.count--;
    } */
  }
}

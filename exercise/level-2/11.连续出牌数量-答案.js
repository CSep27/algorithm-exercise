class UnionFindSet {
  constructor(n) {
    this.fa = new Array(n).fill(0).map((_, i) => i);
    this.count = n;
  }
  // 查找
  find(x) {
    if (x !== this.fa[x]) {
      return (this.fa[x] = this.find(this.fa[x]));
    }
    return x;
  }
  // 合并，将x和y位置的元素放入一个集合中
  union(x, y) {
    const x_fa = this.find(x);
    const y_fa = this.find(y);
    if (x_fa !== y_fa) {
      this.fa[y_fa] = x_fa;
      this.count--;
    }
  }
}

function getResult(nums, colors) {
  const n = nums.length;
  const ufs = new UnionFindSet(n);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j] || colors[i] === colors[j]) {
        ufs.union(i, j);
      }
    }
  }
  const count = {};
  for (let i = 0; i < n; i++) {
    const f = ufs.find(i);
    count[f] ? count[f]++ : (count[f] = 1);
  }
  return Object.values(count).sort((a, b) => b - a)[0];
}
console.log(getResult([1, 4, 3, 4, 5], ["r", "y", "b", "b", "r"]));
// console.log(getResult([1, 2, 3, 4], ["r", "y", "b", "g"]));

// 并查集 https://zhuanlan.zhihu.com/p/93647900

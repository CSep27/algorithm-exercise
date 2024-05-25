// 使用并查集
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
  console.log(ufs);
  let count = {};
  for (let i = 0; i < n; i++) {
    const root = ufs.find(i);
    count[root] ? count[root]++ : (count[root] = 1);
  }

  return Object.values(count).sort((a, b) => b - a)[0];
}
console.log(getResult([1, 4, 3, 4, 5], ["r", "y", "b", "b", "r"]));

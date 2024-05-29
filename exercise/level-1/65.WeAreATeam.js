class UnionFindSet {
  constructor(n) {
    this.fa = new Array(n).fill(0).map((_, index) => index);
    this.count = n;
  }
  find(x) {
    if (x === this.fa[x]) {
      return x;
    }
    return (this.fa[x] = this.find(this.fa[x]));
  }
  union(i, j) {
    const fa_i = this.fa[i];
    const fa_j = this.fa[j];
    if (fa_i !== fa_j) {
      this.fa[fa_j] = fa_i;
      this.count--;
    }
  }
}

function getResult(n, m, arr) {
  arr.sort(([a1, b1, c1], [a2, b2, c2]) => c1 - c2);
  // console.log(arr);
  const ufs = new UnionFindSet(n + 1);
  arr.forEach(([a, b, c]) => {
    if (c === 0) {
      ufs.union(a, b);
    } else if (c === 1) {
      // console.log(ufs.fa);
      if (ufs.find(a) === ufs.find(b)) {
        console.log(a, b, "yes");
      } else {
        console.log(a, b, "no");
      }
    } else {
      console.log(a, b, c, "pianzi");
    }
  });
}
console.log(
  getResult(5, 6, [
    [1, 2, 0],
    [1, 2, 1],
    [1, 5, 0],
    [2, 3, 1],
    [2, 5, 1],
    [1, 3, 2],
  ])
);

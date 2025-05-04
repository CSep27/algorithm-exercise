/* 
本题可以转化为求解像素5是否联通的并查集求解
看答案看明白了：
先找出矩阵中所有像素5的位置，如果两个5满足条件：
Math.abs(x1-x2) <= 3 && Math.abs(y1-y2) <= 3
说明两个5的边界会挨着，对应的边界就会融合为一个边界，那么这两个5就可以放入一个集合中。
将所有的5进行联合操作，得到最终的集合数，这个集合数就是边界个数
*/

// 并查集，又忘啦
/* 
1. const fa = new UnionFindSet(5) 创建一个并查集，其中有5个元素，初始值为0？
2. 属性 count 用于存储有几个集合
3. 如果两个元素属于一个集合，方法 union ，传入对应的元素索引 i和 j，就会将对应位置的元素表示为在一个集合中
4. 方法 find，传入索引 i，找到位置 i 对应的顶级代理元素？

所以使用并查集，先需要判断的数据有多少个元素，
然后判断满足什么条件，需要把对应的元素放到一个集合中，此时调用union方法

比如11题中，有5张卡牌，那么就是5个元素
每张卡牌有数字，对应一个数组存储，有花色，对应另一个数组存储
创建并查集时将索引初始化为数组内容，相当于给5张卡牌进行编号了
判断卡牌属于一个集合的条件，如果满足这个条件，就将对应的卡牌编号索引传入union函数中，将两张卡牌放入一个集合中
由于每个集合中最终只能由一个顶级代理，所以中间要使用find找到顶级代理元素？

52题中，假如有6个位置都是5，那么并查集数组数量就是6
条件就是判断数据，满足时两个位置的5放入一个集合中


*/
class UnionFindSet {
  constructor(n) {
    this.fa = new Array(n).fill(0).map((item, index) => index);
    // 初始时，所有数据都是不同的集合，所以count为n
    this.count = n;
  }
  find(x) {
    // 索引和值相同，说明是顶级节点？
    // 如果不同，说明存储的是上级节点的索引，那么拿到值继续找
    // 这里后面这一步是为了实现路径压缩，即把每个节点的父节点都设置为根节点，查找效率更高
    if (x === this.fa[x]) {
      return x;
    } else {
      // 本来只需要这样，在一根链条上找 4->3->2->1，帮主是1
      // 4 3 2 的代表元素都是1，那么直接都指向1，是最快的，
      // return this.find(this.fa[x]); // 形成链条的写法
      // 进行一个赋值操作，那么所有子元素都直接指向帮主
      // 路径压缩只在查询时进行
      this.fa[x] = this.find(this.fa[x]);
      return this.fa[x];
    }
    // 简化写法
    // return x === this.fa[x] ? x : (this.fa[x] = this.find(this.fa[x]));
  }
  // 将i和j位置的元素放入一个集合中
  union(x, y) {
    /* if (this.fa[i] !== this.fa[j]) {
      this.fa[j] = this.find(i);
      count--;
    } */
    // 注意这里是找到代理元素？合并都是合并代理元素
    const x_fa = this.find(x);
    const y_fa = this.find(y);
    if (x_fa !== y_fa) {
      // 合并到一个集合里去
      this.fa[y_fa] = x_fa;
      this.count--;
    }
  }
}

const fn = (arr) => {
  const n = arr.length;
  const m = arr[0].length;
  // 1. 得到所有5的坐标
  const coord = [];
  for (let i = 0; i < n; i++) {
    const item = arr[i];
    for (let j = 0; j < m; j++) {
      const value = item[j];
      if (value === 5) {
        coord.push([i, j]);
      }
    }
  }
  if (coord.length === 0 || coord.length === n * m) {
    return 0;
  }
  const ufs = new UnionFindSet(coord.length);
  // 将每一个元素和后面的元素进行合并
  for (let i = 0; i < coord.length; i++) {
    const [x1, y1] = coord[i];
    for (let j = i + 1; j < coord.length; j++) {
      const [x2, y2] = coord[j];
      if (Math.abs(x1 - x2) <= 3 && Math.abs(y1 - y2) <= 3) {
        ufs.union(i, j);
      }
    }
  }
  console.log(ufs);
  // console.log(ufs.count);
  return ufs.count;
};

console.log(
  fn([
    [1, 1, 1, 1, 1, 1],
    [1, 5, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 5],
  ])
); //2

console.log(
  fn([
    [1, 1, 1, 1, 1, 1],
    [1, 5, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 5, 1],
    [1, 1, 1, 1, 1, 1],
  ])
); //1

console.log(
  fn([
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1],
    [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ])
); //1

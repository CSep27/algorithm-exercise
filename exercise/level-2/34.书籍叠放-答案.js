function getResult(books) {
  // 所有的宽度数组
  const widths = books
    .sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]))
    .map((book) => book[1]);

  const dp = [widths[0]];
  for (let i = 1; i < widths.length; i++) {
    // 如果大于栈顶，则入栈
    if (widths[i] > dp[dp.length - 1]) {
      dp.push(widths[i]);
      continue;
    }
    // 如果小于第一个，则第一个替换成当前的
    if (widths[i] < dp[0]) {
      dp[0] = widths[i];
      continue;
    }
    // 如果元素不满足上面两个条件，说明在首尾之间
    // 找到刚好大于元素的位置，替换成当前元素
    // 长度同样满足要求，而宽度更小的会被放到结果栈中，这样能保证最终的书籍数量最多
    const index = binarySearch(dp, widths[i], 0, dp.length - 1);
    if (index < 0) {
      dp[-index - 1] = widths[i];
    }
  }
  console.log(dp);
  return dp.length;
}

// 返回负值表示没有找到正好等于的
// dp[-index - 1] 还原了 -(start + 1)
// 等价于 dp[start] 也就是刚好大于 target 的值的索引
// dp[-index - 2] 等价于 dp[end] 也就是刚好小于 target 的值的索引
function binarySearch(arr, target, start, end) {
  // start是向下取整，二分到只有两个数时能判断到左边界
  // 而当start === end 时 可以到右边界
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  // 此时start为刚好大于target的索引
  // end为刚好小于target的索引
  return -(start + 1);
}
console.log(
  getResult([
    [10, 20],
    [12, 5],
    [14, 17],
    [14, 13],
    [20, 22],
  ])
);

console.log(
  getResult([
    [8, 6],
    [9, 7],
    [10, 25],
    [10, 20],
    [12, 5],
    [14, 17],
    [14, 13],
    [20, 22],
  ])
);
// [ 5, 7, 13, 22 ]
// 这个例子中 dp数组 中的值 不是最终排列的书籍，但是数量是对的

/* 
1 叠放方式
[8, 6],
[9, 7],
[10, 20],
[20, 22],

2 叠放方式
[12, 5],
[14, 13],
[20, 22],

最长为4
*/

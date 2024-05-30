function getResult(arr) {
  // 按字典序排序再翻转，小值在尾部
  arr.sort().reverse();
  console.log(arr);
  let stack = [arr.pop()];
  while (arr.length) {
    const time = arr.pop();
    const top = stack.at(-1);
    if (time === top || time.substring(0, 19) !== top.substring(0, 19)) {
      stack.push(time);
    }
  }
  return stack.length;
}
console.log(
  getResult([
    "2019-01-01 00:00:00.004",
    "2019-01-01 00:00:00.004",
    "2019-01-01 00:00:01.006",
    "2019-01-01 00:00:01.006",
    "2019-01-01 00:00:01.005",
  ])
);

function getResult(arr) {
  let ranges = [];
  // 计算区间
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const center = i * 100;
    ranges.push([center - item, center + item]);
  }
  console.log(ranges);
  // 区间排序
  ranges.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));
  // 计算间隔
  let sum = 0;
  let [lastStart, lastEnd] = ranges[0];
  let j = 1;
  while (j < ranges.length) {
    let [start, end] = ranges[j];
    if (lastEnd >= start) {
      // 有交集
      // 合并后的结束位置为 lastEnd 和 end中更大的
      // 也就变成了新的lastEnd
      lastEnd = Math.max(lastEnd, end);
    } else {
      // 无交集，计算间距
      sum += start - lastEnd;
      lastEnd = end;
    }
    // 如果起始位置相等，那么合并后 lastEnd 还是 lastEnd
    j++;
  }
  return sum;
}
console.log(getResult([50, 70, 20, 70]));

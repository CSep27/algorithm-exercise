function binarySearch(list, value) {
  // 拿到中间值
  const lastIndex = list.length - 1;
  let start = 0;
  let end = lastIndex;
  let index; // 超出范围时，取最后一个值
  let flag = false;
  while (start <= end) {
    let midIndex = (start + end) >> 1;
    const midValue = list[midIndex];
    if (midValue === value) {
      index = midIndex + 1;
      flag = true;
      break;
    } else if (midValue > value) {
      end = midIndex - 1;
    } else if (midValue < value) {
      start = midIndex + 1;
    }
  }
  !flag && (index = start);
  index > lastIndex && (index = lastIndex);
  return index;
}
console.log(binarySearch([1, 2, 5, 6], 7)); // 3
console.log(binarySearch([1, 2, 5, 6], 6)); // 3
console.log(binarySearch([1, 2, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 5, 6], 2)); // 2
console.log(binarySearch([1, 2, 5, 6], 1)); // 1
console.log(binarySearch([1, 2, 5, 6], 0)); // 0

function getResult(arr) {
  const len = arr.length;
  const lastItem = arr[len - 1];
  const firstItem = arr[0];
  let num1 = 0;
  let num2 = 0;
  let minSum = Infinity;
  if (lastItem <= 0) {
    num1 = arr[len - 2];
    num2 = arr[len - 1];
    minSum = Math.abs(num1 + num2);
    return minSum;
  }
  if (firstItem >= 0) {
    num1 = arr[0];
    num2 = arr[1];
    minSum = Math.abs(num1 + num2);
    return minSum;
  }

  function binarySearch(arr, start, end, target) {
    while (start <= end) {
      let mid = (start + end) >> 1;
      let midVal = arr[mid];
      if (target < midVal) {
        end = mid - 1;
      } else if (target > midVal) {
        start = mid + 1;
      } else {
        return mid;
      }
    }
    // 此时 end < start
    return [end, start];
  }
  let lastNeg, firstPos;
  let pos = binarySearch(arr, 0, len - 1, 0);
  if (Array.isArray(pos)) {
    const [start, end] = pos;
    lastNeg = start;
    firstPos = end;
  } else {
    // 找到0
    firstPos = pos;
    lastNeg = pos - 1;
  }

  for (let i = 0; i <= lastNeg; i++) {
    // 负值
    const item = arr[i];
    pos = binarySearch(arr, firstPos, len - 1, Math.abs(item));
    if (Array.isArray(pos)) {
      const [start, end] = pos;
      const temp = Math.min(
        Math.abs(arr[start] + item),
        Math.abs(arr[end] + item)
      );
      minSum = Math.min(temp, minSum);
    } else {
      // 找到了负值对应的正值，和为0，绝对值肯定最小，结束
      console.log("pos", pos);
      return 0;
    }
  }
  return minSum;
}
console.log(getResult([-11, -5, 3, 10, 20]));
console.log(getResult([-11, -5, 3, 5, 20]));
console.log(getResult([-11, -5, -3, -1, 0]));
console.log(getResult([1, 2, 3, 10, 20]));

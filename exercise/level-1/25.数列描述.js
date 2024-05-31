function getResult(n) {
  let arr = ["1", "11"];
  for (let i = 2; i <= n; i++) {
    let lastItem = arr[i - 1];
    let j = 1;
    let item = "";
    let lastVal = lastItem[0];
    let cache = {};
    cache[lastVal] = 1;
    while (j <= lastItem.length) {
      if (j === lastItem.length) {
        item = `${item}${cache[lastVal]}${lastVal}`;
        break;
      }
      const curVal = lastItem[j];
      if (curVal === lastVal) {
        // 连续相同
        cache[curVal]++;
      } else {
        // 上一个元素确定了放到item中
        item = `${item}${cache[lastVal]}${lastVal}`;
        cache[lastVal] = 0;
        // 新元素
        cache[curVal] = 1;
      }
      lastVal = curVal;
      j++;
    }
    arr[i] = item;
  }
  console.log("arr", arr);
  return arr[n];
}
console.log(getResult(1));
console.log(getResult(2));
console.log(getResult(3));
console.log(getResult(4));
console.log(getResult(5));

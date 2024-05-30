function getResult(arr, n) {
  arr.sort((a, b) => b - a);
  let total = 0;
  let cache = {};
  let end = arr.length - 1;
  // 特殊情况，n是个偶数
  let halfN = null;
  if (n % 2 === 0) {
    halfN = n / 2;
  }
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    // 能力必须小于n，才能结对
    if (item >= n) {
      continue;
    }
    if (cache[item]) {
      if (item === halfN) {
        cache[item] = cache[item] - 1;
        total += cache[item];
        continue;
      }
      // 如果同样的值找过了，那么直接取缓存里的值，不需要找
      total += cache[item];
      continue;
    }
    // 从后往前找
    let count = 0;
    let matchIndex = null;
    for (let j = end; j > i; j--) {
      const value = arr[j];
      const sum = value + item;
      if (sum === n) {
        count++;
        if (value !== halfN) {
          // 如果匹配上了，后续不需要再与这个值匹配了
          matchIndex = j;
        }
      }
    }
    cache[item] = count;
    if (matchIndex !== null) {
      end = matchIndex - 1;
    }
    total += cache[item];
  }
  return total;
}
console.log(getResult([1, 2, 2, 2, 3], 4));
console.log(getResult([6, 8, 5, 5, 4, 4, 3, 3, 3, 2], 6));

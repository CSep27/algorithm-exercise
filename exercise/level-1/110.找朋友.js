// 双重循环，时间复杂度O(n^2)
function getResult(n, height) {
  const heightIndex = new Array(n).fill(0);
  for (let i = 0; i < height.length; i++) {
    const item = height[i];
    for (let j = i + 1; j < height.length; j++) {
      const value = height[j];
      if (value > item) {
        heightIndex[i] = j;
        break;
      }
    }
  }
  return heightIndex;
}
console.log(getResult(2, [100, 95]));
console.log(getResult(8, [123, 124, 125, 121, 119, 122, 126, 123]));

// 利用栈结构，将[元素值，索引位置]压入栈中，学习解题思想
function getResult2(n, height) {
  const heightIndex = new Array(n).fill(0);
  const stack = [];
  for (let i = 0; i < height.length; i++) {
    const item = height[i];
    if (!stack.length) {
      stack.push([item, i]);
    } else {
      // 如果当前遍历的元素大于栈顶
      while (item > stack[stack.length - 1][0]) {
        // 栈顶出栈
        const element = stack.pop();
        // height 栈顶元素所在索引位置，值为i
        heightIndex[element[1]] = i;
        if (!stack.length) break;
      }
      // 继续与栈顶比较，直到不满足大于栈顶元素的条件 当前元素入栈
      // 如果小于，也是直接入栈
      stack.push([item, i]);
    }
  }
  return heightIndex;
}
console.log(getResult2(2, [100, 95]));
console.log(getResult2(8, [123, 124, 125, 121, 119, 122, 126, 123]));

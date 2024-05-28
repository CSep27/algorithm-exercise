function getResult(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i].charCodeAt());
  }
  const powN = {};
  for (let i = 0; i <= 9; i++) {
    powN[i] = Math.pow(i, 3);
  }
  // 判断是不是水仙花数 narcissistic number
  function isNarNum(num) {
    let sum = String(num)
      .split("")
      .reduce((p, c) => {
        return powN[c] + p;
      }, 0);

    return sum === num;
  }

  let prefixSum = [];
  prefixSum[0] = arr[0];
  // 求前缀和 prefix sum
  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }
  // console.log("arr", arr);
  // console.log("prefixSum", prefixSum);

  // 获取i-j范围的和 i<=j
  function fn(i, j) {
    if (i === 0) {
      return prefixSum[j];
    } else {
      return prefixSum[j] - prefixSum[i - 1];
    }
  }

  let len = arr.length;

  let result = [];
  // 可以通过数组记录分割点
  // 按照题目要求的话，只需要记录分割几次就行
  let subStrs = [];
  /* 
  第一次只能从0 开始，end一直++，直到找到水仙花数了，start = end+1 再继续找  
  */
  function recursive(start) {
    if (start === len) {
      // 到这里，说明是通过递归 到了start = j+1 = len => 说明j=len-1，
      // 说明分割到末尾了
      // 此次分割成功，加入最终结果数组
      result.push(subStrs);
      return;
    }
    for (let j = start; j < len; j++) {
      const sum = fn(start, j);
      if (isNarNum(sum)) {
        // 假设这里是0-2，start=3会进入递归继续找
        subStrs.push([start, j]);
        recursive(j + 1);
        // 递归找到最后一个元素之后，结束了，start指针也继续往后找，此时subStrs已经为空
        // j会继续++，j=3会继续进行判断
      }
    }
    // 如果j到结尾了，当前轮次结束，subStrs置空
    subStrs = [];
  }
  recursive(0);

  console.log("result", result);
  if (result.length === 0) {
    return 0;
  } else if (result.length > 1) {
    return -1;
  } else {
    return result[0][0].length;
  }
}
// result []
console.log(getResult("abc"));
/* 
result[
  [
    [0, 1],
    [2, 6],
  ],
  [
    [0, 4],
    [5, 6],
  ]
]; */
console.log(getResult("f3@d5a8"));
/* 
result[
  [
    [0, 1],
    [2, 5],
  ]
];
*/
console.log(getResult("AXdddF"));

function getResult(strs, abbr) {
  const arr = strs.split(",");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // arr[i] zhang an sa
    const item = arr[i].split(" ");
    // 第一个字符串 zhang
    if (abbr[0] !== item[0][0]) {
      // 第一个不匹配，直接返回
      continue;
    }
    // 字符串指针 第几个字符串
    let s = 1;
    // 字符串的第几个字符
    let j = 0;
    // 缩写字符串指针
    let a = 1;
    // 记录上一个字符串查到第几位了
    let lastIndex = 0;
    while (a < abbr.length && s < item.length) {
      let str = item[s];
      if (j === str.length) {
        break;
      }
      if (abbr[a] === str[j]) {
        // 匹配
        // 下一个字符串
        s++;
        // 从0开始
        j = 0;
        // 下一个缩写字符
        a++;
      } else {
        // 回到上一个字符串
        s--;
        // 缩写字符不变
        // 上一个字符串继续从上次的位置加1查找
        j = lastIndex + 1;
        lastIndex = j;
      }
    }
    if (a === abbr.length && s === item.length) {
      result.push(arr[i]);
    }
  }
  return result;
}
/* console.log(
  getResult(
    "zhang san san,zhang an sa,zhang hang,zhang seng,zhang sen a",
    "zhas"
  )
);
console.log(getResult("zhang san san,zhang san", "zs")); */
/* console.log(
  getResult(
    "zha san san,zhang an sa,zhang hang,zhang seng,zhang sen a",
    "zhanga"
  )
); */
console.log(
  getResult(
    "zha san san,zhang an sa,zhang hang,zhang seng,zhang sen a",
    "zhass"
  )
);

console.log(
  getResult("zha san san,zhang an sa,zhang hang,zhang seng,zhang sen a", "abc")
);

console.log(
  getResult("a bbbbbc can,zhang an sa,zhang hang,zhang seng,zhang sen a", "abc")
);

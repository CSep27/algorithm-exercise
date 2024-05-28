// 2012 获取所有排列
function getResult(str) {
  const arr = [...new Set(str.replace(":", "").split(""))];
  console.log(arr);
  let result = [];
  let temp = [];
  let reg = /([0-1][0-9]|2[0-3])[0-5][0-9]/;
  function dfs(arr, temp) {
    // 深度递归的停止条件
    if (temp.length === 4) {
      const str = temp.join("");
      if (reg.test(str)) {
        result.push(str);
      }
      return;
    }
    // 继续深度递归
    for (let i = 0; i < arr.length; i++) {
      temp.push(arr[i]);
      dfs(arr, temp);
      temp.pop();
    }
  }
  dfs(arr, temp);
  console.log(result);
  result.sort((a, b) => a - b);
  let index = result.indexOf("2012") + 1;
  console.log(index);
  if (index === result.length) {
    index = 0;
  }
  const s = result[index];
  return `${s[0]}${s[1]}:${s[2]}${s[3]}`;
}
console.log(getResult("20:12"));
console.log(getResult("23:59"));

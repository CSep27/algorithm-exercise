function getResult(n, str) {
  let strArr = [];
  let i = 0;
  while (i < n) {
    strArr.push(str[i].charCodeAt());
    i++;
  }
  // console.log(strArr);
  const min = 97;
  const max = min + n - 1;

  // 数位搜索 遍历bba-ccc之间所有字符串
  function dfs(arr, level, limit, max, path) {
    if (level === arr.length) {
      const nextStr = path.map((num) => String.fromCharCode(num)).join("");
      return nextStr;
    }
    const min = limit ? arr[level] : 97;
    for (let i = min; i <= max; i++) {
      // 跳过原始字符串
      if (limit && level === arr.length - 1 && i === min) continue;
      // 跳过含有偶数回文字符子串
      if (level >= 1 && i === path[level - 1]) continue;
      // 跳过含有奇数回文字符子串
      if (level >= 2 && i === path[level - 2]) continue;
      path.push(i);
      const ans = dfs(arr, level + 1, limit && i === min, max, path);
      if (ans) return ans;
      path.pop();
    }
  }
  const result = dfs(strArr, 0, true, max, []);
  return result ?? "NO";
}
console.log(getResult(3, "bba"));
console.log(getResult(4, "bacd"));

function getResult(n, str) {
  let max = 97 + n - 1;
  let min = 97;
  let strArr = [];
  let i = 0;
  while (i < n) {
    strArr.push(str[i].charCodeAt());
    i++;
  }
  let result = [];
  function dfs(arr, level, min, limit) {
    if (level === n) {
    }
    // min = limit ?
    for (let i = min; i <= max; i++) {
      const item = arr[i];
    }
  }
  dfs(strArr, 0, 97, true);
}
console.log(getResult(3, "bba"));

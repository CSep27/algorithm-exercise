function getResult(arr) {
  const result = [];
  dfs(arr, 0, result);
  return result.join(" ");
}
function dfs(arr, root, res) {
  let left = 2 * root + 1;
  let right = 2 * root + 2;
  if (arr[left]) {
    dfs(arr, left, res);
    if (arr[right]) {
      dfs(arr, right, res);
    }
    res.push(arr[root]);
  }
}

console.log(getResult([0, 1, 2, 3, 4, 5, 6, 7]));

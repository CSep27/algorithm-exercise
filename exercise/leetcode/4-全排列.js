// 68ms (73.23%) 52.52 (95.57%)
function getResult(nums) {
  let result = [];

  function dfs(nums, newArr) {
    if (newArr.length === nums.length) {
      result.push(newArr.concat());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      let item = nums[i];
      if (newArr.includes(item)) {
        continue;
      }
      newArr.push(item);
      dfs(nums, newArr);
      newArr.pop();
    }
  }
  dfs(nums, []);
  return result;
}
console.log(getResult([1, 2, 3, 4, 5]));

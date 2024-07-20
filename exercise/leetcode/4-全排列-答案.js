// 用时75ms（35.63%） 内存53MB（41.02%）
// 在JS里，这种做法并没有更好？
function getResult(nums) {
  let result = [];

  let output = nums.concat();

  let n = nums.length;

  function swap(arr, i, j) {
    if (arr[i] === arr[j]) {
      return;
    }
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function backtrack(n, output, result, first) {
    if (first === n) {
      result.push(output.concat());
      return;
    }
    for (let i = first; i < n; i++) {
      swap(output, first, i);
      backtrack(n, output, result, first + 1);
      swap(output, first, i);
    }
  }
  backtrack(n, output, result, 0);
  console.log(result.length);
  return result;
}
console.log(getResult([1, 2, 3, 4, 5]));

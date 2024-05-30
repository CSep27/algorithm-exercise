function getResult(arr) {
  arr.sort((a, b) => a - b);
  let result = [];

  function recursion(arr, index, level, sum, result) {
    if (level === 5) {
      return result.push(sum);
    }
    for (let i = index; i < 10; i++) {
      if (i > 0 && arr[i] === arr[i - 1]) continue;
      recursion(arr, i + 1, level + 1, sum + arr[i], result);
    }
  }
  recursion(arr, 0, 0, 0, result);
  console.log(result.length);
  const sum = arr.reduce((p, c) => p + c);
  return result
    .map((subSum) => Math.abs(sum - 2 * subSum))
    .sort((a, b) => a - b)[0];
}
console.log(getResult([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

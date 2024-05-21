function residualNumber(arr) {
  const dp = [];
  dp[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    dp[i] = arr[i] + dp[i - 1];
  }
  console.log(dp);

  function fn(arr, i, aValue, k) {
    arr[i] = 2 * aValue;
    for (let index = k; index < i; index++) {
      arr[index] = 0;
    }
  }

  let i = 1;
  while (i < arr.length) {
    const aValue = arr[i];
    const dValue = dp[i - 1];
    if (aValue === dValue) {
      /* arr[i] = 2 * aValue;
    for (let index = 0; index < i; index++) {
      arr[index] = 0;
    } */
      fn(arr, i, aValue, 0);
    } else if (aValue < dValue) {
      let k = 1;
      let sum = 0;
      for (let index = k; index < i; index++) {
        sum += arr[index];
      }
      while (k < i) {
        /* let sum = 0;
        for (let index = k; index < i; index++) {
          sum += arr[index];
        } */
        if (sum === aValue) {
          fn(arr, i, aValue, k);
          break;
        }
        sum -= arr[k];
        k++;
      }
    }
    i++;
  }
  console.log(arr);
  return arr
    .filter((item) => item !== 0)
    .reverse()
    .join(" ");
}
console.log(residualNumber([1, 2, 5, 7, 9, 1, 2, 2])); // 4 1 9 14 1
console.log(residualNumber([5, 10, 20, 50, 85, 1])); // 1 170

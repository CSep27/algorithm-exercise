function getResult(arr, n) {
  let k = 0;
  let result = 0;
  for (let i = 0; i < n; i++) {
    const item = arr[i];
    let best = item[0];
    let bestIndex = 0;
    for (let j = 1; j < item.length; j++) {
      if (i === 0) {
        if (item[j] <= best) {
          best = item[j];
          bestIndex = j;
        }
      } else {
        if (j !== k && item[j] <= best) {
          best = item[j];
          bestIndex = j;
        }
      }
    }
    k = bestIndex;
    result += best;
  }
  return result;
}
console.log(
  getResult(
    [
      [15, 8, 17],
      [12, 20, 9],
      [11, 7, 5],
    ],
    3
  )
);

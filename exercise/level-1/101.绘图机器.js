function getResult(arr, e) {
  let result = 0;
  let offsetY = 0;
  for (let i = 0; i < arr.length; i++) {
    const [x1, offsetY1] = arr[i];
    let x2;
    if (i === arr.length - 1) {
      x2 = e;
    } else {
      x2 = arr[i + 1][0];
    }
    offsetY += offsetY1;
    let area = (x2 - x1) * Math.abs(offsetY);
    result += area;
  }
  return result;
}
console.log(
  getResult(
    [
      [1, 1],
      [2, 1],
      [3, 1],
      [4, -2],
    ],
    10
  )
);
console.log(
  getResult(
    [
      [0, 1],
      [2, -2],
    ],
    4
  )
);

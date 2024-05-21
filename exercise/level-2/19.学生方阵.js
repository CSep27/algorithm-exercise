const arr = [
  ["F", "M", "M", "F"],
  ["F", "M", "M", "F"],
  ["F", "F", "F", "M"],
];
let max = 0;

function horizontal() {}

for (let i = 0; i < arr.length; i++) {
  // const item = arr[i];
  for (let j = 0; j < arr[i].length; j++) {
    const value = arr[i][j];
    // 左边点
    const leftValue = j === 0 ? null : arr[i][j - 1];
    const upValue = i === 0 ? null : arr[i - 1][j];
    const leftUpValue = i === 0 || j === 0 ? null : arr[i - 1][j - 1];
    const rightUpValue =
      i === 0 || j === arr[i].length - 1 ? null : arr[i - 1][j + 1];
    if (value === "M") {
      // 水平方向
      if (leftValue !== "M" || leftValue === null) {
        let k = j + 1;
        let hLen = 1;
        while (k < arr[i].length) {
          if (value === "M") {
            hLen++;
            k++;
          } else {
            break;
          }
        }
        max = Math.max(max, hLen);
      }

      // 垂直方向
      if (upValue !== "M" || upValue === null) {
        let k = i + 1;
        let vLen = 1;
        while (k < arr.length) {
          if (value === "M") {
            vLen++;
            k++;
          } else {
            break;
          }
        }
        max = Math.max(max, vLen);
      }
      if (leftUpValue !== "M" || leftUpValue === null) {
        // 正对角线
        let k = j + 1;
        let m = i + 1;
        let pDLen = 1;
        while (k < arr[i].length && m < arr.length) {
          if (value === "M") {
            pDLen++;
            k++;
            m++;
          } else {
            break;
          }
        }
        max = Math.max(max, pDLen);
      }
      if (rightUpValue !== "M" || rightUpValue === null) {
        // 反对角线
        let k = j + 1;
        let m = i + 1;
        let bDLen = 1;
        while (k < arr[i].length && m < arr.length) {
          if (value === "M") {
            bDLen++;
            k++;
            m++;
          } else {
            break;
          }
        }
        max = Math.max(max, bDLen);
      }
    }
  }
}
console.log(max);

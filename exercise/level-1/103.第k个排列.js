// let n = 3;
// let arr = [1, 2, 3];
// // 123 132 213 231 312 321 共 3!=6 个数
// let k = 3;

function factorial(i, total) {
  if (!total) {
    total = 1;
  }
  if (i === 1) {
    return total;
  }
  return factorial(i - 1, i * total);
}

function getResult(n, k) {
  let arr = new Array(n).fill(0).map((_, index) => index + 1);
  if (n === 1) {
    return "1";
  }
  let result = "";
  while (k !== 1) {
    let f = factorial(n - 1);
    let index = Math.floor((k - 1) / f);
    result += arr[index];
    let newK = k % f;
    k = newK === 0 ? f : newK;
    // arr删除元素
    arr.splice(index, 1);
    n = arr.length;
  }
  result += arr.join("");
  console.log(result);
}
getResult(3, 3); // 213
getResult(4, 3); // 1324
getResult(4, 6); // 1432
getResult(4, 7); // 2134
getResult(4, 24); // 4321

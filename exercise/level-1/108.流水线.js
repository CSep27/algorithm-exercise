const arr = [8, 4, 3, 2, 10];
const m = 3;
const n = 5;
arr.sort((a, b) => a - b);

let sum = 0;
if (n <= m) {
  sum = arr[n - 1];
} else {
  let i = n - 1;
  while (i >= 0) {
    sum += arr[i];
    i = i - m;
  }
}
console.log(sum);

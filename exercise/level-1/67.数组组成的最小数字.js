function getResult(arr) {
  arr.sort((a, b) => a - b);
  return arr.slice(0, 3).sort().join("");
}
console.log(getResult([21, 30, 62, 5, 31]));
console.log(getResult([5, 21]));

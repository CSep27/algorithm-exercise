function fn1(n) {
  const map = {
    1: 1,
    2: 1,
    3: 2,
  };
  if (n <= 3) {
    return map[n];
  }
  return fn1(n - 1) + fn1(n - 3);
}
console.log(fn1(7));

function getResult(n) {
  const map = {
    1: 1,
    2: 1,
    3: 2,
  };
  function fn2(n) {
    return map[n] ? map[n] : (map[n] = fn2(n - 3) + fn2(n - 1));
  }
  return fn2(n);
}
console.log(getResult(7));
console.log(getResult(50));

function getResult3(n) {
  const cache = new Array(n + 1).fill(0);
  if (n >= 1) cache[1] = 1;
  if (n >= 2) cache[2] = 1;
  if (n >= 3) cache[3] = 2;

  for (let i = 4; i <= n; i++) {
    cache[i] = cache[i - 3] + cache[i - 1];
  }
  return cache[n];
}
console.log(getResult3(7));
console.log(getResult3(50));

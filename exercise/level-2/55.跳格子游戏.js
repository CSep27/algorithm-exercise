function getResult(n, arr) {
  let steps = new Array(n).fill(0).map((_, index) => index);
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    const [p, c] = arr[i];
    map[p] ? map[p].push(c) : (map[p] = [c]);
    steps[c] = false;
  }
  // console.log(map);
  // console.log(steps);
  let openSteps = steps.filter((item) => item !== false);
  // console.log(openSteps);

  while (openSteps.length) {
    const index = openSteps.shift();
    const indexsArr = map[index];
    if (indexsArr) {
      for (let j = 0; j < indexsArr.length; j++) {
        const i = indexsArr[j];
        if (steps[i] === false) {
          steps[i] = i;
          openSteps.push(i);
        }
      }
    }
  }
  console.log(steps);
  // steps里的值全部是索引，不包含false，就返回true，就是可以跳完
  return !steps.includes(false);
}
console.log(
  getResult(5, [
    [4, 3],
    [0, 4],
    [2, 1],
    [3, 2],
  ])
);

console.log(
  getResult(4, [
    [1, 2],
    [1, 0],
  ])
);

console.log(
  getResult(2, [
    [1, 0],
    [0, 1],
  ])
);

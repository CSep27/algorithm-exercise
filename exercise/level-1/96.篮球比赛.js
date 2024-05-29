function getResult(arr) {
  let result = [];
  let team1 = [];
  let team2 = [];
  let min = Infinity;
  function recusive(start, len) {
    if (team1.length === 5) {
      // console.log(team1);
      team2 = arr.filter((item) => !team1.includes(item));
      const t1 = team1.reduce((p, c) => p + c, 0);
      const t2 = team2.reduce((p, c) => p + c, 0);
      min = Math.min(Math.abs(t1 - t2), min);
      // result.push(team1);
      return;
    }
    for (let i = start; i < len; i++) {
      team1.push(arr[i]);
      recusive(i + 1, len);
      team1.pop();
    }
  }
  recusive(0, 10);
  // console.log(arr);
  // return result.length;
  return min;
}
console.log(getResult([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

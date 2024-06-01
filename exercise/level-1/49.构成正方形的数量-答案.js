function getResult(arr) {
  let count = 0;
  const set = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    const [x1, y1] = arr[i].split(" ").map(Number);
    // console.log(x1, y1);
    for (let j = i + 1; j < arr.length; j++) {
      const [x2, y2] = arr[j].split(" ").map(Number);
      let x3 = x1 - (y1 - y2);
      let y3 = y1 + (x1 - x2);
      let x4 = x2 - (y1 - y2);
      let y4 = y2 + (x1 - x2);
      if (set.has(`${x3} ${y3}`) && set.has(`${x4} ${y4}`)) {
        count++;
      }
      let x5 = x1 + (y1 - y2);
      let y5 = y1 - (x1 - x2);
      let x6 = x2 + (y1 - y2);
      let y6 = y2 - (x1 - x2);
      if (set.has(`${x5} ${y5}`) && set.has(`${x6} ${y6}`)) {
        count++;
      }
    }
  }
  return count / 4;
}
console.log(getResult(["0 0", "1 2", "3 1", "2 -1"]));

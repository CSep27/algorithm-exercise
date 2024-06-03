function getResult(commands) {
  let used = [[100, 101]];
  for (const [key, val] of commands) {
    if (key === "REQUEST") {
      const size = val;
      let start = 0;
      let flag = true;
      for (let i = 0; i < used.length; i++) {
        let end = start + size - 1;
        const range = [start, end];
        if (!hasIntersection(used[i], range)) {
          used.splice(i, 0, range);
          flag = false;
          console.log(start);
          break;
        } else {
          start = used[i][1] + 1;
        }
      }
      if (flag) console.log("error");
    } else {
      const addr = val;
      let flag = true;
      for (let i = 0; i < used.length; i++) {
        if (used[i][0] === addr) {
          used.splice(i, 1);
          flag = false;
          break;
        }
      }
      if (flag) console.log("error");
    }
  }
}
function hasIntersection(area1, area2) {
  const [s1, e1] = area1;
  const [s2, e2] = area2;
  if (s1 === s2) {
    return true;
  } else if (s1 < s2) {
    return e1 >= e2;
  } else {
    return e2 >= s1;
  }
}
console.log(
  getResult([
    ["REQUEST", 10],
    ["REQUEST", 20],
    ["RELEASE", 0],
    ["REQUEST", 20],
    ["REQUEST", 10],
  ])
);

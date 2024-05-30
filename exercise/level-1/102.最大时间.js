function getResult(arr) {
  let maxTime = 0;
  let time = [];
  let index = new Array(arr.length).fill(false);
  let reg = /([0-1][0-9]|2[0-3])[0-5][0-9][0-5][0-9]/;
  const n = arr.length;
  function recursion() {
    if (time.length === n) {
      const timeStr = time.join("");
      if (reg.test(timeStr) && timeStr > maxTime) {
        maxTime = timeStr;
        // console.log(maxTime);
      }
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!index[i]) {
        index[i] = true;
        time.push(arr[i]);
        recursion();
        time.pop();
        index[i] = false;
      }
    }
  }
  recursion(0);
  return maxTime;
}
console.log(getResult([0, 2, 3, 0, 5, 6]));

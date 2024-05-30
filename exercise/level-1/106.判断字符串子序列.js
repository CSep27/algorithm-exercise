function getResult(source, target) {
  let i = source.length - 1;
  let t = target.length - 1;
  while (i >= 0) {
    if (source[i] === target[t]) {
      if (t === 0) {
        return i;
      }
      t--;
    }
    i--;
  }
  return -1;
}
console.log(getResult("abcaybec", "abc"));

function getResult(str, flaw) {
  let word = new Set("aeiouAEIOU");
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    if (word.has(item)) {
      arr.push(i);
    }
  }
  console.log(arr);
  let maxLen = 0; // 最终结果
  let l = 0;
  let r = 0;
  let errLen; // 保存瑕疵度
  while (r < arr.length) {
    let valSpace = arr[r] - arr[l];
    let indexSpace = r - l;
    errLen = valSpace - indexSpace;
    if (errLen > flaw) {
      l++;
    } else if (errLen < flaw) {
      r++;
    } else {
      maxLen = Math.max(maxLen, valSpace + 1);
      r++;
    }
  }

  return maxLen;
}
console.log(getResult("asdbuiodevauufgh", 0));
console.log(getResult("aeueo", 2));

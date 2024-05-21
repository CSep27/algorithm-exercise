function getResult(n, arr) {
  const min = arr.sort((a, b) => a - b).shift();
  let fault, correct;
  fault = correct = min;
  for (let w of arr) {
    fault ^= w;
    correct += w;
  }
  // 如果所有值进行异或运算结果为0
  // 比如3^5 = 6 6^6=0（这三个数任意两个异或运算后都等于第三个数）也就是说满足了A的计算规则，等分了苹果
  // B获得重量最多，只需要把其中最小重量的给A，剩下都给B
  if (fault === 0) {
    return correct - min;
  } else {
    return -1;
  }
}
console.log(getResult(3, [3, 5, 6]));

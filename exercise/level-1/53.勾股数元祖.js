// 辗转相除法判断两个数互质
function isRelativelyPrime(a, b) {
  while (b > 0) {
    let mod = a % b;
    a = b;
    b = mod;
  }
  return a === 1;
}
console.log(isRelativelyPrime(12, 9)); // false
console.log(isRelativelyPrime(12, 5)); // true
console.log(isRelativelyPrime(9, 12));
console.log(isRelativelyPrime(9, 56));

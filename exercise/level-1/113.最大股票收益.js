const rawPrice = ["2Y", "3S", "4S", "6Y", "8S"];
const price = [2, 21, 28, 6, 56];

/* 
2买进，21卖出 赚19
21买进，28卖出 赚7
6买进，56卖出 赚50
共赚76
*/
let ans = 0;
for (let i = 1; i < price.length; i++) {
  ans += Math.max(0, price[i] - price[i - 1]);
}
console.log(ans); // 76

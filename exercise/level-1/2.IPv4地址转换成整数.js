/* 在答案基础上，优化了空字符串处理 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  const [p1, p2, p3, p4] = line.split("#").map((item) => {
    // 空字符串也算作非法
    if (item === "") {
      // 空字符串和null >= 0 都成立 因为==0成立
      // undefined >= 0 不成立
      return undefined;
    } else {
      return Number(item);
    }
  });
  console.log(p1, p2, p3, p4);
  if (
    p1 >= 1 &&
    p1 <= 128 &&
    p2 >= 0 &&
    p2 <= 255 &&
    p3 >= 0 &&
    p3 <= 255 &&
    p4 >= 0 &&
    p4 <= 255
  ) {
    const result = [p1, p2, p3, p4]
      .map((x) => {
        let res = x.toString(16);
        res = res.length === 1 ? `0${res}` : res;
        return res;
      })
      .join("");

    console.log(result);
    console.log(parseInt(result, 16));
  } else {
    console.log("invalid IP");
  }
});

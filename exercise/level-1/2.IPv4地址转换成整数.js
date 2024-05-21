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
    // 答案里为什么要在数之前加0？不是16进制吗
    // 不加0的话，"1#0#0#0"的答案不对，也就是需要加0的情况
    // "128#255#255#255"的答案是一样的
    const result = [p1, p2, p3, p4]
      .map((x) => {
        let res = x.toString(16);
        // res = res.length === 1 ? `0${res}` : res;
        return res;
      })
      .join("");
    /* 
    通过打印result可以知道
    不加0 的话 "1#0#0#0" => 1000 只有四位
    加0 的话 "1#0#0#0" => 01000000 八位
    */

    console.log(result);
    console.log(parseInt(result, 16));
  } else {
    console.log("invalid IP");
  }
});

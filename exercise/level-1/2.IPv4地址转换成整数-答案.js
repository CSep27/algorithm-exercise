const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  const [p1, p2, p3, p4] = line.split("#").map(Number);
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
        // 左侧补0是2位的16进制数，就可以表示8位二进制了
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

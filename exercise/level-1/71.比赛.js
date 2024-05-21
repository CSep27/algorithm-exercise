/* 
4,5
10,6,9,7,6
9,10,6,7,5
8,10,6,5,10
9,10,8,4,9
*/

/* 
2,5
3,4,5,6,7
3,4,5,6,-7
*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const lines = [];
let m = 0,
  n = 0;
let arr = [];
rl.on("line", (line) => {
  lines.push(line);
  if (lines.length === 1) {
    const temp = lines[0].split(",");
    m = +temp[0];
    n = +temp[1];
  } else if (lines.length === m + 1) {
    lines.shift();
    for (let index = 0; index < lines.length; index++) {
      const element = lines[index];
      arr.push(element.split(","));
    }
    console.log(arr);
    console.log(calculateTop3(arr, m, n));
    lines.length = 0;
    m = 0;
    n = 0;
    arr.length = 0;
  }
});

function calculateTop3() {
  if (m < 3 || m > 10 || n < 3 || n > 100) {
    return -1;
  }
  let scores = [];
  // 需要判断分数在不在范围
  try {
    arr.forEach((item) => {
      item.forEach((value, index) => {
        value = +value;
        if (value < 0 || value > 10) {
          throw new Error(-1);
        }
        if (scores[index] === undefined) {
          let score = {};
          score[value] = 1;
          scores[index] = {
            id: index,
            value,
            score,
          };
        } else {
          scores[index].value += value;
          if (scores[index].score[value]) {
            scores[index].score[value]++;
          } else {
            scores[index].score[value] = 1;
          }
        }
      });
    });
    console.log(scores);
    scores.sort((a, b) => b.value - a.value);
    console.log(scores);
    for (let index = 0; index < scores.length - 1; index++) {
      // 题目中说不会出现多个选手得分相同，那么是最多两位相同的意思吗？
      // 那就是当前和下一位进行比较
      const current = scores[index];
      const next = scores[index + 1];
      // 成绩相等
      if (current.value === next.value) {
        let k = 10;
        while (k >= 0) {
          if (current.score[k] < next.score[k]) {
            // 从10分开始比，如果小，那么互换，然后结束循环
            let temp = scores[index];
            scores[index] = scores[index + 1];
            scores[index + 1] = temp;
            break;
          } else if (current.score[k] === next.score[k]) {
            // 如果相等，那么继续比较
            k--;
          } else {
            // 如果大于，那么不互换，结束循环
            break;
          }
        }
      }
    }
    console.log(scores);
    console.log(scores[0].id, scores[1].id, scores[2].id);
  } catch (e) {
    return e;
  }
}

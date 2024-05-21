// 与1的区别在于将分数join()比较数值

/* 
4,5
10,6,9,7,6
9,10,6,7,5
8,10,6,5,10
9,10,8,4,9

输出 2，1，5
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
let m = 0, // 评委数
  n = 0;
let scores = [];
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
      scores.push(element.split(","));
    }
    console.log(scores);
    console.log(calculateTop3(scores, m, n));
    lines.length = 0;
    m = 0;
    n = 0;
    scores.length = 0;
  }
});

function calculateTop3(scores, m, n) {
  if (m < 3 || m > 10 || n < 3 || n > 100) {
    return -1;
  }
  const players = [];

  for (let j = 0; j < n; j++) {
    const player = [];
    for (let i = 0; i < m; i++) {
      const score = +scores[i][j];
      if (score > 10 || score < 1) {
        return "-1";
      }
      player.push(score);
    }
    player.sort((a, b) => b - a);
    players.push({
      id: j,
      sum: player.reduce((p, c) => p + c),
      score: player.join(""),
    });
  }
  return players
    .sort((a, b) => {
      if (a.sum !== b.sum) {
        return b.sum - a.sum;
      }
      /* for (let i = 0; i < m; i++) {
        if (a.score[i] === b.score[i]) continue;
        return b.score[i] - a.score[i];
      } */
      return b.score - a.score;
      // return 0;
    })
    .slice(0, 3)
    .map((item) => item.id + 1)
    .join(",");
}

/* 
score是一个数组 已经排好序

m 有多少个分数
[10,9,9,8]
[10,10,10,6]
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getLine() {
  return new Promise((resolve) => {
    rl.on("line", (line) => {
      resolve(line);
    });
  });
}

async function init() {
  // 有多少组任务
  const m = (await getLine()) - 0;
  const tasks = [];
  for (let i = 0; i < m; i++) {
    // 当前任务有多少机器
    const n = (await getLine()) - 0;
    const machines = [];
    for (let j = 0; j < n; j++) {
      const line = await getLine();
      machines.push(line.split(" ").map(Number));
    }
    tasks.push(machines);
  }
  for (const task of tasks) {
    console.log(getResult(task));
  }
}
init();

function getResult(arr) {
  arr.sort((a, b) => b[0] - a[0]);
  let result = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    sum += item[0];
    // 前面的配置时间 + 当前的运行时间
    const time = sum + item[1];
    result = Math.max(time, result);
  }
  return result;
}
/* console.log(
  getResult([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
);
console.log(getResult([[2, 2]])); */

/* 
2
2
1 1
2 2
3
1 1
2 2
3 3
*/

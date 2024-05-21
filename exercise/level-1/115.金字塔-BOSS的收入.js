const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
let n = 0;
let agent = [];
rl.on("line", (line) => {
  lines.push(line);
  console.log(lines);
  if (lines.length === 1) {
    n = +lines[0];
  } else if (lines.length === n + 1) {
    lines.shift();
    agent = lines.map((item) => {
      const arr = item.split(" ");
      return {
        id: arr[0],
        parentId: arr[1],
        money: +arr[2],
      };
    });
    console.log(agent);
    computeMoney(agent);
    lines.length = 0;
    n = 0;
  }
});
function computeMoney(agent) {
  const top = {
    id: agent[0].parentId,
    parentId: null,
    parent: null,
    money: 0,
  };
  agent.unshift(top);
  console.log(agent);
  agent.forEach((item) => {
    const arr = agent.filter((value) => item.parentId === value.id);
    item.parent = arr[0] || null;
  });
  console.log(agent);
  for (let index = agent.length - 1; index > 0; index--) {
    const element = agent[index];
    element.parent.money += (element.money / 100) * 15;
  }
  console.log(agent[0].id, agent[0].money);
}
/* 
3
1 0 223
2 0 323
3 2 1203
*/

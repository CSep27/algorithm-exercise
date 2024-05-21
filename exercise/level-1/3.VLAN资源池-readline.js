/* 思路代码 */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const lines = [];
rl.on("line", (line) => {
  lines.push(line);
  if (lines.length === 2) {
    const range = lines[0].split(",");
    const vlan = Number(lines[1]);
    const rangeArr = [];
    for (let index = 0; index < range.length; index++) {
      const arr = range[index].split("-");
      rangeArr.push(arr);
    }
    rangeArr.sort((a, b) => a[0] - b[0]);
    console.log(rangeArr);
    const result = [];
    for (let index = 0; index < rangeArr.length; index++) {
      const element = rangeArr[index];
      const leftEl = Number(element[0]);
      if (element.length === 2) {
        const rightEl = Number(element[1]);
        if (leftEl == vlan) {
          if (leftEl + 1 == rightEl) {
            result.push(rightEl);
          } else {
            result.push(`${leftEl + 1}-${rightEl}`);
          }
        } else if (rightEl == vlan) {
          if (rightEl - 1 == leftEl) {
            result.push(leftEl);
          } else {
            result.push(`${leftEl}-${rightEl - 1}`);
          }
        } else if (leftEl < vlan && vlan < rightEl) {
          // [10-20] 15
          // [10-14], [16,20]
          if (leftEl == vlan - 1) {
            result.push(leftEl);
          } else {
            result.push(`${leftEl}-${vlan - 1}`);
          }
          if (vlan + 1 === rightEl) {
            result.push(rightEl);
          } else {
            result.push(`${vlan + 1}-${rightEl}`);
          }
        } else {
          result.push(`${leftEl}-${rightEl}`);
        }
      } else if (element.length === 1) {
        if (leftEl != vlan) {
          result.push(leftEl);
        }
      }
    }
    console.log(result.join(","));
    lines.length = 0;
  }
});

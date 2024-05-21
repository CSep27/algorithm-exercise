const n = 3; // 网络结点的个数n
const m = 3; // 时延列表的长度
// u源 v目的 w时延
/* 
u>=1
v<=n
1<=w<=100
*/
const arr = [
  { u: 1, v: 2, w: 11 },
  { u: 2, v: 3, w: 13 },
  { u: 1, v: 3, w: 50 },
];
/* const arr = [
  { u: "A", v: "B", w: 10 },
  { u: "A", v: "D", w: 4 },
  { u: "B", v: "C", w: 8 },
  { u: "B", v: "D", w: 2 },
]; */
const start = 1;
const end = 3;

let selected = [];
let unseleted = [];

// 找到与起始结点直接连接的点
const startArr = arr.filter((item) => item.u === start);
// 排序
startArr.sort((a, b) => a.w - b.w);
selected.push(start);
for (let i = 0; i < startArr.length; i++) {
  const item = startArr[i];
}

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
const start = 1;
const end = 3;

let matrix = [];

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  let k = item.u - 1;
  if (!matrix[k]) {
    matrix[k] = [[item.v, item.w]];
  } else {
    matrix[k].push([item.v, item.w]);
  }
}
console.log(matrix);
let l = matrix.length;
let distance = new Array(l).fill(Infinity);
distance[0] = 0;
let nodes = new Array(l).fill(false);

while (nodes.includes(false)) {
  let minValue = Infinity;
  let minValueIndex = l + 1;
  for (let i = 0; i < l; i++) {
    if (!nodes[i] && distance[i] < minValue) {
      minValue = distance[i];
      minValueIndex = i;
    }
  }
  nodes[minValue] = true;
  for (let i = 0; i < l; i++) {
    distance[i] = Math.min(
      distance[i],
      distance[minValue] + matrix[minValueIndex][j]
    );
  }
}
console.log(distance);

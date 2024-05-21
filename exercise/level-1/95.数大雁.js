/* 
题目要求求得最少有几只大雁
1. 按照答案的方法，获取合法的叫声区间，每个区间是一个叫声，多少区间表示有多少叫声
2. 最少有，那么第一个区间结束后，重新开始的叫声，可以是一个大雁重复叫的

range数量为8
[
  [ 0, 14 ],  [ 1, 15 ],
  [ 3, 21 ],  [ 8, 27 ],
  [ 13, 32 ], [ 19, 36 ],
  [ 20, 37 ], [ 26, 39 ]
]
第一声结束是14，那么一只大雁重复叫的话，意味着开始索引要大于14
小于14的都是没重复的，也就是最少有多少只大雁
*/
const str = "qququaauqccauqkkcauqqkcauuqkcaaukccakkck";

let i = 0;

let q = [],
  u = 0,
  a = 0,
  c = 0;

const range = [];

while (i < str.length) {
  switch (str[i]) {
    case "q":
      q.push(i);
      break;
    case "u":
      if (u + 1 <= q.length) {
        u++;
      }
      break;
    case "a":
      if (a + 1 <= u) {
        a++;
      }
      break;
    case "c":
      if (c + 1 <= a) {
        c++;
      }
      break;
    case "k":
      if (c >= 1) {
        range.push([q.shift(), i]);
        u--;
        a--;
        c--;
      }
      break;
    default:
      return -1;
  }
  i++;
}
// console.log(q, u, a, c);
if (!range.length) return -1;
console.log(range);

/* 
有多少交集，说明同时有多少只大雁发出了声音
区间不相交，可以是同一只大雁重复发出声音
*/
let max = 1;
for (let i = 0; i < range.length; i++) {
  let count = 1;
  for (let j = i + 1; j < range.length; j++) {
    if (range[i][1] >= range[j][0]) count++;
  }
  max = Math.max(max, count);
}
console.log("max", max);

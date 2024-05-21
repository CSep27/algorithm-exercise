let input_array = [3, 1, 2, 4];
let m = 7;
let output_array = [];
// 计数
let i = 1;
let len = input_array.length;
let count = 0;

const now = performance.now();
while (len) {
  count++;
  // 取出队列头部的值
  let head = input_array.shift();
  // 判断计数与m是否相等
  if (i === m) {
    // 相等，重新计数，m更新为head
    len--;
    i = 1;
    m = head;
    output_array.push(head);
  } else {
    // 不相等时，计数增加，数字放到尾部去
    i++;
    input_array.push(head);
  }
}
console.log(performance.now() - now);
console.log(output_array); // [ 2, 3, 1, 4 ]
console.log(count); // 13

function test(line) {
  const [p1, p2, p3, p4] = line.split("#").map(Number);
  console.log(p1, p2, p3, p4);
}
// Number('') => 0
test("1##3#4");
// Number('a') => NaN
test("a#b#c#d");
// p4 => undefined
test("1#2#3");
test("255#255#255#255");
test("1#0#0#0");
test("128#0#255#255"); // 2147549183
test("128#255#255#255"); // 2164260863
// 后续再结合判断一下数字范围即可

// 10进制转换为16进制
var num = 10;
console.log(num.toString(16)); // a

// 如果16进制数长度为1，前面加上0

// 16进制转换为10进制
console.log(parseInt("0a", 16)); // 10

/* 
所以题目的意思是，
1. 验证输入字符串是否符合要求
2. 按照分隔符，把每个位置上的数(共4个)转换成16进制
3. 4个16进制数拼接起来，转换成1个10进制数

*/

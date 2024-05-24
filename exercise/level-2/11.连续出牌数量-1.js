// ACM模式 Algorithm Contest Mode 过单个命令行交互式的方式，向评测机提交自己编写的程序。
// 遍历解法
function getResult(num, color) {
  let result = 1; // 能打出几张牌
  for (let i = 0; i < num.length; i++) {
    // 出第i张牌
    let cardNum = num[i];
    let cardColor = color[i];
    let list = []; // 存储已经出过的牌的序号
    list.push(i);
    for (let j = 0; j < num.length; j++) {
      // 比较时排除当前出的牌和历史出过的牌
      if (
        list.indexOf(j) < 0 &&
        (cardNum === num[j] || cardColor === color[j])
      ) {
        cardNum = num[j];
        cardColor = color[j];
        list.push(j);
        // 从头找
        j = -1;
      }
    }

    // 本次出牌张数和上次比较，大于就替换
    if (list.length > result) {
      result = list.length;
    }
  }
  return result;
}
console.log(getResult([1, 4, 3, 4, 5], ["r", "y", "b", "b", "r"]));
console.log(getResult([1, 2, 3, 4], ["r", "y", "b", "g"]));
// 时间复杂度O(n^3)？

// 并查集 https://zhuanlan.zhihu.com/p/93647900

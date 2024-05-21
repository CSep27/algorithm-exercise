/* 优化代码 把判断from与to是否相等的逻辑抽出来*/
const range = "20-21,15,18,30,5-10".split(",");
// 完整版 5-10, 15, 18, 20-21, 30;
// const vlan = 5;
const fn = (vlan) => {
  const sortedRange = [];
  /* 变成二维数组并升序排序 */
  for (let index = 0; index < range.length; index++) {
    const arr = range[index].split("-");
    sortedRange.push(arr);
  }
  // sort会改变原数组
  // toSorted()方法返回一个排序后的新数组
  sortedRange.sort((a, b) => a[0] - b[0]);
  // console.log(sortedRange);
  const result = [];
  const isDiff = (from, to) => {
    return from == to ? from : `${from}-${to}`;
  };
  for (let index = 0; index < sortedRange.length; index++) {
    const element = sortedRange[index];
    let from = Number(element[0]);
    if (element.length === 2) {
      let to = Number(element[1]);
      if (from == vlan) {
        result.push(isDiff(from + 1, to));
      } else if (to == vlan) {
        result.push(isDiff(from, to - 1));
      } else if (from < vlan && vlan < to) {
        // 这种情况下，需要再isDiff判断一次
        result.push(isDiff(from, vlan - 1));
        result.push(isDiff(vlan + 1, to));
      } else {
        result.push(`${from}-${to}`);
      }
    } else if (element.length === 1 && from != vlan) {
      result.push(from);
    }
  }
  console.log("------", vlan);
  console.log(result.join(","));
};
/* 测试代码 */
fn(1);
fn(5);
fn(6);
fn(8);
fn(10);
fn(15);
fn(20);
fn(21);
fn(30);

/* 
答案中的方法，没有用result数组，而是在原数组基础上用splice去删除和替换元素，节省空间
我的方案中，最后不需要再用map循环用-拼接数组
 */

// 先排序后去重，排序后 字母大小写不同的相同单词会挨着
function getResult(str) {
  let arr = str.split(" ");
  arr.sort((a, b) => {
    // 不区分大小写排序
    // 先都转换成小写
    a = a.toLocaleLowerCase();
    b = b.toLocaleLowerCase();
    // 再按照升序排列
    return a === b ? 0 : a > b ? 1 : -1;
  });
  console.log(arr);
  let result = [];
  let i = 1;
  result[0] = arr[0];
  while (i < arr.length) {
    if (
      arr[i].toLocaleLowerCase() !==
      result[result.length - 1].toLocaleLowerCase()
    ) {
      result.push(arr[i]);
    }
    i++;
  }
  return result;
}
console.log(getResult("i LOVE Cc I love CC Hello Hel Hellow"));
/* 
默认排序得到的结果
[
  'CC',     'Cc',
  'Hel',    'Hello',
  'Hellow', 'I',  'LOVE',   'i',  'love']
修改后
  [
  'Cc',     'CC',
  'Hel',    'Hello',
  'Hellow', 'i',
  'I',      'LOVE',
  'love'
]
*/

const arr = new Array(100).fill(0);
for (let i = 0; i < arr.length; i++) {
  arr[i] = i + 1;
}

function recursion(arr, m, count) {
  arr = arr.filter(() => {
    // count 超过m了，重新置为1
    if (count === m + 1) {
      count = 1;
    }
    // 如果整除了，返回0，就不会放到arr中，被过滤掉了
    // 先算 % 再++
    return count++ % m;
  });
  // console.log(arr, m, count);
  if (arr.length >= m) {
    // 通过count维持了原来数数的规律
    return recursion(arr, m, count);
  } else {
    return arr.join(",");
  }
}
console.log(recursion(arr, 3, 1));

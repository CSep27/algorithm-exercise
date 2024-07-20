/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let n = nums.length;
  let max = n;
  if (n % k === 0) {
    max = n / 2;
  }
  let count = 0;
  let i = 0;
  let j = i + k;
  while (count < max) {
    // 移动到的新位置
    if (j >= n) {
      j -= n;
    }
    /* if (j === i) {
      i++;
      j = i + k;
      if (j >= n) {
        j -= n;
      }
    } */
    // i位置的元素和j互换
    let temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;

    j = j + k;

    count++;
  }
  return nums;
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 1));
console.log(rotate([-1, -100, 3, 99], 2));

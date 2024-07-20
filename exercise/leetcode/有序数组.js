/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let i = 0;
  while (i < nums.length - 1) {
    if (nums[i] === nums[i + 1]) {
      i += 2;
    } else {
      return nums[i];
    }
  }
  if (i === nums.length - 1) {
    return nums[i];
  }
};

// 二分查找！！！ 有序数组二分查找！！！时间复杂度要求是O(log n)

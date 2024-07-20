var removeDuplicates = function (nums, k) {
  const n = nums.length;
  if (n <= k) {
    return n;
  }
  for (let i = 0; i < nums.length; i++) {
    const item = arr[i];
  }
  /* let slow = 2,
    fast = 2;
  while (fast < n) {
    if (nums[slow - 2] != nums[fast]) {
      nums[slow] = nums[fast];
      ++slow;
    }
    ++fast;
  }
  return slow; */
};
// nums是有序数组，返回的是保留k个重复数字后，数组的长度
console.log(removeDuplicates([1, 1, 1, 2, 2, 3], 2));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3], 2));

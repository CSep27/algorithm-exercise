/* const arr = [1, 3, 1, 4, 0];
const k = 2; */

function fn(arr, k) {
  let count = 0;
  arr.forEach((item) => {
    if (item < k) {
      count++;
    }
  });
  // console.log(count); // 3

  let minSwapCount = 0;

  if (count === 1) {
    return minSwapCount;
  }

  // 初始情况下，得到交换次数
  for (let index = 0; index < count; index++) {
    const element = arr[index];
    console.log(element);
    if (element >= k) {
      minSwapCount++;
    }
  }
  let tempCount = minSwapCount;
  for (let index = count; index < arr.length; index++) {
    const inEle = arr[index];
    const deEle = arr[index - count];
    // 移动一次就更新一下数字
    if (inEle <= k && deEle >= k) {
      tempCount--;
    } else if (inEle >= k && deEle <= k) {
      tempCount++;
    }
    minSwapCount = Math.min(minSwapCount, tempCount);
  }
  console.log("minSwapCount", minSwapCount);
}

fn([1, 3, 1, 4, 0], 2);
fn([1, 6, 3, 9, 8, 4, 2, 5, 7], 6);


// 26. Remove Duplicates from Sorted Array


var removeDuplicates = function (nums) {
  let index = 0;
  let runner = 0;

  while (runner < nums.length) {
    if (nums[index] !== nums[runner]) {
      index++;
      nums[index] = nums[runner];
    }
    runner++;
  }

  return index + 1;
};

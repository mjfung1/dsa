


var findMin = function (nums) {
  let lo = 0;
  let hi = nums.length - 1;
  let midpoint;

  while (lo < hi) {
    midpoint = ~~((lo + hi) / 2);

    if (nums[midpoint] > nums[hi]) {
      lo = midpoint + 1;
    } else {
      hi = midpoint;
    }
  }
  return nums[hi];
};

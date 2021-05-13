
// 53. Maximum Subarray
// Kadane's algo
// Time - linear - O(n);
// Space - constant - O(1);

var maxSubArray = function(nums) {
    let max = 0;
    let sum = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max + nums[i], nums[i]);
        sum = Math.max(sum, max)
    }
    return sum;
};
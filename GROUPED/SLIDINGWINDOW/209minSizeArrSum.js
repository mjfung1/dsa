// 209. Minimum Size Subarray Sum

var minSubArrayLen = function(target, nums) {
    let left = 0;
    let sum = 0;
    let minSize = Number.MAX_VALUE;
    
    for (let right = 0; right < nums.length; right++) {
        let num = nums[right];
        sum += num;
        
        while (sum >= target) {
            minSize = Math.min(minSize, (right+1 - left))
            let num1 = nums[left];
            sum = sum - num1;
            left++;
        }
       
    }
    
    
    return minSize === Number.MAX_VALUE ? 0 : minSize
};
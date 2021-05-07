// 35. Search Insert Position
var searchInsert = function(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;
    
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        let midVal = nums[mid];
        
        if (target === midVal) {
            return mid;
        } else if (target > midVal) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    
    return lo;
};
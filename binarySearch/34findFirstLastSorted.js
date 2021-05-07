// 34. Find First and Last Position of Element in Sorted Array
// MEDIUM

var searchRange = function(nums, target) {
    let lo = 0;
    let hi = nums.length-1;
    let mid;
    
    while (lo <= hi) {
        mid = ~~((lo + hi) / 2);
        let midVal = nums[mid];
        
        if (target === midVal) {
            lo = mid;
            hi = mid;
            while(target === nums[lo-1]) {
                lo--;
            }
            while(target === nums[hi+1]) {
                hi++;
            }
            return [lo, hi]
        } else if (target > midVal) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    
    return [-1,-1];
};
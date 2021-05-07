// 704. Binary Search

var search = function(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;
    
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        let midVal = nums[mid];
        
        if (midVal === target) {
            return mid;
        } else if (midVal > target) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    } 
    return -1;
};
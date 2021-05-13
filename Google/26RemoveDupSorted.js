// 26. Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    let index = 0;
    let prev;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num !== prev) {
              nums[index] = num;
            index++;
            prev = num;
        }
    }
    nums.length = index;
};
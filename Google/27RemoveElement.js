// 27. Remove Element

var removeElement = function(nums, val) {
    let index = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num !== val) {
            nums[index] = num;
            index++;
        }
    }
    return index;
};
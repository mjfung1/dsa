// 611. Valid Triangle Number

var triangleNumber = function(nums) {
    nums.sort((a,b) => a-b);
    let count = 0;
    // only up to 2 because left and right. need two nums
    for (let thirdSide = nums.length-1; thirdSide >= 2; thirdSide--) {
        let firstSide = 0;
        let secondSide = thirdSide - 1;
        
        while (firstSide < secondSide) {
            if (nums[firstSide] + nums[secondSide] > nums[thirdSide]) {
                count += secondSide - firstSide;
                secondSide--;
            } else {
                firstSide++;
            }
        }
    }
    
    return count;
};
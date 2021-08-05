
// 724. Find Pivot Index


var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((acc, red) => acc+red);
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        rightSum -= num;
        if (leftSum === rightSum) return i;
        leftSum += num;
        
    }
    
    return -1;
   
};
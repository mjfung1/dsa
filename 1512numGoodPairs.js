// 1512. Number of Good Pairs
var numIdenticalPairs = function(nums) {
    let goodPairs = 0;
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            let num1 = nums[i];
            let num2 = nums[j];
            if (num1 === num2) goodPairs++;
        }
    }
    return goodPairs;
};
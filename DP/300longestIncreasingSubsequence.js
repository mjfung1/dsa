// 300. Longest Increasing Subsequence

var lengthOfLIS = function(nums) {
    //working backwards
    //initialize tabulation
    
    let tab = new Array(nums.length).fill(1)
    
    
    // O(n2). because nested loop
    
    for (let i = nums.length-1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            let num1 = nums[i];
            let num2 = nums[j];
            
            if (num1 < num2) {
                tab[i] = Math.max(tab[i], 1 + tab[j])
            }
        }
    }
    
    return Math.max(...tab)
};
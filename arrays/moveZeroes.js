var moveZeroes = function(nums) {
    //create index tracker at zero
    let indexTracker = 0;
    //if num !== 0 set number at that index and index++ 
    for (let i=0; i < nums.length; i++) {
        let num = nums[i];
        
        if (num !== 0) {
            nums[indexTracker] = num;
            indexTracker++
        };
    };
    
    //write another for loop to add the zeroes after first iteration is done;
    for (let j=indexTracker; j < nums.length; j++) {
        nums[j] = 0;
    }
    return nums;
};


//////////////////////////////////
var moveZeroes = function(nums) {
    //create index tracker at zero
    let indexTracker = 0;
    
    for (let i=0; i < nums.length; i++) {
        if (nums[i] === 0) continue;
        
        [nums[i], nums[indexTracker]] = [nums[indexTracker], nums[i]];
        indexTracker++;
    };
    return nums;
};




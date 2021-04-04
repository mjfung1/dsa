var subsets = function(nums) {
    const output = [];
    
    
    function powerset(numss, set) {
        output.push(set);
        
        if (set.length === nums.length) return;
        
        numss.forEach((num, idx) => {
            const copy = numss.slice(idx+1);
            powerset(copy, set.concat(num))
        })
    }
    
    powerset(nums, [])
    
    return output;
};
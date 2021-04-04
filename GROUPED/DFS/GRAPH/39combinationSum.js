var combinationSum = function(candidates, target) {
    const output = [];
    
    function sumMaker(nums, target, combo) {
        if (target === 0) return output.push(combo);
        if (target < 0) return;
        nums.forEach((num, idx) => {
            let copy = [...nums];
            return sumMaker(copy.slice(idx), target-num, combo.concat(num))
        })
    }
    
    
    sumMaker(candidates, target, []);
    return output;
};
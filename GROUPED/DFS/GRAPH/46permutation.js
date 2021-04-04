var permute = function(nums) {
    const output = [];
    
    function comboMaker(nums, temp) {
        if (!nums.length) {
            return output.push(temp);
            
        }
        
        nums.forEach((num, idx) => {
            const mid = [...nums]
            mid.splice(idx, 1);
            comboMaker(mid, temp.concat(num))
        })
    }
    
    comboMaker(nums, [])
    return output;
};
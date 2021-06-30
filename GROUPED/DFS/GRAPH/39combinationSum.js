var combinationSum = function(candidates, target) {
    const output = [];
    
    function sumMaker(nums, target, combo) {
        if (target === 0) return output.push(combo);
        if (target < 0) return;
        nums.forEach((num, idx) => {
            // TURNS OUT. NOT NEEDED.
            // let copy = [...nums];

            return sumMaker(copy.slice(idx), target-num, combo.concat(num))
        })
    }
    
    
    sumMaker(candidates, target, []);
    return output;
};

// REFACTORED

var combinationSum = function (candidates, target) {
  const output = [];

  function combos(startIdx, sum, combo) {
    if (sum === target) return output.push(combo);
    if (sum > target) return;

    for (let idx = startIdx; idx < candidates.length; idx++) {
      let num = candidates[idx];
      combos(idx, sum + num, combo.concat(num));
    }
  }

  combos(0, 0, []);
  return output;
};
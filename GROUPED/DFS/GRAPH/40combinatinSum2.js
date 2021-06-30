// 40. Combination sum 2

var combinationSum2 = function (candidates, target) {
  const combosToTarget = [];
  candidates.sort((a, b) => a - b);

  function comboFinder(startIdx, sum, combo) {
    if (sum === target) return combosToTarget.push(combo);
    if (sum > target) return;

    for (let idx = startIdx; idx < candidates.length; idx++) {
      if (idx > startIdx && candidates[idx] === candidates[idx - 1]) continue;
      let num = candidates[idx];

      comboFinder(idx + 1, sum + num, combo.concat(num));
    }
  }

  comboFinder(0, 0, []);

  return combosToTarget;
};

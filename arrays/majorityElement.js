var majorityElement = function(nums) {
    const length = nums.length /2;
    console.log(length)
    const hash = {};
    for (let num of nums) {
        if (hash[num]) hash[num]++;
        else hash[num] = 1;
    };
    return Object.keys(hash).filter(key => hash[key] > length)
};

var majorityElement = function(nums) {
 
  var sortedNums = nums.sort();
  //very smart.  because question asks
  //return number that appears more than half length of entire array of sorted array
  return sortedNums[Math.floor(nums.length / 2)];
    
};
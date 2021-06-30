// 27. Remove Element
var removeElement = function (nums, val) {
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }

  nums.length = pointer;
  
 //this works; dont know why   
 //return pointer;    
};

// Hacky way. Only works in reverse
var removeElement = function (nums, val) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) nums.splice(i, 1);
  }
};
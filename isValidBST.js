var isValidBST = function(root, min = Number.MIN_SAFE_INTEGER , max = Number.MAX_SAFE_INTEGER ) {
    if (!root) return true;


    if (root.val <= min || root.val >= max) return false;
    
    return (isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max))
    
};


// alternative.  same but with helper function
// cleaner code??
var isValidBST = function(root) {
    let min = Number.MIN_SAFE_INTEGER;
    let max = Number.MAX_SAFE_INTEGER; 
    
    return validator(root, min, max);
};

var validator = function(root, min, max) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    
    return (validator(root.left, min, root.val) && validator(root.right, root.val, max))
}
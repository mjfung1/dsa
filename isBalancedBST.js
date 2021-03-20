var isBalanced = function(root) {
    if (!root) return true;
    
    let left = getDepth(root.left);
    let right = getDepth(root.right);
    let balanced = Math.abs(left - right) <= 1;
    return balanced && isBalanced(root.left) && isBalanced(root.right)
    
};

var getDepth = function(root) {
    if (!root) return 0;
    return 1 + Math.max(getDepth(root.right), getDepth(root.left));
};
var isBalanced = function(root) {
    if (!root) return true;
    
    let left = getDepth(root.left);
    let right = getDepth(root.right);
    let balanced = Math.abs(left - right) <= 1;

    // this step is like the hand in the video. where it just spreads
    // checking untile there is no more root
    return balanced && isBalanced(root.left) && isBalanced(root.right)
    
};

var getDepth = function(root) {
    if (!root) return 0;
    return 1 + Math.max(getDepth(root.right), getDepth(root.left));
};
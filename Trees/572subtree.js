var isSubtree = function(s, t) {
    
    function sameTree(tree1, tree2) {
        if (!tree1 && !tree2) return true;
        if (!tree1 || !tree2 || tree1.val !== tree2.val) return false;
        return sameTree(tree1.left, tree2.left) && sameTree(tree1.right, tree2.right);
    }
    
    if (sameTree(s, t)) return true;
    if (!s) return false;
    return isSubtree(s.left, t) || isSubtree(s.right, t);
    
};
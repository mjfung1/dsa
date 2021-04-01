var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;
    if (root === p || root === q) return root;
    
    root.left = lowestCommonAncestor(root.left, p, q)
    root.right = lowestCommonAncestor(root.right, p, q)
    
    if (root.left && root.right) return root;
    return root.left ? root.left : root.right
};
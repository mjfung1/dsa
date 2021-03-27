var isSymmetric = function(root) {
    let output = true;
    
    
    function dfs(node1, node2) {
        if (!node1 && !node2) return;
        
        if (!node1 || !node2 || node1.val !== node2.val) {
            output = false;
            return;
        }
        
        dfs(node1.left, node2.right)
        dfs(node1.right, node2.left)
    }
    
    dfs(root, root)
    
    return output;
};
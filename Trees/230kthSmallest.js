var kthSmallest = function(root, k) {
    const output = []
    
    function dfs(node) {
        if (!node) return 0;
        
        
        dfs(node.left)
        output.push(node.val)
        dfs(node.right)
    }
    
    dfs(root)
    return output[k-1]
};
// 589. N-ary Tree Preorder Traversal

var preorder = function(root) {
    const output = [];
    
    
    function dfs(root) {
        
        if (!root) return root;
        
        output.push(root.val)
        
        for (const child of root.children) {
            dfs(child)
        }
    }
    
    dfs(root);
    
    return output;
};
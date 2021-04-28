// 107. Binary Tree Level Order Traversal II

var levelOrderBottom = function(root) {
    const output = [];
    
    function dfs(root, level) {
        if (!root) return;
        if (!output[level]) output[level] = [];
        
        output[level].push(root.val)
        dfs(root.left, level+1)
        dfs(root.right, level+1)
    }
    
    dfs(root, 0)
    return output.reverse();
};
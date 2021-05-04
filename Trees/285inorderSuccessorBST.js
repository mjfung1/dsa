// 285. Inorder Successor in BST

var inorderSuccessor = function(root, p) {
    const output = [];
    
    function dfs(root) {
        if (!root) return;
        
        dfs(root.left)
        output.push(root)
        dfs(root.right)
    }
    
    dfs(root);
    
    let idx = output.indexOf(p) + 1;

    return output[idx];
};
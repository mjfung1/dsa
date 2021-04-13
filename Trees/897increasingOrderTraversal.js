
// 897. Increasing Order Search Tree

var increasingBST = function(root) {
    const nodes = []
    
    //inorder traversal
    function dfs(node) {
        if (!node) return;
        
        dfs(node.left)
        nodes.push(node.val);
        dfs(node.right)
    }
    
    dfs(root);
    
    let current = new TreeNode();
    let dummy = current;
    
    for (const node of nodes) {
        dummy.right = new TreeNode(node);
        dummy = dummy.right
    }
    
    return current.right;
};


////////////////////////////////

var increasingBST = function(root) {
    let current = new TreeNode();
    let dummy = current;
    
    
    //inorder traversal
    function dfs(node) {
        if (!node) return;
        
        dfs(node.left)
        dummy.right = new TreeNode(node.val)
        dummy = dummy.right;
        dfs(node.right)
    }
    
    dfs(root);
    


    
    return current.right;
};

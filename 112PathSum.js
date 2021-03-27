var hasPathSum = function(root, targetSum) {
    if (!root) return [];
    let res = false;
    
    function dfs(node, target) {
        //note when doing recursion this way. do not return;
        if (!node.left && !node.right && node.val === target) res = true;
        
        
        if (node.left) {
            dfs(node.left, target - node.val);
        }
        if (node.right) {
            dfs(node.right, target - node.val)
        }
    
    }
    
    
    dfs(root, targetSum)
    return res;
    
};
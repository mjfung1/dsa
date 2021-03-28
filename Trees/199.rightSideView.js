var rightSideView = function(root) {
    const output = [];
    
    function traverse(node, level) {
        if (!node) return;
        
        if (!output[level]) {
            output.push(node.val);
        }
        
        traverse(node.right, level + 1);
        traverse(node.left, level + 1);
    }
    
    
    traverse(root, 0)
    
    return output;
};
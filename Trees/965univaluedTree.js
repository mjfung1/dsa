//similar to 100 and 101


var isUnivalTree = function(root) {
    let univalued = true;
    
    function findValue(node, val) {
        if (!node) return;
        
        if (node.val !== val) {
            univalued = false;
            return;
        }
        
        findValue(node.left, val)
        findValue(node.right, val)
    }
    
    findValue(root, root.val);
    
    return univalued;
};
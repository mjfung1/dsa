var levelOrderBottom = function(root) {
    if (!root) return [];
    const stack = [root]
    const output = [];
    
    while (stack.length) {
        let size = stack.length;
        let subarr = [];
        while (size--) {
            let node = stack.shift();
            if (node) subarr.push(node.val)
            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right)
        }
        output.unshift(subarr)
    }
    
    return output;
};
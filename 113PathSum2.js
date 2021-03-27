var pathSum = function(root, targetSum) {
    if (!root) return [];
    const output = [];
    
    function findSum(node, target, path) {
        if (!node.left && !node.right && node.val === target) output.push(path);
        
        path.push(node.val);
        
        if (node.left) {
            findSum(node.left, target - node.val, [...path])
        }
        if (node.right) {
            findSum(node.right, target - node.val, [...path])
        }
    };
    
    findSum(root, targetSum, [])
    
    return output;
};
var pathSum = function(root, sum) {
    let count = 0;
    
    
    function checkSum(node, mySum) {
        if (!node) return;
        
        if (node.val === mySum) count++;
        
        mySum = mySum - node.val
        checkSum(node.left, mySum)
        checkSum(node.right, mySum)
    }
    
    function sumFinder(node, mySum) {
        if (!node) return;
        
        checkSum(node, mySum)
        sumFinder(node.left, mySum)
        sumFinder(node.right, mySum)
    }
    
    sumFinder(root, sum);
    
    return count;
};
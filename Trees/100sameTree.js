var isSameTree = function(p, q) {
    let same = true;
    
    function sameChecker(node1, node2) {
        if (!node1 && !node2) return;
        
        if (!node1 || !node2 || node1.val !== node2.val) {
            same = false;
            return
        }
        
        sameChecker(node1.right, node2.right)
        sameChecker(node1.left, node2.left)
    }
    
    sameChecker(p, q)
    
    return same;
};
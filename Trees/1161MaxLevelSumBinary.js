// 1161. Maximum Level Sum of a Binary Tree

// RECURSIVE
var maxLevelSum = function(root) {
    const sumLevel = [];
    
    function dfs(root, level) {
        if (!root) return;
        if (!sumLevel[level]) sumLevel[level] = 0;
        
        sumLevel[level] += root.val
        
        dfs(root.left, level + 1)
        dfs(root.right, level + 1)
    }
    
    dfs(root, 1)
    
    let max = -Infinity;
    let idx = 0;
    
    for (let i = 1; i < sumLevel.length; i++) {
        let num = sumLevel[i];
        
        if (num > max) {
            max = num;
            idx = i
        }
    }
    
    return idx
};


// ITERATIVE
var maxLevelSum = function(root) {
    const sumArr = [];
    const queue = [root];
    
    while (queue.length) {
        let level = queue.length
        let sum = 0;
        while (level--) {
            let item = queue.shift();
            sum += item.val;
            if (item.left) queue.push(item.left);
            if (item.right) queue.push(item.right);
        }
        sumArr.push(sum)
    }
    console.log(sumArr)
    let max = Math.max(...sumArr)
    return sumArr.indexOf(max) + 1
    
};
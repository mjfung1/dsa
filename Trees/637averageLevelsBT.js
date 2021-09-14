
// 637. Average of Levels in Binary Tree


var averageOfLevels = function(root) {
    let levels = [];
    dfs(root, 0, levels);
    
    return levels.map(level => getAvg(level));
};

const dfs = (root, level, levels) => {
    if (!root) return;
    
    if (!levels[level]) levels[level] = [];
    levels[level].push(root.val);
    dfs(root.left, level + 1, levels);
    dfs(root.right, level + 1, levels);
};

const getAvg = (arr) => {
    let sum = arr.reduce((acc, red) => acc + red);
    return sum / arr.length;
};
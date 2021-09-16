// 1706. Where Will the Ball Fall


var findBall = function(grid) {
    let numBalls = grid[0].length;
    
    let output = [];
    
    for (let ball = 0; ball < numBalls; ball++) {
        let result = dfs(0, ball, grid);
        output.push(result);
    }
    return output;
};

const dfs = (row, col, grid) => {
    if (row === grid.length) return col;
    
    if ((grid[row][col] === 1) && (col + 1 < grid[0].length) && (grid[row][col + 1] === 1)) {
        return dfs(row + 1, col + 1, grid);
    }
    
    if ((grid[row][col] === -1) && (col - 1 >= 0) && (grid[row][col - 1] === -1)) {
        return dfs(row + 1, col - 1, grid);
    } 
    
    return -1;
    
        
};
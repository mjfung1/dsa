var numIslands = function(grid) {
    let numIslands = 0;
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '1') {
                numIslands++;
                landToWater(grid, row, col)
            }
        }
    }
    
    
    
    return numIslands;
};

var landToWater = function(grid, row, col) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return;
    if (grid[row][col] === '0') return;
    
    const positions = [[1,0],[-1,0],[0,1],[0,-1]];
    
    grid[row][col] = '0';
    
    for (let [rowIdx, colIdx] of positions) {
        landToWater(grid, row + rowIdx, col + colIdx);
    }
}
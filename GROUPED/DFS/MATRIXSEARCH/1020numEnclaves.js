
var numEnclaves = function(grid) {
    let numLand = 0;
    const rows = grid.length;
    const cols = grid[0].length;
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++ ) {
            if ((row === 0 || col === 0 || row === rows-1 || col === cols-1) && grid[row][col] === 1) walkOff(grid, row, col)
        }
    }
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++ ) {
            if (grid[row][col] === 1) numLand++;
        }
    }
    
    return numLand;
};


var walkOff = function(grid, row, col) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return;
    if (grid[row][col] === 0) return;
    
    grid[row][col] = 0;
    
    walkOff(grid, row+1, col)
    walkOff(grid, row-1, col)
    walkOff(grid, row, col+1)
    walkOff(grid, row, col-1)
}




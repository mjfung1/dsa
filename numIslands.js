var numIslands = function(grid) {
    let islandCount = 0;
    console.log(grid)
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                islandCount++;
                landToWater(i, j, grid)
            }
        }
    }
    console.log(grid)
    return islandCount;
};

var landToWater = function(rowIdx, colIdx, grid) {
    if (grid[rowIdx] === undefined || grid[rowIdx][colIdx] === undefined || grid[rowIdx][colIdx] === '0') return;
    
    grid[rowIdx][colIdx] = '0';
    landToWater(rowIdx+1, colIdx, grid);
    landToWater(rowIdx-1, colIdx, grid);
    landToWater(rowIdx, colIdx+1, grid);
    landToWater(rowIdx, colIdx-1, grid);
};
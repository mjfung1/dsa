var numDistinctIslands = function(grid) {
   
    const set = new Set();
    counter = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                let island = islandSearcher(grid, row, col);
                if (!set.has(island)) {
                    set.add(island);
                    counter++;
                }
                
            }
        }
    }
    
    function islandSearcher (grid, rowIdx, colIdx) {
        if (rowIdx < 0 || colIdx < 0 || rowIdx >= grid.length || colIdx >= grid[0].length) return;
        if (grid[rowIdx][colIdx] === 0) return;
        
        const directions = [[1,0,'R'], [-1,0, 'L'], [0,1, 'U'], [0,-1, 'D']];
        
        let output = '';
        
                     
        grid[rowIdx][colIdx] = 0;
        
        for (let [row, col, path] of directions) {
            
            output += path;
            output += islandSearcher(grid, rowIdx + row, colIdx + col)
            
            
        }
        return output;
        
        
    }
    console.log(set)
    return counter;
};
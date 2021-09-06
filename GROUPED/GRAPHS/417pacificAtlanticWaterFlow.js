// 417. Pacific Atlantic Water Flow

var pacificAtlantic = function(heights) {
    
    const visited = new Set();
    const output = [];
    
    for (let row = 0; row < heights.length; row++) {
        for (let col = 0; col < heights[0].length; col++) {
            if (
                pacific(row, col, heights, visited, heights[row][col]) && 
                atlantic(row, col, heights, visited, heights[row][col])
               ) {
                output.push( [ row, col ] );
            }
        }
    }
    
    return output;
};


const pacific = (row, col, grid, visited, prevHeight) => {
    if (row < 0 || col < 0) return true;
    if (row === grid.length || col === grid[0].length) return false;
    if (grid[row][col] > prevHeight) return false;
    let key = row + ',' + col;
    if (visited.has(key)) return false;
    
    visited.add(key);
    
    let result = (
        pacific(row+1, col, grid, visited, grid[row][col]) || 
        pacific(row-1, col, grid, visited, grid[row][col]) ||
        pacific(row, col+1, grid, visited, grid[row][col]) ||
        pacific(row, col-1, grid, visited, grid[row][col]) 
    );
    
    visited.delete(key);
    
    return result;
    
};

const atlantic = (row, col, grid, visited, prevHeight) => {
    if (row < 0 || col < 0) return false;
    if (row === grid.length || col === grid[0].length) return true;
    if (grid[row][col] > prevHeight) return false;
    let key = row + ',' + col;
    if (visited.has(key)) return false;
    
    visited.add(key);
    
    let result = (
        atlantic(row+1, col, grid, visited, grid[row][col]) || 
        atlantic(row-1, col, grid, visited, grid[row][col]) ||
        atlantic(row, col+1, grid, visited, grid[row][col]) ||
        atlantic(row, col-1, grid, visited, grid[row][col]) 
    );
    
    visited.delete(key);
    
    return result;
};
var numEnclaves = function(A) {
  
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if ((i == 0 || j == 0 || j == A[0].length - 1 || i == A.length - 1) && A[i][j] == 1) landToWater(A, i, j)
    }
  }
  
  let count = 0
  for (let i = 1; i < A.length - 1; i++) {
    for (let j = 1; j < A[0].length - 1; j++) {
      if (A[i][j] == 1) count += 1
    }
  }
  return count
};


var landToWater = function(grid, row, col) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return;
    if (grid[row][col] === 0) return;
    
    const positions = [[1,0],[-1,0],[0,1],[0,-1]];
    
    grid[row][col] = 0;
    
    for (let [rowIdx, colIdx] of positions) {
        landToWater(grid, row + rowIdx, col + colIdx);
    }
}
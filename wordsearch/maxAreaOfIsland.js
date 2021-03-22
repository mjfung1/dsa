var maxAreaOfIsland = function(grid) {
    let landSize = 0;
    
    for (let row=0; row < grid.length; row++) 
        for (let col=0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                landSize = Math.max(landSearcher(grid, row, col), landSize);
            }
        }
    return landSize;
};

var landSearcher = function(grid, row, col) {
    let area = 1;
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 0) return 0;  

  
    if (grid[row][col] === 1) {
        grid[row][col] = 0;
        
        area += landSearcher(grid, row+1, col)
        area += landSearcher(grid, row-1, col)
        area += landSearcher(grid, row, col+1)
        area += landSearcher(grid, row, col-1)
    }


    return area;
};

// do it in a for loop with direction for less code
var landSearcher = function(grid, row, col) {
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    let area = 1;
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 0) return 0;

    grid[row][col] = 0;
    
    for (let [dirRow, dirCol] of directions) {
        area += landSearcher(grid, (row+dirRow), (col+dirCol))
    }

    return area;
}


///////////////////////////////////////////////

var maxAreaOfIsland = function(grid) {
    const R = grid.length, C = grid[0].length;
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    let maxArea = 0
    
    for(let r = 0; r < R; r++) {
        for(let c = 0; c < C; c++) {
            //real smart
            //IN JS, THE NUMBER 0 IS FALSEY, AND ANY OTHER IS TRUTHY
            //ISLAND IS 0s and 1s.
            if(grid[r][c]) {
                const area = callDFS(r, c);
                maxArea = Math.max(area, maxArea)
            }
        }
    }
    return maxArea;
    
    function callDFS(r, c) {
        if(r < 0 || c < 0 || r >= R || c >= C || !grid[r][c]) return 0;
        grid[r][c] = 0;
        
        let sum = 1;
        
        for(let [dr, dc] of dir) {
            sum += callDFS(r+dr, c+dc);
        }
        return sum;
    }
};
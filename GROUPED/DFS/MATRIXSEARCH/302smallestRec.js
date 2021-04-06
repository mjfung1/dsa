var minArea = function(image, x, y) {
    const rows = new Set();
    const cols = new Set();
    
    function dfs(imag, x, y) {
        if (x < 0 || y < 0 || x >= image.length || y >= image[0].length) return;
        if (image[x][y] === '0') return;

        rows.add(x)
        cols.add(y)
        
        image[x][y] = '0';

        dfs(imag, x+1, y)
        dfs(imag, x-1, y)
        dfs(imag, x, y+1)
        dfs(imag, x, y-1)
    }
    
    dfs(image, x, y)
    return rows.size * cols.size
};


///////without dfs/////////////
var minArea = function(image, x, y) {
    let up = image.length - 1;
    let down = 0;
    let left = image[0].length -1;
    let right = 0
    
    for (let row = 0; row < image.length; row++) {
        for (let col = 0; col < image[0].length; col++) {
            if (image[row][col] === '1'){
                up = Math.min(up, row);
                down = Math.max(down, row);
                left = Math.min(left, col);
                right = Math.max(right, col);
            }
        }
    }
    
    return (down - up + 1) * (right - left + 1)
};
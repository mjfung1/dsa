// 52. N-Queens II

// The n-queens puzzle is the problem of placing n queens 
// on an n x n chessboard such that no two queens attack each other.

var totalNQueens = function(n) {
    let result = 0;
    const chessBoard = new Array(n).fill(-1);
    
    
    function isValid(row, col) {
        for (let i = 0; i < row; i++) {
            // chessboard[i] = the value is the column of queen while i is row
            let prevRow = i;
            let prevCol = chessBoard[i];
            
            let rowSlope = Math.abs(prevRow - row);
            let colSlope = Math.abs(prevCol - col);
            
            if (rowSlope === colSlope || chessBoard[i] === col) return false
        }
        
        return true;
    }
    
    
    function placeQueen(row) {
        if (row === n) result++;
        
        for (let col = 0; col < n; col++) {
            if (!isValid(row, col)) continue;
            
            chessBoard[row] = col;
            placeQueen(row+1);
            chessBoard[row] = -1;
        }
    }
    
    
    placeQueen(0);
    
    return result;
};
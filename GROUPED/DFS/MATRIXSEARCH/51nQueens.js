// 51. N-Queens
// The n-queens puzzle is the problem of placing n queens on an n x n 
// chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens 
// puzzle.

// Each solution contains a distinct board configuration of the 
// n-queens' placement, where 'Q' and '.' both indicate a queen 
// and an empty space, respectively.

var solveNQueens = function(n) {
    let result = [];
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
        
        
    function makeBoard() {
        const board = [];
        
        for (let row = 0; row < n; row++) {
            let word = ''
            for (let col = 0; col < n; col++) {
                if (chessBoard[row] === col) {
                    word = word + 'Q'
                } else {
                    word = word + '.'
                }
            }
            board.push(word)
        }
        
        result.push(board)
    }
    
    
    function placeQueen(row) {
        if (row === n) makeBoard();
        
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
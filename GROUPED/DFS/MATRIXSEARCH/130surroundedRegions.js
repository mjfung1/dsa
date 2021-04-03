var solve = function(board) {
    if (!board || board.length === 0) return;
    
    let rows = board.length;
    let columns = board[0].length;
    
    for (let i = 0; i < rows; i++) {
        if (board[i][0] === 'O') capture(board, i, 0);
        if (board[i][columns-1] === 'O') capture(board, i, columns - 1);
    }
    
    for (let j = 0; j < columns; j++) {
        if (board[0][j] === 'O') capture(board, 0, j);
        if (board[rows-1][j] === 'O') capture(board, rows - 1, j)
    }
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            if (board[row][col] === 'O') {
                board[row][col] = 'X'
            }
            if (board[row][col] === 'E') {
                board[row][col] = 'O'
            }
        }
    }
    return board
};

var capture = function(board, row, col) {
    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) return;
    if (board[row][col] !== 'O') return;
    
    
    board[row][col] = 'E';
    
    capture(board, row+1, col)
    capture(board, row-1, col)
    capture(board, row, col+1)
    capture(board, row, col-1)
    

};
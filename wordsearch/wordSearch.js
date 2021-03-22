const exist = (board, word) => {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === word[0]) {
                if (searchWord(board, row, col, word)) return true;
            }
        }
    }
    return false;
};

const searchWord = (board, row, col, word) => {
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    if (word.length === 0) return true;

    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) return;
    if (board[row][col] !== word[0]) return;

    let temp = board[row][col];
    board[row][col] = 1;

    // if (
    //     searchWord(board, row+1, col, word.slice(1)) ||
    //     searchWord(board, row-1, col, word.slice(1)) ||
    //     searchWord(board, row, col+1, word.slice(1)) ||
    //     searchWord(board, row, col-1, word.slice(1))
    // ) return true; 
    directions.some(direction => {
        const [dirRow, dirCol] = direction;
        searchWord(board, row+dirRow, col+dirCol, word.slice(1));
    })

    board[row][col] = temp;
    return false;

}
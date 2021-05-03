//High overview
//mark rows and colums with -counterparts if 3 in a row the same.
//check against its abs values.
//then drop by using 'move zeros technique' by moving the zeroes up
//how? by setting and indextracker to zero. everytime we hit a nonzero we set it to that index
//then increase indexTracker


var candyCrush = function(board) {
    //check if you need it
    if (!board) return board;
    let isDone = true;
    
    //mark rows
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length - 2; col++) {
            let num1 = Math.abs(board[row][col]);
            let num2 = Math.abs(board[row][col+1]);
            let num3 = Math.abs(board[row][col+2]);
            
            if (num1 === num2 && num2 === num3 && num1 !== 0) {
                board[row][col] = -num1;
                board[row][col+1] = -num2;
                board[row][col+2] = -num3;
                isDone = false;
            };
        };
    };
    
    
    //mark columns
    for (let col = 0; col < board[0].length; col++) {
        for (let row = 0; row < board.length-2; row++) {
            let num1 = Math.abs(board[row][col]);
            let num2 = Math.abs(board[row+1][col]);
            let num3 = Math.abs(board[row+2][col]);
            
            if (num1 === num2 && num2 === num3 && num1 !==0) {
                board[row][col] = -num1;
                board[row+1][col] = -num2;
                board[row+2][col] = -num3;
                isDone = false;
            };
        };
    };
    
    //drop pieces    
    for (let col = 0; col < board[0].length; col++) {
        let indexTracker = board.length-1;
        for (let row = board.length-1; row >= 0; row--) {
            if (board[row][col] > 0) {
                board[indexTracker][col] = board[row][col]; 
                indexTracker--;
            };
        };
        for (let row = indexTracker; row >= 0; row--) {
            board[row][col] = 0;
        }
    };
    
    
    if (isDone) return board;
    else return candyCrush(board);
};



////////////////// another try //////////
const candyCrush = (board) => {
    let isDone = true;

    //mark rows
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length-2; col++) {
            //want to take abs of number b/c will be marking it neg
            let num1 = Math.abs(board[row][col]);
            let num2 = Math.abs(board[row][col+1]);
            let num3 = Math.abs(board[row][col+2]);

            if (num1 === num2 && num2 === num3 && num1 !== 0) {
                //mark the candies with neg
                board[row][col] = -num1;
                board[row][col+1] = -num2;
                board[row][col+2] = -num3;
                isDone = false;
            };
        };
    };

    //mark columns
    for (let col = 0; col < board[0].length; col++) {
        for (let row = 0; row < board.length-2; row++) {
            let num1 = Math.abs(board[row][col]);
            let num2 = Math.abs(board[row+1][col]);
            let num3 = Math.abs(board[row+2][col]);
            if (num1 === num2 && num2 === num3 && num1 !== 0) {
                board[row][col] = -num1;
                board[row+1][col] = -num2;
                board[row+2][col] = -num3;
                isDone = false;
            };
        };
    };

    //drop pieces

    for (let col = 0; col < board[0].length; col++) {
        let indexTracker = board.length-1;
        for (let row = board.length-1; row >= 0; row--) {
            //if number is greater zero that means is valid set at indextracker and increase
            if (board[row][col] > 0) {
                board[indexTracker][col] = board[row][col];
                indexTracker--;
            }
        }

        for (let row = indexTracker; row >=0; row--) {
            board[row][col] = 0;
        }
    }


    if (isDone) return board;
    else return candyCrush(board);
};
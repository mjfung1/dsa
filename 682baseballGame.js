
// 682. Baseball Game

var calPoints = function(ops) {
    const stack = [];
    
    for (const char of ops) {
        if (!isNaN(char)) {
            stack.push(Number(char));
        } else if (char === 'C') {
            stack.pop();
        } else if (char === 'D') {
            let prev = stack[stack.length-1];
            stack.push(prev * 2);
        } else if (char === '+') {
            let prev1 = stack[stack.length-1];
            let prev2 = stack[stack.length-2];
            stack.push(prev1 + prev2);
        }
    }
    
    return stack.reduce((acc, red) => acc + red);
};
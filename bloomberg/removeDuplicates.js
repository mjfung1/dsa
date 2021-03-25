var removeDuplicates = function(s, k) {
    const stack = [];
    
    for (let char of s) {
        let lastIndex = stack.length - 1;
            //if equal k
        if (stack.length && stack[lastIndex][0] === char && stack[lastIndex][1] + 1 === k) {
            stack.pop();
            //else if not equal k
        } else if (stack.length && stack[lastIndex][0] === char) {
            stack[lastIndex][1]++;
        } else {
            stack.push([char, 1]);
        };
    };
    
    let output = '';
    
    for (let [char, frequency] of stack) {
        output += char.repeat(frequency);
    }
    
    return output;
};

//////////////////////////
// ANOTHER TRY

const removeDuplicates = (string, k) => {
    const stack = [];

    for (let char of string) {
        let lastIndex = stack.length-1;
        if (stack.length && stack[lastIndex][0] === char) {
            stack[lastIndex][1]++;
            if (stack[lastIndex][1] === k) {
                stack.pop();
            };
        } else {
            stack.push([char, 1]);
        };
    };

    let output = '';

    for (let [char, frequency] of stack) {
        output += char.repeat(frequency);
    }

    return output;
};
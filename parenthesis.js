var isValid = function(s) {
    const stack = [];
    const pairs = {
        '(': ')', 
        '{': '}', 
        '[': ']'
    }
    
    for (let char of s) {
        if (char in pairs) {
            stack.push(char);
        } else {
            if (stack.lengt === 0) return false;
            let key = stack.pop();
            if (pairs[key] !== char) return false;
        }
    }
    
    if (stack.length) {
        return false
    } else {
        return true
    }
};

console.log(isValid('()[hello]{}'))
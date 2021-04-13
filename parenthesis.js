var isValid = function(s) {
    const stack = [];
    const pairs = {
        '(': ')', 
        '{': '}', 
        '[': ']'
    }
    // const itemsAllowed = ['(', ')', '{', '}', '[', ']']
    const isItemsAllowed = new Set('(){}[]')
    
    for (let char of s) {
        if (isItemsAllowed.has(char)) {
            if (char in pairs) {
                stack.push(char);
            } else {
                if (stack.length === 0) return false;
                let key = stack.pop();
                if (pairs[key] !== char) return false;
                }
            }
      
    }
    
    if (stack.length) {
        return false
    } else {
        return true
    }
};

console.log(isValid('(d)f[hello]}{ds}'))
console.log(isValid('(d)f[he()llo]{ds}'))
console.log(isValid('()[]fdad{}a{}'))
console.log(isValid('()[hello]{dfa}'))
console.log(isValid('()[]{}'))

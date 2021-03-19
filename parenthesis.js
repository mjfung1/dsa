var isValid = function(s) {
    const stack = [];
    const pairs = {
        '(': ')', 
        '{': '}', 
        '[': ']'
    }
    const itemsAllowed = ['(', ')', '{', '}', '[', ']']
    
    for (let char of s) {
        if (itemsAllowed.includes(char)) {
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

// console.log(isValid('(d)f[hello]}{ds}'))
// console.log(isValid('(d)f[hello]{ds}'))
// console.log(isValid('()[]fdada{}'))
// console.log(isValid('()[hello]{dfa}'))
// console.log(isValid('()[]{}'))

let str1 = 'madam';
let str2 = 'daamm';
str1 = str1.split('').sort().join('')
str2 = str2.split('').sort().join('')
console.log(str1 === str2)
console.log(str1)
console.log(str2)
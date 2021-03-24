// function candyCrush(strs) {
//     let stack = [strs[0]];
    
//     for (let i = 1; i < strs.length; i++) {
//         let prevLetter = [stack.pop()];
//         let currentLetter = strs[i];
//         if (prevLetter.includes(currentLetter)) {
//             prevLetter.push(currentLetter);
//             stack.push(prevLetter);
//         } 
//         if (!prevLetter.includes(currentLetter)){
//             if (prevLetter.length > 3) {
                
//                 stack.push([currentLetter]);
//             } else {
//                 stack.push(prevLetter);
//                 stack.push([currentLetter]);
//             }
            
//         }
        
       
        
        
//     }
//     return stack.flat().join('')
// };

function candyCrush(s) {
    const stack = [];
    
    for (char of s) {
        let lastIndex = stack.length-1;
        if (stack.length && stack[lastIndex][0] === char && stack[lastIndex][1] + 1 === 3) {
            stack.pop();
        } else if (stack.length && stack[lastIndex][0] === char) {
            stack[lastIndex][1] += 1; 
        } else {
        stack.push([char, 1]);
        }
    };
    
    let result = '';
    for (let [char, frequency] of stack) {
        result += char.repeat(frequency);
    }
    return result;
};


console.log(candyCrush('aaabbbcccc'))


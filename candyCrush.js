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

function candyCrush(string) {
    const stack = [];

    for (let i = 0; i < string.length; i++) {
        let lastIndex = stack.length-1;
        let char = string[i]
        if (stack.length && stack[lastIndex][0] === char) {
            stack[lastIndex][1]++;
            if (stack[lastIndex][0] !== string[i+1] && stack[lastIndex][1] >= 3) {
                stack.pop();
            }
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


console.log(candyCrush('abbbaa'))


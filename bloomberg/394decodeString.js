
// 394. Decode String

var decodeString = function(s) {
    const freq = [];
    let tempFreq = '';
    
    const chars = [];
    let decoded = '';
    
    // github gddadfa
    // s = "3[a2[c]]"
    for (const char of s) {
        
        if (!isNaN(char)) {
            tempFreq += char //`${tempFreq}${char}`;
            
        } else if (char === '[') {
            freq.push(tempFreq);
            tempFreq = '';
            
            
            chars.push(decoded);
            decoded = '';
        
            
        } else if (char === ']') {
            //start decoding
            decoded = chars.pop() + decoded.repeat(freq.pop());
            
        } else {
            decoded += char;
        }
        
    }
    
    
    
    
    
    return decoded;
};
var frequencySort = function(s) {
    const frequencyChar = {};
    
    for (const char of s) {
        frequencyChar[char] = frequencyChar[char] + 1 || 1;
    }
    
    let values = Object.values(frequencyChar).sort((a,b) => b-a)
    let output = ''
    
    values.forEach(val => {
        for (const key in frequencyChar) {
            if (frequencyChar[key] === val) {
                output += key.repeat(val);
                delete frequencyChar[key]
            }
        }
    })
    
    return output;
};
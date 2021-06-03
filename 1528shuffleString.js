// 1528. Shuffle String

// Given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.

var restoreString = function(s, indices) {
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        let index = indices[i];
        hash[index] = letter;
    }
    
    let output = '';
    for (let index = 0; index < s.length; index++) {
        let letter = hash[index];
        output += letter;
    }
    
    return output;
};
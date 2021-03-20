var reverseWords = function(s) {
    
    // split to array so can manipulate;
    const output = s.split(' ').map(word => {
        return word.split('').reverse().join('')
    })
    // split each word reverse and push to new array
    // join array
    return output.join(' ');
};
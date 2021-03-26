var lengthOfLastWord = function(s) {
    s = s.split(' ');
    
    const output = [];
    
    for (let ele of s) {
        if (ele !== '') {
            output.push(ele)
        }
    }
    
    if (output.length) {
        return output[output.length - 1].length;
    } else {
        return 0;
    }
    
};
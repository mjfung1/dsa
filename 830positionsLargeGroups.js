// 830. Positions of Large Groups


var largeGroupPositions = function(s) {
    let start = 0;
    let end = 0;
    
    const output = [];
    
    while (end < s.length) {
        
        while (s[start] === s[end]) end++;
        
        let size = end - start;
        
        if (size > 2) output.push([ start, end-1 ]);
        
        start = end;
    }
    
    return output;
};
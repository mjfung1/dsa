// 139. Word Break

var wordBreak = function(s, wordDict) {
    let table = new Array(s.length + 1).fill(false);
    table[0] = true;
    
    
    for (let i = 0; i <= s.length; i++) {
        if (table[i] === false) continue;
        
        for (let j = i+1; j <= s.length; j++) {
            let word = s.slice(i, j);
            
            if (wordDict.includes(word)) {
                table[j] = true;
            }
        }
    }
    return table[s.length]
    
    
};
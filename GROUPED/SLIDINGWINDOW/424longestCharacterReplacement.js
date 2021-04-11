
// 424. Longest Repeating Character Replacement



var characterReplacement = function(s, k) {
    let freq = {};
    let left = 0;
    let longest = 0;
    let max = 0;
    
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        
        freq[char] = freq[char] + 1 || 1;
       
        
        max = Math.max(max, freq[char]);
        
        while (right + 1 - left - max > k) {
            const char = s[left]
            freq[char]--
            
            left++
        }
        
        longest = Math.max(longest, (right + 1 - left))
        
    };
    
    return longest;
};

// non fixed size sliding window

var lengthOfLongestSubstring = function(s) {
    const charMap = {};
    let startWindow = 0;
    let longest = 0;
    
    for (let endWindow = 0; endWindow < s.length; endWindow++) {
        const char = s[endWindow];
        if (charMap[char] >= startWindow) startWindow = charMap[char] + 1;
        
        
        charMap[char] = endWindow;
        
        longest = Math.max(longest, endWindow - startWindow + 1)
    }
    
    
    return longest
};
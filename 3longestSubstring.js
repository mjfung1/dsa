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


// ---------------------------------------- // 
// another implementation
// while loops;
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let chars = new Set();
    let longest = 0;
    while (right < s.length) {
        let char = s[right];
        
        while (chars.has(char)) {
            chars.delete(s[left]);
            left++;
        }
        chars.add(char);
        right++;
        
        longest = Math.max(longest, chars.size)
    }
    
    return longest;
};
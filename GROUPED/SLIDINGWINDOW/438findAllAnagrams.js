// 438. Find All Anagrams in a String


var findAnagrams = function(s, p) {
    if (s.length === 0) return [];
    const freq = {};
    
    for (const char of p) {
        freq[char] = freq[char] + 1 || 1;
    }
    
    let count = p.length;
    let left = 0;
    let right = 0;
    const output = [];
    
    while (right < s.length) {
        const char = s[right];
        
        if (freq[char] >= 1) count--
        
        freq[char]--;
        right++;
        
        if (count === 0) output.push(left);
        
        
        if (right - left === p.length) {
            if (freq[s[left]] >= 0) {
                count++
            }
            freq[s[left]]++;
            left++
        }
        
    }
    
    return output;
};
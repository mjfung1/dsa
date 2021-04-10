// 159. Longest Substring with At Most Two Distinct Characters

var lengthOfLongestSubstringTwoDistinct = function(s) {
    let left = 0;
    let longest = 0;
    let freq = {};
    
    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        
        freq[char] = freq[char] + 1 || 1
        
        while (Object.keys(freq).length > 2) {
            freq[s[left]]--;
            if (freq[s[left]] === 0) delete freq[s[left]];
            left++
        }
        
        longest = Math.max(longest, right+1 - left)
    }
    return longest;
};
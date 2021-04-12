// 567. Permutation in String

var checkInclusion = function(s1, s2) {
    const freq = {};
    
    for (const char of s1) {
        freq[char] = freq[char] + 1 || 1;
    }
    
    let count = s1.length;
    let left = 0;
    let right = 0;
    
    while (right < s2.length) {
        const char = s2[right];
        
        if (freq[char] >= 1) count--;
           
        freq[char]--
        right++;
        
        if (count === 0) return true;
        
        if (right - left >= s1.length) {
            const char = s2[left];
            if (freq[char] >= 0) {
                count++;
            }
            freq[char]++;
            left++
        }
        
    }
    
    return false;
};
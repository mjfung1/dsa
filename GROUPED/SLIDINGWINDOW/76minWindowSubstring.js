// 76. Minimum Window Substring

var minWindow = function(s2, s1) {
    const freq = {};
    let min = s2.length + 1;
    let res = '';
    
    for (const char of s1) {
        freq[char] = freq[char] + 1 || 1;
    }
    
    let count = 0;
    let left = 0;
    let right = 0;
    
    for (let right = 0; right < s2.length; right++) {
        const char = s2[right];
        if (freq[char] >= 1) {
            count++;
        } 
        freq[char]--
        
        while (count === s1.length) {
            if (min > right + 1 - left) {
                min = right + 1 - left;
                res = s2.slice(left, right+1)
            }
            const char2 = s2[left];
            if (freq[char2] >= 0) {
                count--;
                
            }
            freq[char2]++;
            left++
        }
        

     

       
        
    }
    
    return res;
};
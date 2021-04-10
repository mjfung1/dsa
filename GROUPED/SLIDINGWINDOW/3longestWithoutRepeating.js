// 3. Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let left = 0;
    let right = 0
    let longest = 0;
    
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        
        while (set.has(char)) {        
            set.delete(s[left])
            left++
        }  
        set.add(char);
        longest = Math.max(longest, set.size)

    }
    
    // while (right < s.length) {
    //     const char = s[right];
    //     if (!set.has(char)) {
    //         set.add(char);
    //         right++
    //         longest = Math.max(longest, set.size)
    //     } else {
    //         set.delete(s[left])
    //         left++
    //     }
    // }
    
    return longest;
}
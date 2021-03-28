var reverseVowels = function(s) {
    let vowelsTable = {};
    const splitted = s.split('');
    
    for (let vowel of 'aeiouAEIOU') {
        vowelsTable[vowel] = true;
    }
    
    let left = 0;
    let right = s.length-1;
    
    while (left < right) {
        while (left < right && !vowelsTable[s[left]]) {
            left++;
        }
        
        while (left < right && !vowelsTable[s[right]]) {
            right--;
        }
        
        let temp = splitted[left];
        splitted[left] = splitted[right];
        splitted[right] = temp;
        
        left++;
        right--;
    }
    
    return splitted.join('')
};
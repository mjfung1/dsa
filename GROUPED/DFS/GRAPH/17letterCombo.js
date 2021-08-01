var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    
    const phone = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    
    
    const combinations = [];
    
    function comboMaker(idx, combo) {
        if (idx === digits.length) {
            combinations.push(combo);
            return;
        }
        
        let digit = digits[idx];
        let letters = phone[digit]
        for (const char of letters) {
            comboMaker(idx+1, combo + char)
        }
        
    }
    
    comboMaker(0, '')
    
    return combinations;
};
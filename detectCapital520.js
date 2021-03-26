var detectCapitalUse = function(word) {
    
    let firstLetter = word[0];
    let restOfWord = word.slice(1);
    
    if (firstLetter === firstLetter.toUpperCase()) {
        return restOfWord === restOfWord.toUpperCase() ||
                restOfWord === restOfWord.toLowerCase();
    };
    
    if (firstLetter === firstLetter.toLowerCase()) {
        return restOfWord === restOfWord.toLowerCase();
    };
    
};
var reverseWords = function(s) {
    let words = s.split(' ');
    console.log(words)
    let newWords = words.filter(word => {
        return word !== '';
    })
    return newWords.reverse().join(' ');
};

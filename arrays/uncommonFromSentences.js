var uncommonFromSentences = function(A, B) {
    const hash = {};
    for (let word of A.split(' ')) {
        if (hash[word]) hash[word]++;
        else hash[word] = 1;
    }
    for (let word of B.split(' ')) {
        if (word in hash) {
            hash[word]++;
        } else {
            hash[word] = 1;
        }
    }
    const arr = [];
    return Object.keys(hash).filter(key => hash[key] === 1)
};

/////////////////////
//use filter. no hash needed. just compare front index to last index for uniqueness

var uncommonFromSentences = function(A, B) {
    const completeSentence = `${A} ${B}`.split(' ');
    return completeSentence.filter(word => completeSentence.indexOf(word) === completeSentence.lastIndexOf(word))
};

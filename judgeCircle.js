var judgeCircle = function(moves) {
    let hash = {
        'R': 1,
        'L': 1,
        'D': 1,
        'U': 1
    };
    
    for (let move of moves) {
        hash[move]++;
    }
    if (hash['U'] === hash['D'] && hash['R'] === hash['L']) return true;
    return false;
};
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

// Faster solution. no hash initialization

var judgeCircle = function(moves) {
    let hash = {};
    
    for (let move of moves) {
        if (hash[move]) hash[move]++;
        else hash[move] = 1;
    }
    if (hash['U'] === hash['D'] && hash['R'] === hash['L']) return true;
    return false;
};
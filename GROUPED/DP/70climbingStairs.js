var climbStairs = function(n) {
    if (n <= 3) return n;
    
    const ways = [0, 1, 2, 3];
    
    for (let i = 3; i < n; i++) {
        ways.push(ways[i] + ways[i-1])
    }
    return ways[n]
};

///////////////////////

var climbStairs = function(n) {
    if (n <= 3) return n;
    
    let first = 1;
    let second = 2;
    
    for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second
};


// MEMOIZATION
var climbStairs = function(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 0 || n === 1) return 1;

    memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo);
    return memo[n];
};

// TABULATION
var climbStairs = function(n) {
    const tab = [];
    tab[0] = 1;
    tab[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        tab[i] = tab[i-1] + tab[i-2]
    }
    
    return tab[n]
};
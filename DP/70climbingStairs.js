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
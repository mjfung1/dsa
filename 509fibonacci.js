// 509. Fibonacci Number

var fib = function(n) {
    if (n === 0) return 0;
    
    let first = 1;
    let second = 1;
    
    let i = 3;
    
    while (i <= n) {
        let temp = first + second;
        
        first = second;
        second = temp;
        i++
    }
    
    return second;
};
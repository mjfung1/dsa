var myPow = function(x, n) {
    if(n === 0) return 1;
    if (n < 0 ) return myPow(1/x, -n);

    
    // divide by 2 to reduce time complexity
    if (n % 2 === 0) {
        var res = myPow(x, n/2);
        return res * res;
    } else {
        var res = myPow(x, (n-1)/2);
        return res * res * x;
    }   
};

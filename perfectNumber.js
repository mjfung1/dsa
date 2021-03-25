//TRICK TO REDUCE TIME COMPLEXITY; IS TO DIVIDE BY 2

var checkPerfectNumber = function(num) {
    let perfectNum = 0;
    for (let i = 1; i <= num/2; i++) {
        if (num % i === 0) perfectNum += i;
    }
    return perfectNum === num;
};
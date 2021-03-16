// const recursion = (count) => {
//     if (count === 0) return 0;
//     console.log(count, 'before recursion')
//     recursion(count - 2)
//     console.log(count, 'after recursion')
    
// };

// console.log(recursion(6))

// function addZeroToN(n, sum = 0) {
//     if (n === 0) return sum;
//     return addZeroToN(n-1, sum + n);
// };

function addZeroToN(n) {
    if (n === 0) return 0;
    return n + addZeroToN(n-1);
    
};

console.log(addZeroToN(5));



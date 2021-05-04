// 905. Sort Array By Parity

// Optimal Solution. 
// Time O(n)
// NO EXTRA SPACE - this is what interviewer wnated. 
var sortArrayByParity = function(A) {
    let left = 0;
    let right = A.length-1;
    
    while (left < right) {
        while (A[left] % 2 === 0 && left < right) {
            left++;
        }
        while (A[right] % 2 !== 0 && left < right) {
            right--;
        }
        if (left < right) {
            [A[right], A[left]] = [A[left], A[right]]
            left++;
            right--;
        }
    }
    return A;
};
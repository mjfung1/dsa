var rotateString = function(A, B) {
    if (A.length === 0 && B.length === 0) return true;
    let length = A.length;
    A = A.split('');
    let i = 0;
    
    while (i < length) {
        let ele = A.shift();
        A.push(ele);
        if (A.join('') === B) return true
        i++;
    }
    return false;
};
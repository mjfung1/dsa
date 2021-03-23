var threeConsecutiveOdds = function(arr) {
    let i = 0;
    while (i < arr.length - 2) {
        let first = arr[i] % 2;
        let second = arr[i+1] % 2;
        let third = arr[i+2] % 2;
        //be carefull where you put i++;
        //originally while (i++ < arr.length - 2). it increases i first before it does anything
        i++;
        if (first !== 0 && second !== 0 && third !== 0) return true;
    };
    return false;
};
var reverse = function(x) {
   
    if (x >= 0) { 
        return operation(x);
    }
    if (x < 0) {
        x = Math.abs(x);
        return -1 * operation(x);
    }
};

const operation = (x) => {
        // cannot go here.  read carefully what question is saying
        //  If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then                 return 0.
        // if (x < -(2**31) || x > (2**31 - 1)) return 0;
        let reversedStringyNum = JSON.stringify(x).split('').reverse().join('');
        
        let response = parseInt(reversedStringyNum);
        if (response < -(2**31) || response > (2**31 - 1)) return 0;
        return response;
        
}
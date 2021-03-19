function candyCrush(strs) {
    //have counter. if greater than 3 collapse
    //give collapsed word to recursive function??
    //and return word when word lenght is less than 3.
    let counter = 1;
    let matched = true;
    let i = 0;

    while (matched) {
        matched = false;
        if (strs[i] === strs[i+1]) {
            i++
            counter++;
            matched = true;
        } else if (strs[i] !== strs[i+1]) {
            if (counter > 3) {
                matched = true;
                strs = strs.slice(0, i - counter) + strs.slice(counter);
                i = 0;
            } else if (counter < 3 && i < strs.length - 1) {
                i++
                counter = 1;
                matched = true;
            }
        } 
    }
    return strs;
};


console.log(candyCrush('aaaaaccbbbb'))


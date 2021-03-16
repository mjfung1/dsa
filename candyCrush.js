function candyCrush(letters) {
   
    let movingPointer = 1
    let stationary = 0
    let newLetters = letters;
    // let notSame = 1;
    while (movingPointer < newLetters.length) {
        if (newLetters[stationary] === newLetters[movingPointer]) {
            movingPointer++
        }

        if (newLetters[stationary] !== newLetters[movingPointer] && movingPointer >= 3) {
            newLetters = newLetters.slice(0, movingPointer)  + newLetters.slice(movingPointer * 2)
        }

        if (newLetters[stationary] !== newLetters[movingPointer] && movingPointer < 3) {
            stationary++;
            movingPointer++;
        }

        // if (newLetters[stationary] !== newLetters[movingPointer] && movingPointer > 3){
        //     newLetters = newLetters.slice(0, movingPointer + 1) + newLetters.slice(movingPointer + 1);
        //     stationary = 0;
        //     movingPointer = 1;
        //     // break;
        // } else {
        //     stationary++
        //     movingPointer++
        // }

        //   if (newLetters[stationary] !== newLetters[movingPointer] && movingPointer < 2){
        //     stationary++
        //     movingPointer++
        //     // count = 0
        // } 
        
    }
    // return newLetters;
    console.log(newLetters)
    console.log(movingPointer)
    console.log(newLetters)
};

// const candyCrush = (strs) => {
// while (strs.length > 0) {
// let len = strs.length;
// for (let i = 0; i < strs.length; i++) {
// if (strs[i] === strs[i + 1] && strs[i] === strs[i + 2]) {
// strs = strs.slice(0, i) + strs.slice(i + 3);
// break;
// }
// }
// if (len === strs.length) return strs;
// }
// return "";
// };


console.log(candyCrush('bbaaaaabb'))
// with .substr instead of .slice
// substr(starIdx, length = optional) returns a string
// much faster than using slice
var strStr = function(haystack, needle) {
    if (needle.lenght === 0) return 0;
    let length = needle.length;
    
    for (let i = 0; i <= haystack.length; i++) {
       let temp = haystack.substr(i, length);
        if (temp === needle) return i;
}
    return -1;
};

//using slice
// slice(startIdx, endIdx = not inclusive, OPTIONAL)
var strStr = function(haystack, needle) {
    if (needle.lenght === 0) return 0;
    let length = needle.length;
    
    for (let i = 0; i <= haystack.length; i++) {
       let temp = haystack.splice(i, length);
        if (temp === needle) return i;
        length++
}
    return -1;
};
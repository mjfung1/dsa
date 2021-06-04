// 28. Implement strStr()

var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    
    for (let i = 0; i <= (haystack.length - needle.length); i++) {
        let word = haystack.slice(i, i+needle.length);
        if (word === needle) return i;
    };
    return -1;
    return haystack.indexOf(needle)
};
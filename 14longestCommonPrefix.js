// 14. Longest Common Prefix


var longestCommonPrefix = function (strs) {
  let minCount = Infinity;
  let firstWord = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let count = 0;
    let word = "";
    let secondWord = strs[i];
    for (let j = 0; j < secondWord.length; j++) {
      if (firstWord[j] !== secondWord[j]) break;

      word += firstWord[j];
      count++;
    }

    minCount = Math.min(minCount, count);
  }
  return firstWord.slice(0, minCount);
};



// --------------------------------- //

var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];
  let firstWord = strs[0];
  let remaining = strs.slice(1);
  let word = "";

  for (let i = 0; i <= firstWord.length; i++) {
    let substring = firstWord.slice(0, i);

    const isTrue = remaining.every((str) => str.startsWith(substring));

    if (isTrue) word = substring;
    else break;
  }

  return word;
};



// ----------------------- //
// recursive
var longestCommonPrefix = function (strs) {
  let word = strs[0];
  let remaining = strs.slice(1);

  const getPrefix = (prefix, remaining) => {
    if (!prefix) return "";

    if (remaining.every((word) => word.startsWith(prefix))) return prefix;

    return getPrefix(prefix.slice(0, prefix.length - 1), remaining);
  };

  return getPrefix(word, remaining);
};


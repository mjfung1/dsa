

// 290. Word Pattern

var wordPattern = function (pattern, s) {
  s = s.split(" ");
  if (pattern.length !== s.length) return false;

  let indexOfPattern = {};
  let indexOfS = {};

  pattern.split("").forEach((char, idx) => {
    if (!indexOfPattern[char]) indexOfPattern[char] = [];
    indexOfPattern[char].push(idx);
  });

  s.forEach((word, idx) => {
    if (!indexOfS[word]) indexOfS[word] = [];
    indexOfS[word].push(idx);
  });

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = s[i];

    if (indexOfPattern[char].join("") !== indexOfS[word].join("")) return false;
  }

  return true;
};
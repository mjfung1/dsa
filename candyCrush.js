function candyCrush(strs) {
while (strs.length > 0) {
let len = strs.length;
for (let i = 0; i < strs.length; i++) {
if (strs[i] === strs[i + 1] && strs[i] === strs[i + 2]) {
strs = strs.slice(0, i) + strs.slice(i + 3);
break;
}
}
if (len === strs.length) return strs;
}
return "";
};

//rubby
// def same_char_collapse(str)
//   reducible = true

//   while reducible
//     chars = str.split("")
//     reducible = false

//     chars.each.with_index do |char, i|
//       if chars[i] == chars[i + 1]
//         chars[i] = ""
//         chars[i + 1] = ""
//         reducible = true
//       end
//     end

//     str = chars.join("")
//   end

//   return str
// end

console.log(candyCrush('bbaaaaabb'))
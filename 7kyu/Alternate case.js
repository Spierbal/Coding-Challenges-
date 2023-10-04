// Solution 1: map & toUpperCase & toLowerCase
function alternateCase(s) {
  return [...s]
    .map(c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
    .join("");
}

/* 
// Solution 2: regex & replace
function alternateCase(s) {
  return s.replace(/[a-zA-Z]/g, char =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  );
} */

/* 
// Solution 3: for loop
function alternateCase(s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    res += s[i] >= "a" && s[i] <= "z" ? s[i].toUpperCase() : s[i].toLowerCase();
  }
  return res;
} */

// console.log(alternateCase("abc")); // "ABC"
// console.log(alternateCase("ABC")); // "abc"
// console.log(alternateCase("Hello World")); // "hELLO wORLD"

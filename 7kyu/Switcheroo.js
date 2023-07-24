// Solution 1: using replace & ternary operator
const switcheroo = x => x.replace(/[ab]/g, e => (e === "a" ? "b" : "a"));

/* 
// Solution 2: using map & ternary operator
const switcheroo = x =>
  [...x].map(e => (e === "a" ? "b" : e === "b" ? "a" : e)).join("");
 */

/* 
// Solution 3: for loop
function switcheroo(x) {
  let res = "";
  for (let i = 0; i < x.length; i++) {
    res += x[i] === "a" ? "b" : x[i] === "b" ? "a" : x[i];
  }
  return res;
} */

// console.log(switcheroo("abc")); // 'bac'
// console.log(switcheroo("aaabcccbaaa")); // 'bbbacccabbb');
// console.log(switcheroo("ccccc")); // 'ccccc');

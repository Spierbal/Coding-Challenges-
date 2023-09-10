// Solution 1: using replace & ternary operator
const switcheroo = x => x.replace(/[ab]/g, char => (char === "a" ? "b" : "a"));

/* 
// Solution 2 : for of loop
function switcheroo(x) {
  let res = "";

  for (let char of x) {
    res += char === "a" ? "b" : char === "b" ? "a" : char;
  }
  return res;
} */

/* 
// Solution 2b: for loop (more readable)
function switcheroo(x) {
  let res = "";

  for (let i = 0; i < x.length; i++) {
    if (x[i] === "a") res += "b"; // replace "a" with "b"
    else if (x[i] === "b") res += "a"; // replace "b" with "a"
    else res += x[i]; // keep the same character
  }
  return res;
} */

/* 
// Solution 3: using map & ternary operator
const switcheroo = x =>
  [...x].map(char => (char === "a" ? "b" : e === "b" ? "a" : char)).join(""); */

/* 
// Solution 3b: using Object & map (more efficient than solution 3)
const switcheroo = x => {
  const charMap = { a: "b", b: "a" };
  return [...x].map(char => charMap[char] || char).join("");
};  */

// console.log(switcheroo("abc")); // 'bac'
// console.log(switcheroo("aaabcccbaaa")); // 'bbbacccabbb');
// console.log(switcheroo("ccccc")); // 'ccccc');

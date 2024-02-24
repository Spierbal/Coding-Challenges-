// Solution 1: spread operator & reduce()
const uniTotal = string =>
  [...string].reduce((acc, char) => acc + char.charCodeAt(0), 0);

/* 
// Solution 1b: split() & reduce()
function uniTotal(string) {
  return string.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
} */

/* 
// Solution 3: for of loop
function uniTotal(string) {
  let sum = 0;

  for (const char of string) {
    sum += char.charCodeAt(0);
  }
  return sum;
} */

/* 
// Solution 5: Array.from method & reduce()
function uniTotal(string) {
  return Array.from(string).reduce((sum, char) => sum + char.charCodeAt(0), 0);
} */

// console.log(uniTotal("a")); // 97
// console.log(uniTotal("b")); // 98
// console.log(uniTotal("c")); // 99
// console.log(uniTotal("d")); // 100
// console.log(uniTotal("e")); // 101
// console.log(uniTotal("aaa")); // 291
// console.log(uniTotal("Mary Had A Little Lamb")); // 1873

// Solution 1:
const reverseNumber = n =>
  [...String(Math.abs(n))].reverse().join("") * Math.sign(n);

/* 
// Solution 1b: 
const reverseNumber1 = n =>
  Math.sign(n) * [...`${Math.abs(n)}`].reverse().join("");
 */

/* 
// Solution 1c:
const reverseNumber = n =>
  (n >= 0 ? 1 : -1) * String(Math.abs(n)).split("").reverse().join("");
 */

// console.log(reverseNumber(123)); // --> 321
// console.log(reverseNumber(-456)); // --> -654
// console.log(reverseNumber(1000)); // 1

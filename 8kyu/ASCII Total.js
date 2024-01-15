// Solution 1: charCodeAt & reduce
const uniTotal = string => [...string].reduce((a, b) => a + b.charCodeAt(0), 0);

/* 
// Solution 2: charCodeAt, map &
const uniTotal = string =>
  [...string].map(char => char.charCodeAt(0)).reduce((a, b) => a + b);
*/

/* 
// Solution 3: for of loop
function uniTotal(string) {
  let sum = 0;

  for (const char of string) {
    sum += char.charCodeAt(0);
  }
  return sum;
} */

// console.log(uniTotal("a")); // 97
// console.log(uniTotal("b")); // 98
// console.log(uniTotal("c")); // 99
// console.log(uniTotal("d")); // 100
// console.log(uniTotal("e")); // 101
// console.log(uniTotal("aaa")); // 291
// console.log(uniTotal("Mary Had A Little Lamb")); // 1873

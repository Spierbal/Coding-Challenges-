// Solution 1:
const isPowerOfTwo = n => Number.isInteger(Math.log2(n));

/* 
// Solution 1b:
const isPowerOfTwo = n => Math.log2(n) % 1 === 0;
 */

/* 
// Solution 2: while loop
function isPowerOfTwo(n) {
  while (n % 2 === 0 && n > 1) {
    n /= 2;
  }
  return n === 1;
} */

/* 
// Solution 3: recursion
function isPowerOfTwo(n) {
  if (n === 1) return true;
  if (n <= 0 || n % 2 !== 0) return false;
  return isPowerOfTwo(n / 2);
} */

// console.log(isPowerOfTwo(2)); // true
// console.log(isPowerOfTwo(4096)); // true
// console.log(isPowerOfTwo(5)); // false

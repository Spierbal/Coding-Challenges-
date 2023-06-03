// Solution 1:
const isPowerOfTwo = n => n !== 0 && (n & (n - 1)) === 0;

// Solution 2:
const isPowerOfTwo = n => [...Array(n)].map((_, i) => 2 ** i).includes(n);

console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(4096)); // true
console.log(isPowerOfTwo(5)); // false

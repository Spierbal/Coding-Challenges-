// Solution 1: Ternary operator (Gauss' Formula)
const f = n => (Number.isInteger(n) && n > 0 ? (n * (n + 1)) / 2 : false);

/* 
// Solution 2: Short-circuit evaluation (Gauss' Formula)
const f = n => (Number.isInteger(n) && n > 0 && (n * (n + 1)) / 2) || false;
 */

/* 
// Solution 3: Explicit if statement (Gauss' Formula)
function f(n) {
  if (!Number.isInteger(n) || n <= 0) return false;
  return (n * (n + 1)) / 2;
} */

// console.log(f(100)); // 5050
// console.log(f(300)); // 45150
// console.log(f(50000)); // 1250025000
// console.log(f("n")); // false, "n must be a number");
// console.log(f()); // false, "n must be a value");
// console.log(f(3.14)); // false, "n must be an integer");
// console.log(f(0)); // false, "a value of n greater than 0 is required");
// console.log(f(-10)); // false, "a positive value of n is required");

// for loop solution
function factorial(n) {
  if (n < 0 || n > 12) throw RangeError();
  let res = 1;

  for (let i = 2; i <= n; i++) res *= i;

  return res;
}

// while loop solution
/* function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();

  let res = 1;
  while (n > 1) {
    res *= n;
    n--;
  }
  return res;
} */

// map() solution with reduce
/* function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();
  return [...Array(n)].map((_, i) => i + 1).reduce((a, b) => a * b, 1);
} */

// Array.from() with reduce
/* function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();

  return Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a * b, 1);
} */

// Recursion solution
/* function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();

  return n === 0 ? 1 : n * factorial(n - 1);
} */

/* console.log(factorial(0)); // 1, (factorial for 0 is 1)
console.log(factorial(1)); // 1,( factorial(1) returns 1 * 1, which is 1)
console.log(factorial(2)); // 2, (factorial(2) returns 2 * 1, which is 2)
console.log(factorial(3)); // 6, (factorial(3) returns 3 * 2, which is 6)
console.log(factorial(4)); // 24, (factorial(4) returns 4 * 6, which is 24)
console.log(factorial(5)); // 120, (factorial(5) returns 5 * 24, which is 120) */

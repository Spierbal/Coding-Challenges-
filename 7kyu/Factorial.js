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

/* console.log(factorial(0)); // 1, (factorial 0! = 1)
console.log(factorial(1)); // 1, (factorial 1! =  1)
console.log(factorial(2)); // 2, (factorial 2! = 2 * 1 = 2)
console.log(factorial(3)); // 6, (factorial 3! = 3 * 2 * 1 = 6)
console.log(factorial(4)); // 24, (factorial 4! = 4 * 3 * 2 * 1 = 24)
console.log(factorial(5)); // 120, (factorial 5! = 5 * 4 * 3 * 2 * 1 = 120  ) */

// Explain what the function does in one sentence (if it's not obvious) and why it's interesting to you.
// The factorial function takes a number and returns the product of all positive integers less than or equal to it.

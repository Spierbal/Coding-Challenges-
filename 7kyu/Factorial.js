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

// Array.from() with reduce 1ms
/* function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();

  return Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a * b, 1);
} */

// Recursion solution 793 2ms
/* function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();

  return n === 0 ? 1 : n * factorial(n - 1);
} */

// console.log(factorial(0)); // 1, "factorial for 0 is 1"
// console.log(factorial(1)); // 1, "factorial for 1 is 1"
// console.log(factorial(2)); // 2, "factorial for 2 is 2"
// console.log(factorial(3)); // , 6, "factorial for 3 is 6"
// console.log(factorial(5)); // , 6, "factorial for 3 is 6"

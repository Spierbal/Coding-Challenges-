// Solution 1: for loop with Math.max and Math.min
function getSum(a, b) {
  let sum = 0;
  const start = Math.max(a, b);
  const end = Math.min(a, b);

  for (let i = start; i <= end; i++) sum += i;
  return sum;
}

/* 
// Solution 1b: for loop with ternary operator
function getSum2(a, b) {
  let sum = 0;
  const max = a > b ? a : b;
  const min = a > b ? b : a;

  for (let i = min; i <= max; i++) sum += i;
  return sum;
}
 */

/* 
// Solution 1c: for loop with array destructuring
function getSum3(a, b) {
  let sum = 0;
  const [max, min] = a > b ? [a, b] : [b, a];

  for (let i = min; i <= max; i++) sum += i;
  return sum;
} */

/* 
// Solution 2: Recursion
function getSum4(a, b) {
  if (a === b) return a;
  if (a > b) return a + getSum(a - 1, b);

  return a + getSum(a + 1, b);
} */

// console.log(getSum(1, 2)); // --> 3  // 1 + 2 = 3
// console.log(getSum(-1, 2)); // --> 2

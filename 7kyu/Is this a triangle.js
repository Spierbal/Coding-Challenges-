// Solution 1: Triangle Inequality Theorem
const isTriangle1 = (a, b, c) => a + b > c && a + c > b && b + c > a;

// Solution 2: Triangle Inequality Theorem + Max
/* function isTriangle(a, b, c) {
  const maxSide = Math.max(a, b, c);
  const sum = a + b + c;
  return maxSide < sum - maxSide;
} */

// Solution 3: Triangle Inequality Theorem + Every
/* const isTriangle2 = (a, b, c) =>
  [a, b, c].every(side => side > 0) && a + b > c && a + c > b && b + c > a; */

// console.log(isTriangle(1, 2, 2)); // true
// console.log(isTriangle(7, 2, 2)); // false

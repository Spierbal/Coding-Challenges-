// Solution 1:
const maxMultiple = (divisor, bound) => Math.floor(bound / divisor) * divisor;

/* 
// Solution 2:
const maxMultiple = (divisor, bound) => bound - (bound % divisor);   */

// Solution 2b:
/* const maxMultiple = (divisor, bound) => {
  let remainder = bound % divisor; // 7 % 2 = 1
  return bound - remainder; // 7 - 1 = 6
}; */

// Solution 3:
/* const maxMultiple = (divisor, bound) => {
  while (bound % divisor !== 0) {
    bound--;
  }
  return bound;
}; */

// Solution 4:
/* const maxMultiple = (divisor, bound) => {
  let max = 0;
  for (let i = 1; i <= bound; i++) {
    if (i % divisor === 0) max = i;
  }
  return max;
}; */

// console.log(maxMultiple(2, 7)); // 6 (2 * 3 = 6)
// console.log(maxMultiple(3, 10)); // 9 (3 * 3 = 9)
// console.log(maxMultiple(7, 17)); // 14 (7 * 2 = 14)
// console.log(maxMultiple(10, 50)); // 50 (10 * 5 = 50)
// console.log(maxMultiple(37, 200)); // 185 (37 * 5 = 185)
// console.log(maxMultiple(7, 100)); // 98 (7 * 14 = 98)

function getSum(a, b) {
  let res = 0;
  const max = Math.max(a, b);
  const min = Math.min(a, b);

  for (let i = min; i <= max; i++) res += i;
  return res;
}

// Solution 1b:
/* function getSum(a, b) {
  let res = 0;    
  const max = a > b ? a : b;
  const min = a > b ? b : a;

  for (let i = min; i <= max; i++) res += i;
  return res;
} */

// Solution 1c:
/* function getSum(a, b) {
  let res = 0;
  const [max, min] = a > b ? [a, b] : [b, a];

  for (let i = min; i <= max; i++) res += i;
  return res;
}
 */

// Solution 2:
/* function getSum(a, b) {
  if (a === b) return a;
  if (a > b) return a + getSum(a - 1, b);

  return a + getSum(a + 1, b);
}
 */

// console.log(getSum(1, 2)); // --> 3
// console.log(getSum(-1, 2)); // --> 2

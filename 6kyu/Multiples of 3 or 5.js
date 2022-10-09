function solution(number) {
  let result = 0;

  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) result += i;
  }
  return result;
}

// Solution 2:
function solution(n) {
  return n < 1
    ? 0
    : Array.from(Array(n))
        .map((_, i) => i)
        .reduce((x, y) => x + (y % 3 === 0 || y % 5 === 0 ? y : 0));
}

// Solution 3:
/* function solution(n) {
  if (n < 0) return 0;

  return Array.from(Array(n).keys())
    .filter(n => n % 3 === 0 || n % 5 === 0)
    .reduce((a, b) => a + b, 0);
}
 */

// Solution 4:
/* function solution(number) {
  return number < 1
    ? 0
    : [...Array(number).keys()]
        .filter(n => n % 3 == 0 || n % 5 == 0)
        .reduce((a, b) => a + b);
}
 */

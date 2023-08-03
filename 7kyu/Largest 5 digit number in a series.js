// Solution 1: map and .slice()
function solution(digits) {
  const sequences = [...digits].map((_, i) => Number(digits.slice(i, i + 5)));
  return Math.max(...sequences);
}

/* 
// Solution 2: For loop and .slice()
function solution(digits) {
  let maxSequence = 0;

  for (let i = 0; i <= digits.length - 5; i++) {
    const sequence = Number(digits.slice(i, i + 5));
    maxSequence = Math.max(sequence, maxSequence);
  }
  return maxSequence;
} */

/* 
// Solution 3: Array.from() and .slice()
const solution = n => Math.max(...Array.from(n, (_, i) => +n.slice(i, i + 5)));
 */

/* 
// Solution 4: reduce and .slice()
function solution(digits) {
  return [...digits].reduce((maxSequence, _, i) => {
    const sequence = Number(digits.slice(i, i + 5));
    return sequence > maxSequence ? sequence : maxSequence;
  }, 0);
}
 */

// console.log(solution("1234567898765")); // 98765
// console.log(solution("731674765")); // 74765

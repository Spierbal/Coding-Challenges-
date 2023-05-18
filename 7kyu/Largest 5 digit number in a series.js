// Solution 1: .map() and .slice()
function solution(digits) {
  const sequences = [...digits].map((_, i) => Number(digits.slice(i, i + 5)));
  return Math.max(...sequences);
}

// Solution 2: Array.from() and .slice()
/* const solution = n => Math.max(...Array.from(n, (_, i) => +n.slice(i, i + 5))); */

// Solution 3: For loop and .slice()
/* function solution(digits) {
  let maxSequence = 0;
  const length = digits.length - 4;

  for (let i = 0; i < length; i++) {
    const seq = +digits.slice(i, i + 5);
    maxSequence = Math.max(seq, maxSequence);
  }
  return maxSequence;
} */

// Solution 3b: For loop and .slice()
/* function solution(digits) {
  let maxSequence = 0;
  const length = digits.length - 4;

  for (let i = 0; i < length; i++) {
    const seq = +digits.slice(i, i + 5);
    if (seq > maxSequence) maxSequence = seq;
  }
  return maxSequence;
} */

// console.log(solution("1234567898765")); // 98765
// console.log(solution("731674765")); // 74765

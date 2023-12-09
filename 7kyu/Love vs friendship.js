// Solution 1: reduce
const wordsToMarks = str =>
  [...str].reduce((a, b) => a + b.charCodeAt(0) - 96, 0);

/* 
// Solution 2: for loop
function wordsToMarks(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i) - 96;
  }
  return sum;
} */

// console.log(wordsToMarks("attitude")); // 100
// console.log(wordsToMarks("friends")); // 75
// console.log(wordsToMarks("family")); // 66
// console.log(wordsToMarks("selfness")); // 99
// console.log(wordsToMarks("knowledge")); // 96

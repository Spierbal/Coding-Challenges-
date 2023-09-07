// Solution 1:
const countRedBeads = n => (n < 2 ? 0 : (n - 1) * 2);

/* 
// Solution 2:
const countRedBeads = n => (n < 2 ? 0 : --n * 2); */

/* 
// Solution 3:
const countRedBeads = (n) => Math.max(0, (n - 1) * 2); */

// console.log(countRedBeads(0)); // 0
// console.log(countRedBeads(1)); // 0
// console.log(countRedBeads(3)); // 4
// console.log(countRedBeads(4)); // 8
// console.log(countRedBeads(5)); // 8

// Solution 1: while loop
function halvingSum(n) {
  let sum = 0;

  while (n > 0) {
    sum += n;
    n = Math.floor(n / 2);
  }
  return sum;
}

/* 
// Solution 1b: for loop
function halvingSum(n) {
  let sum = 0;

  for (let i = n; i > 0; i = Math.floor(i / 2)) {
    sum += i;
  }
  return sum;
} */

/* 
// Solution 2: reduce 
const halvingSum = n => {
  return [...Array(n)].reduce((sum, _, i) => sum + Math.floor(n / 2 ** i), 0);
}; */

// console.log(halvingSum(25)); //47 (25 + 12 + 6 + 3 + 1 = 47)
// console.log(halvingSum(127)); //247

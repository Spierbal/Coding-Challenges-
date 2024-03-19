// Solution 1: reduce (concise)
const find_average = arr =>
  arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

/* 
// Solution 2: for of loop
function find_average(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum / arr.length;
} */

// console.log(find_average([10, 20])); // --> 15
// console.log(find_average([])); // --> 0

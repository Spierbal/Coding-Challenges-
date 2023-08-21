const grow = x => x.reduce((a, b) => a * b, 1);

/* 
// Solution 2: for loop
function grow(x) {
  let result = 1;

  for (let i = 0; i < x.length; i++) {
    result *= x[i];
  }
  return result;
} */

/* 
// Solution 3: for of loop
function grow(x) {
  let result = 1;

  for (const num of x) {
    result *= num;
  }
  return result;
} */

// console.log(grow([1, 2, 3])); // --> 6
// console.log(grow([2, 2, 2, 2, 2, 2])); // --> 64

// Solution 1: map
const multiplyAll = arr => x => arr.map(n => n * x);

/* 
// Solution 2: reduce
const multiplyAll = array => x => array.reduce((arr, n) => [...arr, n * x], []);
 */

/* 
// Solution 3: for of loop
const multiplyAll = arr => x => {
  const result = [];

  for (const num of arr) {
    result.push(num * x);
  }
  return result;
};
 */

console.log(multiplyAll([1, 2, 3])(2)); // [2, 4, 6]
console.log(multiplyAll([1, 2, 3])(1)); // [1, 2, 3]
console.log(multiplyAll([1, 2, 3])(0)); // [0, 0, 0]
console.log(multiplyAll([])(10)); // []

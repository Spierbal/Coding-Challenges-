// Solution 1: map
const incrementer = arr => arr.map((num, i) => (num + i + 1) % 10);

/* 
// Solution 2: reduce
const incrementer = arr =>
  arr.reduce((result, num, i) => (result.push((num + i + 1) % 10), result), []); */

/* 
// Solution 3: for loop
function incrementer(arr) {
  let result = [];

  if (arr.length === 0) return [];

  for (let i = 0; i < arr.length; i++) {
    let digit = (arr[i] + i + 1) % 10;
    result.push(digit);
  }

  return result;
} */

// console.log(incrementer([])); // [];
// console.log(incrementer([1, 2, 3])); // [2, 4, 6]
// console.log(incrementer([4, 6, 7, 1, 3])); // [5, 8, 0, 5, 8]
// console.log(incrementer([3, 6, 9, 8, 9])); // [4, 8, 2, 2, 4]
// console.log(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8])); //[2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]

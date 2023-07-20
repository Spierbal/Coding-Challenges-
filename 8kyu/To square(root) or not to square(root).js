const squareOrSquareRoot = arr =>
  arr.map(x => (Math.sqrt(x) % 1 === 0 ? Math.sqrt(x) : x ** 2));

/* 
// Solution 1b: uses Number.isInteger
const squareOrSquareRoot = arr =>
  arr.map(x => (Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : x ** 2));
 */

/* 
// Solution 3a: for loop
function squareOrSquareRoot(array) {
  for (let i = 0; i < array.length; i++) {
    if (Math.sqrt(array[i]) % 1 === 0) {
      array[i] = Math.sqrt(array[i]);
    } else {
      array[i] = array[i] * array[i];
    }
  }
  return array;
} */

/* 
// Solution 3b: for loop with ternary operator
function squareOrSquareRoot(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.sqrt(arr[i]) % 1 === 0 ? Math.sqrt(arr[i]) : arr[i] * arr[i];
  }
  return arr;
}
 */

// console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); // --> [ 2, 9, 3, 49, 4, 1 ]

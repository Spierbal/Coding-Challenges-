const inAscOrder = arr => arr.every((cur, i) => i === 0 || cur > arr[i - 1]);

// Solution 1b: every() and comparison
// const inAscOrder = arr => arr.every((_, i) => i === 0 || arr[i] > arr[i - 1]);

// Solution 2: for loop
// function inAscOrder(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) return false;
//   }
//   return true;
// }

// Solution 3: JSON.stringify and comparison
/* const inAscOrder = arr =>
  JSON.stringify(arr) === JSON.stringify([...arr].sort((a, b) => a - b)); */

// Solution 4: String conversion and comparison
/* const inAscOrder = arr =>
  String(arr) === String([...arr].sort((a, b) => a - b)); */

// console.log(inAscOrder([1, 2, 4, 7, 19])); // true, 'The list of numbers "1, 2, 4, 7, 19" is in ascending order');
// console.log(inAscOrder([1, 2, 3, 4, 5])); // true, 'The list of numbers "1, 2, 3, 4, 5" is in ascending order');
// console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20])); // false, 'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order');
// console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])); // false, 'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order');

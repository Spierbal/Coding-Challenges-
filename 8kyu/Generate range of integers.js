const generateRange = (min, max, step) =>
  [...Array(Math.ceil((max - min + 1) / step))].map((_, i) => min + i * step);

// Solution 1b: Array.from() with a map function
/* const generateRange = (min, max, s) =>
  Array.from({ length: Math.ceil((max - min + 1) / s) }, (_, i) => min + i * s); */

// Solution 2:
/* function generateRange(min, max, step) {
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
} */

// console.log(generateRange(2, 10, 2)); // --> [2, 4, 6, 8, 10]
// console.log(generateRange(1, 10, 3)); // --> [ 1, 4, 7, 10 ]
// console.log(generateRange(1, 10, 1)); // --> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// console.log(generateRange(1, 10, 4)); // --> [ 1, 5, 9 ]
// console.log(generateRange(1, 10, 5)); // --> [ 1, 6 ]

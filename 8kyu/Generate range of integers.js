function generateRange(min, max, step) {
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}

// Solution 2:
/* const generateRange = (min, max, step) =>
  [...Array(Math.floor((max - min) / step + 1))].map((_, i) => min + i * step); */

// Solution 2b
/* const generateRange = (min, max, step) =>
  Array.from({ length: (max - min) / step + 1 }, (_, i) => min + i * step);
 */

// Solution 2c
/* const generateRange = (min, max, step) =>
  Array.from(
    Array(Math.floor((max - min) / step + 1)),
    (_, i) => min + i * step
  ); */

// console.log(generateRange(2, 10, 2)); // --> [2, 4, 6, 8, 10]

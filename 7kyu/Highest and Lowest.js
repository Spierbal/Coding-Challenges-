// Solution 1: Using Math.max and Math.min
const highAndLow = numbers =>
  `${Math.max(...numbers.split(" "))} ${Math.min(...numbers.split(" "))}`;

/* 
// Solution 1b: More readable
const highAndLow = numbers => {
  const numberArray = numbers.split(" ").map(Number);
  const max = Math.max(...numberArray);
  const min = Math.min(...numberArray);
  return `${max} ${min}`;
};
 */

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // --> 42 -9

// Solution 1: sort with slice and reduce (more readable)
const maxProduct = (numbers, size) =>
  [...numbers]
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((product, num) => product * num, 1);

/* 
// Solution 1b: sort ascending with slice and reduce (more efficient)
const maxProduct = (numbers, size) =>
  [...numbers]
    .sort((a, b) => a - b)
    .slice(-size)
    .reduce((total, number) => total * number, 1);
 */

/* 
// Solution 2: sort with for of loop
function maxProduct(numbers, size) {
  const maxNumbers = [...numbers].sort((a, b) => b - a).slice(0, size);
  let product = 1;

  for (const num of maxNumbers) {
    product *= num;
  }
  return product;
} */

// console.log(maxProduct([4, 3, 5], 2)); // 20
// console.log(maxProduct([10, 8, 7, 9], 3)); // 720
// console.log(maxProduct([8, 6, 4, 6], 3)); // 288
// console.log(maxProduct([10, 2, 3, 8, 1, 10, 4], 5)); // 9600
// console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5)); // 247895375
// console.log(maxProduct([-4, -27, -15, -6, -1], 2)); // 4
// console.log(maxProduct([-17, -8, -102, -309], 2)); // 136
// console.log(maxProduct([10, 3, -27, -1], 3)); // -30);
// console.log(maxProduct([14, 29, -28, 39, -16, -48], 4)); // -253344
// console.log(maxProduct([1], 1)); // 1);

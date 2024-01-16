// // Solution 1: concise
const multiply = num => num * 5 ** String(Math.abs(num)).length;

/* 
// Solution 1b: readable
function multiply(number) {
  const power = String(Math.abs(number)).length;

  return number * 5 ** power;
} */

/* 
// Solution 2: Math.pow
function multiply(number) {
  const length = String(Math.abs(number)).length;

  return number * Math.pow(5, length);
} */

/* 
// Solution 3: ternary operator
function multiply(num) {
  const length = String(num).length;

  return num * 5 ** (num < 0 ? length - 1 : length);
} */

// console.log(multiply(10)); // 250
// console.log(multiply(5)); // 25
// console.log(multiply(200)); // 25000
// console.log(multiply(0)); // 0
// console.log(multiply(-2)); // -10
// console.log(multiply(-3)); // -3 * 5 ** 1

// Solution 1: reduce
const sumEvenNumbers = input =>
  input.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);

/* 
//  Solution 2: filter and reduce
function sumEvenNumbers2(input) {
  return input.filter(x => x % 2 === 0).reduce((a, b) => a + b, 0);
} */

/* 
// Solution 3: for loop
function sumEvenNumbers3(input) {
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) sum += input[i];
  }
  return sum;
} */

/* 
// Solution 3b: for of loop
function sumEvenNumbers4(input) {
  let sum = 0;

  for (let num of input) {
    if (num % 2 === 0) sum += num;
  }
  return sum;
} */

// console.log(sumEvenNumbers3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 30;

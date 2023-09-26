// Solution 1: for of loop with destructuring assignment
function largestPairSum(numbers) {
  let [largest, secondLargest] = [-Infinity, -Infinity];

  for (const num of numbers) {
    if (num >= largest) {
      [largest, secondLargest] = [num, largest];
    } else if (num > secondLargest) secondLargest = num;
  }
  return largest + secondLargest;
}

/* 
// Solution 1b: for loop
function largestPairSum(numbers) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= largest) {
      secondLargest = largest;
      largest = numbers[i];
    } else if (numbers[i] > secondLargest) secondLargest = numbers[i];
  }
  return largest + secondLargest;
} */

/* 
// solution 2: sort & sum
function largestPairSum(numbers) {
  let sorted = [...numbers].sort((a, b) => b - a);

  return sorted[0] + sorted[1];
}  */

/* 
// solution 3: sort, slice & reduce
function largestPairSum(numbers) {
  return [...numbers]
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((a, b) => a + b, 0);
} */

/* 
console.log(largestPairSum([10, 14, 2, 23, 19])); // 42 (23 + 19 = 42)
console.log(largestPairSum([-100, -29, -24, -19, 19])); // 0 (-19 + 19 = 0)
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2])); // 10; (6 + 4 = 10)
console.log(largestPairSum([-10, -8, -16, -18, -19])); // -18 (-8 + -10 = -18)
console.log(largestPairSum([-58, 28, -99, 59, -30, 10])); // 87 (59 + 28 = 87) */

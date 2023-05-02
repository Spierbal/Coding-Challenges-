function largestPairSum(numbers) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];

    if (currentNumber >= largest) {
      secondLargest = largest;
      largest = currentNumber;
    } else if (currentNumber > secondLargest) secondLargest = currentNumber;
  }
  return largest + secondLargest;
}

// sort solution
/* function largestPairSum(numbers) {
  let sorted = [...numbers].sort((a, b) => b - a);

  return sorted[0] + sorted[1];
} */

// console.log(largestPairSum([10, 14, 2, 23, 19])); // 42
// console.log(largestPairSum([-100, -29, -24, -19, 19])); // 0
// console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2])); // 10;
// console.log(largestPairSum([-10, -8, -16, -18, -19])); // -18
// console.log(largestPairSum([-58, 28, -99, 59, -30, 10])); // 87
// console.log(
//   largestPairSum([
//     96, 87, -93, -50, 40, -15, 84, -93, -62, -3, 31, -23, 96, 83, 50, 80, -15,
//   ])
// ); // 192

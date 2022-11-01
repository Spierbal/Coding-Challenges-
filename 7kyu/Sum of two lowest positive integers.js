function sumTwoSmallestNumbers(numbers) {
  const arr = [...numbers].sort((a, b) => a - b);

  return arr[0] + arr[1];
}

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // --> 13

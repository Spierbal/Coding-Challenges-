const pipeFix = numbers =>
  [...Array(numbers[numbers.length - 1] - numbers[0] + 1)].map(
    (_, i) => numbers[0] + i
  );

// console.log(pipeFix([6, 9])); // --> [ 6, 7, 8, 9 ]
// console.log(pipeFix([1, 2, 3, 5, 6, 8, 9])); // --> [1, 2, 3, 4, 5, 6, 7, 8, 9]

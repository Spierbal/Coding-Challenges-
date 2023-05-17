function sequenceSum(begin, end, step) {
  if (begin > end) return 0;
  end = end - ((end - begin) % step); // if end is not divisible by step, subtract the remainder from end
  const val = (end - begin) / step + 1; // calculate the number of values in the sequence
  const sum = (val * (begin + end)) / 2; // calculate the sum of the sequence

  return sum;
}

// Solution 2: For loop
/* const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;
  let sum = 0;

  for (let i = begin; i <= end; i += step) {
    sum += i;
  }

  return sum;
}; */

// Solution 3: Recursive function
/* const sequenceSum = (begin, end, step) =>
  begin > end ? 0 : begin + sequenceSum(begin + step, end, step); */

// console.log(sequenceSum(2, 6, 2)); // 12 (2 + 4 + 6)
// console.log(sequenceSum(1, 5, 1)); // 15 (1 + 2 + 3 + 4 + 5)
// console.log(sequenceSum(1, 5, 3)); // 5 (1 + 4)
// console.log(sequenceSum(100, 5, 2)); // 5 (empty sum)

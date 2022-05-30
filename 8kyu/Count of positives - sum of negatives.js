function countPositivesSumNegatives(input) {
  if (!input || !input.length) {
    return [];
  }
  const el = [0, 0];
  input.forEach(n => (n > 0 ? el[0]++ : (el[1] += n)));
  return el;
}

//Solution 2:

/* function countPositivesSumNegatives(input) {
  return !input || !input.length
    ? []
    : [
        input.filter(n => n > 0).length,
        input.filter(n => n < 0).reduce((a, b) => a + b),
      ];
} */

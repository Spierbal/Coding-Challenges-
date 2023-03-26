function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    years++;
    principal += principal * interest - principal * interest * tax;
    // principal += principal * interest * (1 - tax);
  }
  return years;
}

// Solution 2:
// const calculateYears = (principal, interest, tax, desired) =>
//   Math.ceil(Math.log(desired / principal) / Math.log(1 + interest * (1 - tax)));

// console.log(calculateYears(1000, 0.05, 0.18, 1100)); // 3
// console.log(calculateYears(1000, 0.01625, 0.18, 1200)); // 14
// console.log(calculateYears(1000, 0.05, 0.18, 1000)); //0

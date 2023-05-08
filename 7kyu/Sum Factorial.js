const factorial1 = n => {
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
};

const sumFactorial1 = arr =>
  arr.reduce((acc, curr) => acc + factorial1(curr), 0);

// Solution 2: factorial function uses recursion
/* const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));
const sumFactorial = arr => arr.reduce((acc, curr) => acc + factorial(curr), 0); */

/* console.log(sumFactorial([4, 6])); // 4!(24) + 6!(720) = 744
console.log(sumFactorial([5, 4, 1])); // 5!(120) + 4!(24) + 1!(1) = 145 */

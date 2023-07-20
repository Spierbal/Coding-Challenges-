//Gauss formula solution
// const triangular = n => (n <= 0 ? 0 : (n * (n + 1)) / 2);

/* 
// Solution 2: for loop
function triangular(n) {
  if (n <= 0) return 0; // Handle out of range values

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
} */

/* 
// Solution 3: recursion
function triangular(n) {
  if (n <= 0) return 0;

  return n + triangular(n - 1);
} */

// console.log(triangular(2)); //3
// console.log(triangular(4)); //10
// console.log(triangular(-454)); //0

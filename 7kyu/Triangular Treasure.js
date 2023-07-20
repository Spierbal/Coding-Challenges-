// Gauss formula solution
const triangular = n => (n <= 0 ? 0 : (n * (n + 1)) / 2);

/* 
// Solution 1b: uses Math.sign to explicitly check for positive number
const triangular = n => (Math.sign(n) === 1 ? (n * (n + 1)) / 2 : 0);
 */

/* 
// Solution 2: while loop
function triangular(n) {
    let sum = 0;
    while (n > 0) {
        sum += n;
        n--;
    }
    return sum;
} */

// console.log(triangular(2)); // 3
// console.log(triangular(4)); // 10
// console.log(triangular(-454)); // 0

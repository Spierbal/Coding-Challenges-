// Solution 1:
const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));

function strong(n) {
  const sum = [...String(n)].reduce((acc, num) => acc + factorial(num), 0);
  return sum === n ? "STRONG!!!!" : "Not Strong !!";
}

/* 
// Solution 2:
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

function strong(n) {
  const numStr = String(n);
  let sum = 0;

  for (let i = 0; i < numStr.length; i++) {
    const num = Number(numStr[i]);
    sum += factorial(num);
  }
  return sum === n ? "STRONG!!!!" : "Not Strong !!";
} */

// console.log(strong(1)); // "STRONG!!!!"
// console.log(strong(2)); // "STRONG!!!!"
// console.log(strong(145)); // "STRONG!!!!"
// console.log(strong(7)); // "Not Strong !!"
// console.log(strong(93)); // "Not Strong !!"
// console.log(strong(185)); // "Not Strong !!"

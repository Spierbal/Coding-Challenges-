/* function reverseFactorial(num) {
  let i;
  for (i = 2; num > 1; i++) {
    num /= i;
  }
  return num === 1 ? `${i - 1}` : "None";
} */

// Solution 2: while loop
// function reverseFactorial(num) {
//   let i = 1;

//   while (num > 1) {
//     i++;
//     num /= i;
//   }
//   return num === 1 ? `${i}` : "None";
// }

console.log(reverseFactorial(120)); // "5!"
console.log(reverseFactorial(3628800)); // '10!'
console.log(reverseFactorial(150)); // "None"

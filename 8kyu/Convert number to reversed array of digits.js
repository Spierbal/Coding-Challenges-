// Shorter Solution:

const digitize = n => String(n).split("").map(Number).reverse();

// Longer Solution:
// function digitize(n) {
//   const numString = String(n);

//   return numString
//     .split("")
//     .reverse()
//     .map(num => {
//       return +num;
//     });
// }

// console.log(digitize(35231)); // --> [1,3,2,5,3]

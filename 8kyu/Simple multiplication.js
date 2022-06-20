const simpleMultiplication = num => (num % 2 === 0 ? num * 8 : num * 9);

// Shorter Solution
const simpleMultiplication2 = n => n * (n % 2 ? 9 : 8);

// console.log(simpleMultiplication(3)) // --> 27 (multiply 3 * 9)
// console.log(simpleMultiplication(2)) // --> 16 (multiply 2 * 8)

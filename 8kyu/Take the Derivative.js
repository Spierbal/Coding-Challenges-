const derive = (coefficient, exponent) =>
  `${coefficient * exponent}x^${exponent - 1}`;

// console.log(derive(7, 8)); // --> "56x^7"
// console.log(derive(5, 9)); // --> "45^8"

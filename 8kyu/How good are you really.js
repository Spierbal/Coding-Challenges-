const betterThanAverage = (classPoints, yourPoints) =>
  yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;

// Longer Solution:

// function betterThanAverage(classPoints, yourPoints) {
//   const average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;

//   return yourPoints > average;
// }

// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)) // --> true
// console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)) // -->  false

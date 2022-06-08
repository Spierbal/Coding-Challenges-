const betterThanAverage = (classPoints, yourPoints) =>
  yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;

// Longer Solution:

function betterThanAverage(classPoints, yourPoints) {
  const average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;

  return yourPoints > average;
}

const rowWeights = array => {
  return array.reduce(
    (acc, curr, i) => {
      acc[i % 2] += curr; // same as (i % 2 === 0) acc[0] += curr; else acc[1] += curr;
      return acc;
    },
    [0, 0]
  );
};

// Solution 1b: Concise reduce solution
// const rowWeights = array =>
//   array.reduce((acc, curr, i) => ((acc[i % 2] += curr), acc), [0, 0]);

// For loop solution:
/* function rowWeights(array) {
  let teams = [0, 0];

  for (let i = 0; i < array.length; i++) {
    teams[i % 2] += array[i]; 
  }
  return teams;
} */

// forEach solution:
/* function rowWeights4(array) {
  let teams = [0, 0];

  array.forEach((weight, i) => {
    teams[i % 2] += weight;
  });

  return teams;
} */

console.log(rowWeights([80])); // [80,0]
console.log(rowWeights([100, 50])); // [100,50]
console.log(rowWeights([50, 60, 70, 80])); //[120,140]
console.log(rowWeights([13, 27, 49])); //, [62,27]
console.log(rowWeights([70, 58, 75, 34, 91])); // [236,92]
console.log(rowWeights([29, 83, 67, 53, 19, 28, 96])); // [211,164]
console.log(rowWeights([0])); // [0,0]
console.log(rowWeights([100, 51, 50, 100])); // [150,151]
console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61])); // [207,235]
console.log(rowWeights([0, 1, 0])); // [0,1]

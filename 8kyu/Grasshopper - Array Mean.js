const findAverage = nums => nums.reduce((a, b) => a + b, 0) / nums.length;

console.log(findAverage([1])); // --> 1
console.log(findAverage([1, 3, 5, 7])); // --> 4;
console.log(findAverage([1, 1, 1, 2])); // --> 4;

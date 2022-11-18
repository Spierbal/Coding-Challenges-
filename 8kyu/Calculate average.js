const find_average = arr =>
  arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

// console.log(find_average([10, 20])) // --> 15
// console.log(find_average([])) // --> 0

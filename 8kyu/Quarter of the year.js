const quarterOf = month =>
  month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;

console.log(quarterOf(3)); // --> 1
console.log(quarterOf(8)); // --> 3
console.log(quarterOf(11)); // --> 4

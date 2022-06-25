function sumArray(array) {
  if (!Array.isArray(array)) return 0;

  return array
    .sort((a, b) => a - b)
    .slice(1, array.length - 1)
    .reduce((a, b) => a + b, 0);
}

//////// Solution 2://////////

// function sumArray(array) {
//   if (!Array.isArray(array)) return 0;

//   const max = Math.max(...array);
//   const min = Math.min(...array);

//   return array.reduce((a, b) => a + b, 0) - max - min;
// }

///////// Solution 3:///////////

// function sumArray(array) {
//   const sum = (a, b) => a + b;

//   return Array.isArray(array) && array.length > 1
//     ? array.reduce(sum, 0) - Math.min(...array) - Math.max(...array)
//     : 0;
// }

// console.log(sumArray([0, 1, 6, 10, 10])) // --> 17

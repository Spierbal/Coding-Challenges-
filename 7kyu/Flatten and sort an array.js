const flattenAndSort = array => [].concat(...array).sort();

// Solution 2:
/* const flattenAndSort = array =>
array.length ? array.reduce((a, b) => a.concat(b)).sort((a, b) => a - b) : []; */

// Solution 2b:
/* const flattenAndSort = array =>
array.reduce((a, b) => a.concat(b)).sort((a, b) => a - b); */

// Solution 3:
// const flattenAndSort = array => array.flat().sort((a, b) => a - b);

/* console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])); //[1, 2, 3, 4, 5, 6, 100]
console.log(flattenAndSort([])); // [];
console.log(flattenAndSort([[], []])); // [];
console.log(flattenAndSort([[], [1]])); // [1]; */

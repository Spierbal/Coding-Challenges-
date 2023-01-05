const flatten = array => [].concat(...array);

// Solution 2:
// const flatten = array => array.reduce((a, b) => a.concat(b), []);

// Solution 2b:
/* const flatten = array =>
  array.length > 0 ? array.reduce((a, b) => a.concat(b), []) : []; */

// Solution 3:
/* function flatten(array) {
  let arr = [];

  for (const char of array) {
    arr = [...arr].concat(char);
  }
  return arr;
} */

// Solution 3b:
/* function flatten(array) {
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    arr = [...arr].concat(array[i]);
  }
  return arr;
} */

// Solution 4:
// const flatten = array => array.flat();

// console.log(flatten([])); // [];
// console.log(flatten([1, 2, 3])); // [1, 2, 3]))
// console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]])); //  [3, 4, 5, [9, 9, 9], "a,b,c"]
// console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]])); // [[3], [4], [5], 9, 9, 8, [1, 2, 3]]

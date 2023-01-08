const flatten = (...arr) =>
  arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(...b) : b), []);

// Solution 2:
/* function flatten(...array) {
  let arr = [];

  for (let char of array) {
    if (Array.isArray(char)) {
      arr = arr.concat(flatten(...char));
    } else {
      arr.push(char);
    }
  }
  return arr;
} */

// Solution 2b:
/* function flatten(...array) {
  let arr = [];

  for (let char of array) {
    Array.isArray(char) ? (arr = arr.concat(flatten(...char))) : arr.push(char);
  }
  return arr;
} */

// Solution 2c
/* function flatten(...array) {
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      arr = arr.concat(flatten(...array[i]));
    } else {
      arr.push(array[i]);
    }
  }
  return arr;
} */

/* console.log(flatten(1, [2, 3], 4, 5, [6, [7, [8]]])); // [1,2,3,4,5,6,7,8]
console.log(flatten([[[[[1]]]]], ["a", [3, ["b"]]], null, 5, "c")); */ // [1,'a',3,'b',null,5,'c']

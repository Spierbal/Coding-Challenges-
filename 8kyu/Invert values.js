const invert = array => array.map(n => -n);

// 2nd Solution:
/* function invert(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(-array[i]);
  }
  return arr;
} */

// console.log(invert([1, 2, 3, 4, 5])); // --> [-1, -2, -3, -4, -5]
// console.log(invert([-1, -2, -3, -4, -5])); // --> [1, 2, 3, 4, 5]

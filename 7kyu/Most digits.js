// Solution 1: Reduce
// function findLongest(array) {
//   return array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
// }

// Solution 1b: More readable
function findLongest(array) {
  return array.reduce((longest, curr) => {
    const longestLength = String(longest).length;
    const currLength = String(curr).length;
    return currLength > longestLength ? curr : longest;
  });
}

// console.log(findLongest([1, 10, 100])); // 100
console.log(findLongest([9000, 8, 800])); // 9000
// console.log(findLongest([8, 900, 500])); // 900

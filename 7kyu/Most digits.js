// Solution 1: Reduce
function findLongest(array) {
  return array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
}

/* 
// Solution 1b: More readable
function findLongest(array) {
  return array.reduce((longest, curr) => {
    const longestLength = String(longest).length;
    const currLength = String(curr).length;
    return currLength > longestLength ? curr : longest;
  });
} */

/* 
// Solution 2: for loop
function findLongest(array) {
  let longest = array[0];

  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    if (String(current).length > String(longest).length) {
      longest = current;
    }
  }
  return longest;
} */

/* 
// Solution 3: 
function findLongest(array) {
  const maxLength = Math.max(...array.map(n => String(n).length));
  return array[array.findIndex(n => String(n).length === maxLength)];
}
 */

// console.log(findLongest([1, 10, 100])); // 100
// console.log(findLongest([9000, 8, 800])); // 9000
// console.log(findLongest([8, 900, 500])); // 900

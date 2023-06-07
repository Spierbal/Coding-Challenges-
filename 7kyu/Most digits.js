// Solution 1: Reduce
function findLongest(array) {
  return array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
}

/* 
// Solution 1b: More readable
function findLongest(array) {
  return array.reduce((longest, current) => {
    const longestLength = String(longest).length;
    const currentLength = String(current).length;
    return currentLength > longestLength ? current : longest;
  });
} */

/* 
// Solution 2: Math.max and find
const findLongest = array =>
  array.find(n => `${n}`.length === Math.max(...array.map(n => `${n}`.length))); */

/* 
// Solution 3: for loop
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

// console.log(findLongest([1, 10, 100])); // 100
// console.log(findLongest([9000, 8, 800])); // 9000
// console.log(findLongest([8, 900, 500])); // 900

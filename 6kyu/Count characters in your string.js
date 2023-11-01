// Solution 1: for of loop & object
function count(str) {
  const counts = {};

  for (const char of str) {
    counts[char] = counts[char] + 1 || 1;
  }
  return counts;
}

/* 
// Solution 1b: for of loop & object
function count(str) {
  const counts = {};
  for (const char of str) {
    if (counts[char]) counts[char]++;
    else counts[char] = 1;
  }
  return counts;
} */

/* 
// Solution 2: reduce
function count(str) {
  return str.split("").reduce((counts, char) => {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
} */

/* 
// Solution 3: forEach
function count(str) {
  const counts = {};
  str.split("").forEach(s => {
    counts[s] ? counts[s]++ : (counts[s] = 1);
  });
  return counts;
} */

console.log(count("aba")); // --> { a: 2, b: 1 }

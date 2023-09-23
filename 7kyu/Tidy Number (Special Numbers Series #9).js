// Solution 1: map() & every()
function tidyNumber(n) {
  return [...String(n)]
    .map(Number)
    .every((num, i, arr) => i === 0 || num >= arr[i - 1]);
}

/* 
// Solution 2: for loop
function tidyNumber(n) {
  const numStr = String(n);

  for (let i = 0; i < numStr.length - 1; i++) {
    if (numStr[i] > numStr[i + 1]) return false;
  }
  return true;
} */

console.log(tidyNumber(12)); // true
console.log(tidyNumber(102)); // false
console.log(tidyNumber(9672)); // false
console.log(tidyNumber(2789)); // true
console.log(tidyNumber(2335)); // true

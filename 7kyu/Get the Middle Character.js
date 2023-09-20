// Solution 1:
function getMiddle(s) {
  const middle = Math.floor(s.length / 2);

  return s.length % 2 === 0 ? s[middle - 1] + s[middle] : s[middle];
}

/* 
// Solution 2:
function getMiddle(s) {
  const middle = Math.floor(s.length / 2);

  return s.length % 2 === 0 ? s.slice(middle - 1, middle + 1) : s[middle];
} */

/* 
// Solution 3:
function getMiddle(s) {
  const middle = Math.floor(s.length / 2);

  return s.length % 2 === 0 ? s.slice(middle - 1, middle + 1) : s.charAt(middle)
} */

// console.log(getMiddle("test")); // "es"
// console.log(getMiddle("testing")); // "t"

function getMiddle(s) {
  const middle = s.length / 2;

  return s.length % 2 ? s.charAt(middle) : s.slice(middle - 1, middle + 1);
}

// Solution 2:
// function getMiddle(s) {
//   const middle = Math.floor(s.length / 2);

//   return s.length % 2 === 0 ? s[middle - 1] + s[middle] : s[middle];
// }
// console.log(getMiddle("test")); // --> es
// console.log(getMiddle("testing")); // --> t

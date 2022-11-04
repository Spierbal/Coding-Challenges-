const xor = (a, b) => a !== b;

// Solution 2:
// const xor = (a, b) => (a || b) && !(a && b);

// Solution 3:
// const xor = (a, b) => (a === b ? false : a || b === true ? true : false);

// Solution 4:
/* function xor(a, b) {
  if (a === true && b === true) return false;
  if (a === false && b === false) return false;
  if (a === true || b === true) return true;
}
 */

// console.log(xor(false, false)) // false
// console.log(xor(true, false)) //  true
// console.log(xor(false, false)) // false

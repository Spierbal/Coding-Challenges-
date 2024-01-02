const trueOrFalse = val => (!val ? "false" : "true");

/* 
// Solution 1b: if...else
function trueOrFalse(val) {
  if (!val) {
    return "false";
  } else {
    return "true";
  }
} */

/* 
// equations and inequalities
let [a, b, c] = [1, 2, 1];
console.log(trueOrFalse(a > b)); // "false"
console.log(trueOrFalse(a === b)); // "false"
console.log(trueOrFalse(a < b)); // "true"
console.log(trueOrFalse(a !== b)); // "true"
console.log(trueOrFalse(b > c)); // "true"
console.log(trueOrFalse(b === c)); // "false"
console.log(trueOrFalse(b < c)); // "false"
console.log(trueOrFalse(b !== c)); // "true"
console.log(trueOrFalse(a === c)); // "true"
console.log(trueOrFalse(a !== c)); // false"

// logical operators and bitwise operators
const [t, f] = [true, false];
console.log(trueOrFalse(t && f)); // "false"
console.log(trueOrFalse(f && f)); // "false"
console.log(trueOrFalse(t && t)); // "true"
console.log(trueOrFalse(t || f)); // "true"
console.log(trueOrFalse(t || t)); // "true"
console.log(trueOrFalse(f || f)); // "false"
console.log(trueOrFalse(t & f)); // "false"
console.log(trueOrFalse(t & t)); // "true"
console.log(trueOrFalse(f & f)); // "false"
console.log(trueOrFalse(t | f)); // "true"
console.log(trueOrFalse(t | t)); // "true"
console.log(trueOrFalse(f | f)); // "false"
console.log(trueOrFalse(!t)); // "false"
console.log(trueOrFalse(!f)); // "true"
console.log(trueOrFalse(t ^ f)); // "true"
console.log(trueOrFalse(t ^ t)); // "false"
console.log(trueOrFalse(f ^ f)); // "false"

// implicit type conversion
console.log(trueOrFalse(true)); // "true"
console.log(trueOrFalse(123)); // "true"
console.log(trueOrFalse("123")); // "true"
console.log(trueOrFalse(["123"])); // "true"
console.log(trueOrFalse("false")); // "true"
console.log(trueOrFalse(false)); // "false"
console.log(trueOrFalse(0)); // "false"
console.log(trueOrFalse("")); // "false"
console.log(trueOrFalse(null)); // "false"
console.log(trueOrFalse([].length)); // "false"
console.log(trueOrFalse(undefined)); // "false"
 */

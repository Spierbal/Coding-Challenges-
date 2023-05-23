// Solution 1:
function greet(name) {
  return `Hello ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
}

/* 
// Solution 2: charAt() method
function greet(name) {
  return `Hello ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`;
} */

/* 
// Solution 3: replace() method
const greet = name =>
  `Hello ${name.toLowerCase().replace(/^\w/, c => c.toUpperCase())}!`;
 */

// console.log(greet("riley")); // "Hello Riley!"
// console.log(greet("BILLY")); // "Hello Billy!"

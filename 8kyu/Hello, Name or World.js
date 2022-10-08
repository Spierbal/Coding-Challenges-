function hello(name) {
  if (!name) return "Hello, World!";

  return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
}

// Solution 2:
/* const hello = c =>
  `Hello, ${c ? c[0].toUpperCase() + c.slice(1).toLowerCase() : "World"}!`; */

// Solution 3:
/* const hello = n =>
  `Hello, ${
    n ? n.charAt(0).toUpperCase() + n.toLowerCase().slice(1) : "World"
  }!`;
 */

// Solution 4:
/* 
const hello = n => {
  if (n === "" || n === undefined || n === null) {
    return "Hello, World!";
  }
  return `Hello, ${n.charAt(0).toUpperCase() + n.toLowerCase().slice(1)}!`;
};
 */

// console.log(hello("alice")); // Hello, Alice!
// console.log(hello("johN")); // Hello, John!
// console.log(hello()); // Hello, World!
// console.log(hello("")); // Hello World!

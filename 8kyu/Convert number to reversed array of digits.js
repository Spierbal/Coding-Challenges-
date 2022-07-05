digitize = n => [...String(n)].map(Number).reverse();

// Solution 2
const digitize = n => String(n).split("").map(Number).reverse();

// Solution 3:
//const digitize = n => Array.from(String(n), Number).reverse()

// console.log(digitize(35231)); // --> [1,3,2,5,3]

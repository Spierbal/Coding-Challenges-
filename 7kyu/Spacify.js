// Solution 1: spread operator & join
const spacify = str => [...str].join(" ");

/* 
// Solution 2: split & join
const spacify = str => str.split("").join(" "); */

/* 
// Solution 3: Array.from & join
const spacify = str => Array.from(str).join(" "); */

// console.log(spacify("hello world")); // 'h e l l o   w o r l d'
// console.log(spacify("12345")); //'1 2 3 4 5'

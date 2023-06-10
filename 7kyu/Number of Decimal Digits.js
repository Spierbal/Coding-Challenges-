// Solution 1: Using +""
const digits = n => (n + "").length;

/* 
// Solution 2: Using String()
const digits = n => String(n).length; */

// console.log(digits(5)); // 1
// console.log(digits(12345)); // 5
// console.log(digits(9876543210)); // 10

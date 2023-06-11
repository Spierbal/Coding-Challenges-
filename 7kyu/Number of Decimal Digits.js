// Solution 1: Using String()
const digits = n => String(n).length;

/*
// Solution 2: Using toString()
const digits = n => n.toString().length; */

/* 
// Solution 3: Using +""
const digits = n => (n + "").length; */

// console.log(digits(5)); // 1
// console.log(digits(12345)); // 5
// console.log(digits(9876543210)); // 10

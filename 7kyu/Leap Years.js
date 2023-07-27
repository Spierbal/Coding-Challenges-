// Solution 1: using logical OR
const isLeapYear = year =>
  (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;

/* 
// Solution 1b: ternary operator
const isLeapYear = year =>
  year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
 */

/* 
// Solution 2: using new Date()
const isLeapYear = year => new Date(year, 1, 29).getDate() === 29; */

// console.log(isLeapYear(2020)); //, true,
// console.log(isLeapYear(2000)); //, true,
// console.log(isLeapYear(2015)); //, false,
// console.log(isLeapYear(2100)); //, false,

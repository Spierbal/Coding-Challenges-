// Solution 1: Math.ceil
const century = year => Math.ceil(year / 100);

/* 
// Solution 2: Math.floor
// const century = year => Math.floor((year - 1) / 100) + 1; */

// console.log(century(1705)); // --> 18
// console.log(century(1900)); //--> 19
// console.log(century(1601)); //--> 17
// console.log(century(2000)); //--> 20

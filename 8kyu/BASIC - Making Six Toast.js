// Solution 1: Math.abs()
const sixToast = num => Math.abs(num - 6);

/* 
// Solution 2: Ternary operator
const sixToast = num => (num > 6 ? num - 6 : 6 - num); */

/* 
// Solution 3: Math.max() & Math.min()
const sixToast = num => Math.max(num, 6) - Math.min(num, 6); */

// console.log(sixToast(6)); // 0
// console.log(sixToast(17)); // 11
// console.log(sixToast(3)); // 3

const include = (arr, item) => arr.includes(item);

// Solution 2:
// const include = (arr, item) => arr.findIndex(el => el === item) !== -1;

// Solution 3:
// const include = (arr, item) => arr.find(el => el === item) === item;

// Solution 4:
// const include = (arr, item) => arr.indexOf(item) !== -1;

// console.log(include([1, 2, 3, 4], 3)); // --> true
// console.log(include([1, 2, 4, 5], 3)); // --> false
// console.log(include([], 3)); // --> false

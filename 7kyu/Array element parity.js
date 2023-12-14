// Solution 1: Set
function solve(arr) {
  const uniqueNums = new Set(arr);

  for (const num of uniqueNums) {
    if (!uniqueNums.has(-num)) return num;
  }
}

/* 
// Solution 2: for of loop
function solve(arr) {
  for (const num of arr) {
    if (!arr.includes(-num)) return num;
  }
  return num;
} */

/* 
// Solution 2b: for loop
function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(-arr[i])) return arr[i];
  }
} */

// Solution 3: find()
// const solve = array => array.find(num => !array.includes(-num));

// Solution 4: filter()
// const solve4 = array => array.filter(num => !array.includes(-num))[0];

/* 
// Solution 5: reduce()
const solve5 = array =>
  array.reduce((acc, num) => (array.includes(-num) ? acc : num), 0); */

// console.log(solve([1, -1, 2, -2, 3])); // 3
// console.log(solve([-3, 1, 2, 3, -1, -4, -2])); // -4
// console.log(solve([1, -1, 2, -2, 3, 3])); // 3
// console.log(solve([-110, 110, -38, -38, -62, 62, -38, -38, -38])); // -38
// console.log(solve([-9, -105, -9, -9, -9, -9, 105])); // -9

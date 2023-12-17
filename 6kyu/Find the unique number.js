// Solution 1: find()
const findUniq = arr =>
  arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num));

// Solution 2: for of loop
function findUniq(arr) {
  for (const num of arr) {
    if (arr.indexOf(num) === arr.lastIndexOf(num)) return num;
  }
}

// Solution 2b: for loop
function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
}

// Solution 2: filter()
const findUniq = arr =>
  arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num))[0];

console.log(findUniq([1, 0, 0])); // 1
console.log(findUniq([0, 1, 0])); // 1
console.log(findUniq([0, 0, 1])); // 1
console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([1, 1, 2, 1, 1])); // 2
console.log(findUniq([3, 10, 3, 3, 3])); // 10

// Solution 1: Math.max() and Math.min() & spread operator
// const maxDiff = list =>
//   list.length > 0 ? Math.max(...list) - Math.min(...list) : 0;

// Solution 2: for of loop
function maxDiff(list) {
  if (list.length <= 1) return 0;

  let [max, min] = [list[0], list[0]];

  for (const num of list) {
    if (num < min) min = num;
    if (num > max) max = num;
  }
  return max - min;
}

// Solution 2b: for loop
// function maxDiff(list) {
//   if (list.length <= 1) return 0;

//   let [max, min] = [list[0], list[0]];

//   for (let i = 1; i < list.length; i++) {
//     list[i] < min ? (min = list[i]) : (max = list[i]);
//   }
//   return max - min;
// }

/* 
// Solution 3: sort()
function maxDiff(list) {
  if (list.length <= 1) return 0;

  list.sort((a, b) => a - b);
  return list[list.length - 1] - list[0];
} */

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6])); // 6
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6])); // 11
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16])); // 16
console.log(maxDiff([16])); // 0
console.log(maxDiff([])); // 0

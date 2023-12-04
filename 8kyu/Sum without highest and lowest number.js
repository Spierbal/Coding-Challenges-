// Solution 1: reduce, Math.max, Math.min
function sumArray(array) {
  if (!Array.isArray(array)) return 0;

  const max = Math.max(...array);
  const min = Math.min(...array);

  return array.reduce((a, b) => a + b, 0) - max - min;
}

/* 
// Solution 2: for loop with Math.max, Math.min
function sumArray(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;

  let sum = 0;
  let [max, min] = [array[0], array[0]];

  for (let num of array) {
    sum += num;
    max = Math.max(max, num);
    min = Math.min(min, num);
  }

  return sum - min - max;
} */

/* 
// Solution 3: for of loop 
function sumArray1(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;

  let sum = 0;
  let [max, min] = [array[0], array[0]];

  for (const num of array) {
    sum += num;
    if (num > max) max = num;
    if (num < min) min = num;
  }
  return sum - max - min;
}
 */

/* 
// Solution 4: sort & reduce
function sumArray(array) {
  if (!Array.isArray(array)) return 0;

  return array
    .sort((a, b) => a - b)
    .slice(1, array.length - 1)
    .reduce((a, b) => a + b, 0);
} */

console.log(sumArray(null)); //  --> 0
console.log(sumArray([])); // --> 0)
console.log(sumArray([3])); // --> 0)
console.log(sumArray([3, 5])); // --> 0
console.log(sumArray([6, 2, 1, 8, 10])); // --> 16
console.log(sumArray([0, 1, 6, 10, 10])); // --> 17
console.log(sumArray([-6, -20, -1, -10, -12])); // --> -28
console.log(sumArray([-6, 20, -1, 10, -12])); // --> 3

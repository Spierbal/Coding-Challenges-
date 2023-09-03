// Solution 1: map & slice
const averages = numbers =>
  numbers
    ? numbers.slice(0, -1).map((num, i) => (num + numbers[i + 1]) / 2)
    : [];

/* 
// Solution 2: for loop
function averages(numbers) {
  if (!numbers || numbers.length < 2) return [];

  const arr = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    arr.push((numbers[i] + numbers[i + 1]) / 2);
  }
  return arr;
} */

// console.log(averages([2, 2, 2, 2, 2])); // [2, 2, 2, 2]
// console.log(averages([2, -2, 2, -2, 2])); // [0, 0, 0, 0]
// console.log(averages([1, 3, 5, 1, -10])); // [2, 4, 3, -4.5]
// console.log(averages([1])); // [2, 4, 3, -4.5]

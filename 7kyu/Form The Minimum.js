// Solution 1
const minValue = values => +[...new Set(values)].sort().join("");

// Solution 1b:
// const minValue = values => Number(Array.from(new Set(values)).sort().join(""));

/* 
// Solution 1c:
function minValue(values) {
  const uniqueValues = new Set(values); // Use Set to remove duplicates
  const sortedValues = [...uniqueValues].sort().join(""); // sort the values and convert the array into a string

  return Number(sortedValues); // convert the string into a number
}
 */

// console.log(minValue([1, 3, 1])); // 13
// console.log(minValue([4, 7, 5, 7])); // 457
// console.log(minValue([4, 8, 1, 4])); // 148
// console.log(minValue([5, 7, 9, 5, 7])); // 579
// console.log(minValue([6, 7, 8, 7, 6, 6])); // 678
// console.log(minValue([5, 6, 9, 9, 7, 6, 4])); // 45679
// console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7])); // 134679
// console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9])); // 356789
// console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // 1

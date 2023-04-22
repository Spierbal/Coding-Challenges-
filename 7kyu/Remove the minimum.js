const removeSmallest = numbers =>
  numbers.filter(num => num !== Math.min(...numbers));

// Solution 1b:
/* const removeSmallest = numbers => {
  const min = Math.min(...numbers); // Find the smallest value
  return numbers.filter(num => num !== min); // Remove the smallest value
}; */

// Solution 1c:
/* function removeSmallest2(numbers) {
  let minIdx = numbers.indexOf(Math.min(...numbers)); // Find index of smallest value
  return numbers.filter((_, i) => i !== minIdx); // remove the smallest value
} */

// Solution 2:
/* function removeSmallest(numbers) {
  const result = [...numbers]; // copy the array
  const minIndex = numbers.indexOf(Math.min(...numbers)); // find the index of the smallest element
  result.splice(minIndex, 1); // remove the element at minIndex

  return result;
} */

// console.log(removeSmallest([1, 2, 3, 4, 5])); // --> [2, 3, 4, 5]
// console.log(removeSmallest([2, 2, 1, 2, 1])); // --> [2, 2, 2, 1]
// console.log(removeSmallest([])); // --> [];

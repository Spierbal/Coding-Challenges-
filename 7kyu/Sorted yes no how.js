function isSortedAndHow(arr) {
  if (arr.every((e, i) => i === 0 || e >= arr[i - 1])) return "yes, ascending";
  if (arr.every((e, i) => i === 0 || e <= arr[i - 1])) return "yes, descending";
  return "no";
}

// Solution 2: ternary operator
/* function isSortedAndHow(arr) {
  return arr.every((cur, i) => i === 0 || cur >= arr[i - 1])
    ? "yes, ascending"
    : arr.every((cur, i) => i === 0 || cur <= arr[i - 1])
    ? "yes, descending"
    : "no";
} */

/* 
// Solution 3: for loop
function isSortedAndHow(array) {
  let ascending = true;
  let descending = true;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) descending = false;
    if (array[i] > array[i + 1]) ascending = false;
  }
  return ascending ? "yes, ascending" : descending ? "yes, descending" : "no";
}  */

// console.log(isSortedAndHow([1, 2])); // 'yes, ascending'
// console.log(isSortedAndHow([15, 7, 3, -8])); // 'yes, descending';
// console.log(isSortedAndHow([4, 2, 30])); // 'no';

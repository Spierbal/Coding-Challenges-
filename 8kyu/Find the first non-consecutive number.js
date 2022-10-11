function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) return arr[i + 1];
  }
  return null;
}

// Solution 2a:
/* firstNonConsecutive = arr =>
  (arr = arr.filter((e, i) => e !== arr[0] + i)[0]) === undefined ? null : arr; */

// Solution 2b:
/* firstNonConsecutive = a =>
  (a = a.filter((e, i) => e - 1 !== a[i - 1])[1]) === undefined ? null : a; */

// Solution 2c:
/* function firstNonConsecutive(arr) {
  const result = arr.filter((el, i) => {
    return el - 1 !== arr[i - 1];
  })[1];
  return result == undefined ? null : result;
} */

// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // --> 6
// console.log(firstNonConsecutive([1, 2, 3, 4])); // --> null
